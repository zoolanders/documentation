# TextareaPro Element

The **TextareaPro Element** extends with new features the ZOO Textarea element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting              | Description                                                                                                                                                                                                                                                                               |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Plugins_            | If enabled the Plugins tags would be evaluated during rendering.                                                                                                                                                                                                                          |
| _Additional Options_ | Toggles the additional edit layout fields.                                                                                                                                                                                                                                                |
| _Editor_             | Allows to choose the text editor by _Tiny Editor_, based on TinyMCE it loads on demand improving the Item page load time, _Joomla Editor_, loads the Joomla Default editor and behave the same way ZOO Textarea does and _No Editor_, no editor will be loaded displaying a raw textarea. |
| _Enabled on Load_    | Allows choosing if the _Tiny Editor_ will be loaded initially or by demand. Recommended leave disabled for lower page load time.                                                                                                                                                          |
| _Input size_         | The default textarea Height size. Not compatible with Joomla! Editors.                                                                                                                                                                                                                    |
| _Maximum Characters_ | The maximum amount of characters allowed inputting. Only compatible with _No Editor_.                                                                                                                                                                                                     |
| _Default Value_      | Default field value when new Item is created.                                                                                                                                                                                                                                             |

## Default Layout

Renders the textarea content.

| Setting              | Description                                                                     |
| -------------------- | ------------------------------------------------------------------------------- |
| _Prefix_             | The text to be prefixed to the text.                                            |
| _Suffix_             | The text to be suffixed to the text.                                            |
| _Maximum Characters_ | The maximum amount of characters allowed to be rendered.                        |
| _Strip Tags_         | If enabled all HTML tags will be removed from the text preserving it integrity. |

## Widgetkit Layout

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).
