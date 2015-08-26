---
title: Elements
taxonomy:
    category: docs
---

ZOOlanders component doesn't distribute any element, instead provides the basic elements class which extending the ZOO main elements provides a layer for advanced features.

>>>>> The main class elements are stored in `plugins/system/zlframework/zlframework/elements` while the end product elements are in `plugins/system/zoo_zlelements/zoo_zlelements/elements` folder.

## Extending the Elements

### Overrides

Technically is possible to override any element file, but overriding the core files is not recommended as future updates could change the behavior and the override files became deprecated. However, sometimes is the only way to accomplish specific project requirements and if kept to minimal is a perfectly valid solution. Besides, by overriding and not directly editing the core files we assure our changes would remain after future extension updates.

There are two paths for elements overriding, the global `media/zoo/custom_elements/{element}` where the elements will be override always. And the `media/zoo/applications/{application}/elements/{element}` where the override will apply only when the element is used by that specific App.

>>>>> If the `custom_elements` folder does not exist, create it manually.

### Custom Layouts

In most scenarios a simple new layout will provide that extra feature your project requires. This is the recommended way of extending the elements as you would be adding new files without modifying or overriding any core ones.

All our elements would automatically recognize the custom layouts and offers them as an option during the layouts configuration. Placing your custom layouts in the override folders, mentioned in the previous section, is the best practice keeping them that way separated from the core files.

For example if you were to create a custom layout for **Image Pro** element, the global override path would be `media/zoo/custom_elements/imagepro/tmpl/render/my-custom-layout.php`. Some elements even supports custom edit layouts, meaning you could set your own layout for the **Edit** or **Submissions** views!

>>>>> When creating or overriding sublayouts, remember to respect the path. E.g: `.../imagepro/tmpl/render/default/_sublayouts/my-custom-sublayout.php`.
