---
title: Range Field Element
preset: /assets/ytp/presets/FormArea-Range.json
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path d="M28 3H2h26z" fill="none" stroke-width="2" transform="matrix(1.07712 0 0 1 -1.16509 12)"/>
  <ellipse cx="4.553" cy="24.48" rx=".719" ry=".754" fill="#fff" stroke-width=".4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" transform="matrix(4.6174 0 0 4.42474 -6.02189 -93.31628)"/>
</svg>'
---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

A range number form control. {% .lead %}

The Range element displays a [\<input type="range"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) HTML element, use it to allow users enter a numeric value in a specified range which precise value, however, is not considered important.

![Range Element](/assets/ytp/forms/fields/range.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size applied with `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width applied with `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |

{% details summary="Common Settings" %}
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

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Range Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
