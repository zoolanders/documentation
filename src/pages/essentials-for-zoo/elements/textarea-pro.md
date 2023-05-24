# Element - TextareaPro

TextareaPro extends with new features the ZOO Textarea element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

{% callout %}
In order to better understand the following read the [Integration Section](./integration.md).
{% /callout %}

## Config

- `Plugins`: If enabled the Plugins tags would be evaluated during rendering.
- `Additional Options`: Toggles the additional edit layout fields.
- `Editor`: Allows to choose the text editor by **Tiny Editor**, based on TinyMCE it loads on demand improving the Item page load time, **Joomla Editor**, loads the Joomla Default editor and behave the same way ZOO Textarea does and **No Editor**, no editor will be loaded displaying a raw textarea.
- `Enabled on Load`: Allows choosing if the **Tiny Editor** will be loaded initially or by demand. Recommended leave disabled for lower page load time.
- `Input size`: The default textarea Height size. Not compatible with Joomla! Editors.
- `Maximum Characters`: The maximum amount of characters allowed inputting. Only compatible with **No Editor**.
- `Default Value`: Default field value when new Item is created.

## Layouts

### Default - default

Renders the textarea content.

- `Prefix`: The text to be prefixed to the text.
- `Suffix`: The text to be suffixed to the text.
- `Maximum Characters`: The maximum amount of characters allowed to be rendered.
- `Strip Tags`: If enabled all HTML tags will be removed from the text preserving it integrity.

### Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).

## Troubleshooting

### The editor is not loading on the backend

It is not possible to use two different editors, for example JCE and TinyMCE, on the same page as they would conflict with each other. Choose one and stick to it.

### The editor is not loading on the frontend

Ensure that the submission is in trusted mode and the user is logged in.
