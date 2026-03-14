import type { FileData } from "@gradio/client";
import Box from "./Box";

export default class AnnotatedImageData {
    image: FileData | null = null;
    boxes: Box[] = [];
    orientation: number = 0;
    /** Original image width in pixels (unrotated). For retransforming box coords from display to image space. */
    image_width?: number;
    /** Original image height in pixels (unrotated). For retransforming box coords from display to image space. */
    image_height?: number;
}