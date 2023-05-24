---
title: Checkbox Field Element
description: A multi-option checkbox form control
preset: /assets/ytp/presets/FormArea-Checkbox.json
icon: '
  <path stroke-width="2" fill="none" d="M1.567 12.078h6.454v5.195H1.567z" transform="matrix(.89867 0 0 1.11653 .4461395 -10.584083)"/>
  <path stroke-width="2" fill="none" d="M1.567 12.078h6.454v5.195H1.567z" transform="matrix(.89867 0 0 1.11653 .4461395 -1.484526)"/>
  <path stroke-width="2" fill="none" d="M1.567 12.078h6.454v5.195H1.567z" transform="matrix(.89867 0 0 1.11653 .4461395 7.826924)"/>
  <path stroke="none" d="M12.9513025 4.501717h16.006949v2.6h-16.006949z"/>
  <path stroke="none" d="M12.9513025 13.601274h16.006949v2.6h-16.006949z"/>
  <path stroke="none" d="M12.9513025 22.912724h16.006949v2.6h-16.006949z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Checkbox Element** displays a group of [\<input type="checkbox"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) HTML elements wrapped in a `<label>`, use it to allow users choosing, by toggling boxes, a single or multiple pre-established options.

![Checkbox Element](/assets/ytp/forms/fields/checkbox.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Layout** | The layout that will be used to display the options, `Vertical` or `Horizontal`. |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Options

Options are specified as child items that can be input manually as well as dynamically with the use of a Dynamic Content source. Each option has the following settings:

{% image %}
![Field Options](/assets/ytp/forms/fields/options.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Value** | The option value, must be a unique among its siblings. | &#x2713; |
| **Text** | The option text, defaults to the value if omitted. HTML tags are supported. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |
| **Id** | The option ID attribute, overrides any ID set in the parent element. | &#x2713; |

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount of options that must be chosen, `greater than` or `equal to`. | &#x2713; | | &#x2713; |
| **Max** | The maximum amount of options that can be chosen, `lower than` or `equal to`. | &#x2713; | | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and create a Form Area.
1. Add a Checkbox Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
