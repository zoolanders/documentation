---
title: Instagram Personal
description: Content Source based on Instagram Personal account
---

<!--@include: ../../parts/provider-intro-->

The Instagram Personal Source, part of the [Instagram Source](../instagram) collection, creates sources based on the Instagram Personal accounts content.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Instagram Personal Settings](../../assets/providers/ig-personal-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Account* | The Instagram Account which to [authenticate](#authentication) with. | &#x2713; |

::: details Common Settings

<!--@include: ../_partials/provider-common-settings-->

:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Instagram OAuth Driver](/essentials-for-yootheme-pro/auth/instagram).

![Instagram OAuth Driver](/essentials-for-yootheme-pro/auth/assets/driver/instagram-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Media Query

Fetches media from the authenticated account and resolves to a list of [Media Type](../instagram#media-type).

![Instagram Media Query](../../assets/providers/ig-query-media.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Type* | `All` | The type of media to fetch, `All`, `Image`, or `Video`. |
| *Amount* | `20` | The maximum amount of media to fetch. |
| *Since/Until* | `null` | The `start` and/or `end` datetime the fetched media will be restricted to. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Media Single Query

Fetches a single media from the authenticated account and resolves to a [Media Type](../instagram#media-type).

![Instagram Media Single Query](../../assets/providers/ig-query-media-single.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *ID* | | Unique identifier of the media to retrieve. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
| *Children* | | A Multi Item option resolving to [Album Media Query](#album-media-query). |

### Album Media Query

Part of the [Media Single Query](#media-single-query), as `Multiple Items Source -> Children Media`, fetches media from the parent Media if it's of the type Album, resolves to a list of [Album Media Type](../instagram#album-media-type).

![Instagram Album Media Query](../../assets/providers/ig-query-media-single.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *ID* | | Unique identifier of the media to retrieve. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
