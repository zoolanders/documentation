---
title: Button Reset Element
preset: /assets/ytp/presets/FormArea-Buttons.json
---

An interactive form reset control. {% .lead %}

Child of [Button Element](./button), the **Button Reset Element** displays a [\<button type="reset"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/reset) HTML element, use it to display a button that will reset the form.

![Button Reset Element](/assets/ytp/forms/fields/button-reset.webp)

---

## Settings

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Content** | The text for the button. | &#x2713; |
| **Style** | The button style as `Default`, `Primary`, `Secondary`, `Danger`, `Text`, `Link`, `Link Muted`, or `Link Text`. |
| **Icon** | The name of the Icon that will be displayed inside the button. | &#x2713; |
| **Icon Alignment** | The side of the button where the icon will be positioned, `Left` or `Right`. |

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Button Element from the Form Essentials group and a Button Reset element as its child.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
