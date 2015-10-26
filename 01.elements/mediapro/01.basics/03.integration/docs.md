---
title: Integration
taxonomy:
    category: docs
---

MediaPro is a standard ZOO element, you can follow the [extending type](http://yootheme.com/zoo/documentation/advanced/extend-pre-build-types) guide to integrate the element into your existent Apps. Once the element is set in the Type there are several configuration params that do differ from the ZOO ones, lets see what is all that about.

The Basic and Files sets are ZOOlanders common [Configuration fields](/extensions/zoolanders/elements/fields#configuration). The Specific set are MediaPro related fields.

| Field       | Description |
| :---------- | :---------- |
| **Player** | Select the Player which will be used for rendering the media. Currently supported [jPlayer](http://www.jplayer.org/), [JWPlayer](http://www.jwplayer.com/) and [MediaElement](http://www.mediaelementjs.com/). |

Additionally MediaPro supports custom Edit layouts within the **Edit Layouts** set of fields. More information about custom layouts can be found on [customization guide](/elements/mediapro/advanced/customizations#custom-layouts).

>>>>> The Players source files are stored in elements `plugins/system/zoo_zlelements/zoo_zlelements/assets/players` folder.

## Assignment

The Element is set now but is not rendering at all, let's fix that. Assign the element to the position of your choice following the [assign elements](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) guide. Once assigned there will be few other sets of fields requiring attention.

The Basic and Separator sets are ZOOlanders common [Assignment fields](/extensions/zoolanders/elements/fields#assignment). The Layout set displays the fields related to ImagePro layouts, which is the topic of the next page.
