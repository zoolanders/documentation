---
addon: 'Dynamic'
---

# Dynamic Content

Essentials extends YOOtheme Pro [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) with advanced features that integrates natively into the builder.

<!--@include: ../_partials/enable-addon.md-->

## Extended Workflow

In YOOtheme Pro a dynamic content source is set on a node level, e.g. a Text element, in which case the elements fields will be enhanced with an option to map a dynamic content from the node source. Essentials expands on that notion adding the option to choose a source on an element field level regardless of the element source configuration.

With that in mind is expected that a Dynamic option will always be present above the element fields allowing to map to those any source directly.

![Field Dynamic Options](./assets/field-dynamic-options.webp)

If the mapped source content results in multiple values, those will be joined with a custom separator, or optionally left as is for the underlying element to deal with the content instead.

![Field Implode Filter](./assets/field-filter-implode.webp)

::: warning
Fetching sources on a field level might affect performance as more queries would be executed for each node. To mitigate those inherit from the current or parent node instead of making direct queries.
:::

### Inherit Source

When a source is set at the element level, the options _Inherit Current Node_ and/or _Inherit Parent Node_ will appear based on the source relationship.

#### Inherit Current Node

This option is available when the source is set in the same node where the field is being mapped. If the source is multi-item the node will be multiplied and the fields will inherit the data from the current iteration.

![Field Inherit Node](./assets/field-inherit-node.webp)

#### Inherit Parent Node

This option is available when there is a source set in a higher-level node from where the field is being mapped. It is possible to inherit from a parent node while there is a source set in the current node, and even mix both using [composed sources](composed-sources).

![Field Inherit Parent](./assets/field-inherit-parent.webp)
