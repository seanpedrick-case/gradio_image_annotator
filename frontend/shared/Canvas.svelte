<script lang="ts">
    import { onMount, onDestroy, createEventDispatcher } from "svelte";
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
	export let handleSize: number;
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

	if (showRemoveButton === null) {
		showRemoveButton = (disableEditBoxes);
	}

    let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
    let image = null;
	let selectedBox = -1;
	let mode: Mode = Mode.drag;
	let canvasWindow: WindowViewer = new WindowViewer(draw);

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

	let labelDetailLock = useDefaultLabel;
	let defaultLabelCache = {
		label: "",
		color: ""
	};

	const dispatch = createEventDispatcher<{
		change: undefined;
	}>();

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
	
    function draw() {
		if (ctx) {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.save();
			ctx.translate(canvasWindow.offsetX, canvasWindow.offsetY);
			ctx.scale(canvasWindow.scale, canvasWindow.scale);
			if (image !== null){
				switch (value.orientation) {
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
			
			for (const box of value.boxes.slice().reverse()) {
				box.render(ctx);
			}
		}
	}

    function selectBox(index: number) {
		selectedBox = index;
		value.boxes.forEach(box => {box.setSelected(false);});
		if (index >= 0 && index < value.boxes.length){
			value.boxes[index].setSelected(true);
		}
		draw();
	}

	function handlePointerDown(event: PointerEvent) {
		console.log("handlePointerDown called. Current mode:", mode); // ADD THIS LOG
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
		for (const [i, box] of value.boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				selectedBoxFlag = true;
				selectBox(i);
				box.startResize(handleIndex, event);
				return;
			}
		}

		// Check if the mouse is inside a box
		for (const [i, box] of value.boxes.entries()) {
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
		dispatch("change");
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

		for (const [_, box] of value.boxes.entries()) {
			const handleIndex = box.indexOfPointInsideHandle(mouseX, mouseY);
			if (handleIndex >= 0) {
				canvas.style.cursor = box.resizeHandles[handleIndex].cursor;
				return;
			}
		}

		canvas.style.cursor = "default";
	}

	function handleKeyPress(event: KeyboardEvent) {
		if (!interactive) {
			return;
		}

		switch (event.key) {
			case "Delete":
				onDeleteBox();
				break;
		}
	}

	function handleMouseWheel(event: WheelEvent) {
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
		const x = (event.clientX - rect.left - canvasWindow.offsetX) / scaleFactor / canvasWindow.scale;
		const y = (event.clientY - rect.top - canvasWindow.offsetY) / scaleFactor / canvasWindow.scale;

		console.log("createBox initial x, y:", x, y); // ADD THIS LOG

		let color;
        if (choicesColors.length > 0) {
            color = colorHexToRGB(choicesColors[0]);
        } else if (singleBox) {
            if (value.boxes.length > 0) {
                color = value.boxes[0].color;
            } else {
                color = Colors[0];
            }
        } else {
            color = Colors[value.boxes.length % Colors.length];
        }

        // ADDED: Assign a unique ID        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let newBoxId = '';
        for (let i = 0; i < 12; i++) {
            newBoxId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
		// and default text for a newly created box
        const newBoxText = ""; // Default text is empty

        let box = new Box(
            draw,
            onBoxFinishCreation,
            canvasWindow,
            canvasXmin,
            canvasYmin,
            canvasXmax,
            canvasYmax,
            "", // Initial label (might be set later via modal)
            x,
            y,
            x,
            y,
            color,
            boxAlpha,
			 // ADDED: Pass id and text to the Box constructor
			newBoxId,
            newBoxText,
            boxMinSize,
            handleSize,
            boxThickness,
            boxSelectedThickness           
        );
        box.startCreating(event, rect.left, rect.top);
        if (singleBox) {
            value.boxes = [box];
        } else {
            // Add the new box to the beginning of the array (so it's drawn on top and easily selected)
             value.boxes = [box, ...value.boxes];
        }
        selectBox(0); // Select the newly created box
        draw();
        dispatch("change"); // Trigger change event to send the new box data to backend

		console.log("new box:", value.boxes); // ADD THIS LOG
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
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			if (value.boxes[selectedBox].getArea() < 1) {
				onDeleteBox();
			} else {
				if (!disableEditBoxes) {
					if (labelDetailLock) {
						onUseDefaultLabelModalNew();
					} else{
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
		if (selectedBox >= 0 && selectedBox < value.boxes.length && !disableEditBoxes) {
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
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			if (ret == 1) {
				box.label = label;
				box.color = colorHexToRGB(color);
				draw();
				dispatch("change");
			} else if (ret == -1) {
				onDeleteBox();
			}
		}
	}

	function onModalNewChange(event) {
		newModalVisible = false;
		const { detail } = event;
		let label = detail.label;
		let color = detail.color;
		let ret = detail.ret;
		let lock = detail.lock;
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			if (ret == 1) {
				labelDetailLock = lock;
				defaultLabelCache.label = label;
				defaultLabelCache.color = color;
				box.label = label;
				box.color = colorHexToRGB(color);
				draw();
				dispatch("change");
			} else {
				onDeleteBox();
			}
		}
	}

	function onDefaultLabelEditChange(event) {
		editDefaultLabelVisible = false;
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
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			let box = value.boxes[selectedBox];
			box.label = defaultLabelCache.label;
			if (defaultLabelCache.color !== "") {
				box.color = colorHexToRGB(defaultLabelCache.color);
			}
			draw();
			dispatch("change");
		}
	}

    function onDeleteBox() {
		if (selectedBox >= 0 && selectedBox < value.boxes.length) {
			value.boxes.splice(selectedBox, 1);
			selectBox(-1);
			if (singleBox) {
				setCreateMode();
			}
			dispatch("change");
		}
	}
	
	/**
	 * Rotate the image and all the boxes
	 * @param op 1: rotate clockwise, -1: rotate counterclockwise
	 */
	function onRotateImage(op: number) {
		value.orientation = (((value.orientation + op) % 4) + 4 ) % 4;
		canvasWindow.orientation = value.orientation;

		resize();
		for (const box of value.boxes) {
			box.onRotate(op);
		}
		draw();
	}

	function resize() {
		if (canvas) {
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

			if (canvasXmax > 0 && canvasYmax > 0){
				for (const box of value.boxes) {
					box.canvasXmin = canvasXmin;
					box.canvasYmin = canvasYmin;
					box.canvasXmax = canvasXmax;
					box.canvasYmax = canvasYmax;
					box.setScaleFactor(scaleFactor);
				}
			}
			draw();
			dispatch("change");
		}
	}
	const observer = new ResizeObserver(resize);

	function parseInputBoxes() {
        // Handle cases where value or value.boxes might be null or not an array
        if (value === null || !Array.isArray(value.boxes)) {
            if (value !== null) value.boxes = []; // Ensure it's an empty array if value exists
            return;
        }

        const updatedBoxes = []; // Create a new array

        for (let i = 0; i < value.boxes.length; i++) {
            let boxData = value.boxes[i]; // Use a temporary variable for the item

            if (boxData instanceof Box) {
                // If it's already a Box instance, just update its canvas/scale properties
                let boxInstance = boxData;
                boxInstance.canvasXmin = canvasXmin;
                boxInstance.canvasYmin = canvasYmin;
                boxInstance.canvasXmax = canvasXmax;
                boxInstance.canvasYmax = canvasYmax;
                // Assuming setScaleFactor/applyUserScale handles applying the current scale based on canvasWindow
                 boxInstance.setScaleFactor(canvasWindow.scale); // Apply current canvas scale
                 // Note: The original code seems to use `scaleFactor` (related to image/canvas size ratio)
                 // in setScaleFactor, but Box class internally uses `canvasWindow.scale`.
                 // This might need alignment depending on the intended scaling logic.
                 // Using canvasWindow.scale here is more likely correct for updating based on zoom/pan.

                updatedBoxes.push(boxInstance); // Add the existing instance to the new array

            } else if (boxData && typeof boxData === 'object') {
                // If it's a raw dictionary from the backend, create a new Box instance
                let color = "";
                let label = "";
                let id = "";
                let text = "";

                // Extract properties from the raw dictionary
                 if (boxData.hasOwnProperty("color")) {
                     color = boxData["color"];
                     if (Array.isArray(color) && color.length === 3) {
                         color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
                     }
                 } else {
                     color = Colors[i % Colors.length]; // Default color if not provided
                 }
                 if (boxData.hasOwnProperty("label")) {
                     label = boxData["label"];
                 }
                 // ADDED: Extract id and text from the incoming dictionary
                 if (boxData.hasOwnProperty("id")) {
                     id = boxData["id"];
                 }
				 else {
					// ADDED: Assign a unique ID        
					const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
					let newBoxId = '';
					for (let i = 0; i < 12; i++) {
						newBoxId += characters.charAt(Math.floor(Math.random() * characters.length));
					}
					id = newBoxId
				 }
                 if (boxData.hasOwnProperty("text")) {
                     text = boxData["text"];
                 }

                 // Coordinates (these are the _xmin, _ymin, etc. in Box class before canvas scaling)
                 const xmin = boxData.hasOwnProperty("xmin") ? boxData["xmin"] : 0; // Add checks for coordinates
                 const ymin = boxData.hasOwnProperty("ymin") ? boxData["ymin"] : 0;
                 const xmax = boxData.hasOwnProperty("xmax") ? boxData["xmax"] : 0;
                 const ymax = boxData.hasOwnProperty("ymax") ? boxData["ymax"] : 0;
                 // Scale factor from backend data (used by Box internally)
                 const backendScaleFactor = boxData.hasOwnProperty("scaleFactor") ? boxData["scaleFactor"] : 1;


                // Create the new Box instance, passing all extracted properties
                 let boxInstance = new Box(
                     draw,
                     onBoxFinishCreation,
                     canvasWindow,
                     canvasXmin,
                     canvasYmin,
                     canvasXmax,
                     canvasYmax,
                     label,
                     xmin, // Use backend coordinates (original image scale)
                     ymin,
                     xmax,
                     ymax,
                     color,
                     boxAlpha,
					 id, // Pass id
                     text, // Pass text
                     boxMinSize,
                     handleSize,
                     boxThickness,
                     boxSelectedThickness                     
                 );
                 // Apply the backend scale factor if provided
                 boxInstance.setScaleFactor(backendScaleFactor);
                 // Then apply the current canvas window scale
                 boxInstance.applyUserScale();


                updatedBoxes.push(boxInstance); // Add the new instance to the new array

            } else {
                // If boxData is not an object (unexpected format), skip or handle error
                console.error("Invalid box data format encountered:", boxData);
                // Don't push this invalid item to updatedBoxes
            }
        }

        // Replace the original array with the new one containing Box instances
        // This is more reliable for Svelte reactivity
        if (value !== null) {
            value.boxes = updatedBoxes;
        }
    }

	$: {
		value;
		setImage();
		parseInputBoxes();
		resize();
		draw();
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
			defaultLabelCache.label = choices[0][0]
			defaultLabelCache.color = choicesColors[0]
		}

		ctx = canvas.getContext("2d");
		observer.observe(canvas);

		if (selectedBox < 0 && value !== null && value.boxes.length > 0) {
			selectBox(0);
		}
		setImage();
		resize();
		draw();
	});
	
	function handleCanvasFocus() {
		document.addEventListener("keydown", handleKeyPress);
	}
	
	function handleCanvasBlur() {
		document.removeEventListener("keydown", handleKeyPress);
	}

	onDestroy(() => {
		document.removeEventListener("keydown", handleKeyPress);
  	});

</script>

{#if interactive}
	<span class="canvas-control">
		<button
			class="icon"
			class:selected={mode === Mode.creation}
			aria-label="Create box"
			on:click={() => setCreateMode()}><BoundingBox/></button
		>
		<button
			class="icon"
			class:selected={mode === Mode.drag}
			aria-label="Edit boxes"
			on:click={() => setDragMode()}><Hand/></button
		>
		{#if showRemoveButton}
			<button
				class="icon"
				aria-label="Remove boxes"
				on:click={() => onDeleteBox()}><Trash/></button
			>
		{/if}
		{#if !disableEditBoxes && labelDetailLock}
		<button
			class="icon"
			aria-label="Edit label"
			on:click={() => editDefaultLabelVisible = true}><Label/></button
		>
		{/if}
		<button
			class="icon"
			aria-label="Rotate counterclockwise"
			on:click={() => onRotateImage(-1)}><Undo/></button
		>
		<button
			class="icon"
			aria-label="Rotate clockwise"
			on:click={() => onRotateImage(1)}><Redo/></button
		>
	</span>
{/if}

<div
	class="canvas-container"
	tabindex="-1"
	on:focusin={handleCanvasFocus}
	on:focusout={handleCanvasBlur}
>
	<canvas
		bind:this={canvas}
		on:pointerdown={handlePointerDown}
		on:pointerup={handlePointerUp}
		on:pointermove={handlesCursor ? handlePointerMove : null}
		on:dblclick={handleDoubleClick}
		on:wheel={handleMouseWheel}
		class="canvas-annotator"
	></canvas>
</div>

{#if interactive}
	<span class="canvas-control">
		<button
			class="icon"
			class:selected={mode === Mode.creation}
			aria-label="Create box"
			on:click={() => setCreateMode()}><BoundingBox/></button
		>
		<button
			class="icon"
			class:selected={mode === Mode.drag}
			aria-label="Edit boxes"
			on:click={() => setDragMode()}><Hand/></button
		>
		{#if showRemoveButton}
			<button
				class="icon"
				aria-label="Remove boxes"
				on:click={() => onDeleteBox()}><Trash/></button
			>
		{/if}
		{#if !disableEditBoxes && labelDetailLock}
		<button
			class="icon"
			aria-label="Edit label"
			on:click={() => editDefaultLabelVisible = true}><Label/></button
		>
		{/if}
		<button
			class="icon"
			aria-label="Rotate counterclockwise"
			on:click={() => onRotateImage(-1)}><Undo/></button
		>
		<button
			class="icon"
			aria-label="Rotate clockwise"
			on:click={() => onRotateImage(1)}><Redo/></button
		>
	</span>
{/if}

{#if editModalVisible}
	<ModalBox
		on:change={onModalEditChange}
		on:enter{onModalEditChange}
		choices={choices}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].label : ""}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? colorRGBAToHex(value.boxes[selectedBox].color) : ""}
	/>
{/if}

{#if newModalVisible}
	<ModalBox
		on:change={onModalNewChange}
		on:enter{onModalNewChange}
		choices={choices}
		showRemove={false}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].label : ""}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? colorRGBAToHex(value.boxes[selectedBox].color) : ""}
		labelDetailLock = {labelDetailLock}
	/>
{/if}

{#if editDefaultLabelVisible}
	<ModalBox
		on:change={onDefaultLabelEditChange}
		on:enter{onDefaultLabelEditChange}
		choices={choices}
		showRemove={false}
		choicesColors={choicesColors}
		label={selectedBox >= 0 && selectedBox < value.boxes.length ? value.boxes[selectedBox].label : ""}
		color={selectedBox >= 0 && selectedBox < value.boxes.length ? colorRGBAToHex(value.boxes[selectedBox].color) : ""}
		labelDetailLock = {labelDetailLock}
	/>
{/if}

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

	.canvas-container:focus {
    	outline: none;
	}
</style>
