---
title: Vimeo
description: Content Source based on Vimeo
---

<!--@include: ../_partials/provider-intro.md-->

The Vimeo Source feeds data from [Vimeo](https://www.vimeo.com) media. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Vimeo Source Configuration](../assets/providers/vimeo-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Vimeo Account which to authenticate with. | &#x2713; |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings.md-->
:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Vimeo OAuth Driver](/essentials-for-yootheme-pro/auth/drivers/vimeo-oauth).

![Vimeo OAuth Driver](/essentials-for-yootheme-pro/auth/assets/driver/vimeo-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Videos Query

Fetches videos from the authenticated account and resolves to a list of [Video Type](#video-type).

![My Vimeo Videos Query](../assets/providers/vimeo-query-myvideos.webp)

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Query** | | The search term by which to filter the videos. |
| **Attribute** | | The video attribute by which to filter the videos, within `Featured`, `Live`, and `No Live`. |
| **Tags** | | Comma separated tags by which to filter the videos. |
| **Sort** | `Default` | The order of the videos, within `Default`, `Alphabetical`, `Date`, `Modified`, `Duration`, `Last User Action`, `Total Plays`, and `Total Likes`. |
| **Direction** | `Descending` | The order direction of the videos, `Ascending` or `Descending`. |
| **Page** | `1` | The page number of the videos. |
| **Per Page** | `25` | The number of videos to return on each page, up to a maximum of 100. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### My Folder Videos Query

Fetches videos from the authenticated account specific folder and resolves to a list of [Video Type](#video-type).

![My Vimeo Folder Videos Query](../assets/providers/vimeo-query-myfolder-videos.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Folder ID** | | The unique identifier of the folder from which to retrieve the videos. | &#x2713; |
| **Include Subfolders** | | Whether to include videos of all subfolders. |
| **Query** | | The search term by which to filter the videos. |
| **Sort** | `Default` | The order of the videos, within `Default`, `Alphabetical`, `Date`, `Duration`, and `Last User Action`. |
| **Direction** | `Descending` | The order direction of the videos, `Ascending` or `Descending`. |
| **Page** | `1` | The page number of the videos. |
| **Per Page** | `25` | The number of videos to return on each page, up to a maximum of 100. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### My Showcase Videos Query

Fetches videos from the authenticated account specific showcase and resolves to a list of [Video Type](#video-type).

![My Vimeo Showcase Videos Query](../assets/providers/vimeo-query-myshowcase-videos.webp)

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Showcase ID** | | The unique identifier of the showcase from which to retrieve the videos. | &#x2713; |
| **Password** | | The password of the showcase in case it has one. |
| **Query** | | The search term by which to filter the videos. |
| **Sort** | `Default` | The order of the videos, within `Default`, `Alphabetical`, `Comments`, `Date`, `Modified`,  `Duration`, `Total Plays`, and `Total Likes`. |
| **Direction** | `Descending` | The order direction of the videos, `Ascending` or `Descending`. |
| **Page** | `1` | The page number of the videos. |
| **Per Page** | `25` | The number of videos to return on each page, up to a maximum of 100. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

## Content Types

The content types define the mapping options for the source content.

### Video Type

The **Video Type** defines the mapping options of a Vimeo Video object.

![Vimeo Video Mapping](../assets/providers/vimeo-type-video.webp)

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this video. | `String` |
| **URL** | The URL of this video, e.g. `vimeo.com/123456789`. | `String` |
| **Custom URL** | The custom URL of this video. | `String` |
| **Type** | The type of this video, `live` (is or was a live event), `stock` (is a Vimeo Stock video), or `video` (standard Vimeo video). | `String` |
| **Title** | The title of this video. | `String` | `Limit` |
| **Description** |  A brief explanation of this video's content. | `String` | `Limit` |
| **Duration** | The duration of this video in seconds. | `Int` |
| **Language** | The primary language of this video. | `String` |
| **License** | The [Creative Commons](https://creativecommons.org/licenses/) license given to this video under `BY`, `BY-NC`, `BY-NC-ND`, `BY-NC-SA`, `BY-ND`, `BY-SA`, or `CC0`. | `String` |
| **Thumbnail** | The path to the locally cached video picture. | `String` |
| **Width** | The width of this video in pixels. | `Int` |
| **Height** | The height of this video in pixels. | `Int` |
| **Tags** | A formated list of all tags assigned to this video, joined with a custom separator. | `String` |
| **Categories** | A formated list of all categories this video belongs to, joined with a custom separator, optional link and style. | `String` |
| **Created At** | The time this video was created. | `String` | `Date` |
| **Released At** | The time this video was released. | `String` | `Date` |
| **Modified At** | The time this video was modified. | `String` | `Date` |
| **Total Plays** | Number of times this video has been played. | `Int` |
| **Total Comments** | Number of times this video has been commented. | `Int` |

### User Type

The **User Type** defines the mapping options of a Vimeo User object.

![Vimeo User Mapping](../assets/providers/vimeo-type-user.webp)

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this user. | `String` |
| **URL** | The absolute URL of this user profile page. | `String` |
| **Name** | The display name of this user. | `String` |
| **Gender** | The gender of this user. | `String` |
| **Bio** | The long bio text of this user. | `String` | `Limit` |
| **Bio Short** | The short bio text of this user. | `String` | `Limit` |
| **Location** | The location of this user. | `String` |
| **Is Expert** | Whether the creator enrolled in and successfully completed the Vimeo Experts program. | `String` |
