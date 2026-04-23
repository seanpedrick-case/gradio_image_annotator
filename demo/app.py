import gradio as gr
from gradio_image_annotation_redaction import image_annotator
import numpy as np

example_annotation = {
    "image":   "https://raw.githubusercontent.com/seanpedrick-case/document_redaction_examples/refs/heads/main/example_complaint_letter.jpg",
    "boxes": [
        {
            "xmin": 125,
            "ymin": 239,
            "xmax": 230,
            "ymax": 266,
            "label": "Name",
            "color": (255, 0, 0),
            "text": "Mark Smith",
            "page": 1,
        },
        {
            "xmin": 125,
            "ymin": 288,
            "xmax": 301,
            "ymax": 375,
            "label": "Address",
            "color": (0, 255, 0),
            "text": "Sofa Showroom, 555 Broadway, Cityland, KS 66214",
            "page": 1,
        }
    ]
}

examples_crop = [
    {
        "image": "https://raw.githubusercontent.com/gradio-app/gradio/main/guides/assets/logo.png",
        "boxes": [
            {
                "xmin": 30,
                "ymin": 70,
                "xmax": 530,
                "ymax": 500,
                "color": (100, 200, 255),
            }
        ],
    },
    {
        "image": "https://raw.githubusercontent.com/seanpedrick-case/document_redaction_examples/refs/heads/main/example_complaint_letter.jpg",
        "boxes": [
            {
                "xmin": 636,
                "ymin": 575,
                "xmax": 801,
                "ymax": 697,
                "color": (255, 0, 0),
            },
        ],
    },
]


def crop(annotations:dict):
    if angle:= annotations.get("orientation", None):
        annotations["image"] = np.rot90(annotations["image"], k=-angle)
    if annotations["boxes"]:
        box = annotations["boxes"][0]
        return annotations["image"][
            box["ymin"]:box["ymax"],
            box["xmin"]:box["xmax"]
        ]
    return None

def _image_size(image):
    """Derive (width, height) from image when numpy or PIL."""
    if image is None:
        return None, None
    if isinstance(image, np.ndarray):
        if image.ndim >= 2:
            return int(image.shape[1]), int(image.shape[0])  # width, height
        return None, None
    if hasattr(image, "size"):  # PIL Image
        w, h = image.size
        return int(w), int(h)
    return None, None


def get_boxes_json(annotations):
    if annotations is None:
        return None
    image = annotations.get("image")
    image_path = image if isinstance(image, str) else None
    # Use frontend-provided dimensions when present, else derive from image data (numpy/PIL)
    image_width = annotations.get("image_width")
    image_height = annotations.get("image_height")
    if image_width is None or image_height is None:
        w, h = _image_size(image)
        if image_width is None:
            image_width = w
        if image_height is None:
            image_height = h
    return {
        "boxes": annotations.get("boxes", []),
        "orientation": annotations.get("orientation"),
        "image_width": image_width,
        "image_height": image_height,
        "image_path": image_path,
    }


with gr.Blocks() as demo:
    with gr.Tab("Object annotation", id="tab_object_annotation"):
        
        annotator = image_annotator(
            example_annotation,
            label_list=["Person", "Vehicle"],
            label_colors=[(0, 255, 0), (255, 0, 0)],
            image_type="filepath",
        )
        button_get = gr.Button("Get bounding boxes")
        json_boxes = gr.JSON()
        button_get.click(get_boxes_json, annotator, json_boxes)

    with gr.Tab("Crop", id="tab_crop"):
        with gr.Row():
            annotator_crop = image_annotator(
                examples_crop[0],
                image_type="numpy",
                disable_edit_boxes=True,
                single_box=True,
            )
            image_crop = gr.Image()
        button_crop = gr.Button("Crop")
        button_crop.click(crop, annotator_crop, image_crop)

        gr.Examples(examples_crop, annotator_crop)
    
    with gr.Accordion("Keyboard Shortcuts"):
        gr.Markdown("""
        - ``C``: Create mode
        - ``D``: Drag mode
        - ``E``: Edit selected box (same as double-click a box)
        - ``Delete``: Remove selected box
        - ``Space``: Reset view (zoom/pan)
        - ``Enter``: Confirm modal dialog
        - ``Escape``: Cancel/close modal dialog
        """)

if __name__ == "__main__":
    demo.launch()
