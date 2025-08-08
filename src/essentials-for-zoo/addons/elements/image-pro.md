# ImagePro Element

The **ImagePro Element** extends with new features the ZOO Image element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting          | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| _Custom Options_ | If enabled the extra input fields be we displayed on the Edit view. |
| _Title_          | Toggles the **title** field.                                        |
| _Link_           | Toggles the **link** field.                                         |
| _Lightbox_       | Toggles the **lightbox** field.                                     |
| _Overlay_        | Toggles the **overlay** field.                                      |

## Default Layout

Renders the current image with the following options:

| Setting           | Description                                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| _Resize Width_    | If set a copy of the image would be resized to match the width and cached. Set the value in pixels or leave empty for disabling.  |
| _Resize Height_   | If set a copy of the image would be resized to match the height and cached. Set the value in pixels or leave empty for disabling. |
| _Avoid Cropping_  | Allows choosing if and when the image cropping should be applied during resizing.                                                 |
| _Link to Item_    | If enabled the image will be linked to the Item full view.                                                                        |
| _Enable Lightbox_ | Toggles the lightbox feature.                                                                                                     |
| _Enable Overlay_  | Toggles the Overlay feature.                                                                                                      |

## Default No Cache Layout

Renders the current image without creating a cache copy with the following options:

| Setting        | Description                                                |
| -------------- | ---------------------------------------------------------- |
| _Link to Item_ | If enabled the image will be linked to the Item full view. |

## Default Raw Path Layout

Renders the current image raw path value.

## Widgetkit Layout

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).

| Setting        | Description                                                                  |
| -------------- | ---------------------------------------------------------------------------- |
| _Link to Item_ | If enabled the image will be linked to the Item. Custom links take priority. |
