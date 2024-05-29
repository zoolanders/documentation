---
title: Airtable
description: Content Source based on Airtable apps
---

<!--@include: ../_partials/provider-intro-->

The Airtable Source feeds data from Airtable platform. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Google Sheet Instance Configuration](../assets/providers/airtable-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Airtable Account which to authenticate with. | &#x2713; |
| **Base** | The Airtable base which to retrieve the data from. | &#x2713; |
| **Table** | The Airtable base table which data to create the source with. | &#x2713; |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings-->
:::

### Authentication

Authentication is based on the Airtable Personal Access Token driven by the [Airtable Token Driver](/essentials-for-yootheme-pro/auth/airtable).

![Airtable Access Token Driver](/essentials-for-yootheme-pro/auth/assets/driver/airtable-access-token.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Record Query

Fetches a single record from the Airtable base table and resolves to a dynamically generated list of record type based on the table schema.

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Record ID** | | The ID of the record to query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Records Query

Fetches a single record from the Airtable base table and resolves to a dynamically generated list of record type based on the table schema.

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **View** | | Optional table view to use instead of a raw query. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
