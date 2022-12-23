---
title: Email Action
description: Sends a single email with dynamic template and configuration
icon: '
    <path d="M27 5.087 9.107 18.338l.04 6.575 3.868-4.295 6.31 3.664L27 5.087 3 14.756l6.107 3.582" fill="none" fill-rule="nonzero" stroke-width="2.03557"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Checkbox element displays a group of [\<input type="checkbox"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) HTML elements wrapped in a `<label>`, use it to allow users choosing, by toggling boxes, a single or multiple prestablished options.

![Checkbox Element](/assets/ytp/forms/fields/checkbox.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Layout** | The layout that will be used to display the options, `Vertical` or `Horizontal`. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Options

Options are specified as child items that can be inputed manually as well as dynamically with the use of a Dynamic Content source. Each option has the following settings:

{% image %}
![Field Options](/assets/ytp/forms/fields/fields/options.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Value** | The option value, must be a unique among its siblings. | &#x2713; |
| **Text** | The option text, defaults to the value if omitted. HTML tags are supported. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |
| **Id** | The option ID attribute, it overrides any ID set in the parent element. | &#x2713; |

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount of options that must be chosen, `greater than` or `equal to`. | &#x2713; | | &#x2713; |
| **Max** | The maximum amount of options that can be chosen, `lower than` or `equal to`. | &#x2713; | | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Checkbox Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
