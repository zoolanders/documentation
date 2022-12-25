---
title: Hidden Element
description: A hidden form control
preset: /assets/ytp/presets/FormArea-Hidden.json
icon: '
  <path fill="none" stroke-width="2" d="M28.952 6.951H1.048v16.098h27.904z"/>
  <path stroke="none" d="m16.314 18.01.955-.257-.389-1.453a5.44 5.44 0 0 0 1.6-.926l1.065 1.066.7-.7-1.065-1.065a5.418 5.418 0 0 0 1.172-2.507l-.973-.177a4.452 4.452 0 0 1-8.758 0l-.973.177c.167.923.57 1.787 1.172 2.507L9.755 15.74l.7.7 1.064-1.066c.477.398 1.019.711 1.601.926l-.39 1.454.956.255.39-1.453a5.477 5.477 0 0 0 1.849 0l.39 1.453Z"/>
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
