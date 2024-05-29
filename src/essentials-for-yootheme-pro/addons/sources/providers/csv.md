---
title: CSV
description: Content Source based on CSV files
---

<!--@include: ../_partials/provider-intro-->

The CSV Source feeds data from local files formatted as CSV (comma-separated values) or TSV (tab-separated values), supporting dynamic filtering/ordering. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources) source workflow it allows loading multiple files with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![CSV Instance Settings](../assets/providers/csv-config.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **File** | | The relative or absolute local path to the file which to use as source. | &#x2713; |
| **Delimeter** | `,` | The delimiter character the content is formated with. |
| **Enclosure** | `"` | The enclosure character the content is formated with. |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings-->
:::

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Records Query

Fetches records from the file and resolves to a list of dynamically generated CSV record type based on the file schema.

![CSV Records Query](../assets/providers/csv-query-records.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of filter conditions applied to the query. |
| **Ordering** | `[]` | The list of ordering conditions applied to the query. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
