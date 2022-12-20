---
title: Input Field Element
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.82" transform="matrix(1 0 0 .601 4.5982 8.74573)"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

The Input element displays a grid of [\<input\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types. Each type is wrapped into a child element with it specific features and validation covered in the next sections.

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

## Integration

Please refer to one of the child elements documentation for specific integration details.
