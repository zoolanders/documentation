---
description: Text, Email, Date, and other one-line editing form controls
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path stroke-width="2" d="M 6 11 V 19 Z"/>
'
---

# Input Field Element

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The **Input Element** displays a grid of [\<input\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types. Each type is wrapped into a child element with its specific features and validation covered in the next sections.

## Settings

Set multiple children of any type and control the display, grid, and settings of all of them within the parent with an option to override.

![Input Element](./assets/fields/input.webp)

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Should the label be displayed for all children. |
| **Show Icon** | Should the icon be displayed for all children. |

![Input Common Settings](./assets/fields/input-commons.webp)

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size defined by `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width defined by `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Full Width** | Should the field occupy the full width of its parent. |
| **Icon** | The name of the Icon that will be displayed inside the field. |
| **Icon Alignment** | The side of the field where the icon will be aligned, `Left` or `Right`. |

![Input Columns Settings](./assets/fields/input-grid.webp)

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | The amount of grid columns. |
| **Column Gap** | The size of the gap between grid columns. |
| **Row Gap** | The size of the gap between grid rows. |

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

## Integration

Please refer to one of the child elements' documentation for specific integration details.
