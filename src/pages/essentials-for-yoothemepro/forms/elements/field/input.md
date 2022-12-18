---
title: Input Field Element
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path d="M2 4.307V18 4.307z" fill="none" stroke-width="1.82" transform="matrix(1 0 0 .601 4.5982 8.74573)"/>
</svg>'
---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

The Input element displays a grid of [\<input\> HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types.

---

## Settings

{% image width="sm" caption="Set multiple children and control the display of all of them within the parent." %}
![Input Element](/assets/ytp/forms/input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Defines the label visibility of all fields. |
| **Show Icon** | Defines the icon visibility of all fields. |

{% image className="max-w-sm" caption="Customize the grid columns and row gap."%}
![Input Columns Settings](/assets/ytp/forms/input-grid.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | Defines the amount of columns. |
| **Column Gap** | Defines the size of the gap between grid columns. |
| **Row Gap** | Defines the size of the gap between grid rows. |

## Fields Settings

The following settings control all children with an option to override in the child settings.

{% image width="sm" %}
![Input Common Settings](/assets/ytp/forms/input-commons.webp)
{% /image %}

| Setting | Description |
| ------ | ----------- |
| **Size** | Defines the field size by applying a `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | Defines the field width by applying a `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Full Width** | Defines if the field will occupy the full width of its parent. |
| **Icon** | Defines the name of the Icon that will be displayed inside the field. |
| **Icon Position** | Defines the side of the field where the icon will be positioned, `Left` or `Right`. |