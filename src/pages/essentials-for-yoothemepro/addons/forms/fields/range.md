---
title: Range Field Element
description: A number range form control
preset: /next/assets/ytp/presets/FormArea-Range.json
icon: '
  <path stroke-width="2" d="M28 3H2h26z" transform="matrix(1.07712 0 0 1 -1.16509 12)"/>
  <ellipse stroke="none" cx="4.553" cy="24.48" rx="1.019" ry="1.054" transform="matrix(4.6174 0 0 4.42474 -6.02189 -93.31628)"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Range Element** displays a [\<input type="range"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) HTML element, use it to allow users to enter a numeric value in a specified range which precise value, however, is not considered important.

![Range Element](/next/assets/ytp/forms/fields/range.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Step** | The multiple of which the input value must constrain to. | &#x2713; | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and create a Form Area.
1. Add a Range Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
