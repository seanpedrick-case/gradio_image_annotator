<script module lang="ts">
	export { default as BaseExample } from "./Example.svelte";

	// Keep in sync with ANNOTATOR_BUILD_ID in shared/retainState.ts
	// (module scripts here cannot reliably import local .ts helpers during cc build).
	const ANNOTATOR_BUILD_ID = "retain-across-remount-v6-20260907";

	// Quiet build fingerprint for DevTools (window.__ANNOTATOR_BUILD_ID).
	if (typeof window !== "undefined") {
		(window as unknown as { __ANNOTATOR_BUILD_ID?: string }).__ANNOTATOR_BUILD_ID =
			ANNOTATOR_BUILD_ID;
	}
</script>

<script lang="ts">
	import { Gradio } from "@gradio/utils";
	import { Block, Empty, UploadText } from "@gradio/atoms";
	import { Image } from "@gradio/icons";
	import { StatusTracker } from "@gradio/statustracker";
	import type { LoadingStatus } from "@gradio/statustracker";
	import AnnotatedImageData from "./shared/AnnotatedImageData";
	import ImageAnnotator from "./shared/ImageAnnotator.svelte";
	import {
		armChangeEchoSuppression,
		clearPendingUpdate,
		getPendingUpdate,
		getRetainedValue,
		imageKeyFromValue,
		isChangeEchoSuppressed,
		rememberValue,
		setPendingUpdate
	} from "./shared/retainState";

	type SelectData = any;
	type ShareData = any;

	type ImageAnnotatorEvents = {
		change: never;
		error: string;
		edit: never;
		drag: boolean;
		upload: never;
		clear: never;
		select: SelectData;
		share: ShareData;
	};

	type ImageAnnotatorProps = {
		elem_id: string;
		elem_classes: string[];
		visible: boolean;
		value: null | AnnotatedImageData;
		label: string;
		show_label: boolean;
		root: string;
		height: number | undefined;
		width: number | undefined;
		_selectable: boolean;
		container: boolean;
		scale: number | null;
		min_width: number | undefined;
		loading_status: LoadingStatus;
		sources: ("upload" | "webcam" | "clipboard")[];
		show_download_button: boolean;
		show_share_button: boolean;
		show_clear_button: boolean;
		interactive: boolean;
		boxes_alpha: number;
		label_list: string[];
		label_list_json?: string;
		label_colors: string[];
		box_min_size: number;
		handle_size: number;
		box_thickness: number;
		box_selected_thickness: number;
		disable_edit_boxes: boolean;
		single_box: boolean;
		show_remove_button: boolean;
		handles_cursor: boolean;
		use_default_label: boolean;
		enable_keyboard_shortcuts: boolean;
	};

	class ImageAnnotatorGradio extends Gradio<ImageAnnotatorEvents, ImageAnnotatorProps> {
		// When Gradio sends new value data from Python, clear any pending user changes
		// so get_data() returns the Gradio-provided data rather than stale user edits —
		// unless the payload looks like a remount empty-box glitch (handled in coalesce).
		override set_data(data: Record<string, unknown>) {
			if ("value" in data) {
				clearPendingUpdate();
				armChangeEchoSuppression();
				const next = data.value as AnnotatedImageData | null;
				// Only fill a missing image from retain. Never reinstate boxes when
				// the server sends [] — that blocked "Exclude all" on the current page.
				if (next == null || !next.image) {
					const retained = getRetainedValue();
					if (retained) {
						data = { ...data, value: retained as AnnotatedImageData };
					}
				} else {
					rememberValue(next);
				}
			}
			super.set_data(data);
		}

		async get_data() {
			const snapshot = await super.get_data();
			const pending = getPendingUpdate();
			// Apply the latest box/orientation data from Canvas without ever having written
			// to the $state proxy (which is what caused the reactive cascade).
			if (pending !== null && snapshot.value !== null) {
				if (pending.boxes !== undefined) {
					snapshot.value.boxes = pending.boxes;
				}
				if (pending.orientation !== undefined) {
					snapshot.value.orientation = pending.orientation;
				}
			} else if (
				snapshot.value !== null &&
				isChangeEchoSuppressed()
			) {
				// Remount before parse: props may already be correct; only fill from
				// retain if props boxes are empty *and* retain still has the same
				// image's last remembered boxes (rememberValue updates on set_data,
				// so an intentional exclude leaves retain empty/updated).
				const retained = getRetainedValue();
				const boxes = Array.isArray(snapshot.value.boxes)
					? snapshot.value.boxes
					: [];
				if (
					boxes.length === 0 &&
					retained &&
					retained.boxes.length > 0 &&
					imageKeyFromValue(retained) === imageKeyFromValue(snapshot.value)
				) {
					snapshot.value.boxes = retained.boxes.map((b) => ({ ...b }));
					snapshot.value.orientation =
						snapshot.value.orientation ?? retained.orientation;
				}
			}
			return snapshot;
		}
	}

	const props = $props<
		ImageAnnotatorProps & {
			autoscroll?: boolean;
			i18n?: any;
			max_file_size?: number;
			client?: any;
		}
	>();

	const gradio = new ImageAnnotatorGradio(props);

	let dragging = $state(false);
	let active_source = $state<"upload" | "webcam" | "clipboard" | null>(null);

	// Gradio remounts this Index often; keep echo suppression armed across instances
	// so mount-time change events cannot feed another remount cycle.
	armChangeEchoSuppression(750);

	$effect(() => {
		// Automatically set the default source once props are available
		if (!active_source && gradio.props.sources?.length > 0) {
			active_source = gradio.props.sources[0];
		}
	});
