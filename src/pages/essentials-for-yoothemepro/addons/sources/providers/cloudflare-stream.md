---
title: CloudFlare Stream Source
description: Content Source based on CloudFlare Stream
icon: '
    <path stroke="none" d="M3.921 23.264h8.98c.487.03.871.437.871.924a.931.931 0 01-.872.925H3.921a.927.927 0 01-.923-.923c0-.507.416-.923.923-.923v-.003zm18.834 0h2.287c.487.03.872.437.872.924a.931.931 0 01-.872.925h-2.287a.927.927 0 01-.923-.923c0-.507.416-.923.923-.923v-.003z"/>
    <circle stroke="none" cx="9.633" cy="13.624" r="1.322" transform="translate(1.835 1.689) scale(1.65148)"/>
    <path fill="none" stroke-width="1.6" stroke-linejoin="round" d="M23.413 10.25c-.09-3.593-3.019-6.525-6.611-6.622a6.714 6.714 0 00-6.214 4.364 5.9 5.9 0 00-1.195-.165c-2.326.072-4.189 2.032-4.142 4.359 0 .334.08.585.08.835A2.96 2.96 0 003.1 15.963l-.002.077a2.943 2.943 0 002.87 2.93h17.445c1.673 0 3.585-2.177 3.585-4.356a4.25 4.25 0 00-3.585-4.363z"/>
    <path stroke="none" d="M18.517 12.728l-4.253 3.055-.016.011a.573.573 0 01-.801-.165.627.627 0 01-.103-.346V9.172v-.01c0-.322.265-.59.587-.593a.58.58 0 01.33.113l4.256 3.06a.61.61 0 010 .99v-.004z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Cloudflare Source feeds data from [Cloudflare Stream](https://www.cloudflare.com/products/cloudflare-stream/) videos. Based on the [multi-instance](/essentials-for-yoothemepro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![Cloudflare Stream Source Configuration](/assets/ytp/sources/cf-stream-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Token** | The Cloudflare API Token which to authenticate with. | &#x2713; |
| **Account** | The Cloudflare account which to connecto to. | &#x2713; |
| **Signing Key** | An auto-generated key used to signing private videos. | |

{% partial file="ytp-sources-common-settings.md" variables={name: "Cloudflare Stream"} /%}

---

### Authentication

Authentication is based on an API Token driven by the [Cloudflare API Token Driver](/essentials-for-yoothemepro/auth/drivers/cloudflare-api-token).

{% image %}
![Cloudflare API Key Driver](/assets/ytp/auths/driver-cloudflare-api-token.webp)
{% /image %}

{% callout title="Keys Security" %}
Learn more about Essentials [Keys security protocols](/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Video Query

Fetches a single video from the authenticated account and resolves to a [Video Type](#video-type).

{% image %}
![Cloudflare Stream Video Query](/assets/ytp/sources/cf-stream-query-video.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Video** | | The Cloudflare Stream video to create the source from. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Videos Query

Fetches videos from the authenticated account and resolves to a list of [Video Type](#video-type).

{% image %}
![Cloudflare Stream Videos Query](/assets/ytp/sources/cf-stream-query-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Search** | | The video name search term by which to filter the results. |
| **Since/Until** | | Restricts the results to videos that have been published within the specified range of dates. |
| **Status** | `Ready` | The status by whic to filter the results, within `Ready`, `Queued`, `In Progress`, `Downloading`, and `Error`. |
| **Quantity** | `20` | The amount of videos to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Content Types

The content types define the mapping options for the source content.

### Video Type

The **Video Type** defines the mapping options of a Cloudflare Stream Video object.

{% image %}
![Cloudflare Stream Video Mapping](/assets/ytp/sources/cf-stream-type-video.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this video. | `String` |
| **Title** | The title of this video. | `String` | `Limit` |
| **Iframe URL** | Generates an iframe URL with `Autoplay`, `Loop`, `Muted`, `Controls`, and `Time` arguments. | `String` |
| **Preview URL** | The preview URL of this video. | `String` |
| **Playback URL** | The streaming playback URL of this video. | `String` |
| **Size** | The formated size of this video. | `String` |
| **Duration** | The duration of this video in seconds. | `Int` |
| **Width** | The width of this video in pixels. | `Int` |
| **Height** | The height of this video in pixels. | `Int` |
| **Thumbnail** | The path to the dynamically generated and locally cached thumbnail of this video, with `Time`, `Height`, `Width`, and `Fit` arguments. | `String` |
| **Thumbnail (animated)** | The path to the dynamically generated and locally cached animated thumbnail of this video, with `Time`, `Height`, `Width`, and `Fit` arguments. | `String` |
| **Created At** | The time this video was created. | `String` | `Date` |
| **Modified At** | The time this video was last modified. | `String` | `Date` |
| **Uploaded At** | The time this video was uploaded. | `String` | `Date` |
