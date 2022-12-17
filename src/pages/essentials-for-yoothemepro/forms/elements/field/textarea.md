---
title: Textarea Field Element
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path fill="none" stroke-width="2" d="M2 3h26v24H2z"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.82" transform="matrix(1 0 0 .601 4.5982 4.24573)"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.27" transform="matrix(.7071 .7071 -.34192 .34192 26.0579 17.4075)"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.37" transform="matrix(.7071 .7071 -.17222 .17222 25.5588 20.7305)"/>
</svg>'

---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

A multi-line plain-text editing form control. {% .lead %}

The Textarea element displays a [\<textarea\> HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) element, use it to allow users entering a sizeable amount of free-form text, for example a comment on a review or feedback form.

![Textarea Element Display](/assets/ytp/forms/textarea.webp)

---

## Settings

It inherits [field common settings](../fields#common-settings) with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Placeholder** | Defines a text to be shown when there is no input value yet. | &#x2713; |
| **Size** | Defines the field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | Defines the field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Rows** | Defines the number of visible text lines by setting a value for `rows` attribute. |

| Validation | Description | Dynamic |
| ---------- | ----------- | :-----: |
| **Min length** | Defines a content length that the textarea value must constrain to, `greater than` or `equal to`. | &#x2713; |
| **Max length** | Defines a content length that the textarea value must constrain to, `lower than` or `equal to`. | &#x2713; |
| **Pattern** | Defines a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) pattern that the input value must match to. | &#x2713; |

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add in a Textarea Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

Alternatively, download and [load](https://yootheme.com/support/yootheme-pro/joomla/layout-library#download-and-upload-layouts) in the layout one of the following presets.

{% quick-links %}

{% quick-link title="Download Preset" href="/assets/ytp/presets/form-area-with-textarea.json" description="Download a preset of a Form Area with Textarea element." download="true" /%}
{% quick-link title="Advanced Presets" href="./forms" description="Explore Form Area presets with more advanced workflow." /%}

{% /quick-links %}