</script>

<Block
	visible={gradio.shared.visible}
	variant={"solid"}
	border_mode={dragging ? "focus" : "base"}
	padding={false}
	elem_id={gradio.shared.elem_id}
	elem_classes={gradio.shared.elem_classes}
	width={gradio.props.width}
	allow_overflow={false}
	container={gradio.shared.container}
	scale={gradio.shared.scale}
	min_width={gradio.shared.min_width}
>
	<StatusTracker
		autoscroll={gradio.shared.autoscroll}
		i18n={gradio.i18n}
		{...gradio.shared.loading_status}
	/>

	<ImageAnnotator
		bind:active_source
		value={gradio.props.value}
		on:change={(e) => {
			if (isChangeEchoSuppressed()) return;
			// Store box+orientation data from Canvas in module scope (NOT $state).
			setPendingUpdate(e.detail ?? null);
			setTimeout(() => {
				if (isChangeEchoSuppressed()) return;
				gradio.dispatch("change");
			}, 0);
		}}
		selectable={gradio.props._selectable}
		root={gradio.shared.root}
		sources={gradio.props.sources}
		interactive={gradio.shared.interactive}
		showDownloadButton={gradio.props.show_download_button}
		showShareButton={gradio.props.show_share_button}
		showClearButton={gradio.props.show_clear_button}
		i18n={gradio.i18n}
		boxesAlpha={gradio.props.boxes_alpha}
		labelList={(() => {
			const raw = gradio.props.label_list_json;
			if (typeof raw === "string" && raw.length > 0) {
				try {
					const parsed = JSON.parse(raw);
					if (Array.isArray(parsed))
						return parsed.map((x: unknown) =>
							typeof x === "string" ? x : String(x)
						);
				} catch (_) {}
			}
			return Array.isArray(gradio.props.label_list) ? gradio.props.label_list : [];
		})()}
		labelColors={gradio.props.label_colors}
		boxMinSize={gradio.props.box_min_size}
		on:edit={() => gradio.dispatch("edit")}
		on:clear={() => {
			gradio.dispatch("clear");
		}}
		on:drag={({ detail }) => (dragging = detail)}
		on:upload={() => gradio.dispatch("upload")}
		on:select={({ detail }) => gradio.dispatch("select", detail)}
		on:share={({ detail }) => gradio.dispatch("share", detail)}
		on:error={({ detail }) => {
			gradio.dispatch("error", detail);
		}}
		label={gradio.shared.label}
		show_label={gradio.shared.show_label}
		max_file_size={gradio.shared.max_file_size}
		cli_upload={gradio.shared.client?.upload}
		stream_handler={gradio.shared.client?.stream}
		handleSize={gradio.props.handle_size}
		boxThickness={gradio.props.box_thickness}
		boxSelectedThickness={gradio.props.box_selected_thickness}
		disableEditBoxes={gradio.props.disable_edit_boxes}
		singleBox={gradio.props.single_box}
		showRemoveButton={gradio.props.show_remove_button}
		handlesCursor={gradio.props.handles_cursor}
		useDefaultLabel={gradio.props.use_default_label}
		enableKeyboardShortcuts={gradio.props.enable_keyboard_shortcuts}
	>
		{#if active_source === "upload"}
			<UploadText i18n={gradio.i18n} type="image" />
		{:else if active_source === "clipboard"}
			<UploadText i18n={gradio.i18n} type="clipboard" mode="short" />
		{:else}
			<Empty unpadded_box={true} size="large"><Image /></Empty>
		{/if}
	</ImageAnnotator>
</Block>
