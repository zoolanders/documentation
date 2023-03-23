---
title: TikTok Source
description: Content Source based on TikTok
icon: '
    <path stroke="none" d="M11.804 28a8.386 8.386 0 0 1-5.955-2.44 8.2 8.2 0 0 1-2.454-6.42 8.28 8.28 0 0 1 2.083-4.983 8.377 8.377 0 0 1 6.326-2.83c.421 0 .846.032 1.265.094l.65.096v5.768l-1.001-.33a2.863 2.863 0 0 0-.902-.146c-.775 0-1.5.304-2.043.855a2.83 2.83 0 0 0-.82 2.043 2.84 2.84 0 0 0 1.397 2.405 2.863 2.863 0 0 0 2.367.26 2.85 2.85 0 0 0 1.962-2.708l.005-5.982V2h5.513l.006.754a5.412 5.412 0 0 0 2.16 4.281 5.384 5.384 0 0 0 3.268 1.092c.028 0 .028 0 .282.018l.709.05v5.433h-1.02c-1.468 0-2.844-.28-4.207-.856a10.957 10.957 0 0 1-1.184-.586l.017 7.505a8.243 8.243 0 0 1-2.47 5.868 8.377 8.377 0 0 1-4.69 2.346c-.416.062-.841.093-1.264.093Zm0-15.15c-2.01 0-3.854.825-5.19 2.321a6.752 6.752 0 0 0-1.7 4.062 6.697 6.697 0 0 0 2.006 5.244 6.876 6.876 0 0 0 4.884 2c.348-.001.698-.027 1.04-.078a6.862 6.862 0 0 0 3.844-1.922 6.727 6.727 0 0 0 2.017-4.786l-.023-10.48 1.23.95c.635.49 1.334.897 2.076 1.21a9.117 9.117 0 0 0 3.11.722v-2.46a6.885 6.885 0 0 1-3.652-1.38 6.933 6.933 0 0 1-2.719-4.728h-2.52v10.157l-.005 5.982a4.37 4.37 0 0 1-3.008 4.154 4.389 4.389 0 0 1-3.627-.4A4.353 4.353 0 0 1 7.43 19.73a4.344 4.344 0 0 1 1.258-3.135 4.358 4.358 0 0 1 3.507-1.292v-2.44c-.13-.008-.26-.011-.39-.011Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The TikTok Source feeds data from [TikTok](https://www.vimeo.com) media. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple accounts with different configurations.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![TikTok Source Configuration](/assets/ytp/sources/tiktok-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The TikTok Account which to authenticate with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "TikTok"} /%}

---

### Authentication

Authentication is based on the OAuth protocol driven by the [TikTok OAuth Driver](/essentials-for-yoothemepro/auth/drivers/tiktok-oauth).

{% image %}
![TikTok OAuth Driver](/assets/ytp/auths/driver-tiktok-oauth.webp)
{% /image %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Videos Query

Fetches videos from the authenticated account and resolves to a list of [Video Type](#video-type).

{% image %}
![TikTok Videos Query](/assets/ytp/sources/tiktok-query-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Before Than** | | Limit the results to videos created before the specified date. |
| **Start** | `1` | The starting point, e.g of a list of 20 videos start from the number 2. |
| **Quantity** | `20` | The maximum amount of videos to retrieve. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Content Types

The content types define the mapping options for the source content.

### Video Type

The **Video Type** defines the mapping options of a TikTok Video object.

{% image %}
![TikTok Video Mapping](/assets/ytp/sources/tiktok-type-video.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this video. | `String` |
| **Title** | The title of this video, max length 150. | `String` | `Limit` |
| **Description** |  The description for this video, max length 150. | `String` | `Limit` |
| **Duration** | The duration of this video in seconds. | `Int` |
| **Width** | The width of this video. | `Int` |
| **Height** | The height of this video. | `Int` |
| **Cover** | The path to the locally cached video cover. | `String` |
| **Embed Link** | The embed link of tiktok.com for this video. | `String` |
| **Embed HTML** | The HTML code for embedded video. | `String` |
| **Share URL** | A shareable link for this video. Note that the website behaves differently on Mobile and Desktop devices. | `String` |
| **Created At** | The time this video was created. | `String` | `Date` |
| **Total Shares** | Number of times this video has been shared. | `Int` |
| **Total Likes** | Number of times this video has been liked. | `Int` |
| **Total Comments** | Number of times this video has been commented. | `Int` |
| **Total Views** | Number of times this video has been viewed. | `Int` |
