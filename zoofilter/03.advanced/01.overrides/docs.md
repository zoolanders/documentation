---
title: Overrides
taxonomy:
    category: docs
---

Overrides are powerful for adjusting the look and feel of your store without altering the system source files. And it's straight forward by just placing the customized layout file in the appropriate override folder. Being the source layouts stored in `plugins/system/zoofilter/zoofilter/layouts` folder, those are the override paths for them.

| Layouts | Override paths |
| :---------- | :---------- |
| **Search main layout** | /plugins/system/zoofilter/zoofilter/layouts/search.php
| **Search Uikit main layout** | /plugins/system/zoofilter/zoofilter/layouts/search_uikit.php
| **Items layout**  | /plugins/system/zoofilter/zoofilter/layouts/_items.zoofilter.php
| **Items Uikit layout**  | /plugins/system/zoofilter/zoofilter/layouts/_items.zoofilter.uikit.php
| **Item layout**  | /plugins/system/zoofilter/zoofilter/layouts/_item.zoofilter.php

Layout overrides are literally overriding another file and thats why is crucial, in order them to work, to respect the path and layout name. Let's take as example the Item Result view, in order to override it assuming you are using the blog application and default template, the edited `_item.zoofilter.php` override path would be `/media/zoo/applications/blog/templates/default/_item.zoofilter.php`.
