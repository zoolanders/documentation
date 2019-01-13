# Element - TextPro

TextPro extends with new features the ZOO Text element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

::: tip
In order to better understand the following read the [Integration Section](./integration.html).
:::

## Config

- `Additional Options`: Toggles the additional edit layout fields.
- `Allowed Input`: Allows limiting the input allowed characters.
- `Input Exceptions`: Used in combination with **Allowed Input** to set exceptions.
- `Default`: Default field value when new Item is created.
- `Maximum Characters`: The maximum amount of characters allowed inputting.

## Layouts

### Default - default

Renders the text content.

- `Prefix`: The text to be prefixed to the text.
- `Suffix`: The text to be suffixed to the text.
- `Maximum Characters`: The maximum amount of characters allowed to be rendered.

### Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).
