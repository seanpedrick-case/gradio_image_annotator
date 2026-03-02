<script lang="ts">
    // ModalBox uses ONLY plain HTML elements (no Gradio components) so it adds
    // zero entries to the Gradio component registry.  Using Gradio sub-components
    // (BaseDropdown, BaseColorPicker, BaseButton) caused their $effects to call
    // register() on every run, which — combined with blocks.load() + deeply nested
    // layout components — pushed the flush_effects depth past 1000 and threw
    // effect_update_depth_exceeded.
    import { createEventDispatcher } from "svelte";
    import { onMount } from "svelte";
    import { Lock, Unlock } from "./icons/index";

    export let visible = false;
    export let currentLabel = "";
    export let currentColor = "";
    export let choices: [string, number][] = [];
    export let choicesColors: string[] = [];
    export let showRemove = true;
    export let labelDetailLock = false;

    // Unique ID so the <datalist> ID doesn't clash across the three ModalBox instances.
    const uid = Math.random().toString(36).slice(2, 8);

    const dispatch = createEventDispatcher<{ change: object }>();

    function dispatchChange(ret: number) {
        dispatch("change", {
            label: currentLabel,
            color: currentColor,
            lock: labelDetailLock,
            ret: ret  // -1: remove, 0: cancel, 1: ok
        });
    }

    function onLabelInput(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        currentLabel = value;
        // When user picks a known choice, sync the associated color.
        if (Array.isArray(choices)) {
            const idx = choices.findIndex(([label]) => label === value);
            if (idx >= 0 && Array.isArray(choicesColors) && idx < choicesColors.length) {
                currentColor = choicesColors[idx];
            }
        }
    }

    function onColorInput(event: Event) {
        currentColor = (event.target as HTMLInputElement).value;
    }

    function handleKeyPress(event: KeyboardEvent) {
        if (!visible) return;
        switch (event.key.toLowerCase()) {
            case "enter": dispatchChange(1); break;
            case "escape": dispatchChange(0); break;
        }
    }

    function onLockClick() {
        labelDetailLock = !labelDetailLock;
    }

    onMount(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    });
</script>

<div class="modal" style:display={visible ? '' : 'none'}>
    <div class="modal-container">
        <span class="modal-content">
            {#if !showRemove}
                <div class="lock-wrap">
                    <button
                        class="icon"
                        class:selected={labelDetailLock}
                        aria-label="Lock label detail"
                        on:click={onLockClick}
                    >{#if labelDetailLock}<Lock/>{:else}<Unlock/>{/if}</button>
                </div>
            {/if}

            <div class="field-wrap">
                <label class="field-label" for="label-input-{uid}">Label</label>
                <input
                    id="label-input-{uid}"
                    class="label-input"
                    type="text"
                    list="label-choices-{uid}"
                    value={currentLabel}
                    on:input={onLabelInput}
                    on:change={onLabelInput}
                />
                <datalist id="label-choices-{uid}">
                    {#each choices as [label]}
                        <option value={label}>{label}</option>
                    {/each}
                </datalist>
            </div>

            <div class="field-wrap color-wrap">
                <label class="field-label" for="color-input-{uid}">Color</label>
                <input
                    id="color-input-{uid}"
                    class="color-input"
                    type="color"
                    value={currentColor || '#000000'}
                    on:input={onColorInput}
                    on:change={onColorInput}
                />
            </div>

            <div class="btn-wrap">
                <button class="modal-btn" on:click={() => dispatchChange(0)}>Cancel</button>
                {#if showRemove}
                    <button class="modal-btn modal-btn-danger" on:click={() => dispatchChange(-1)}>Remove</button>
                {/if}
                <button class="modal-btn modal-btn-primary" on:click={() => dispatchChange(1)}>OK</button>
            </div>
        </span>
    </div>
</div>

<style>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: var(--layer-top);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
    }

    .modal-container {
        border: var(--block-border-width) solid var(--block-border-color);
        margin-top: 10%;
        padding: 20px;
        box-shadow: var(--block-shadow);
        border-radius: var(--block-radius);
        background: var(--block-background-fill);
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
    }

    .modal-content {
        display: flex;
        align-items: flex-end;
        gap: 8px;
        flex-wrap: wrap;
    }

    /* ---- lock icon ---- */
    .lock-wrap {
        display: flex;
        align-items: center;
    }

    .icon {
        width: 22px;
        height: 22px;
        padding: var(--spacing-xs);
        color: var(--neutral-400);
        border-radius: var(--radius-md);
        background: none;
        border: none;
        cursor: pointer;
    }

    .icon:hover { color: var(--color-accent); }
    .selected    { color: var(--color-accent); }

    /* ---- label / color fields ---- */
    .field-wrap {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .field-label {
        font-size: var(--text-sm);
        font-weight: var(--weight-semibold);
        color: var(--body-text-color);
    }

    .label-input {
        height: var(--size-8);
        min-width: 160px;
        padding: 0 var(--spacing-sm);
        border: var(--input-border-width) solid var(--input-border-color);
        border-radius: var(--input-radius);
        background: var(--input-background-fill);
        color: var(--body-text-color);
        font-size: var(--text-md);
    }

    .label-input:focus {
        outline: none;
        border-color: var(--input-border-color-focus);
        box-shadow: var(--input-shadow-focus);
    }

    .color-wrap { align-items: flex-start; }

    .color-input {
        height: var(--size-8);
        width: var(--size-14);
        padding: 2px 4px;
        border: var(--input-border-width) solid var(--input-border-color);
        border-radius: var(--input-radius);
        background: var(--input-background-fill);
        cursor: pointer;
    }

    /* ---- buttons ---- */
    .btn-wrap {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-bottom: 4px;
    }

    .modal-btn {
        height: var(--size-8);
        padding: 0 var(--spacing-lg);
        border: var(--input-border-width) solid var(--input-border-color);
        border-radius: var(--input-radius);
        background: var(--button-secondary-background-fill);
        color: var(--button-secondary-text-color);
        font-size: var(--text-md);
        font-weight: var(--weight-semibold);
        cursor: pointer;
        white-space: nowrap;
    }

    .modal-btn:hover {
        background: var(--button-secondary-background-fill-hover);
    }

    .modal-btn-primary {
        background: var(--button-primary-background-fill);
        color: var(--button-primary-text-color);
        border-color: var(--button-primary-border-color);
    }

    .modal-btn-primary:hover {
        background: var(--button-primary-background-fill-hover);
    }

    .modal-btn-danger {
        background: var(--button-cancel-background-fill, var(--error-background-fill, #fee2e2));
        color: var(--button-cancel-text-color, var(--error-text-color, #991b1b));
        border-color: var(--button-cancel-border-color, var(--error-border-color, #fca5a5));
    }

    .modal-btn-danger:hover {
        filter: brightness(0.95);
    }
</style>
