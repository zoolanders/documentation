---
title: Integration
taxonomy:
    category: docs
---

Texts are standard ZOO elements, you can follow the [extending type](http://yootheme.com/zoo/documentation/advanced/extend-pre-build-types) guide to integrate the elements into your existent Apps. Once the elements are set in the Type there are several configuration params that do differ from the ZOO ones, lets see what is all that about.

The Basic set are ZOOlanders common [Configuration fields](/extensions/zoolanders/elements/fields#configuration). The Specific set are Texts related fields.

## TextPro

| Field       | Description |
| :---------- | :---------- |
| **Additional Options** | Toggles the additional edit layout fields. |
| **Allowed Input** | Allows limiting the input allowed characters. |
| **Input Exceptions** | Used in combination with **Allowed Input** to set exceptions. |
| **Default** | Default field value when new Item is created. |
| **Maximum Characters** | The maximum amount of characters allowed inputting. |

## TextareaPro

| Field       | Description |
| :---------- | :---------- |
| **Plugins** | If enabled the Plugins tags would be evaluated during rendering. |
| **Additional Options** | Toggles the additional edit layout fields. |
| **Editor** | Allows to choose the text editor by **Tiny Editor**, based on TinyMCE it loads on demand improving the Item page load time, **Joomla Editor**, loads the Joomla Default editor and behave the same way ZOO Textarea does and **No Editor**, no editor will be loaded displaying a raw textarea. |
| **Enabled on Load** | Allows choosing if the **Tiny Editor** will be loaded initially or by demand. Recommended leave disabled for lower page load time. |
| **Input size** | The default textarea Height size. Not compatible with Joomla! Editors. |
| **Maximum Characters** | The maximum amount of characters allowed inputting. Only compatible with **No Editor**. |
| **Default Value** | Default field value when new Item is created. |

## Assignment

The Elements are set now but are not rendering at all, let's fix that. Assign the elements to the position of your choice following the [assign elements](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) guide. Once assigned there will be few other sets of fields requiring attention.

The Basic, Filter and Separator sets are ZOOlanders common [Assignment fields](/extensions/zoolanders/elements/fields#assignment). The Layout set displays the fields related to Texts layouts, which is the topic of the next page.
