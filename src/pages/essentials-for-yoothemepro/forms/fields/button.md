---
title: Button Field Element
description: Submit and Reset Buttons
icon: '
  <path fill="none" stroke-width="2" d="M11,8l10.882,8.611l-2.902,1.681l3.209,5.965 l-3.98,2.146l-3.207-5.965l-2.9,1.681L11,8z" />
  <polyline fill="none" stroke-width="2" points="8,18 2,18 2,3 28,3 28,18 25,18 " />
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Button Element** displays a grid of [\<button\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) HTML elements with support for `butotn` and `reset` types. Each type is wrapped into a child element with it specific features and validation covered in the next sections.

---

## Settings

Set multiple children of any type and control the display, grid and settings of all of them within the parent with option to override.

{% image %}
![Button Element](/assets/ytp/forms/fields/button.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Defines the label visibility of all fields. |
| **Show Icon** | Defines the icon visibility of all fields. |

{% image %}
![Button Common Settings](/assets/ytp/forms/fields/button-commons.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | Defines the field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | Defines the field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Full Width** | Defines if the field will occupy the full width of its parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `Left` or `Right`. |

{% image %}
![Button Columns Settings](/assets/ytp/forms/fields/button-grid.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | Defines the amount of columns. |
| **Column Gap** | Defines the size of the gap between grid columns. |
| **Row Gap** | Defines the size of the gap between grid rows. |

---

## Types

{% quick-links %}

{% quick-link title="Text" href="button-text" description="Plain-text form control." /%}
{% quick-link title="Number" href="button-number" description="Number form control." /%}
{% quick-link title="Password" href="button-password" description="Password form control." /%}
{% quick-link title="Email" href="button-email" description="Email form control." /%}
{% quick-link title="Url" href="button-url" description="URL form control." /%}
{% quick-link title="Tel" href="button-tel" description="Telephone form control." /%}
{% quick-link title="Date" href="button-date" description="Date form control." /%}
{% quick-link title="Time" href="button-time" description="Time form control." /%}
{% quick-link title="Month" href="button-month" description="Month form control." /%}
{% quick-link title="Week" href="button-week" description="Week form control." /%}

{% /quick-links %}

---

## Integration

Please refer to one of the child elements documentation for specific integration details.
