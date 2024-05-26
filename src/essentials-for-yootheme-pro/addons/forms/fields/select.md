---
title: Select
description: A multi-option one-line form control
preset: /assets/ytp/presets/FormArea-Select.json
---

# {{ $frontmatter.title }} Field Element

{{ $frontmatter.description }}.

The **Select Element** displays a [\<select\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) HTML element, use it to allow users to choose, by selection, a single or multiple pre-established options.

![Select Element](./assets/select.webp)

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Height** | The number of rows in the list that will be visible by default, if Multiple Selection is enabled. |
| **Multiple Selection** | Should it be allowed to choose more than one option. |

::: details Common Settings
<!--@include: ./parts/common-settings.md-->
:::

## Options

Options are specified as child items that can be input manually as well as dynamically with the use of a Dynamic Content source. Each option has the following settings:

![Field Options](./assets/options.webp)

| Setting | Description |
| ------- | ----------- |
| **Value** | The option value, must be unique among its siblings. | &#x2713; |
| **Text** | The option text, defaults to the value if omitted. HTML tags will be stripped. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount of options that must be chosen, `greater than` or `equal to`. | &#x2713; | | &#x2713; |
| **Max** | The maximum amount of options that can be chosen, `lower than` or `equal to`. | &#x2713; | | &#x2713; |

::: details Common Validation
<!--@include: ./parts/common-validation.md-->
:::

## Integration

1. Access a Builder layout and create a Form Area.
1. Add a Select Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

