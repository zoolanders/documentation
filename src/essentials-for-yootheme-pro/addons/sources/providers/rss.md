---
title: RSS
description: Content Source based on RSS feeds
---

<!--@include: ../_partials/provider-intro.md-->

The RSS Source feeds data from RSS 0.9, 1.0, 2.0, and Atom specifications. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple feeds with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![RSS Instance Settings](../assets/providers/rss-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **URL** | The feed URL from which to generate the source content. | &#x2713; |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings.md-->
:::

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Feed Query

Fetches information from the feed and resolves to a dynamically generated feed type based on it schema.

![RSS Feed Query](../assets/providers/rss-query-feed.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Entries Query

Fetches records from the feed and resolves to a list of dynamically generated record type based on the feed schema.

![RSS Entries Query](../assets/providers/rss-query-entries.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of filter conditions applied to the query. |
| **Ordering** | `[]` | The list of ordering conditions applied to the query. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
