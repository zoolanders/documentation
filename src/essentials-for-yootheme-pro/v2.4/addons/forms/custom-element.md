---
description: Create a Custom Form Element
---

# Custom Form Element

Learn how to create a custom [Form Element](./elements).

Follow the steps below to create your first element. Notice that core form elements are a very useful resource to get started and can be found in the `modules/forms/elements` directory relative to the plugin folder.

::: warning Extending YOOtheme Pro
The following guide assumes you are already familiar with coding, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
:::

## 1. Create Element Structure

A Form Element is no different from a standard core element, with the exception of a few more options we are going to see in the next steps. For now, create a new custom element following the official guide on [how to create a custom element](https://yootheme.com/support/yootheme-pro/joomla/developers-elements).

## 2. Extend as Form Element

Once your custom element is ready, let's upgrade it in order to be properly recognized by the form.

Open the `element.json` file and prefix the name prop with `yooessentials_form_`, then add the `submittable` prop as `true` and basic `control_` fields, as illustrated.

```json
// myelement/element.json
{
  "@import": "./element.php",
  "name": "myelement", // [!code --]
  "name": "yooessentials_form_myelement", // [!code ++]
  "submittable": true, // [!code ++]
  ...
  "fields": {
    "control_id": "${yooessentials.form.fields.control_id}", // [!code ++]
    "control_name": "${yooessentials.form.fields.control_name}", // [!code ++]
    "control_label": "${yooessentials.form.fields.control_label}", // [!code ++]
    "control_required": "${yooessentials.form.fields.control_required}", // [!code ++]
    ...
  },
  "fieldset": {
    "default": {
      "type": "tabs",
      "fields": [
        {
          "title": "Content",
          "fields": [
              "control_id", // [!code ++]
              "control_name", // [!code ++]
              "control_label", // [!code ++]
              "control_required", // [!code ++]
              ...
          ]
        },
        ...
      ]
    }
  }
}
```

Even though not strictly necessary, it is good practice to wrap the element output with a form control, which will display and connect the label properly as well as adapt the output to the different form layouts.

```php
// myelement/templates/template.php
<?php
$el = $this->el('div');
$myfield = $this->el(...);
$control = $this['ye-form']->control( // [!code ++]
    $node->props['control_name'], // [!code ++]
    $node->props['control_label'], // [!code ++]
    $node->props['control_required'], // [!code ++]
    $node->props['id'] // [!code ++]
); // [!code ++]
?>

<?= $el($props, $attrs) ?>
    <?= $control() ?> // [!code ++]
        <?= $myfield(...) ?>
    <?= $control->end() ?> // [!code ++]
<?= $el->end() ?>
```
