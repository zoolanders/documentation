# Element - LinkPro

LinkPro extends with new features the ZOO Link element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

---

## Config

- **Custom Text**: Toggles the Custom Text edit field.
- **Custom Options**: Toggles custom options (New Window, Title and Rel) edit fields.
- **Default Value**: Default field value when new Item is created.

---

## Layouts

### Default - default

Renders a link using the current element data with the following options:

- **Clean Link Text**: Allows cleaning the resultant link Text with a regular expression.
- **Clean URL**: Allows cleaning the resultant link URL with a regular expression.
- **If no URL value**: Allows choosing the behaviour if the Link value was not set in the Item.
  - **Abort Rendering**: the Element will not be rendered.
  - **Render raw Link Text**: if present the Link Text will be rendered as plain text.
- **URL Prefix**: The text to be prefixed to the URL.
- **URL Suffix**: The text to be suffixed to the URL.
- **Text Prefix**: The text to be prefixed to the link text.
- **Text Suffix**: The text to be suffixed to the link text.
- **Defaults**: The values to be used by default if no data was set in the Item.
  - **Link**: The link URL value.
  - **Text**: The link text value.
  - **Title**: The link title value.
  - **New window**: The link target value, new window if enabled.
  - **Rel**: The link rel value.
  - **Class**: The link class value.

### Default - rawlink

Renders the current link raw url, usually used for advanced integrations.

- **URL Prefix**: The text to be prefixed to the URL.
- **URL Suffix**: The text to be suffixed to the URL.

## Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).
