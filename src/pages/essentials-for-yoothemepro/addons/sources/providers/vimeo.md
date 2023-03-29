---
title: Vimeo Source
description: Content Source based on Vimeo
icon: '
    <path fill="none" stroke-width="1.7" stroke-linejoin="round" d="M27.987 8.92c-.115 2.547-1.883 6.034-5.302 10.46-3.535 4.623-6.526 6.934-8.972 6.934-1.515 0-2.799-1.407-3.846-4.223l-2.099-7.742c-.778-2.815-1.612-4.223-2.504-4.223-.195 0-.875.412-2.04 1.232L2 9.772a328.813 328.813 0 0 0 3.794-3.404c1.712-1.488 2.997-2.27 3.853-2.35 2.023-.195 3.269 1.196 3.736 4.175.505 3.215.855 5.214 1.051 5.996.584 2.667 1.225 3.998 1.927 3.998.544 0 1.361-.865 2.45-2.594 1.09-1.73 1.673-3.046 1.752-3.95.155-1.493-.429-2.242-1.751-2.242-.623 0-1.264.145-1.924.43 1.277-4.212 3.719-6.257 7.322-6.14 2.672.079 3.931 1.822 3.777 5.23Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Vimeo Source feeds data from [Vimeo](https://www.vimeo.com) media. Based on the [multi-instance](/next/essentials-for-yoothemepro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![Vimeo Source Configuration](/next/assets/ytp/sources/vimeo-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Vimeo Account which to authenticate with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "Vimeo"} /%}

---

### Authentication

Authentication is based on the OAuth protocol driven by the [Vimeo OAuth Driver](/next/essentials-for-yoothemepro/auth/drivers/vimeo-oauth).

{% image %}
![Vimeo OAuth Driver](/next/assets/ytp/auths/driver-vimeo-oauth.webp)
{% /image %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/next/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Videos Query

Fetches videos from the authenticated account and resolves to a list of [Video Type](#video-type).

{% image %}
![My Vimeo Videos Query](/next/assets/ytp/sources/vimeo-query-myvideos.webp)
{% /image %}

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

---

### My Folder Videos Query

Fetches videos from the authenticated account specific folder and resolves to a list of [Video Type](#video-type).

{% image %}
![My Vimeo Folder Videos Query](/next/assets/ytp/sources/vimeo-query-myfolder-videos.webp)
{% /image %}

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

---

### My Showcase Videos Query

Fetches videos from the authenticated account specific showcase and resolves to a list of [Video Type](#video-type).

{% image %}
![My Vimeo Showcase Videos Query](/next/assets/ytp/sources/vimeo-query-myshowcase-videos.webp)
{% /image %}

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

---

## Content Types

The content types define the mapping options for the source content.

### Video Type

The **Video Type** defines the mapping options of a Vimeo Video object.

{% image %}
![Vimeo Video Mapping](/next/assets/ytp/sources/vimeo-type-video.webp)
{% /image %}

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

---

### User Type

The **User Type** defines the mapping options of a Vimeo User object.

{% image %}
![Vimeo User Mapping](/next/assets/ytp/sources/vimeo-type-user.webp)
{% /image %}

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
