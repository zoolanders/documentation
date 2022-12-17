---
title: Radio Field Element
preset: /assets/ytp/presets/FormArea-Radio.json
icon: '<svg width="150" height="150" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path d="M12.9676129 22.748886h16.006949v2.6h-16.006949z"/>
  <path d="M27.371 7.148c0 1.906-1.588 3.489-3.646 3.489-1.906 0-3.648-1.583-3.648-3.489 0-1.901 1.588-3.647 3.648-3.647 1.902 0 3.646 1.589 3.646 3.647z" fill="none" stroke-width="1.8" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" transform="matrix(.86372 0 0 .88357 -15.5612161 17.802899)"/>
  <g>
    <path d="M12.96761285 13.710194h16.006949v2.6h-16.006949z"/>
    <path d="M27.371 7.148c0 1.906-1.588 3.489-3.646 3.489-1.906 0-3.648-1.583-3.648-3.489 0-1.901 1.588-3.647 3.648-3.647 1.902 0 3.646 1.589 3.646 3.647z" fill="none" stroke-width="1.8" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" transform="matrix(.86372 0 0 .88357 -15.56121615 8.764207)"/>
  </g>
  <g>
    <path d="M12.96761285 4.671507h16.006949v2.6h-16.006949z"/>
    <path d="M27.371 7.148c0 1.906-1.588 3.489-3.646 3.489-1.906 0-3.648-1.583-3.648-3.489 0-1.901 1.588-3.647 3.648-3.647 1.902 0 3.646 1.589 3.646 3.647z" fill="none" stroke-width="1.8" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" transform="matrix(.86372 0 0 .88357 -15.56121615 -.27448)"/>
  </g>
</svg>'
---

{% elementIcon icon=$markdoc.frontmatter.icon /%}

A radio group form control. {% .lead %}

The Radio element displays a group of [\<input type="radio"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) HTML elements wrapped in a `<label>`, use it to allow users choosing a single option from a prestablished group.

![Radio Element](/assets/ytp/forms/radio.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Layout** | Defines a layout for the options, `Vertical` or `Horizontal`. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

## Validation

It inherits common validation with the following specifics:

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Radio Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
