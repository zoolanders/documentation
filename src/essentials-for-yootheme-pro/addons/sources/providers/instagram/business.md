---
title: Instagram Business
description: Content Source based on Instagram Business account
---

<!--@include: ../../parts/provider-intro-->

The Instagram Business Source, part of the [Instagram Source](../instagram) collection, creates sources based on the Instagram Business accounts content.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Instagram Business Settings](../../assets/providers/ig-business-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Instagram Account which to [authenticate](#authentication) with. | &#x2713; |
| **Page** | The Facebook Page associated with the Instagram Business account. | &#x2713; |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings-->
:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Facebook OAuth Driver](/essentials-for-yootheme-pro/auth/facebook).

![Facebook OAuth Driver](/essentials-for-yootheme-pro/auth/assets/driver/facebook-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Media Query

Fetches media from the authenticated account and resolves to a list of [Media Type](../instagram#media-type).

![Instagram Media Query](../../assets/providers/ig-query-media.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Type** | `All` | The type of media to fetch, `All`, `Image`, or `Video`. |
| **Amount** | `20` | The maximum amount of media to fetch. |
| **Since/Until** | `null` | The `start` and/or `end` datetime the fetched media will be restricted to. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Media Single Query

Fetches a single media from the authenticated account and resolves to a [Media Type](../instagram#media-type).

![Instagram Media Single Query](../../assets/providers/ig-query-media-single.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **ID** | | Unique identifier of the media to retrieve. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
| **Children** | | A Multi Item option resolving to [Album Media Query](#album-media-query). |

### Album Media Query

Part of the [Media Single Query](#media-single-query), as `Multiple Items Source -> Children Media`, fetches media from the parent Media if it's of the type Album, resolves to a list of [Album Media Type](../instagram#album-media-type).

![Instagram Album Media Query](../../assets/providers/ig-query-media-single.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **ID** | | Unique identifier of the media to retrieve. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Hashtagged Media Query

Fetches top and recent hashtagged media from the authenticated business account and resolves to a list of [Media Type](../instagram#media-type).

![Instagram Hashtagged Media Query](../../assets/providers/ig-query-hashtagged-media.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Hashtag** | | The hashtag to query for. | &#x2713; |
| **Edge** |`Top` | Should the query look for `Top Media` or `Recent Media` hashtagged with. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### User Query

Fetches the user profile from the authenticated account and resolves to a [User Type](../instagram#user-type).

![Instagram User Query](../../assets/providers/ig-query-user.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `0` | The duration in seconds before the cache is invalidated and the query re-executed. |
