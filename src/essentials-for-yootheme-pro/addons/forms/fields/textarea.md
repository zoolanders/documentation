---
title: Textarea
preset: /assets/ytp/presets/FormArea-Textarea.json
description: A multi-line plain-text editing form control
---

# {{ $frontmatter.title }} Field Element

{{ $frontmatter.description }}.

The **Textarea Element** displays a [\<textarea\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) HTML element, use it to allow users entering a sizeable amount of free-form text, for example, a comment on a review or feedback form.

![Textarea Element](./assets/textarea.webp)

## Settings

It inherits common settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | The text to be shown while there is no user input. | &#x2713; |
| **Size** | The field size applyied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width applyied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Rows** | The number of visible text lines by setting a value for `rows` attribute. |

::: details Common Settings
<!--@include: ./parts/common-settings.md-->
:::

## Validation

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
1. Add a Textarea Element from the Form Essentials group.
1. Access the element settings and input a Control Name.
