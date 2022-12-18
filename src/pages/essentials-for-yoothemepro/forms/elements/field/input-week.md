---
title: Input Week Field Element
preset: /assets/ytp/presets/FormArea-InputWeek.json
---

A week form control. {% .lead %}

Child of [Input Element](./input), the Input Week element displays a [\<input type="week"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week) HTML element, use it to create one-line week edit fields.

![Input Week Element](/assets/ytp/forms/input-week.webp)

{% callout type="warning" title="Styling Limitations" %}
Week input relies on the browser's native implementation, the picker and icon style is inconsistent and it customization is not possible.
{% /callout %}

---

## Settings

It inherits common settings and the parent's [Fields Settings](./input#fields-settings):

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a date value.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | A week that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | A week that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Input Element from the Form Essentials group and a Input Week element as it child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}