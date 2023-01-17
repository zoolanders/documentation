---
title: RSS Source
description: Content Source based on a RSS feeds
icon: '
    <path stroke="none" d="M24.75 3.626c.891 0 1.625.734 1.625 1.625v19.5c0 .891-.734 1.625-1.625 1.625H5.25a1.633 1.633 0 0 1-1.625-1.625V5.25c0-.891.734-1.625 1.625-1.625h19.5ZM5.25 2.001A3.265 3.265 0 0 0 2 5.251v19.5A3.265 3.265 0 0 0 5.25 28h19.5A3.265 3.265 0 0 0 28 24.75V5.25a3.265 3.265 0 0 0-3.25-3.25H5.25Z"/>
    <path stroke="none" d="M10.938 21.5A2.45 2.45 0 0 1 8.5 23.939a2.45 2.45 0 0 1-2.437-2.437A2.45 2.45 0 0 1 8.5 19.063a2.45 2.45 0 0 1 2.438 2.438ZM6.063 7.69c0-.892.733-1.625 1.625-1.625 8.974 0 16.25 7.275 16.25 16.25 0 .89-.734 1.624-1.626 1.624a1.633 1.633 0 0 1-1.625-1.625c0-7.13-5.868-13-13-13A1.633 1.633 0 0 1 6.064 7.69Zm0 6.5c0-.892.733-1.625 1.625-1.625 5.348 0 9.75 4.4 9.75 9.75 0 .89-.734 1.624-1.626 1.624a1.633 1.633 0 0 1-1.624-1.625c0-3.565-2.935-6.5-6.5-6.5a1.633 1.633 0 0 1-1.625-1.624Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **RSS Source** feeds data from RSS 0.9, 1.0, 2.0, and Atom specifications. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple feeds with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "RSS"} /%}

---

## Content Source

Follow through [integration](#integration) to create a source instance from a RSS feed, create as many as needed.

{% image %}
![RSS Instance Configuration](/assets/ytp/sources/rss-config.webp)
{% /image %}

| Setting | Description | Default | Required |
| ------- | ----------- | ------- | :------: |
| **Name** | The name that will identify this source. | `RSS` |
| **URL** | The feed URL from which to create the source. | | &#x2713; |

---

## Content Queries

For each content source instance, the following query will be available as Dynamic Content options under the RSS group.

### Feed Query

Queries the source instance feed information, resolves to a programatically generated feed `Object Type`.

---

### Entries Query

Queries entries from the source instance, resolves to a List Of programatically generated `Object Type` based on the feed schema.

{% image %}
![RSS Records Query](/assets/ytp/sources/rss-query-entries.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of [filter conditions](../query-conditions#filter-conditions) applied to the query. |
| **Ordering** | `[]` | The list of [ordering conditions](../query-conditions#order-conditions) applied to the query. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
