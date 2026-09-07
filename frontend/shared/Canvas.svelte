<script lang="ts">
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
	import { BoundingBox, Hand, Trash, Label } from "./icons/index";
	import ModalBox from "./ModalBox.svelte";
	import Box from "./Box";
	import { Colors } from './Colors.js';
	import AnnotatedImageData from "./AnnotatedImageData";
	import { Undo, Redo } from "@gradio/icons";
	import WindowViewer from "./WindowViewer";
	import {
		blitCanvasSnapshot,
		captureCanvasSnapshot,
		getRetainedValue,
		imageKeyFromValue,
		isChangeEchoSuppressed,
		rememberValue
	} from "./retainState";

	enum Mode {creation, drag}

    export let imageUrl: string | null = null;
	export let interactive: boolean;
	export let boxAlpha = 0.5;
	export let boxMinSize = 10;
	export let handleSize: number = 8;
	export let boxThickness: number;
	export let boxSelectedThickness: number;
	export let value: null | AnnotatedImageData;
	export let choices = [];
    export let choicesColors = [];
	export let disableEditBoxes: boolean = false;
	export let singleBox: boolean = false;
	export let showRemoveButton: boolean = null;
	export let handlesCursor: boolean = true;
	export let useDefaultLabel: boolean = false;
	export let enableKeyboardShortcuts: boolean = true;

	if (showRemoveButton === null) {
		showRemoveButton = (disableEditBoxes);
	}

    let canvas: HTMLCanvasElement | null = null;
	let annotatorContainerDiv: HTMLDivElement;
	let ctx: CanvasRenderingContext2D | null = null;
    let image = null;
	let selectedBox = -1;
	let mode: Mode = Mode.drag;
	let canvasWindow: WindowViewer = new WindowViewer(draw);
	let destroyed = false;
	const pendingRafIds: number[] = [];

	// Box instances live on a plain object, not in value.boxes and not in a component
	// `let`. value is a Gradio $state proxy, and Svelte 5 `let` is also reactive.
	// Keeping Box instances out of both prevents draw()→render()→updateOffset()→
	// updateHandles() from writing hundreds of signals per frame (flush_count > 1000 /
	// effect_update_depth_exceeded with blocks.load() + nested layout).
	const _boxStore: { items: Box[] } = { items: [] };

	if (value !== null && value.boxes.length == 0) {
		mode = Mode.creation;
	}

	let canvasXmin = 0;
	let canvasYmin = 0;
	let canvasXmax = 0;
	let canvasYmax = 0;
	let scaleFactor = 1.0;

	// No usable annotator viewport is this narrow, so a width below it means the
	// canvas was measured before its layout settled rather than genuinely resized.
	const MIN_CANVAS_DISPLAY_WIDTH = 50;

	let imageWidth = 0;
	let imageHeight = 0;

	let editModalVisible = false;
	let newModalVisible = false;
	let editDefaultLabelVisible = false;

	// Per-modal label/color state written synchronously in the event handler BEFORE
	// setting the corresponding visibility flag, so they land at effect-depth 0
	// rather than being written inside an already-running flush_effects cycle.
	let editModalCurrentLabel = "";
	let editModalCurrentColor = "";
	let newModalCurrentLabel = "";
	let newModalCurrentColor = "";
	let defaultModalCurrentLabel = "";
	let defaultModalCurrentColor = "";

	let labelDetailLock = useDefaultLabel;
	let defaultLabelCache = {
		label: "",
		color: ""
	};

	const dispatch = createEventDispatcher<{
		change: { boxes: any[], orientation: number } | null;
	}>();

	function scheduleAfterPaint(fn: () => void) {
		const id1 = requestAnimationFrame(() => {
			const id2 = requestAnimationFrame(() => {
				if (destroyed || !canvas) return;
				fn();
			});
			pendingRafIds.push(id2);
		});
		pendingRafIds.push(id1);
	}

	function cancelPendingRafs() {
		for (const id of pendingRafIds) {
			cancelAnimationFrame(id);
		}
		pendingRafIds.length = 0;
	}

	// Store orientation locally as a plain (non-reactive) property so we never write
	// to value.orientation (a $state proxy property), which would trigger the main
	// Gradio app's reactive cascade and cause effect_update_depth_exceeded.
	const _internal = { orientation: (value !== null ? value.orientation : 0) ?? 0 };

	// Set once parseInputBoxes() has run, i.e. once _boxStore reflects the incoming
	// value rather than the empty state it mounts in.
	let valueParsed = false;

	/** Dispatch change event in next macrotask, passing current box + orientation data as
	 *  detail so Index.svelte can return it from get_data() WITHOUT writing to $state.
	 *  This completely avoids triggering the main app's reactive cascade. */
	function dispatchChangeDeferred() {
		// Before the first parseInputBoxes() the store is empty and says nothing about
		// user intent. Index.svelte holds whatever we report in _pendingUpdate and
		// splices it into value.boxes on the next get_data(), so dispatching here would
		// erase every box the server sent and empty the store on the next $: run.
		if (!valueParsed) return;
		// Gradio remounts Index often; module-scope suppress blocks mount echoes that
		// would feed another remount via get_data → prop update.
		if (isChangeEchoSuppressed()) return;
		const boxes = _boxStore.items.map(b => b.toJSON());
		const orientation = _internal.orientation;
		setTimeout(() => {
			if (destroyed || isChangeEchoSuppressed()) return;
			dispatch("change", { boxes, orientation });
		}, 0);
	}

	function colorHexToRGB(hex: string) {
		var r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
		return "rgb(" + r + ", " + g + ", " + b + ")";
	}

	function colorRGBAToHex(rgba: string) {
		const rgbaValues = rgba.match(/(\d+(\.\d+)?)/g);
		const r = parseInt(rgbaValues[0]);
		const g = parseInt(rgbaValues[1]);
		const b = parseInt(rgbaValues[2]);
		const hex = "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
		return hex;
	}

	/** Extract label from a choice: supports string or [label, value] tuple (backend may send either). */
	function labelFromChoice(c: unknown): string {
		return typeof c === "string" ? c : (Array.isArray(c) && c[0] != null ? String(c[0]) : "");
	}

	/** Choices + colors for the label dropdown: configured choices plus any label
	 *  currently used by a box on the image (so the dropdown includes all current labels).
	 *  Supports both backend formats: string[] (e.g. ["Person", "Vehicle"]) or
	 *  [string, number][] (e.g. [["Person", 0], ["Vehicle", 1]]). */
	function getMergedChoices(): { choices: [string, number][]; colors: string[] } {
		const mergedChoices: [string, number][] = Array.isArray(choices)
			? choices.map((c, i) => [labelFromChoice(c), i]).filter(([l]) => l !== "") as [string, number][]
			: [];
		const mergedColors: string[] = Array.isArray(choicesColors) ? [...choicesColors] : [];
		const seen = new Set(mergedChoices.map(([l]) => l));
		for (const box of _boxStore.items) {
			const label = (box.label || "").trim();
			if (label !== "" && !seen.has(label)) {
				seen.add(label);
				mergedChoices.push([label, mergedChoices.length]);
				mergedColors.push(colorRGBAToHex(box.color));
			}
		}
		return { choices: mergedChoices, colors: mergedColors };
	}

	let modalChoices: [string, number][] = [];
	let modalChoicesColors: string[] = [];

	// Where to open the label dialog, in viewport coordinates.
	//
	// The dialog is position: fixed. When the page is embedded in an iframe that is
	// resized to its full content height — as on Hugging Face Spaces, via
	// iframe-resizer — the iframe has no scrolling viewport of its own and the parent
	// page does the scrolling. "Fixed to the top of the viewport" then means the top of
	// the entire document, far above whatever the user is looking at. Anchoring to the
	// box being edited is correct in both cases, since the user just clicked it.
	let modalAnchorX: number | null = null;
	let modalAnchorY: number | null = null;

	function anchorModalToSelection() {
		modalAnchorX = null;
		modalAnchorY = null;
		if (!canvas) return;

		const rect = canvas.getBoundingClientRect();
		// The bitmap and CSS sizes normally match, but scale anyway so the anchor
		// survives any styling that stretches the canvas.
		const scaleX = canvas.width > 0 ? rect.width / canvas.width : 1;
		const scaleY = canvas.height > 0 ? rect.height / canvas.height : 1;

		const box =
			selectedBox >= 0 && selectedBox < _boxStore.items.length
				? _boxStore.items[selectedBox]
				: null;

		if (box === null) {
			modalAnchorX = rect.left + rect.width / 2;
			modalAnchorY = rect.top + 16;
			return;
		}

		box.updateOffset();
		const [centreX, bottomY] = box.toCanvasCoordinates(
			box.xmin + box.getWidth() / 2,
			box.ymax
		);
		const x = rect.left + centreX * scaleX;
		const y = rect.top + bottomY * scaleY;

		// Open below the box, or above it when there is no room underneath.
		const estimatedHeight = 110;
		const fitsBelow = y + 12 + estimatedHeight <= window.innerHeight;
		modalAnchorX = Math.min(Math.max(x, 8), Math.max(window.innerWidth - 8, 8));
		modalAnchorY = fitsBelow
			? y + 12
			: Math.max(rect.top + 8, y - box.getHeight() * scaleY - estimatedHeight - 12);
	}
	
    function draw() {
		// Painting while a resize is pending would show one frame of unscaled boxes.
		// resize() clears the flag and calls draw() itself once it succeeds.
		if (destroyed || !ctx || !canvas || pendingResize) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.translate(canvasWindow.offsetX, canvasWindow.offsetY);
		ctx.scale(canvasWindow.scale, canvasWindow.scale);
		if (image !== null){
			switch (_internal.orientation) {
				case 0:
					ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
					break;
				case 1:
					ctx.translate(imageWidth, 0);
					ctx.rotate(Math.PI / 2);
					ctx.drawImage(image, 0, 0, imageHeight, imageWidth);
					break;
				case 2:
					ctx.translate(imageWidth, imageHeight);
					ctx.rotate(Math.PI);
					ctx.drawImage(image, 0, 0, imageWidth, imageHeight);
					break;
				case 3:
					ctx.translate(0, imageHeight);
					ctx.rotate(-Math.PI / 2);
					ctx.drawImage(image, 0, 0, imageHeight, imageWidth);
					break;
			}


			ctx.restore();
			// ctx.resetTransform();
		}

		for (const box of _boxStore.items.slice().reverse()) {
			box.render(ctx);
		}
	}

	function setSelection(index: number) {
		selectedBox = index;
		_boxStore.items.forEach((box) => box.setSelected(false));
		if (index >= 0 && index < _boxStore.items.length) {
			_boxStore.items[index].setSelected(true);
		}
	}

	function selectBox(index: number) {
		setSelection(index);
		draw();
	}

	function handlePointerDown(event: PointerEvent) {
		if (!interactive) {
			return;
		}

		if (
			event.target instanceof Element &&
			event.target.hasPointerCapture(event.pointerId)
		) {
			event.target.releasePointerCapture(event.pointerId);
		}

		if (mode === Mode.creation) {
			createBox(event);
		} else if (mode === Mode.drag) {
			clickBox(event);
		}
	}

	function clickBox(event: PointerEvent) {
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;
		let selectedBoxFlag = false;

		// Check if the mouse is over any of the resizing handles
		for (const [i, box] of _boxStore.items.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				selectedBoxFlag = true;
				selectBox(i);
				box.startResize(handleIndex, event);
				return;
			}
		}

		// Check if the mouse is inside a box
		for (const [i, box] of _boxStore.items.entries()) {
			if (box.isPointInsideBox(mouseX, mouseY)) {
				selectedBoxFlag = true;
				selectBox(i);
				box.startDrag(event);
				return;
			}
		}

		if (!singleBox) {
			selectBox(-1);
		}

		if (!selectedBoxFlag) {
			canvasWindow.startDrag(event)
		}
	}

	function handlePointerUp(event: PointerEvent) {
		dispatchChangeDeferred();
	}

	function handlePointerMove(event: PointerEvent) {
		if (value === null || !canvas) {
			return;
		}

		if (mode !== Mode.drag) {
			return;
		}

		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		for (const [_, box] of _boxStore.items.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				canvas.style.cursor = box.resizeHandles[handleIndex].cursor;
				return;
			}
		}

		canvas.style.cursor = "default";
	}

	function resetView() {
		if (!canvas) return;
		const scaleX = canvas.width / imageWidth;
		const scaleY = canvas.height / imageHeight;
		const minScale = Math.min(scaleX, scaleY);
				
		canvasWindow.scale = minScale;
		canvasWindow.offsetX = (canvas.width - imageWidth * minScale) / 2;
		canvasWindow.offsetY = (canvas.height - imageHeight * minScale) / 2;
		
		draw();
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (!enableKeyboardShortcuts || event.target !== annotatorContainerDiv || !interactive) {
			return;
		}
		
		const key = event.key.toLowerCase();
		const blockedKeys = new Set(['delete', 'c', 'd', 'e', ' ']);

		if (blockedKeys.has(key)) {
			event.preventDefault();
			event.stopPropagation();
		}
		
		switch (key) {
			case 'delete': onDeleteBox(); break;
			case 'c': setCreateMode(); break;
			case 'd': setDragMode(); break;
			case 'e': onEditBox(); break;
			case ' ': resetView(); break;
		}
	}

	function focusAnnotator() {
		setTimeout(() => {annotatorContainerDiv?.focus();}, 0);
	}

	function handleMouseWheel(event: WheelEvent) {
		if (!interactive || !canvas) {
			return;
		}

		event.preventDefault();
		const delta = 1 / (1 + (event.deltaY / 1000) * 0.5);

		const newScaleTmp = parseFloat((canvasWindow.scale * delta).toFixed(2));
		const newScale = newScaleTmp < 1 ? 1 : newScaleTmp;
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		const worldX = (mouseX - canvasWindow.offsetX) / canvasWindow.scale;
		const worldY = (mouseY - canvasWindow.offsetY) / canvasWindow.scale;

		canvasWindow.offsetX = mouseX - worldX * newScale;
		canvasWindow.offsetY = mouseY - worldY * newScale;

		canvasWindow.scale = newScale
		draw();
	}

	function createBox(event: PointerEvent) {
		if (!canvas) return;
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left - canvasWindow.offsetX) / canvasWindow.scale;
		const y = (event.clientY - rect.top - canvasWindow.offsetY) / canvasWindow.scale;

		// Use same scaleFactor logic as resize(): canvas.clientWidth (current layout), not canvas.width
		let currentScaleFactor = 1.0;
		const canvasDisplayWidth = canvas ? canvas.clientWidth : 0;
		if (image !== null && canvasDisplayWidth > 0 && image.naturalWidth > 0) {
			const rotatedWidth = (_internal.orientation === 0 || _internal.orientation === 2)
				? image.naturalWidth
				: image.naturalHeight;
			if (rotatedWidth > canvasDisplayWidth) {
				currentScaleFactor = canvasDisplayWidth / rotatedWidth;
			}
		}

		let color;
        let defaultLabel: string;

        if (labelDetailLock && defaultLabelCache.label !== "") {
            // Use the locked style so the box looks correct while being dragged out.
            defaultLabel = defaultLabelCache.label;
            color = defaultLabelCache.color !== ""
                ? colorHexToRGB(defaultLabelCache.color)
                : (choicesColors.length > 0 ? colorHexToRGB(choicesColors[0]) : Colors[0]);
        } else {
            defaultLabel = (Array.isArray(choices) && choices.length > 0)
                ? labelFromChoice(choices[0])
                : "";
            if (choicesColors.length > 0) {
                color = colorHexToRGB(choicesColors[0]);
            } else if (singleBox) {
                color = _boxStore.items.length > 0 ? _boxStore.items[0].color : Colors[0];
            } else {
                color = Colors[_boxStore.items.length % Colors.length];
            }
        }

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newBoxId = '';
        for (let i = 0; i < 12; i++) {
            newBoxId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        const newBoxText = "";

        let box = new Box(
            draw,
            onBoxFinishCreation,
            canvasWindow,
            canvasXmin,
            canvasYmin,
            canvasXmax,
            canvasYmax,
            defaultLabel,
            x,
            y,
            x,
            y,
            color,
            boxAlpha,
			newBoxId,
            newBoxText,
            boxMinSize,
            handleSize,
            boxThickness,
            boxSelectedThickness,
            currentScaleFactor
        );
        box.startCreating(event, rect.left, rect.top);
        scheduleAfterPaint(() => {
                if (singleBox) {
                    _boxStore.items = [box];
                } else {
                    _boxStore.items = [box, ..._boxStore.items];
                }
                // Recompute and set scaleFactor after layout so it matches pre-existing boxes.
                // adoptScaleFactor, not setScaleFactor: the box was drawn in display space
                // already, so the factor is being recorded, not applied.
                const canvasDisplayWidth = canvas ? canvas.clientWidth : 0;
                if (image !== null && canvasDisplayWidth >= MIN_CANVAS_DISPLAY_WIDTH && image.naturalWidth > 0) {
                    const rotatedWidth = (_internal.orientation === 0 || _internal.orientation === 2)
                        ? image.naturalWidth
                        : image.naturalHeight;
                    if (rotatedWidth > canvasDisplayWidth) {
                        box.adoptScaleFactor(canvasDisplayWidth / rotatedWidth);
                    }
                }
                selectBox(0);
                draw();
                dispatchChangeDeferred();
        });
    }

	function setCreateMode() {
		mode = Mode.creation;
		if (canvas) canvas.style.cursor = "crosshair";
	}

	function setDragMode() {
		mode = Mode.drag;
		if (canvas) canvas.style.cursor = "default";
	}

	function onBoxFinishCreation() {
		if (selectedBox >= 0 && selectedBox < _boxStore.items.length) {
			if (_boxStore.items[selectedBox].getArea() < 1) {
				onDeleteBox();
			} else {
				if (!disableEditBoxes) {
					if (labelDetailLock) {
						onUseDefaultLabelModalNew();
					} else{
						// Write label/color synchronously before the visibility flag so
						// they are all batched in the same effect-depth-0 flush, avoiding
						// the cascade that occurs when $: blocks write reactive signals
						// inside an already-running flush_effects cycle.
						// Set mounted=true on first use so the ModalBox's Gradio sub-
						// components are only registered after Gradio's startup settling.
						const m = getMergedChoices();
						modalChoices = m.choices;
						modalChoicesColors = m.colors;
						newModalCurrentLabel = _boxStore.items[selectedBox].label;
						newModalCurrentColor = colorRGBAToHex(_boxStore.items[selectedBox].color);
						anchorModalToSelection();
						newModalVisible = true;
					}
				}
				if (singleBox) {
					setDragMode();
				}
			}
		}
	}

	function onEditBox() {
		if (selectedBox >= 0 && selectedBox < _boxStore.items.length && !disableEditBoxes) {
			// Same pattern: write label/color before the visibility flag.
			const m = getMergedChoices();
			modalChoices = m.choices;
			modalChoicesColors = m.colors;
			editModalCurrentLabel = _boxStore.items[selectedBox].label;
			editModalCurrentColor = colorRGBAToHex(_boxStore.items[selectedBox].color);
			anchorModalToSelection();
			editModalVisible = true;
		}
	}

	function handleDoubleClick(event: MouseEvent){
		if (!interactive) {
			return;
		}
		
		onEditBox();
	}

	function onModalEditChange(event) {
		editModalVisible = false;
		focusAnnotator();
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		if (selectedBox >= 0 && selectedBox < _boxStore.items.length) {
			let box = _boxStore.items[selectedBox];
		if (ret == 1) {
			box.label = label;
			box.color = colorHexToRGB(color);
			draw();
			dispatchChangeDeferred();
		} else if (ret == -1) {
			onDeleteBox();
		}
		}
	}

	function onModalNewChange(event) {
		newModalVisible = false;
		focusAnnotator();
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		let lock = detail.lock;
		if (selectedBox >= 0 && selectedBox < _boxStore.items.length) {
			let box = _boxStore.items[selectedBox];
		if (ret == 1) {
			labelDetailLock = lock;
			defaultLabelCache.label = label;
			defaultLabelCache.color = color;
			box.label = label;
			box.color = colorHexToRGB(color);
			draw();
			dispatchChangeDeferred();
		} else {
			onDeleteBox();
		}
		}
	}

	function onDefaultLabelEditChange(event) {
		editDefaultLabelVisible = false;
		focusAnnotator();
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		let lock = detail.lock;
		if (ret == 1) {
			labelDetailLock = lock;
			defaultLabelCache.label = label;
			defaultLabelCache.color = color;
		}
	}

	function onUseDefaultLabelModalNew(){
		if (selectedBox >= 0 && selectedBox < _boxStore.items.length) {
			let box = _boxStore.items[selectedBox];
			box.label = defaultLabelCache.label;
			if (defaultLabelCache.color !== "") {
				box.color = colorHexToRGB(defaultLabelCache.color);
			}
			draw();
			dispatchChangeDeferred();
		}
	}

    function onDeleteBox() {
		if (selectedBox >= 0 && selectedBox < _boxStore.items.length) {
			_boxStore.items.splice(selectedBox, 1);
			selectBox(-1);
			if (singleBox) {
				setCreateMode();
			}
			dispatchChangeDeferred();
		}
	}
	
	/**
	 * Rotate the image and all the boxes
	 * @param op 1: rotate clockwise, -1: rotate counterclockwise
	 */
	function onRotateImage(op: number) {
		_internal.orientation = (((_internal.orientation + op) % 4) + 4 ) % 4;
		canvasWindow.orientation = _internal.orientation;

		for (const box of _boxStore.items) {
			box.onRotate(op);
		}
		resize(true, true);
		draw();
	}

	let resizing = false;
	let lastResizedClientWidth = -1;
	let pendingResize = false;
	let pendingDispatchChange = false;
	let pendingFromRotation = false;
	function resize(dispatchChange = true, fromRotation = false) {
		if (resizing || !canvas) return;

		// A hidden tab reports clientWidth 0, and a tab part-way through being shown can
		// report a handful of pixels for a frame before its column lays out. Both yield a
		// scale factor at or near zero. A newly assigned Image likewise reports
		// naturalWidth 0 until `load`. Defer instead, and touch no state.
		const imageReady = image === null || (image.complete && image.naturalWidth > 0);
		if (canvas.clientWidth < MIN_CANVAS_DISPLAY_WIDTH || !imageReady) {
			pendingResize = true;
			pendingDispatchChange = pendingDispatchChange || dispatchChange;
			pendingFromRotation = pendingFromRotation || fromRotation;
			return;
		}

		// A deferred rotation never ran, so canvasWindow.imageWidth/imageHeight still
		// hold the pre-rotation display dims that oldDisplayWidth/oldDisplayHeight need.
		dispatchChange = dispatchChange || pendingDispatchChange;
		fromRotation = fromRotation || pendingFromRotation;
		pendingResize = false;
		pendingDispatchChange = false;
		pendingFromRotation = false;

		resizing = true;
		try {
			const oldDisplayWidth = canvasWindow.imageWidth;
			const oldDisplayHeight = canvasWindow.imageHeight;

			scaleFactor = 1;
			lastResizedClientWidth = canvas.clientWidth;
			canvas.width = canvas.clientWidth;

			canvasWindow.setRotatedImage(image);

			if (image !== null) {
				if (canvasWindow.imageRotatedWidth > canvas.width) {
					scaleFactor = canvas.width / canvasWindow.imageRotatedWidth;
					imageWidth = Math.round(canvasWindow.imageRotatedWidth * scaleFactor);
					imageHeight = Math.round(canvasWindow.imageRotatedHeight * scaleFactor);
					canvasXmin = 0;
					canvasYmin = 0;
					canvasXmax = imageWidth;
					canvasYmax = imageHeight;
					canvas.height = imageHeight;
				} else {
					imageWidth = canvasWindow.imageRotatedWidth;
					imageHeight = canvasWindow.imageRotatedHeight;
					var x = (canvas.width - imageWidth) / 2;
					canvasXmin = x;
					canvasYmin = 0;
					canvasXmax = x + imageWidth;
					canvasYmax = imageHeight;
					canvas.height = imageHeight;
				}

				canvasWindow.imageWidth = imageWidth;
				canvasWindow.imageHeight = imageHeight;

			} else {
				canvasXmin = 0;
				canvasYmin = 0;
				canvasXmax = canvas.width;
				canvasYmax = canvas.height;
				canvas.height = canvas.clientHeight;
			}

			canvasWindow.resize(canvas.width, canvas.height, canvasXmin, canvasYmin);

			if (canvasXmax > 0 && canvasYmax > 0) {
				for (const box of _boxStore.items) {
					box.canvasXmin = canvasXmin;
					box.canvasYmin = canvasYmin;
					box.canvasXmax = canvasXmax;
					box.canvasYmax = canvasYmax;
					if (fromRotation && oldDisplayWidth > 0 && oldDisplayHeight > 0) {
						// Boxes were transformed by onRotate into (oldDisplayHeight, oldDisplayWidth) space;
						// scale them into the new display (imageWidth, imageHeight) with correct aspect.
						const scaleX = imageWidth / oldDisplayHeight;
						const scaleY = imageHeight / oldDisplayWidth;
						box.scaleFromRotatedDisplay(scaleX, scaleY);
						box.adoptScaleFactor(scaleFactor);
						box.applyUserScale();
					} else {
						box.setScaleFactor(scaleFactor);
					}
				}
			}
			draw();
			if (dispatchChange) dispatchChangeDeferred();
		} finally {
			resizing = false;
		}
	}
	const observer = new ResizeObserver(() => {
		if (destroyed || !canvas) return;
		// resize() assigns canvas.width/height, which the observer reports straight back
		// as a resize. Re-running for a width already handled only costs a repaint.
		if (!pendingResize && canvas.clientWidth === lastResizedClientWidth) return;
		// Layout-only: do not dispatch change. Emitting toJSON() here would write
		// already-display coordinates back into value and trigger parseInputBoxes again.
		resize(false);
	});

	// Covers the case where the canvas becomes visible without a measurable box
	// change, which the ResizeObserver would not report.
	const visibilityObserver = new IntersectionObserver((entries) => {
		if (destroyed || !canvas || !pendingResize) return;
		if (entries.some((entry) => entry.isIntersecting)) {
			resize(false);
		}
	});

	/** Convert value.boxes (plain data from Gradio) into Box instances stored in _boxStore.
	 *  Never writes Box instances back to value.boxes — keeping Box instances out of
	 *  the $state proxy is what prevents effect_update_depth_exceeded. */
	function parseInputBoxes() {
        valueParsed = true;
        let sourceValue = value;
        if (sourceValue === null || !Array.isArray(sourceValue.boxes)) {
            _boxStore.items = [];
            return;
        }

		// Remount glitch: Gradio may re-push the same image with boxes=[] while
		// change-echo is suppressed. Prefer module retain for that image.
		if (
			sourceValue.boxes.length === 0 &&
			isChangeEchoSuppressed()
		) {
			const retained = getRetainedValue();
			if (
				retained &&
				retained.boxes.length > 0 &&
				imageKeyFromValue(retained) === imageKeyFromValue(sourceValue)
			) {
				sourceValue = {
					...sourceValue,
					boxes: retained.boxes,
					orientation: sourceValue.orientation ?? retained.orientation
				} as AnnotatedImageData;
			}
		}

        const newBoxes: Box[] = [];

        for (let i = 0; i < sourceValue.boxes.length; i++) {
            const boxData = sourceValue.boxes[i];

            if (boxData && typeof boxData === 'object') {
                let color = "";
                let label = "";
                let id = "";
                let text = "";
				let page = 0;

                if (boxData.hasOwnProperty("color")) {
                    color = boxData["color"];
                    if (Array.isArray(color) && color.length === 3) {
                        color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                    }
                } else {
                    color = Colors[i % Colors.length];
                }
                if (boxData.hasOwnProperty("label")) {
                    label = boxData["label"];
                }
                if (boxData.hasOwnProperty("id")) {
                    id = boxData["id"];
                } else {
                    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    let newBoxId = '';
                    for (let j = 0; j < 12; j++) {
                        newBoxId += characters.charAt(Math.floor(Math.random() * characters.length));
                    }
                    id = newBoxId;
                }
                if (boxData.hasOwnProperty("text")) {
                    text = boxData["text"];
                }
				if (boxData.hasOwnProperty("page")) {
                    page = boxData["page"];
                }

                const xmin = boxData.hasOwnProperty("xmin") ? boxData["xmin"] : 0;
                const ymin = boxData.hasOwnProperty("ymin") ? boxData["ymin"] : 0;
                const xmax = boxData.hasOwnProperty("xmax") ? boxData["xmax"] : 0;
                const ymax = boxData.hasOwnProperty("ymax") ? boxData["ymax"] : 0;
                const backendScaleFactor = boxData.hasOwnProperty("scaleFactor") ? boxData["scaleFactor"] : 1;

                const boxInstance = new Box(
                    draw,
                    onBoxFinishCreation,
                    canvasWindow,
                    canvasXmin,
                    canvasYmin,
                    canvasXmax,
                    canvasYmax,
                    label,
                    xmin,
                    ymin,
                    xmax,
                    ymax,
                    color,
                    boxAlpha,
                    id,
                    text,
					page,
                    boxMinSize,
                    handleSize,
                    boxThickness,
                    boxSelectedThickness
                );
                // Record the factor only. setScaleFactor() would move the coordinates,
                // double-scaling them when resize() has already converted image pixels
                // into display pixels (and toJSON() round-tripped those display coords
                // with scaleFactor === fit).
                boxInstance.adoptScaleFactor(
                    typeof backendScaleFactor === "number" && backendScaleFactor > 0
                        ? backendScaleFactor
                        : 1
                );
                boxInstance.applyUserScale();

                newBoxes.push(boxInstance);
            } else {
                console.error("Invalid box data format encountered:", boxData);
            }
        }

        _boxStore.items = newBoxes;
		if (sourceValue?.image && newBoxes.length > 0) {
			rememberValue({
				image: sourceValue.image,
				boxes: newBoxes.map((b) => b.toJSON()),
				orientation: _internal.orientation,
				image_width: sourceValue.image_width,
				image_height: sourceValue.image_height
			});
		}
    }

	// Plain object container so property mutations are invisible to Svelte 5's
	// reactive proxy tracking, preventing the $: block from scheduling a self-re-run.
	const _lastProcessed = { value: null as typeof value, signature: "" };

	function valueSignature(v: typeof value): string {
		if (v === null) return "";
		const image: any = v.image;
		const url = (image && (image.url || image.path || image)) || "";
		const boxes = Array.isArray(v.boxes) ? v.boxes : [];
		// Content identity, not object identity — Gradio often re-wraps the same
		// FileData/boxes in a new object, which used to re-trigger parse+resize.
		const head = boxes[0];
		const tail = boxes.length > 1 ? boxes[boxes.length - 1] : head;
		const boxPart = head
			? `${boxes.length}:${head.xmin},${head.ymin},${head.xmax},${head.ymax}` +
				(tail ? `:${tail.xmin},${tail.ymin},${tail.xmax},${tail.ymax}` : "")
			: "0";
		return `${url}|${v.orientation ?? 0}|${boxPart}`;
	}

	$: {
		const currentValue = value;
		// A parent can briefly set value to null while applying FileData. Parsing
		// that would empty the store and look like the page vanished; skip it.
		if (currentValue === null) {
			// leave store as-is
		} else {
			const signature = valueSignature(currentValue);
			if (signature !== _lastProcessed.signature) {
				_lastProcessed.value = currentValue;
				_lastProcessed.signature = signature;
				// Sync orientation from Gradio-provided value (non-reactively, via plain property).
				_internal.orientation = (currentValue.orientation) ?? 0;
				scheduleAfterPaint(() => {
						canvasWindow.orientation = _internal.orientation;
						setImage();
						parseInputBoxes();
						// resize() before any paint: parseInputBoxes() leaves the boxes in
						// natural image pixels, so drawing first flashes them at full size.
						// Select without drawing for the same reason; the draw() below covers it.
						resize(false);
						if (selectedBox < 0 && _boxStore.items.length > 0) {
							setSelection(0);
						}
						draw();
				});
			}
		}
	}

	function setImage(){
		if (imageUrl !== null) {
			if (image === null || image.src != imageUrl) {
				if (image) {
					image.onload = null;
				}
				image = new Image();
				image.src = imageUrl;
				image.onload = function(){
					if (destroyed || !ctx || !canvas) return;
					resize(false);
					draw();
				}
			}
		}
	}

	onMount(() => {
		if (Array.isArray(choices) && choices.length > 0) {
			if (!Array.isArray(choicesColors) || choicesColors.length == 0) {
				for (let i = 0; i < choices.length; i++) {
					let color = Colors[i % Colors.length];
					choicesColors.push(colorRGBAToHex(color));
				}
			}
			defaultLabelCache.label = labelFromChoice(choices[0])
			defaultLabelCache.color = choicesColors[0]
		}

		if (!canvas) return;
		ctx = canvas.getContext("2d");
		// Paint last frame immediately so Gradio remounts do not flash a blank canvas.
		const key = imageUrl || imageKeyFromValue(value);
		if (key) {
			blitCanvasSnapshot(canvas, key);
			ctx = canvas.getContext("2d");
		}
		observer.observe(canvas);
		visibilityObserver.observe(canvas);

		// _boxStore is populated by the $: block's RAF. At mount time it will be empty,
		// so the RAF will handle initial selection once parseInputBoxes() runs.
		if (selectedBox < 0 && _boxStore.items.length > 0) {
			selectBox(0);
		}
		setImage();
		// Layout-only, like the observers: mount is not a user edit, and dispatching
		// here would report the still-empty box store as the component's value.
		resize(false);
		draw();
	});

	onDestroy(() => {
		destroyed = true;
		cancelPendingRafs();
		observer.disconnect();
		visibilityObserver.disconnect();
		if (canvas && canvas.width > 0 && canvas.height > 0) {
			const key = imageUrl || imageKeyFromValue(value);
			if (key) {
				captureCanvasSnapshot(canvas, key);
			}
			if (value?.image && _boxStore.items.length > 0) {
				rememberValue({
					image: value.image,
					boxes: _boxStore.items.map((b) => b.toJSON()),
					orientation: _internal.orientation,
					image_width: value.image_width,
					image_height: value.image_height
				});
			}
		}
		if (image) {
			image.onload = null;
			image = null;
		}
		canvasWindow.stopDrag();
		ctx = null;
		canvas = null;
	});
	

