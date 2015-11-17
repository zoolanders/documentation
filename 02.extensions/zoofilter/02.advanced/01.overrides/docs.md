---
title: Overrides
taxonomy:
    category: docs
---

Overrides are powerful for adjusting the look and feel of your site without altering the system source files. And it's straight forward by just placing the customized layout file in the appropriate override folder. Being the source layouts stored in `plugins/system/zoofilter/zoofilter/layouts` folder its possible overriding them in the `/media/zoo/applications/{application}/templates/{template}/{layout}` path.

Layout overrides are literally overriding another file and thats why is crucial, in order them to work, to respect the path and layout name. Let's take as example the **Item Result** view, in order to override it assuming you are using the **Products** application and **Default** template, the edited `_item.zoofilter.php` override path would be `/media/zoo/applications/products/templates/default/_item.zoofilter.php`.
