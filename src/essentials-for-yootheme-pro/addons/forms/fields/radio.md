---
title: Radio
description: A single-option radio form control
preset: /assets/ytp/presets/FormArea-Radio.json
---

# {{ $frontmatter.title }} Field Element

{{ $frontmatter.description }}.

The **Radio Element** displays a group of [\<input type="radio"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) HTML elements wrapped in a `<label>`, use it to allow users choosing a single option from a pre-established group.

![Radio Element](./assets/radio.webp)

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Layout** | The layout that will be used to display the options, `Vertical` or `Horizontal`. |

::: details Common Settings
<!--@include: ./parts/common-settings.md-->
:::

## Options

Options are specified as child items that can be input manually as well as dynamically with the use of a Dynamic Content source. Each option has the following settings:

![Field Options](./assets/options.webp)

| Setting | Description |
| ------- | ----------- |
| **Value** | The option value, must be unique among its siblings. | &#x2713; |
| **Text** | The option text, defaults to the value if omitted. HTML tags are supported. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |
| **Id** | The option ID attribute, it overrides any ID set in the parent element. | &#x2713; |

## Validation

<!--@include: ./parts/common-validation.md-->

## Integration

1. Access a Builder layout and create a Form Area.
1. Add a Radio Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

