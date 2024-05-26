---
title: Input Url
description: Url form control.
preset: /assets/ytp/presets/FormArea-InputUrl.json
child: true
---

<!--@include: ./parts/intro.md-->

Child of [Input Element](../input), the **Input Url Element** displays a [\<input type="url"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url) HTML element, use it to create one-line url edit fields.

![Input Url Element](./assets/input-url.webp)

## Settings

It inherits common settings and the parent's [Fields Settings](../input#fields-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | The text to be shown while there is no user input. | &#x2713; |

::: details Common Settings
<!--@include: ./parts/common-settings.md-->
:::

## Validation

Browser-side validation ensures that only text that matches the standard format for URLs is entered. If you need the URL to be restricted further you can set a regular expression pattern.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min Length** | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max Length** | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Pattern** | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; | &#x2713; | &#x2713; |

::: details Common Validation
<!--@include: ./parts/common-validation.md-->
:::

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Url element as its child.
1. Access the child element settings and input a Control Name.
