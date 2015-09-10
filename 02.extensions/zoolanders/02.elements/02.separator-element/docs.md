---
title: Separator Element
taxonomy:
    category: docs
---

The Separator element allows visually separating the elements into sections for better organization and management. It has a folding feature that will make it much easier to reach and edit any group of elements.

>>> The element will be displayed only in the Item backend Edit form. It is not compatible with submission nor any other frontend view.

## Setting the Element

Following the [ZOO guide](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types) add the **Separator** element, from the **ZOOlanders Extensions** group, to your Type creating as many instances as you require in order to group the rest of the elements. The element will wrap all the elements from where it is positioned until the next Separator element or the last element on the Type.

>>>>> If you wish to have some elements not grouped by the separator, be sure to place those before the first **Separator** element instance.

### Section Layout

Provides a foldable section where the following elements will be wrapped.

| Field       | Description |
| :---------- | :---------- |
| **Title** | The title of the section. |
| **Fold Feature** | The folding state allowing to **Disable**, **Start folded** allowing to unfold manually while editing or the other way around **Start unfolded**. |

### Subsection Layout

Inserts a visible dividing line with the title of the separator appearing along the right side.

| Field       | Description |
| :---------- | :---------- |
| **Title** | The title of the section. |
