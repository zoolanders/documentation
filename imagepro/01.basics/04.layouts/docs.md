---
title: Layouts
taxonomy:
    category: docs
---

ImagePro has several layouts which can be used right away, but make sure to check the [customizations](/imagepro/advanced/customizations) guide if your project requires some specific output.

## Default_default

Renders the current image with the following options:

| Field       | Description |
| :---------- | :---------- |
| **Resize Width** | If set a copy of the image would be resized to match the width and cached. Set the value in pixels or leave empty for disabling. |
| **Resize Height** | If set a copy of the image would be resized to match the height and cached. Set the value in pixels or leave empty for disabling. |
| **Avoid Cropping** | Allows choosing if and when the image cropping should be applied during resizing. |
| **Link to Item** | If enabled the image will be linked to the Item full view. |
| **Enable Lightbox** | Toggles the lightbox feature. |
| **Enable Overlay** | Toggles the Overlay feature. |

## Default_no_cache

Renders the current image without creating a cache copy with the following options:

| Field       | Description |
| :---------- | :---------- |
| **Link to Item** | If enabled the image will be linked to the Item full view. |

## Default_raw_path

Renders the current image raw path value.

## Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](http://yootheme.com/widgetkit/documentation).
