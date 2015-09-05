---
title: Customizations
taxonomy:
    category: docs
---

## Custom Render Layouts

The default render layouts are sometimes not enough, luckily is possible creating custom ones following the [ZOOitem](http://yootheme.com/zoo/documentation/developers/create-a-new-zoo-module-layout) guide. Notice that the guide references the **mod_zooitem** module, but the same practice can be done with the pro version, just change the paths to **mod_zooitempro**.

>>>>> ZOOitemPro will overwrite no content from the `renderer` folder during updates.

## Custom Layouts

Creating custom layouts with **ZOOitemPro** is very easy, just duplicating the **Default** layout file and folder. After you can start adapting the layout as you needed and even adapt its params editing the params.php file.

## Custom Elements support

In order to filter by custom elements, those must have specified the ZL Filter group **Category**, **Date**, **Input**, **Option** or **Rating** in the manifest declaration. In order to do so:

1. Open the custom element **XML** manifest file and localize the `<element>` tag.
2. Add the `zl_filter_group` attribute with the appropriate category value.

The resultant tag should look like `<element type="{type}" zl_filter_group="{group}">`.
