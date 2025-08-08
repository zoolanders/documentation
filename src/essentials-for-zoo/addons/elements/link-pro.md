# LinkPro Element

The **LinkPro Element** extends with new features the ZOO Link element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting | Description |
| --- | --- |
| _Custom Text_ | Toggles the Custom Text edit field. |
| _Custom Options_ | Toggles custom options (New Window, Title and Rel) edit fields. |
| _Default Value_ | Default field value when new Item is created. |

## Default Layout

Renders a link using the current element data with the following options:

| Setting | Description |
| --- | --- |
| _Clean Link Text_ | Allows cleaning the resultant link Text with a regular expression. |
| _Clean URL_ | Allows cleaning the resultant link URL with a regular expression. |
| _If no URL value_ | Allows choosing the behaviour if the Link value was not set in the Item. |
| -- _Abort Rendering_ | the Element will not be rendered. |
| -- _Render raw Link Text_ | if present the Link Text will be rendered as plain text. |
| _URL Prefix_ | The text to be prefixed to the URL. |
| _URL Suffix_ | The text to be suffixed to the URL. |
| _Text Prefix_ | The text to be prefixed to the link text. |
| _Text Suffix_ | The text to be suffixed to the link text. |
| _Defaults_ | The values to be used by default if no data was set in the Item. |
| -- _Link_ | The link URL value. |
| -- _Text_ | The link text value. |
| -- _Title_ | The link title value. |
| -- _New window_ | The link target value, new window if enabled. |
| -- _Rel_ | The link rel value. |
| -- _Class_ | The link class value. |

## Default Raw Link Layout

Renders the current link raw url, usually used for advanced integrations.

| Setting | Description |
| --- | --- |
| _URL Prefix_ | The text to be prefixed to the URL. |
| _URL Suffix_ | The text to be suffixed to the URL. |

## Widgetkit Layout

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).
