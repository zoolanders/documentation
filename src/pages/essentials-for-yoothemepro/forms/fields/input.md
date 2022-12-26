---
title: Input Field Element
description: Text, Email, Date and other one-line editing form controls
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path stroke-width="2" d="M 6 11 V 19 Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Input Element** displays a grid of [\<input\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types. Each type is wrapped into a child element with it specific features and validation covered in the next sections.

---

## Settings

Set multiple children of any type and control the display, grid and settings of all of them within the parent with option to override.

{% image %}
![Input Element](/assets/ytp/forms/fields/input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Defines the label visibility of all fields. |
| **Show Icon** | Defines the icon visibility of all fields. |

{% image %}
![Input Common Settings](/assets/ytp/forms/fields/input-commons.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | Defines the field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | Defines the field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Full Width** | Defines if the field will occupy the full width of its parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `Left` or `Right`. |

{% image %}
![Input Columns Settings](/assets/ytp/forms/fields/input-grid.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | Defines the amount of columns. |
| **Column Gap** | Defines the size of the gap between grid columns. |
| **Row Gap** | Defines the size of the gap between grid rows. |

---

## Types

{% quick-links %}

{% quick-link title="Text" href="input-text" description="Plain-text form control." /%}
{% quick-link title="Number" href="input-number" description="Number form control." /%}
{% quick-link title="Password" href="input-password" description="Password form control." /%}
{% quick-link title="Email" href="input-email" description="Email form control." /%}
{% quick-link title="Url" href="input-url" description="URL form control." /%}
{% quick-link title="Tel" href="input-tel" description="Telephone form control." /%}
{% quick-link title="Date" href="input-date" description="Date form control." /%}
{% quick-link title="Time" href="input-time" description="Time form control." /%}
{% quick-link title="Month" href="input-month" description="Month form control." /%}
{% quick-link title="Week" href="input-week" description="Week form control." /%}

{% /quick-links %}

---

## Integration

Please refer to one of the child elements documentation for specific integration details.
