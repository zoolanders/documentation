---
title: Google Sheet
description: Content Source based on Google Sheet
---

<!--@include: ../_partials/provider-intro.md-->

The Google Sheet Source feeds data from a Google Sheet spreadsheet. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Google Sheet Instance Configuration](../assets/providers/gsheet-config.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Account** | | The Google Account which to authenticate with. | &#x2713; |
| **Spreadsheet** | | The spreadsheet which to retrieve the data from. | &#x2713; |
| **Sheet** | `Default` | The spreadsheet sheet which data to create the source with. |
| **Start Column** | `A`  | The starting column to restrict the sheet data with. |
| **End Column** | `Z` | The ending column to restrict the sheet data with. |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings.md-->
:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Google OAuth Driver](/essentials-for-yootheme-pro/auth/drivers/google-oauth).

![Google OAuth Driver](/essentials-for-yootheme-pro/auth/assets/driver/google-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Records Query

Fetches records from the spreadsheet and resolves to a dynamically generated list of record type based on the sheet schema.

![Google Sheet Records Query](../assets/providers/gsheet-query-records.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
