# Element - ImagePro

ImagePro extends with new features the ZOO Image element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

---

## Config

- **Custom Options**: If enabled the extra input fields be we displayed on the Edit view.
- **Title**: Toggles the **title** field.
- **Link**: Toggles the **link** field.
- **Lightbox**: Toggles the **lightbox** field.
- **Overlay**: Toggles the **overlay** field.

---

## Layouts

### Default - default

Renders the current image with the following options:

- **Resize Width**: If set a copy of the image would be resized to match the width and cached. Set the value in pixels or leave empty for disabling.
- **Resize Height**: If set a copy of the image would be resized to match the height and cached. Set the value in pixels or leave empty for disabling.
- **Avoid Cropping**: Allows choosing if and when the image cropping should be applied during resizing.
- **Link to Item**: If enabled the image will be linked to the Item full view.
- **Enable Lightbox**: Toggles the lightbox feature.
- **Enable Overlay**: Toggles the Overlay feature.

### Default - no_cache

Renders the current image without creating a cache copy with the following options:

- **Link to Item**: If enabled the image will be linked to the Item full view.

### Default - raw_path

Renders the current image raw path value.

### Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).

- **Link to Item**: If enabled the image will be linked to the Item. Custom links take priority.
