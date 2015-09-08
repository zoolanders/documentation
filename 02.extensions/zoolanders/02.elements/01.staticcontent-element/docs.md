---
title: Static Content Element
taxonomy:
    category: docs
---

The Static Content element that allows rendering, beside static text, specific Items, Links and other content directly on the layout Positions. Being a **Core** does not require any presetting and will be rendered for each Item.

## Assigning the Element

Following the [ZOO guide](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) assign the **Static Content** element, from the **Core** elements, to the desired positions.

>>>> The element is not compatible with submission views.

## Render Options

There are several rendering features grouped by:

### Text/Plugin

Allows displaying a static text.

| Field       | Description |
| :---------- | :---------- |
| **Text** | The text that will be displayed. |
| **Plugins** | If enabled the Joomla! Content Plugins will be evaluated on the entered text. |

### Link

Displays different kind of links, **Item, Category** or **Custom**.

| Field       | Description |
| :---------- | :---------- |
| **Text** | The link text. |
| **Title** | The link title. |
| **New window** | If enabled the link will be opened in a new browser window. |
| **Rel** | The link rel attribute. |

**Item link**, displays a link to a ZOO item.

| Field       | Description |
| :---------- | :---------- |
| **Item Source** | Allows choosing the Item that will be link by **Current**, referencing the current Item being rendered or **Specified**, allowing to choose an specific Item. |
| **Item ID** | If the **Item Source** is set to Specific allows setting the Item ID which will be linked. |
| **Layout** | Allows selecting the layout that will be used to display the Item when the link is followed. |

**Category link**, displays a link to a ZOO category.

| Field       | Description |
| :---------- | :---------- |
| **Category ID** | The Category ID which will be linked. |

**Custom link**, displays a custom link.

| Field       | Description |
| :---------- | :---------- |
| **URL** | The link URL. |

### Item

Renders a specific ZOO item.

| Field       | Description |
| :---------- | :---------- |
| **Item Layout** | The layout that will be used for rendering the item. |
| **Item Source** | Allows selecting the Item source by **Current**, referencing the current Item being rendered or **Specified**, allowing to choose an specific Item. |
| **Item ID** | If the **Item Source** is set to Specific allows setting the Item ID which will be rendered. |

### Module

Displays a specific module.

| Field       | Description |
| :---------- | :---------- |
| **Module** | The Module that will be displayed. |

### Iframe

Displays an iframe with a custom url or specified Item.

**Item**

| Field       | Description |
| :---------- | :---------- |
| **Item Layout** | The layout that will be used for rendering the item. |
| **Item Source** | Allows selecting the Item source by **Current**, referencing the current Item being rendered or **Specified**, allowing to choose an specific Item. |
| **Item ID** | If the **Item Source** is set to Specific allows setting the Item ID which will be rendered. |

**URL**

| Field       | Description |
| :---------- | :---------- |
| **URL** | The URL. |
