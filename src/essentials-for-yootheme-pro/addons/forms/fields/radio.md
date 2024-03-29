---
description: A single-option radio form control
preset: /assets/ytp/presets/FormArea-Radio.json
icon: '
  <path fill="none" stroke-width="2" d="M27.371 7.148c0 1.906-1.588 3.489-3.646 3.489-1.906 0-3.648-1.583-3.648-3.489 0-1.901 1.588-3.647 3.648-3.647 1.902 0 3.646 1.589 3.646 3.647z" transform="matrix(.86372 0 0 .88357 -15.5612161 17.802899)"/>
  <path fill="none" stroke-width="2" d="M27.371 7.148c0 1.906-1.588 3.489-3.646 3.489-1.906 0-3.648-1.583-3.648-3.489 0-1.901 1.588-3.647 3.648-3.647 1.902 0 3.646 1.589 3.646 3.647z" transform="matrix(.86372 0 0 .88357 -15.56121615 8.764207)"/>
  <path fill="none" stroke-width="2" d="M27.371 7.148c0 1.906-1.588 3.489-3.646 3.489-1.906 0-3.648-1.583-3.648-3.489 0-1.901 1.588-3.647 3.648-3.647 1.902 0 3.646 1.589 3.646 3.647z" transform="matrix(.86372 0 0 .88357 -15.56121615 -.27448)"/>
  <path stroke="none" d="M12.9513025 4.501717h16.006949v2.6h-16.006949z"/>
  <path stroke="none" d="M12.9513025 13.601274h16.006949v2.6h-16.006949z"/>
  <path stroke="none" d="M12.9513025 22.912724h16.006949v2.6h-16.006949z"/>
'
---

# Radio Field Element

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The **Radio Element** displays a group of [\<input type="radio"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) HTML elements wrapped in a `<label>`, use it to allow users choosing a single option from a pre-established group.

![Radio Element](./assets/fields/radio.webp)

## Settings

It inherits common settings with the following specifics:

| Setting | Description |
| ------- | ----------- |
| **Layout** | The layout that will be used to display the options, `Vertical` or `Horizontal`. |

{% details title="Common Settings
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

## Options

Options are specified as child items that can be input manually as well as dynamically with the use of a Dynamic Content source. Each option has the following settings:

![Field Options](./assets/fields/options.webp)

| Setting | Description |
| ------- | ----------- |
| **Value** | The option value, must be unique among its siblings. | &#x2713; |
| **Text** | The option text, defaults to the value if omitted. HTML tags are supported. | &#x2713; |
| **State** | Defines if the option is `Disabled` or `Enabled`. Disabled options are unusable and unclickable. | &#x2713; |
| **Id** | The option ID attribute, it overrides any ID set in the parent element. | &#x2713; |

## Validation

{% partial file="ytp-formarea-field-common-validation.md" /%}

## Integration

1. Access a Builder layout and create a Form Area.
1. Add a Radio Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

