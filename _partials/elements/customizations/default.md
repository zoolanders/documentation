## Overrides

Technically is possible to override any element file, but overriding the core files is not recommended as future updates could change the behavior and the override files became deprecated. However, sometimes is the only way to accomplish specific project requirements and if kept to minimal is a perfectly valid solution. Besides, by overriding and not directly editing the core files we assure our changes would remain after future extension updates.

There are several paths for elements overriding, the global `media/zoo/custom_elements/%1$s` where the elements will be overridden always, the `media/zoo/applications/{application}/elements/%1$s` where the override will apply only when the element is used by that specific App, and the `media/zoo/applications/{application}/templates/{template}/elements/%1$s` one which will apply only for the specified App Template.

>>>>> If the `custom_elements` folder does not exist, create it manually.

## Custom Layouts

In most scenarios a simple new layout will provide that extra feature your project requires. This is the recommended way of extending the elements as you would be adding new files without modifying or overriding any core ones.

All elements would automatically recognize the custom layouts and offers them as an option during the layouts configuration. Placing your custom layouts in the override folders, mentioned in the previous section, is the best practice keeping them that way separated from the core files.

For example if you were to create a **myCustom.php** layout the global override path would be `media/zoo/custom_elements/%1$s/tmpl/render/myCustom.php`. Some elements even supports custom edit layouts, meaning you could set your own layout for the **Edit** or **Submissions** views! When creating or overriding sublayouts, if any, remember to respect the path. E.g: `.../%1$s/tmpl/render/default/_sublayouts/myCustom.php`.

>>>>> You can always copy the elements core layouts and use them as a starting point. They are located in the `plugins/system/zoo_zlelements/elements/%1$s` folder.
