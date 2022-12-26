---
title: Hidden Element
description: A hidden form control
preset: /assets/ytp/presets/FormArea-Hidden.json
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Hidden Element** displays a [\<input type="hidden"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden) HTML element, use it to include data that cannot be seen or modified by users when a form is submitted.

---

## Settings

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Control** | The name that identifies the field control within the form. It's required and must be unique for the Form Area. |
| **Value** | The value that will be submitted for the control. | &#x2713; |

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Hidden Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
