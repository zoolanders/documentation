---
title: Layouts
taxonomy:
    category: docs
---

DatePro has several layouts which can be used right away, but make sure to check the [customizations](http://documentation.zoolanders.com/linkpro/advanced/customizations) guide if your project requires some specific output.

## Default_default

Renders a link using the current element data with the following options:

| Field       | Description |
| :---------- | :---------- |
| **Clean Link Text** | Allows cleaning the resultant link Text with a regular expression. For example <code>/((http\|https\|ftp\|ftps):\/\/)/</code> will remove any **http://**, **htpps://**, **ftp://** or **ftps://** part. |
| **Clean URL** | Allows cleaning the resultant link URL with a regular expression the same way as the **Clean Link Text** field. |
| **If no URL value** | Allows choosing the behaviour if the Link value was not set in the Item with **Abort Rendering**, the Element will not be rendered or **Render raw Link Text**, if present the Link Text will be rendered as plain text. |
| **URL Prefix** | The text to be prefixed to the URL. |
| **URL Suffix** | The text to be suffixed to the URL. |
| **Text Prefix** | The text to be prefixed to the link text. |
| **Text Suffix** | The text to be suffixed to the link text. |

**Defaults**, the values to be used by default if no data was set in the Item.

| Field       | Description |
| :---------- | :---------- |
| **Link** | The link URL value. |
| **Text** | The link text value. |
| **Title** | The link title value. |
| **New window** | The link target value, new window if enabled. |
| **Rel** | The link rel value. |
| **Class** | The link class value. |

## Default_rawlink

Renders the current link raw url, usually used for advanced integrations.

| Field       | Description |
| :---------- | :---------- |
| **URL Prefix** | The text to be prefixed to the URL. |
| **URL Suffix** | The text to be suffixed to the URL. |

## Widgetkit

Widgetkit layout is a integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. For details about configuration options visit the [Widgetkit documentation](http://yootheme.com/widgetkit/documentation).
