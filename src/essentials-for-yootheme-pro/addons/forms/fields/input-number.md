---
title: Input Number
description: Number form control.
preset: /assets/ytp/presets/FormArea-InputNumber.json
child: true
---

<!--@include: ./_partials_/intro.md-->

Child of [Input Element](../input), the **Input Number Element** displays a [\<input type="number"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) HTML element, use it to create one-line fields restricted to numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by tapping with a fingertip.

![Input Number Element](./assets/input-number.webp)

## Settings

It inherits common settings and the parent's [Fields Settings](../input#fields-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | The text to be shown while there is no user input. | &#x2713; |

::: details Common Settings
<!--@include: ./_partials/common-settings.md-->
:::

## Validation

While the browser validation invalidates any entry that isn't a number, it inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

::: details Common Validation
<!--@include: ./_partials/common-validation.md-->
:::

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Number element as its child.
1. Access the child element settings and input a Control Name.
