---
titleTemplate: Advanced Dynamic Workflow for YOOtheme Pro
---

# Per-Field Dynamic Content

[Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) workflow is extended with the possibility to map source content directly to a field without the need for a selection, and limitation, of a source on the Element level. An advanced Dynamic button is made available for all elements fields with mapping options that will vary depending on the mapping possibilities.

![Field Dynamic Options](./assets/field-dynamic-options.webp)

## Inherit Node Source

The option to inherit a source from a node will appear if the field's element has a Dynamic Content set. This is the default behaviour of the core workflow and allows mapping the content from the source set on the element level.

![Field Inherit Node](./assets/field-inherit-node.webp)

## Inherit Parent Source

The option to inherit a source from the parent node will appear if some of the field's element closest parent has a Dynamic Content set. It allows mapping the content from the inherited source.

![Field Inherit Parent](./assets/field-inherit-parent.webp)

## Current Page Sources

Options under a Page group will appear if there are queries available for the current view, e.g. _Categories_. It allows mapping those queries content.

![Field Page Query](./assets/field-page-query.webp)

## Global Sources and Queries

Some options under a Global group will always appear, as the _Site_ source which content is globally available. Others will appear if pre-configured as a [Global Query](./global-queries). It allows mapping those queries content.

![Field Global Query](./assets/field-global-query.webp)

## Custom Queries

The Custom Query option is always present and allows composing a custom source query. Is can solve a complex use case, but it might also affect the page loading performance as the query would be executed on each field instead of each element. Use it only when there is no other alternative.

![Field Custom Query](./assets/field-custom-query.webp)

![Field Custom Query Config](./assets/field-custom-query-config.webp)

## Implode Multi-Item Content

In the case of a multi-item content set on a field, the content will be joined with a custom glue string, or leave the value raw and let the underlying element or workflow deal with the content instead.

![Field Implode Filter](./assets/field-filter-implode.webp)
