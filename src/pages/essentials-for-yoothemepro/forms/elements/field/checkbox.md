---
title: Checkbox Field Element
preset: /assets/ytp/presets/FormArea-Checkbox.json
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path fill="none" d="M12.9513025 22.912724h16.006949v2.6h-16.006949z"/>
  <path fill="none" stroke-width="1.78" d="M1.567 12.078h6.454v5.195H1.567z" transform="matrix(.89867 0 0 1.11653 .4461395 7.826924)"/>
  <path fill="none" d="M12.9513025 13.601274h16.006949v2.6h-16.006949z"/>
  <path fill="none" stroke-width="1.78" d="M1.567 12.078h6.454v5.195H1.567z" transform="matrix(.89867 0 0 1.11653 .4461395 -1.484526)"/>
  <g>
    <path fill="none" d="M12.9513025 4.501717h16.006949v2.6h-16.006949z"/>
    <path fill="none" stroke-width="1.78" d="M1.567 12.078h6.454v5.195H1.567z" transform="matrix(.89867 0 0 1.11653 .4461395 -10.584083)"/>
  </g>
</svg>'
---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

A checkbox group form control. {% .lead %}

The Checkbox element displays a group of [\<input type="checkbox"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) HTML elements wrapped in a `<label>`, use it to allow users choosing, by toggling boxes, a single or multiple prestablished options.

![Checkbox Element](/assets/ytp/forms/checkbox.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Layout** | Defines a layout for the options, `Vertical` or `Horizontal`. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | A minimum amount of options that must be chosen, `greater than` or `equal to`. | &#x2713; | | &#x2713; |
| **Max** | A maximum amount of options that can be chosen, `lower than` or `equal to`. | &#x2713; | | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Checkbox Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
