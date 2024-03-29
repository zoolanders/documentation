# Customizations

Customizing an element should be considered with caution, as future source updates could change the behavior and make our custom files deprecated. However, sometimes is the best solution.

---

## Override paths

The override paths allows you to place your custom files separated from the source, making sure they are not lost on future updates.

- `media/zoo/custom_elements/{element}`: global, it will apply the override always.
- `media/zoo/applications/{application}/elements/{element}`: App specific, it will apply the override only when the specified App is displayed.
- `media/zoo/applications/{application}/templates/{template}/elements/{element}`: App template specific,  it will apply the override only when the specified App is displayed using the specified Template.

---

## Custom Layouts

In most scenarios a simple new layout will provide that extra feature. This is the recommended way of extending the elements as you would be adding new functionalities without modifying any source code.

All elements will automatically recognize the custom layouts and offers them as an option during the layout configuration. Simply place them in the appropriate override path respecting their folder structure inside the element. For example if you were to create a `mylayout.php` layout for the ImagePro element the global override path would be `media/zoo/custom_elements/imagepro/tmpl/render/mylayout.php`. Some elements even support custom Edit Layouts, meaning you could set your own layout for the Edit or Submissions views.

{% callout %}
You can always copy the elements core layouts and use them as a starting point. They are located in the `media/zoolanders/elements/{element}` folder.
{% /callout %}
