---
title: Input Month Field Element
preset: /assets/ytp/presets/FormArea-InputMonth.json
---

A month form control. {% .lead %}

Child of [Input Element](../input), the **Input Month Element** displays a [\<input type="month"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month) HTML element, use it to create one-line month edit fields.

![Input Month Element](/assets/ytp/forms/fields/input-month.webp)

{% callout type="warning" title="Styling Limitations" %}
Month input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
{% /callout %}

---

## Settings

It inherits common settings and the parent's [Fields Settings](../input#fields-settings):

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a date value.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum month that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum month that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Month element as its child.
1. Access the child element settings and input a Control Name.

