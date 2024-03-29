---
title: Per-Field Dynamic Content
---

Simplify the creation of complex layouts with per-field dynamic content and source inheritance.

[Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) workflow is extended with the possibility to map source content directly to a field without the need for a selection, and limitation, of a source on the Element level. An advanced Dynamic button is made available for all elements fields with mapping options that will vary depending on the mapping possibilities.

{% image %}
![Field Dynamic Options](/assets/ytp/dynamic/field-dynamic-options.webp)
{% /image %}

## Inherit Node Source

The option to inherit a source from a node will appear if the field's element has a Dynamic Content set. This is the default behaviour of the core workflow and allows mapping the content from the source set on the element level.

{% image %}
![Field Inherit Node](/assets/ytp/dynamic/field-inherit-node.webp)
{% /image %}

## Inherit Parent Source

The option to inherit a source from the parent node will appear if some of the field's element closest parent has a Dynamic Content set. It allows mapping the content from the inherited source.

{% image %}
![Field Inherit Parent](/assets/ytp/dynamic/field-inherit-parent.webp)
{% /image %}

## Current Page Sources

Options under a Page group will appear if there are queries available for the current view, e.g. `Categories`. It allows mapping those queries content.

{% image %}
![Field Page Query](/assets/ytp/dynamic/field-page-query.webp)
{% /image %}

## Global Sources and Queries

Some options under a Global group will always appear, as the `Site` source which content is globally available. Others will appear if pre-configured as a [Global Query](../global-queries). It allows mapping those queries content.

{% image %}
![Field Global Query](/assets/ytp/dynamic/field-global-query.webp)
{% /image %}

## Custom Queries

The Custom Query option is always present and allows composing a custom source query. Is can solve a complex use case, but it might also affect the page loading performance as the query would be executed on each field instead of each element. Use it only when there is no other alternative.

{% image %}
![Field Custom Query](/assets/ytp/dynamic/field-custom-query.webp)
{% /image %}

{% image %}
![Field Custom Query Config](/assets/ytp/dynamic/field-custom-query-config.webp)
{% /image %}

## Implode Multi-Item Content

In the case of a multi-item content set on a field, the content will be joined with a custom glue string, or leave the value raw and let the underlying element or workflow deal with the content instead.

{% image %}
![Field Implode Filter](/assets/ytp/dynamic/field-filter-implode.webp)
{% /image %}
