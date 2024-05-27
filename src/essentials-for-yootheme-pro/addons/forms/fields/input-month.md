---
title: Input Month
description: Month form control.
preset: /assets/ytp/presets/FormArea-InputMonth.json
child: true
---

<!--@include: ./_partials_/intro.md-->

Child of [Input Element](../input), the **Input Month Element** displays a [\<input type="month"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month) HTML element, use it to create one-line month edit fields.

![Input Month Element](./assets/input-month.webp)

::: warning Styling Limitations
Month input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
:::

## Settings

It inherits common settings and the parent's [Fields Settings](../input#fields-settings):

::: details Common Settings
<!--@include: ./_partials/common-settings.md-->
:::

## Validation

Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a date value.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum month that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum month that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

::: details Common Validation
<!--@include: ./_partials/common-validation.md-->
:::

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Month element as its child.
1. Access the child element settings and input a Control Name.
