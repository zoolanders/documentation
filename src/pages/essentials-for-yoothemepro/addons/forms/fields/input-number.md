---
title: Input Number Field Element
preset: /next/assets/ytp/presets/FormArea-InputNumber.json
---

A numerical form control. {% .lead %}

Child of [Input Element](../input), the **Input Number Element** displays a [\<input type="number"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) HTML element, use it to create one-line fields restricted to numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by tapping with a fingertip.

![Input Number Element](/next/assets/ytp/forms/fields/input-number.webp)

---

## Settings

It inherits common settings and the parent's [Fields Settings](./input#fields-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | The text to be shown while there is no user input. | &#x2713; |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

While the browser validation invalidates any entry that isn't a number, it inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | The minimum amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | The maximum amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Input Element from the Form Essentials group and an Input Number element as its child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}