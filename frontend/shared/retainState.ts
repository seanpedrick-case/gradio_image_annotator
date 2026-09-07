/**
 * Module-scope state that survives Gradio remounting the custom-component host.
 * Gradio 6 MountCustomComponent remounts Index whenever shared_props / props
 * object references change; instance `let`s are wiped each time. Keep the last
 * good page payload and change-echo suppression here instead.
 */

export const ANNOTATOR_BUILD_ID = "retain-across-remount-v5-20260907";

export type BoxPayload = { boxes: any[]; orientation: number };

type RetainedValue = {
	image: any;
	boxes: any[];
	orientation: number;
	image_width?: number;
	image_height?: number;
};

let suppressChangeEcho = false;
let suppressTimer: ReturnType<typeof setTimeout> | null = null;

let pendingUpdate: BoxPayload | null = null;
let retained: RetainedValue | null = null;

let snapshotCanvas: HTMLCanvasElement | null = null;
let snapshotKey = "";

export function armChangeEchoSuppression(ms = 750): void {
	suppressChangeEcho = true;
	if (suppressTimer !== null) {
		clearTimeout(suppressTimer);
	}
	suppressTimer = setTimeout(() => {
		suppressChangeEcho = false;
		suppressTimer = null;
	}, ms);
}

export function isChangeEchoSuppressed(): boolean {
	return suppressChangeEcho;
}

export function setPendingUpdate(payload: BoxPayload | null): void {
	pendingUpdate = payload;
}

export function getPendingUpdate(): BoxPayload | null {
	return pendingUpdate;
}

export function clearPendingUpdate(): void {
	pendingUpdate = null;
}

export function imageKeyFromValue(value: { image?: any } | null | undefined): string {
	if (!value?.image) return "";
	const image = value.image;
	return String(image.url || image.path || image || "");
}

function cloneBoxes(boxes: any[]): any[] {
	return boxes.map((b) => (b && typeof b === "object" ? { ...b } : b));
}

/** Remember a usable page payload (image + optional boxes). */
export function rememberValue(value: {
	image?: any;
	boxes?: any[];
	orientation?: number;
	image_width?: number;
	image_height?: number;
} | null): void {
	if (!value?.image) return;
	retained = {
		image: value.image,
		boxes: Array.isArray(value.boxes) ? cloneBoxes(value.boxes) : [],
		orientation: value.orientation ?? 0,
		image_width: value.image_width,
		image_height: value.image_height
	};
}

export function getRetainedValue(): RetainedValue | null {
	return retained;
}

export function clearRetainedValue(): void {
	retained = null;
	snapshotKey = "";
	if (snapshotCanvas) {
		snapshotCanvas.width = 0;
		snapshotCanvas.height = 0;
	}
}

/**
 * Prefer a stable page payload across Gradio remounts:
 * - null / image-less → last retained (if any)
 * - same image, empty boxes, while change-echo suppressed → keep retained boxes
 * - otherwise accept incoming and remember it
 */
export function coalesceValue(incoming: {
	image?: any;
	boxes?: any[];
	orientation?: number;
	image_width?: number;
	image_height?: number;
} | null): RetainedValue | null {
	if (incoming == null || !incoming.image) {
		return retained;
	}

	const incomingKey = imageKeyFromValue(incoming);
	const boxes = Array.isArray(incoming.boxes) ? incoming.boxes : [];
	const retainedKey = retained ? imageKeyFromValue(retained) : "";

	if (
		boxes.length === 0 &&
		suppressChangeEcho &&
		retained &&
		retainedKey === incomingKey &&
		retained.boxes.length > 0
	) {
		return {
			image: incoming.image,
			boxes: cloneBoxes(retained.boxes),
			orientation: incoming.orientation ?? retained.orientation ?? 0,
			image_width: incoming.image_width ?? retained.image_width,
			image_height: incoming.image_height ?? retained.image_height
		};
	}

	rememberValue(incoming);
	return {
		image: incoming.image,
		boxes: cloneBoxes(boxes),
		orientation: incoming.orientation ?? 0,
		image_width: incoming.image_width,
		image_height: incoming.image_height
	};
}

export function captureCanvasSnapshot(source: HTMLCanvasElement, key: string): void {
	if (!key || !source.width || !source.height) return;
	if (!snapshotCanvas) {
		snapshotCanvas = document.createElement("canvas");
	}
	snapshotCanvas.width = source.width;
	snapshotCanvas.height = source.height;
	const ctx = snapshotCanvas.getContext("2d");
	if (!ctx) return;
	ctx.drawImage(source, 0, 0);
	snapshotKey = key;
}

/** Instant paint after remount so the page does not flash blank while boxes reload. */
export function blitCanvasSnapshot(target: HTMLCanvasElement, key: string): boolean {
	if (!snapshotCanvas || !key || snapshotKey !== key || !snapshotCanvas.width) {
		return false;
	}
	target.width = snapshotCanvas.width;
	target.height = snapshotCanvas.height;
	const ctx = target.getContext("2d");
	if (!ctx) return false;
	ctx.drawImage(snapshotCanvas, 0, 0);
	return true;
}
