---
title: Input Number Field Element
preset: /assets/ytp/presets/FormArea-InputNumber.json
---

A numerical form control. {% .lead %}

Child of [Input Element](./input), the Input Number element displays a [\<input type="number"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number) HTML element, use it to create one-line fields restricted to numerical entries. The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or by tapping with a fingertip.

![Input Number Element](/assets/ytp/forms/input-number.webp)

---

## Settings

It inherits common settings and the parent's [Fields Settings](./input#fields-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | A text to be shown when there is no input value yet. | &#x2713; |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

While the browser validation invalidate any entry that isn't a number, it It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min** | An amount that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max** | An amount that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Input Element from the Form Essentials group and a Input Number element as it child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
