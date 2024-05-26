---
title: Google Sheet Source
description: Content Source based on Google Sheet
icon: '
    <path stroke="none" d="M7.687 2c4.328-.011 1.71-.023 8.94 0 .727.002.727 1.623 0 1.625-7.23.023-4.612.011-8.94 0a.819.819 0 00-.813.817v21.121c0 .447.366.813.813.813h14.626a.815.815 0 00.813-.813s-.014-15.412 0-15.439c.358-.695 1.191-.686 1.624 0 .011.018 0 15.44 0 15.44A2.438 2.438 0 0122.313 28H7.687a2.438 2.438 0 01-2.437-2.437V4.442A2.446 2.446 0 017.687 2z"/>
    <path stroke="none" d="M20.215 13.095H9.785a.87.87 0 00-.869.87v10.429c0 .48.39.869.87.869h10.429c.48 0 .869-.39.869-.87V13.965a.87.87 0 00-.87-.869zm-9.56 5.215h3.476v1.738h-3.477V18.31zm5.214 0h3.477v1.738h-3.477V18.31zm3.477-1.738h-3.477v-1.739h3.477v1.739zm-5.215-1.739v1.739h-3.477v-1.739h3.477zm-3.477 6.953h3.477v1.739h-3.477v-1.739zm5.215 1.739v-1.739h3.477v1.739h-3.477z"/>
    <path stroke-width=".3" d="M24.931 8.478l1.51-2.156L23.246.888H20.37l-3.194 5.434 1.51 2.156h6.245zm-.282-.542h-5.406l.828-1.355h5.527l-.949 1.355zm-1.404-1.897h-2.843l1.407-2.306 1.436 2.306zm2.4 0h-1.761l-2.87-4.609h1.922l2.709 4.609zm-5.113-4.356l.956 1.535-2.712 4.444-.956-1.365 2.712-4.614z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The Google Sheet Source feeds data from a Google Sheet spreadsheet. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Google Sheet Instance Configuration](/assets/ytp/sources/gsheet-config.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Account** | | The Google Account which to authenticate with. | &#x2713; |
| **Spreadsheet** | | The spreadsheet which to retrieve the data from. | &#x2713; |
| **Sheet** | `Default` | The spreadsheet sheet which data to create the source with. |
| **Start Column** | `A`  | The starting column to restrict the sheet data with. |
| **End Column** | `Z` | The ending column to restrict the sheet data with. |

{% partial file="ytp-sources-common-settings.md" variables={name: "Google Sheet"} /%}

### Authentication

Authentication is based on the OAuth protocol driven by the [Google OAuth Driver](/essentials-for-yootheme-pro/auth/drivers/google-oauth).

![Google OAuth Driver](/assets/ytp/auths/driver-google-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Records Query

Fetches records from the spreadsheet and resolves to a dynamically generated list of record type based on the sheet schema.

![Google Sheet Records Query](/assets/ytp/sources/gsheet-query-records.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
