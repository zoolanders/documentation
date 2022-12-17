---
title: Input Text Field Element
preset: /assets/ytp/presets/FormArea-InputText.json
---

A one-line plain-text form control. {% .lead %}

Child of [Input Element](./input), the Input Text element displays a [\<input type="text"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) HTML element, use it to create one-line text fields.

![Input Text Element](/assets/ytp/forms/input-text.webp)

---

## Settings

Inherits [common settings](../fields#common-settings) and the parent's [Fields Settings](./input#fields-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min Length** | A content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max Length** | A content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Pattern** | A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; | &#x2713; | &#x2713; |

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Input Element from the Form Essentials group and a Text element as it child.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
