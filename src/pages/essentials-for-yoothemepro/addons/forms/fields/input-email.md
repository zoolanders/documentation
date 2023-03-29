---
title: Input Email Field Element
preset: /next/assets/ytp/presets/FormArea-InputEmail.json
---

A one-line email form control. {% .lead %}

Child of [Input Element](../input), the **Input Email Element** displays a [\<input type="email"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email) HTML element, use it to create one-line e-mail address edit fields.

![Input Email Element](/next/assets/ytp/forms/fields/input-email.webp)

---

## Settings

It inherits common settings and the parent's [Fields Settings](./input#fields-settings) and the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | The text to be shown while there is no user input. | &#x2713; |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

Browser-side validation ensures that only text that matches the standard format for Internet e-mail addresses is entered. If you need the URL to be restricted further you can set a regular expression pattern.

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min Length** | The minimum content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; |
| **Max Length** | The maximum content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; |
| **Pattern** | The [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; | &#x2713; | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Email element as its child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
