---
title: YouTube Source
description: Content Source based on YouTube
icon: '
    <path stroke="none" d="M15.006 24.394h-.014c-.784-.005-7.72-.068-9.685-.6A4.018 4.018 0 012.48 20.97c-.515-1.93-.482-5.647-.478-5.944-.004-.295-.037-4.042.476-5.988l.002-.006c.366-1.358 1.474-2.474 2.824-2.844l.01-.003c1.943-.51 8.892-.573 9.678-.578h.014c.787.005 7.74.068 9.688.6a4.017 4.017 0 012.824 2.822c.533 1.947.484 5.703.478 6.02.004.312.035 3.995-.476 5.935l-.001.005a4.02 4.02 0 01-2.83 2.826l-.005.002c-1.942.51-8.892.573-9.678.578zM4.441 9.558c-.451 1.718-.408 5.417-.408 5.454v.027c-.014 1.026.034 3.997.409 5.404a1.98 1.98 0 001.394 1.39c1.45.392 7.099.516 9.163.53 2.07-.014 7.727-.134 9.166-.511a1.982 1.982 0 001.392-1.39c.375-1.427.422-4.384.408-5.403v-.032c.019-1.039-.018-4.044-.406-5.463l-.001-.004a1.982 1.982 0 00-1.396-1.393c-1.436-.393-7.093-.516-9.163-.53-2.068.014-7.72.134-9.163.51a2.037 2.037 0 00-1.395 1.41zm22.097 11.166zM12.41 19.113v-8.226L19.52 15l-7.11 4.113z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The YouTube Source creates sources based on [YouTube](https://www.youtube.com/) content. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow, it allows connecting to multiple accounts with different configurations.

Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| -------------- | ----------- | ----------- |
| [Videos Source](./videos) | | General source authenticated with an API key. |
| -- [Videos Query](./videos#videos-query) | [Video Type](#video-type) | Fetches public videos with advanced search params. |
| [My Channel Source](./mychannel) | | Source based on a channel belonging to the authenticated account. |
| -- [Channel Query](./mychannel#my-channel-query) | [Channel Type](#channel-type) | Fetches the channel content. |
| -- [Video Query](./mychannel#my-channel-video-query) | [Video Type](#video-type) | Fetches a single video from the channel. |
| -- [Videos Query](./mychannel#my-channel-videos-query) | [Video Type](#video-type) | Fetches videos from the channel. |
| -- [Playlist Query](./mychannel#my-channel-playlist-query) | [Playlist Type](#playlist-type) | Fetches a specific playlist content from the channel. |
| {% nowrap %}-- -- [Playlist Videos Query](./mychannel#my-channel-playlist-videos-query){% /nowrap %} | [Video Type](#video-type) | Fetches videos from the channel specific playlist. |
| [My Playlist Source](./myplaylist) | | Source based on a playlist belonging to the authenticated account. |
| -- [Video Query](./myplaylist#my-playlist-video-query) | [Video Type](#video-type) | Fetches a single video from the playlist. |
| -- [Videos Query](./myplaylist#my-playlist-videos-query) | [Video Type](#video-type) | Fetches videos from the playlist. |

## Content Types

The content types define the mapping options for the source content.

### Video Type

The **Video Type** defines the mapping options of a YouTube Video object.

![YouTube Video Mapping](/assets/ytp/sources/youtube-type-video.webp)

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this video. | `String` |
| **Title** | The title of this video. | `String` | `Limit` |
| **Description** | The description of this video. | `String` | `Limit` |
| **URL** | The YouTube public URL, e.g. `www.youtube.com/watch?v=c2pz2mlSfXA`. | `String` |
| **Iframe Player** | Generates an HTML embed video player with several configuration settings. | `String` |
| **Published At** | The date this video was published. | `String` | `Date` |
| **Thumbnail URL** | The URL to this video thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| **Thumbnail Width** | The width of this video thumbnail with same size options as for URL. | `String` |
| **Thumbnail Height** | The height of this video thumbnail with same size options as for URL. | `String` |
| **Total Views** | Number of times this video has been viewed. | `Int` |
| **Total Comments** | Number of comments for this video. | `Int` |
| **Total Likes** | Number of users that have indicated they like this video. | `Int` |
| **Total Dislikes** | Number of users that have indicated they dislike this video. | `Int` |

### Channel Type

The **Channel Type** defines the mapping options of a YouTube Channel object.

![YouTube Channel Mapping](/assets/ytp/sources/youtube-type-channel.webp)

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this channel. | `String` |
| **Title** | The title of this channel. | `String` | `Limit` |
| **Description** | The description of this channel. | `String` | `Limit` |
| **Country** | The country with which this channel is associated. | `String` |
| **Published At** | The date this channel was published. | `String` | `Date` |
| **Thumbnail URL** | The URL to this channel thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| **Thumbnail Width** | The width of this channel thumbnail with same size options as for URL. | `String` |
| **Thumbnail Height** | The height of this channel thumbnail with same size options as for URL. | `String` |
| **Total Views** | Number of times this channel has been viewed. | `Int` |
| **Total Videos** | Number of public videos uploaded to this channel. | `Int` |
| **Total Subscribers** | Number of subscribers this channel has, the value is rounded down to three significant figures. | `Int` |

### Playlist Type

The **Playlist Type** defines the mapping options of a YouTube Playlist object.

![YouTube Video Mapping](/assets/ytp/sources/youtube-type-playlist.webp)

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | The unique identifier of this playlist. | `String` |
| **Title** | The title of this playlist. | `String` | `Limit` |
| **Description** | The description of this playlist. | `String` | `Limit` |
| **Iframe Player** | Generates an HTML embed playlist player with several configuration settings. | `String` |
| **Published At** | The date this playlist was published. | `String` | `Date` |
| **Thumbnail URL** | The URL to this playlist thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| **Thumbnail Width** | The width of this playlist thumbnail with same size options as for URL. | `String` |
| **Thumbnail Height** | The height of this playlist thumbnail with same size options as for URL. | `String` |