</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="annotator-container"
	tabindex="0"
	bind:this={annotatorContainerDiv}
	on:keydown={handleKeyPress}
	on:click={() => annotatorContainerDiv.focus()}
>
	{#if interactive}
		<span class="canvas-control">
			<button
				class="icon"
				class:selected={mode === Mode.creation}
				aria-label="Create box"
				title="Create box (C)"
				on:click={() => setCreateMode()}><BoundingBox/></button
			>
			<button
				class="icon"
				class:selected={mode === Mode.drag}
				aria-label="Drag boxes"
				title="Drag boxes (D)"
				on:click={() => setDragMode()}><Hand/></button
			>
			{#if showRemoveButton}
				<button
					class="icon"
					aria-label="Remove box"
					title="Remove box (Del)"
					on:click={() => onDeleteBox()}><Trash/></button
				>
			{/if}
			{#if !disableEditBoxes && labelDetailLock}
				<button
					class="icon"
					aria-label="Edit label"
					title="Edit label"
					on:click={() => { const m = getMergedChoices(); modalChoices = m.choices; modalChoicesColors = m.colors; defaultModalCurrentLabel = defaultLabelCache.label; defaultModalCurrentColor = defaultLabelCache.color; anchorModalToSelection(); editDefaultLabelVisible = true; }}><Label/></button
				>
			{/if}
			<button
				class="icon"
				aria-label="Rotate counterclockwise"
				title="Rotate counterclockwise"
				on:click={() => onRotateImage(-1)}><Undo/></button
			>
			<button
				class="icon"
				aria-label="Rotate clockwise"
				title="Rotate clockwise"
				on:click={() => onRotateImage(1)}><Redo/></button
			>
		</span>
	{/if}

	<div class="canvas-container">
		<canvas
			bind:this={canvas}
			on:pointerdown={handlePointerDown}
			on:pointerup={handlePointerUp}
			on:pointermove={handlesCursor ? handlePointerMove : null}
			on:dblclick={handleDoubleClick}
			on:wheel|nonpassive={handleMouseWheel}
			class="canvas-annotator"
		></canvas>
	</div>

	{#if interactive}
		<span class="canvas-control">
			<button
				class="icon"
				class:selected={mode === Mode.creation}
				aria-label="Create box"
				title="Create box (C)"
				on:click={() => setCreateMode()}><BoundingBox/></button
			>
			<button
				class="icon"
				class:selected={mode === Mode.drag}
				aria-label="Drag boxes"
				title="Drag boxes (D)"
				on:click={() => setDragMode()}><Hand/></button
			>
			{#if showRemoveButton}
				<button
					class="icon"
					aria-label="Remove box"
					title="Remove box (Del)"
					on:click={() => onDeleteBox()}><Trash/></button
				>
			{/if}
		{#if !disableEditBoxes && labelDetailLock}
			<button
				class="icon"
				aria-label="Edit label"
				title="Edit label"
		on:click={() => { const m = getMergedChoices(); modalChoices = m.choices; modalChoicesColors = m.colors; defaultModalCurrentLabel = defaultLabelCache.label; defaultModalCurrentColor = defaultLabelCache.color; anchorModalToSelection(); editDefaultLabelVisible = true; }}><Label/></button
		>
	{/if}
	<button
		class="icon"
		aria-label="Rotate counterclockwise"
		title="Rotate counterclockwise"
		on:click={() => onRotateImage(-1)}><Undo/></button
	>
	<button
		class="icon"
		aria-label="Rotate clockwise"
		title="Rotate clockwise"
		on:click={() => onRotateImage(1)}><Redo/></button
	>
</span>
{/if}
</div>

<!-- ModalBox uses only plain HTML elements (no Gradio sub-components), so it
     adds zero entries to the Gradio registry and does not contribute to the
     flush_effects depth.  All three instances are always mounted; visibility is
     toggled via the `visible` prop (CSS display). -->
<ModalBox
	visible={editModalVisible}
	bind:currentLabel={editModalCurrentLabel}
	bind:currentColor={editModalCurrentColor}
	on:change={onModalEditChange}
	on:enter{onModalEditChange}
	choices={modalChoices}
	choicesColors={modalChoicesColors}
	anchorX={modalAnchorX}
	anchorY={modalAnchorY}
/>

<ModalBox
	visible={newModalVisible}
	bind:currentLabel={newModalCurrentLabel}
	bind:currentColor={newModalCurrentColor}
	on:change={onModalNewChange}
	on:enter{onModalNewChange}
	choices={modalChoices}
	showRemove={false}
	choicesColors={modalChoicesColors}
	labelDetailLock={labelDetailLock}
	anchorX={modalAnchorX}
	anchorY={modalAnchorY}
/>

<ModalBox
	visible={editDefaultLabelVisible}
	bind:currentLabel={defaultModalCurrentLabel}
	bind:currentColor={defaultModalCurrentColor}
	on:change={onDefaultLabelEditChange}
	on:enter{onDefaultLabelEditChange}
	choices={modalChoices}
	showRemove={false}
	choicesColors={modalChoicesColors}
	labelDetailLock={labelDetailLock}
	anchorX={modalAnchorX}
	anchorY={modalAnchorY}
/>

<style>
	.canvas-annotator {
		border-color: var(--block-border-color);
		width: 100%;
		height: 100%;
		display: block;
		touch-action: none;
	}

	.canvas-control {
		display: flex;
		align-items: center;
		justify-content: center;
		border-top: 1px solid var(--border-color-primary);
		width: 95%;
		bottom: 0;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		margin-top: var(--size-2);
	}

	.icon {
		width: 22px;
		height: 22px;
		margin: var(--spacing-lg) var(--spacing-xs);
		padding: var(--spacing-xs);
		color: var(--neutral-400);
		border-radius: var(--radius-md);
	}

	.icon:hover,
	.icon:focus {
		color: var(--color-accent);
	}
	
	.selected {
		color: var(--color-accent);
	}

	.canvas-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.annotator-container:focus {
    	outline: none;
	}
</style>
