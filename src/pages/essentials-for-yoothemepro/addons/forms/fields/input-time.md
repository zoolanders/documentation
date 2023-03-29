---
title: Input Time Field Element
preset: /next/assets/ytp/presets/FormArea-InputTime.json
---

A time form control. {% .lead %}

Child of [Input Element](./input), the **Input Time Element** displays a [\<input type="time"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time) HTML element, use it to create one-line time edit fields.

![Input Time Element](/next/assets/ytp/forms/fields/input-time.webp)

{% callout type="warning" title="Styling Limitations" %}
Time input relies on the browser's native implementation, the picker and icon style is inconsistent and its customization is not possible.
{% /callout %}

---

## Settings

It inherits common settings and the parent's [Fields Settings](./input#fields-settings):

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

Browser does not apply any validation other than the user agent's interface, when supported, restricting the input to a time value. As we cannot entirely rely on the browser, a time format validation is performed on the server side.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum time that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum time that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Time element as its child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
