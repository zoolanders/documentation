---
title: Range
description: A number range form control
preset: /assets/ytp/presets/FormArea-Range.json
---

# {{ $frontmatter.title }} Field Element

{{ $frontmatter.description }}.

The **Range Element** displays a [\<input type="range"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) HTML element, use it to allow users to enter a numeric value in a specified range which precise value, however, is not considered important.

![Range Element](./assets/range.webp)

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |

::: details Common Settings
<!--@include: ./_partials/common-settings.md-->
:::

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Step** | The multiple of which the input value must constrain to. | &#x2713; | &#x2713; |

::: details Common Validation
<!--@include: ./_partials/common-validation.md-->
:::

## Integration

1. Access a Builder layout and create a Form Area.
1. Add a Range Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

