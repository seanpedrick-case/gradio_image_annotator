<script lang="ts">
    import { onMount, createEventDispatcher } from "svelte";
	import { BoundingBox, Hand, Trash, Label } from "./icons/index";
	import ModalBox from "./ModalBox.svelte";
	import Box from "./Box";
	import { Colors } from './Colors.js';
	import AnnotatedImageData from "./AnnotatedImageData";
	import { Undo, Redo } from "@gradio/icons";
	import WindowViewer from "./WindowViewer";

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

    let canvas: HTMLCanvasElement;
	let annotatorContainerDiv: HTMLDivElement;
	let ctx: CanvasRenderingContext2D;
    let image = null;
	let selectedBox = -1;
	let mode: Mode = Mode.drag;
	let canvasWindow: WindowViewer = new WindowViewer(draw);

	// Box instances are stored here, NOT in value.boxes. This keeps Box instances
	// out of the Svelte 5 $state deep-reactive proxy (value lives in gradio.props which
	// is $state). Without this separation, draw()→render()→updateOffset()→updateHandles()
	// writes hundreds of reactive signals per frame, causing flush_count > 1000 and
	// the effect_update_depth_exceeded error when blocks.load() + nested layout are present.
	let _boxes: Box[] = [];

	if (value !== null && value.boxes.length == 0) {
		mode = Mode.creation;
	}

	let canvasXmin = 0;
	let canvasYmin = 0;
	let canvasXmax = 0;
	let canvasYmax = 0;
	let scaleFactor = 1.0;

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

	// Store orientation locally as a plain (non-reactive) property so we never write
	// to value.orientation (a $state proxy property), which would trigger the main
	// Gradio app's reactive cascade and cause effect_update_depth_exceeded.
	const _internal = { orientation: (value !== null ? value.orientation : 0) ?? 0 };

	/** Dispatch change event in next macrotask, passing current box + orientation data as
	 *  detail so Index.svelte can return it from get_data() WITHOUT writing to $state.
	 *  This completely avoids triggering the main app's reactive cascade. */
	function dispatchChangeDeferred() {
		const boxes = _boxes.map(b => b.toJSON());
		const orientation = _internal.orientation;
		setTimeout(() => dispatch("change", { boxes, orientation }), 0);
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
		for (const box of _boxes) {
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
	
    function draw() {
		if (ctx) {
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
			
			for (const box of _boxes.slice().reverse()) {
				box.render(ctx);
			}
		}
	}

	function selectBox(index: number) {
		selectedBox = index;
		_boxes.forEach((box) => box.setSelected(false));
		if (index >= 0 && index < _boxes.length) {
			_boxes[index].setSelected(true);
		}
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
		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;
		let selectedBoxFlag = false;

		// Check if the mouse is over any of the resizing handles
		for (const [i, box] of _boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				selectedBoxFlag = true;
				selectBox(i);
				box.startResize(handleIndex, event);
				return;
			}
		}

		// Check if the mouse is inside a box
		for (const [i, box] of _boxes.entries()) {
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
		if (value === null) {
			return;
		}

		if (mode !== Mode.drag) {
			return;
		}

		const rect = canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		for (const [_, box] of _boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				canvas.style.cursor = box.resizeHandles[handleIndex].cursor;
				return;
			}
		}

		canvas.style.cursor = "default";
	}

	function resetView() {
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
		if (!interactive) {
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
		const rect = canvas.getBoundingClientRect();
		const x = (event.clientX - rect.left - canvasWindow.offsetX) / canvasWindow.scale;
		const y = (event.clientY - rect.top - canvasWindow.offsetY) / canvasWindow.scale;

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
                color = _boxes.length > 0 ? _boxes[0].color : Colors[0];
            } else {
                color = Colors[_boxes.length % Colors.length];
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
            scaleFactor
        );
        box.startCreating(event, rect.left, rect.top);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                if (singleBox) {
                    _boxes = [box];
                } else {
                    _boxes = [box, ..._boxes];
                }
                selectBox(0);
                draw();
                dispatchChangeDeferred();
            });
        });
    }

	function setCreateMode() {
		mode = Mode.creation;
		canvas.style.cursor = "crosshair";
	}

	function setDragMode() {
		mode = Mode.drag;
		canvas.style.cursor = "default";
	}

	function onBoxFinishCreation() {
		if (selectedBox >= 0 && selectedBox < _boxes.length) {
			if (_boxes[selectedBox].getArea() < 1) {
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
						newModalCurrentLabel = _boxes[selectedBox].label;
						newModalCurrentColor = colorRGBAToHex(_boxes[selectedBox].color);
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
		if (selectedBox >= 0 && selectedBox < _boxes.length && !disableEditBoxes) {
			// Same pattern: write label/color before the visibility flag.
			const m = getMergedChoices();
			modalChoices = m.choices;
			modalChoicesColors = m.colors;
			editModalCurrentLabel = _boxes[selectedBox].label;
			editModalCurrentColor = colorRGBAToHex(_boxes[selectedBox].color);
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
		if (selectedBox >= 0 && selectedBox < _boxes.length) {
			let box = _boxes[selectedBox];
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
		if (selectedBox >= 0 && selectedBox < _boxes.length) {
			let box = _boxes[selectedBox];
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
		if (selectedBox >= 0 && selectedBox < _boxes.length) {
			let box = _boxes[selectedBox];
			box.label = defaultLabelCache.label;
			if (defaultLabelCache.color !== "") {
				box.color = colorHexToRGB(defaultLabelCache.color);
			}
			draw();
			dispatchChangeDeferred();
		}
	}

    function onDeleteBox() {
		if (selectedBox >= 0 && selectedBox < _boxes.length) {
			_boxes.splice(selectedBox, 1);
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

		for (const box of _boxes) {
			box.onRotate(op);
		}
		resize(true, true);
		draw();
	}

	function resize(dispatchChange = true, fromRotation = false) {
		if (canvas) {
			const oldDisplayWidth = canvasWindow.imageWidth;
			const oldDisplayHeight = canvasWindow.imageHeight;

			scaleFactor = 1;
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
			for (const box of _boxes) {
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
					box.scaleFactor = scaleFactor;
					box.applyUserScale();
				} else {
					box.setScaleFactor(scaleFactor);
				}
			}
		}
			draw();
			if (dispatchChange) dispatchChangeDeferred();
		}
	}
	const observer = new ResizeObserver(() => resize());

	/** Convert value.boxes (plain data from Gradio) into Box instances stored in _boxes.
	 *  Never writes Box instances back to value.boxes — keeping Box instances out of
	 *  the $state proxy is what prevents effect_update_depth_exceeded. */
	function parseInputBoxes() {
        if (value === null || !Array.isArray(value.boxes)) {
            _boxes = [];
            return;
        }

        const newBoxes: Box[] = [];

        for (let i = 0; i < value.boxes.length; i++) {
            const boxData = value.boxes[i];

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
                boxInstance.setScaleFactor(backendScaleFactor);
                boxInstance.applyUserScale();

                newBoxes.push(boxInstance);
            } else {
                console.error("Invalid box data format encountered:", boxData);
            }
        }

        _boxes = newBoxes;
    }

	// Plain object container so property mutations are invisible to Svelte 5's
	// reactive proxy tracking, preventing the $: block from scheduling a self-re-run.
	const _lastProcessed = { value: null as typeof value };
	$: {
		const currentValue = value;
		if (currentValue !== _lastProcessed.value) {
			_lastProcessed.value = currentValue;
			// Sync orientation from Gradio-provided value (non-reactively, via plain property).
			_internal.orientation = (currentValue !== null ? currentValue.orientation : 0) ?? 0;
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					canvasWindow.orientation = _internal.orientation;
					setImage();
					parseInputBoxes();
					if (selectedBox < 0 && _boxes.length > 0) {
						selectBox(0);
					}
					resize(false);
					draw();
				});
			});
		}
	}

	function setImage(){
		if (imageUrl !== null) {
			if (image === null || image.src != imageUrl) {
				image = new Image();
				image.src = imageUrl;
				image.onload = function(){
					resize();
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

		ctx = canvas.getContext("2d");
		observer.observe(canvas);

		// _boxes is populated by the $: block's RAF. At mount time it will be empty,
		// so the RAF will handle initial selection once parseInputBoxes() runs.
		if (selectedBox < 0 && _boxes.length > 0) {
			selectBox(0);
		}
		setImage();
		resize();
		draw();
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
					on:click={() => { const m = getMergedChoices(); modalChoices = m.choices; modalChoicesColors = m.colors; defaultModalCurrentLabel = defaultLabelCache.label; defaultModalCurrentColor = defaultLabelCache.color; editDefaultLabelVisible = true; }}><Label/></button
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
		on:click={() => { const m = getMergedChoices(); modalChoices = m.choices; modalChoicesColors = m.colors; defaultModalCurrentLabel = defaultLabelCache.label; defaultModalCurrentColor = defaultLabelCache.color; editDefaultLabelVisible = true; }}><Label/></button
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
