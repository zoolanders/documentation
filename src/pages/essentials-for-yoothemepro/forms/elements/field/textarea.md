---
title: Textarea Field Element
preset: /assets/ytp/presets/FormArea-Textarea.json
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path fill="none" stroke-width="2" d="M2 3h26v24H2z"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.82" transform="matrix(1 0 0 .601 4.5982 4.24573)"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.27" transform="matrix(.7071 .7071 -.34192 .34192 26.0579 17.4075)"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.37" transform="matrix(.7071 .7071 -.17222 .17222 25.5588 20.7305)"/>
</svg>'
---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

A multi-line plain-text editing form control. {% .lead %}

The Textarea element displays a [\<textarea\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) HTML element, use it to allow users entering a sizeable amount of free-form text, for example a comment on a review or feedback form.

![Textarea Element](/assets/ytp/forms/textarea.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | A text to be shown when there is no input value yet. | &#x2713; |
| **Size** | The field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Rows** | The number of visible text lines by setting a value for `rows` attribute. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Min Length** | A content length that the input value must constrain to, `greater than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Max Length** | A content length that the input value must constrain to, `lower than` or `equal to`. | &#x2713; | &#x2713; | &#x2713; |
| **Pattern** | A [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Textarea Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}