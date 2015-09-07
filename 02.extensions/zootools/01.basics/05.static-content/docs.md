---
title: Static Content element
taxonomy:
    category: docs
---

# Static Content element

The Static Content element will allow you to render not just static text but Item Layout, Links, and other content directly on the layout Positions rendering the content for all Items. It's possibilities are endless!

**Note**: the element is a core element, you don't have to add it into your Type.

Assigning the Element
---------------------

To assign the element to any position, just Drag & Drop as you would to with any other Core Element. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

**Note**: the element is not compatible with submission views.

Layouts
-------

There are two Layouts, **Default** and **qTip**, each of them with it's own features.

**Default** - Offers several content rendering features:

## Text/Plugin

Allows to display static text.

* **Text** - The text that will be displayed.
* **Plugins** - If enabled the standard Joomla Content Plugins will be evaluated on the text entered above.

## Link

Displays different kind of links, **Item, Category** or **Custom**.

* **Common link options**
  * **Text** - Allows to set the link text.
  * **Title** - Allows to set the link title.
  * **New window** - Allows to choose if the link should be opened in a new browser window.
  * **Rel** - Allows to set the link rel attribute.

* **Type: Item**

  Allows to display a link to ZOO items.

  * **Item Source**
   * **Current** - Will display a link to the current item being rendered.
   * **Specified** - Will display a link to a specific ZOO item.
  * **Item ID** - Displayed if the Item Source is set to Specific allows to set the Item ID which will be linked.
  * **Layout** - Allows to select a layout that will be used to display the item when the user clicks on the link.

* **Type: Category**

  Allows to display a link to ZOO categories.

  * **Category ID** - Allows to set the Category ID which will be linked.

* **Type: Custom**

  Allows to display a custom link.

  * **URL** - Allows to set the link URL which will be used.

## Item

Renders a specific ZOO item.

* **Item Layout** - Allows to select a layout that will be used to render the item.
* **Item Source**
  * **Current** - Will use the current item as the rendering source.
  * **Specified** - Will allow to specify the item.
* **Item ID** - Displayed if the Item Source is set to Specific allows to set the Item ID which will be used.

## Module

Displays a specific module.

* **Module** - Allows to select a the Module you would like to display.

## Iframe

Displays a standard Iframe.

* **Render: Item**

 Allows to render a specific ZOO Item in the Iframe.

  * **Item Layout** - Allows to select a layout that will be used to render the item.
  * **Item Source**
    * **Current** - Will use the current item as the rendering source.
    * **Specified** - Will allow to specify the item.
  * **Item ID** - Displayed if the Item Source is set to Specific allows to set the Item ID which will be used.

* **Render: Custom URL**

 Allows to set a custom URL for the Iframe.

  * **URL** - Allows to set the URL.
