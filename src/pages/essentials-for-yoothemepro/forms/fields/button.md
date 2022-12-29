---
title: Button Element
description: Interactive form controls
icon: '
  <path fill="none" stroke-width="2" d="M11,8l10.882,8.611l-2.902,1.681l3.209,5.965 l-3.98,2.146l-3.207-5.965l-2.9,1.681L11,8z" />
  <polyline fill="none" stroke-width="2" points="8,18 2,18 2,3 28,3 28,18 25,18 " />
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Button Element** displays a grid of [\<button\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) HTML elements with support for `submit` and `reset` types. Each type is wrapped into a child element with its specific features covered in the next sections.

---

## Settings

Control the size and grid for all children.

{% image %}
![Button Element](/assets/ytp/forms/fields/button-settings.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | The field size defined by `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Full Width** | Should the field occupy the full width of its parent. |
| **Column Gap** | The size of the gap between grid columns. |
| **Row Gap** | The size of the gap between grid rows. |

---

## Types

{% quick-links %}

{% quick-link title="Submit" href="button-submit" description="Submit form control." /%}
{% quick-link title="Reset" href="button-reset" description="Reset form control." /%}

{% /quick-links %}

---

## Integration

Please refer to one of the child elements' documentation for specific integration details.
