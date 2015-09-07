---
title: Separator element
taxonomy:
    category: docs
---

## Separator Element

The Separator Element will allow you to separate your Admin Elements into sections for better organization and management. It has a folding feature that will make it much easier to reach and edit any element. It's the perfect solution to long entry forms.

**Note**: the element will be displayed only in the Item backend Edit form. It is not compatible with submission nor any other frontend view.

### Adding the Element to your Edit form

To add the **Separator** to your Edit form just add it to your Type as you would with any other element, it is grouped under **ZOOlanders Extensions**. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

The Separator element will group all of the elements from where it is positioned until the next Separator element, or the last element on the form, whichever comes first. If you wish to have some elements not be included in a Separator, be sure to place those before the first Separator element in your list of elements.

### Layouts

There are two Layouts, **Section** and **Subsection**, each of them with it's own features.

#### Section

Provides you with a foldable (collapsible) section where the following elements will be wrapped. It has several options:

| Field       | Description |
| :---------- | :---------- |
| **Title** | allows to set the title of the section.
| **Fold feature** | allows to set the title of the section. The option has the next three states: <br> **Disabled** - This state turns off the folding functionality of the section so the entire contents of the section are always visible. <br> **Start unfolded** - This state turns on the folding, however, the contents of this section are initially displayed. Clicking on the section head in a form will fold the section. <br> **Start folded** - This state turns on the folding, however, the contents of this section are initially hidden. Clicking on the section head in a form will unfold the section.


#### Subsection

Inserts a visible dividing line with the title of the separator appearing along the right side. It has one setting:

| Field       | Description |
| :---------- | :---------- |
| **Title** | allows to set the title of the section.
