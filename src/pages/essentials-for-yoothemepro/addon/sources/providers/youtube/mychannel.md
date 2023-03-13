---
title: YouTube My Channel Source
description: Content Source based on your YouTube Channel
icon: '
    <path stroke="none" d="M15.006 24.394h-.014c-.784-.005-7.72-.068-9.685-.6A4.018 4.018 0 012.48 20.97c-.515-1.93-.482-5.647-.478-5.944-.004-.295-.037-4.042.476-5.988l.002-.006c.366-1.358 1.474-2.474 2.824-2.844l.01-.003c1.943-.51 8.892-.573 9.678-.578h.014c.787.005 7.74.068 9.688.6a4.017 4.017 0 012.824 2.822c.533 1.947.484 5.703.478 6.02.004.312.035 3.995-.476 5.935l-.001.005a4.02 4.02 0 01-2.83 2.826l-.005.002c-1.942.51-8.892.573-9.678.578zM4.441 9.558c-.451 1.718-.408 5.417-.408 5.454v.027c-.014 1.026.034 3.997.409 5.404a1.98 1.98 0 001.394 1.39c1.45.392 7.099.516 9.163.53 2.07-.014 7.727-.134 9.166-.511a1.982 1.982 0 001.392-1.39c.375-1.427.422-4.384.408-5.403v-.032c.019-1.039-.018-4.044-.406-5.463l-.001-.004a1.982 1.982 0 00-1.396-1.393c-1.436-.393-7.093-.516-9.163-.53-2.068.014-7.72.134-9.163.51a2.037 2.037 0 00-1.395 1.41zm22.097 11.166zM12.41 19.113v-8.226L19.52 15l-7.11 4.113z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **YouTube My Channel Source**, part of the [YouTube Source](../youtube) collection, creates sources based on a YouTube channel from the authenticated user.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![My YouTube Channel Source](/assets/ytp/sources/youtube-mychannel-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Google Account which to [authenticate](#authentication) with. | &#x2713; |
| **Channel** | The YouTube Channel from which to create the source. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "YouTube Channel"} /%}

---

### Authentication

Authentication is based on the OAuth protocol driven by the [Google OAuth Driver](/essentials-for-yoothemepro/auth/drivers/google-oauth).

{% image %}
![Google OAuth Driver](/assets/ytp/auths/driver-google-oauth.webp)
{% /image %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### My Channel Query

Fetches the channel content resolving to a [Channel Type](../youtube#channel-type).

{% image %}
![My YouTube Channel Query](/assets/ytp/sources/youtube-mychannel.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Video Query

Fetches a single video from the channel resolving to a [Video Type](../youtube#video-type).

{% image %}
![My YouTube Channel Video Query](/assets/ytp/sources/youtube-mychannel-video.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Video** | | The playlist video which content to fetch. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Videos Query

Fetches videos from the channel resolving to a list of [Video Type](../youtube#video-type).

{% image %}
![My YouTube Channel Videos Query](/assets/ytp/sources/youtube-mychannel-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | `20` | The maximum amount of videos to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Playlist Query

Fetches a single playlist from the channel resolving to a [Playlist Type](../youtube#playlist-type).

{% image %}
![My YouTube Channel Playlist Query](/assets/ytp/sources/youtube-mychannel-playlist.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Playlist** | | The YouTube Playlist which content to fetch. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. Minimum amount allowed is `3600`. |
| **Multi Items** | | The related multi-items content to query instead with `Videos` as the only option. |

---

### My Channel Playlist Videos Query

Fetches videos from the playlist resolving to a list of [Video Type](../youtube#video-type).

{% image %}
![My YouTube Channel Videos Query](/assets/ytp/sources/youtube-mychannel-playlist-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | | The maximum amount of videos to fetch. |
