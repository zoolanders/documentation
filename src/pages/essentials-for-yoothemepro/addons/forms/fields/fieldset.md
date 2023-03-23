---
title: Fieldset Element
preset: /assets/ytp/presets/FormArea-Fieldset.json
description: A control grouping
icon: '
  <path fill="none" stroke-width="2" d="M1 4h28v22H1z"/>
  <path stroke-width="2" d="M5 17h19zM5 13h19zM5 9h10z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Fieldset Element** displays a [\<fieldset\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Fieldset) HTML element, use it to group fields for visual and accessibility purposes.

---

## Settings

| Setting | Description |
| ------- | ----------- |
| **Content** | The text for the button. |
| **Layout** | The layout for the fields display, `Horizontal` or `Stacked`. |
| **Show Label** | Should the label of the field be displayed. |

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Fieldset Element from the Form Essentials group and add a field as a child element.
1. Access the child element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
