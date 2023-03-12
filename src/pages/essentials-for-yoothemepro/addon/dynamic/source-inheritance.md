---
title: Source Inheritance
---

**Source Inheritance** allows a **Child Element** to map **Dynamic Content** set on a **Parent Element**. {% .lead %}

**Source Inheritance** expands on the [YOOtheme Pro Field Mapping](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#field-mapping) concept with the possibility to choose the source for each field individually. By default, the core worklow limits the mapping to the content of the source selected on the element level which is, per design, limited. By removing that limitation becomes possible the creation of advanced layouts using just core elements.

---

## Dynamic Options

Above each element field a **Dynamic** button will appear allowing to map a dynamic content Whether the element has set a source in the **Advanced Tab** or not. The **Dynamic Options** will vary, however, depending on the element, the parent element and global queries configuration.

{% image %}
![Field Dynamic Options](/assets/ytp/dynamic/field-dynamic-options.webp)
{% /image %}

### Inherit Node

The **Inherit Node** option allows mapping the content of the source set on the element. This presents a great versatily as it supports combining the element level source with field level source on the same configuration. It works great even with multi-item content in which case each transient element will inherit the appropiate item content.

{% image %}
![Field Inherit Node](/assets/ytp/dynamic/field-inherit-node.webp)
{% /image %}

### Inherit Parent

The **Inherit Parent** option operates similary as the **Inherit Node** option, but instead of inheriting the source from the current element it will inherit it from the closest parent that has a source set.

In case the source is a multi-item content the [Field Implode Filter](#field-implode-filter) will join the content by default.

{% image %}
![Field Inherit Parent](/assets/ytp/dynamic/field-inherit-parent.webp)
{% /image %}

### Page Query

The **Page Query** option allows mapping the content of the current page source, when available. Is the same source present on the element level with the advantage of being faster to set and combinable with other sources.

In case the source is a multi-item content the [Field Implode Filter](#field-implode-filter) will join the content by default.

{% image %}
![Field Page Query](/assets/ytp/dynamic/field-page-query.webp)
{% /image %}

### Global Source

The **Global Source** option allows mapping sources such as `Site` or `Site -> User`. Those are a great use case for the field sources as do not require any query configuration and are always globally available.

{% image %}
![Field Global Source](/assets/ytp/dynamic/field-global-source.webp)
{% /image %}

### Global Query

The **Global Query** option allows mapping sources content that have been pre-configured as [Global Queries](global-queries). When used wisely it can help speed up the creation of layouts that use the same complex queries over and over by having a single source configuration, but it also could affect the page loading performance as each field with this option would be executing a query vs one query for the entire element.

In case the source is a multi-item content the [Field Implode Filter](#field-implode-filter) will join the content by default.

{% image %}
![Field Global Query](/assets/ytp/dynamic/field-global-query.webp)
{% /image %}

### Custom Query

The **Custom Query** option allows setting a source query on the field level as it would be done in the element level.
It might solve complex use cases but, as with **Global Queries**, it might also affect the page loading performance. Should be used as a last resource, when in doubt, set the query on the element level instead.

In case the source is a multi-item content the [Field Implode Filter](#field-implode-filter) will join the content by default.

{% image %}
![Field Custom Query](/assets/ytp/dynamic/field-custom-query.webp)
{% /image %}

{% image %}
![Field Custom Query Config](/assets/ytp/dynamic/field-custom-query-config.webp)
{% /image %}

---

## Field Implode Filter

In the case of a multi-item content set on a field, the list will be joined with a custom glue string before or after other field filters, or leave the value raw and allow the underlying element or workflow to deal with the content insted.

{% image %}
![Field Implode Filter](/assets/ytp/dynamic/field-filter-implode.webp)
{% /image %}
