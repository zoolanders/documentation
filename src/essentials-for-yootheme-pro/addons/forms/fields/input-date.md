---
title: Input Date
description: Date form control
preset: /assets/ytp/presets/FormArea-InputDate.json
child: true
---

<!--@include: ./parts/intro.md-->

Child of [Input Element](../input), the **Input Date Element** displays a [\<input type="date"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) HTML element, use it to create one-line date edit fields.

![Input Date Element](./assets/input-date.webp)

::: warning Styling Limitations
Date input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
:::

## Settings

It inherits common settings and the parent's [Fields Settings](../input#fields-settings):

::: details Common Settings
<!--@include: ./parts/common-settings.md-->
:::

## Validation

Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a date value. As we cannot entirely rely on the browser, a date format validation is performed on the server side.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum date that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum date that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

::: details Common Validation
<!--@include: ./parts/common-validation.md-->
:::

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Date element as its child.
1. Access the child element settings and input a Control Name.
