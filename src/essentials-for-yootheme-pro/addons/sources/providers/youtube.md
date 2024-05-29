---
title: YouTube
description: Content Source based on YouTube
---

<!--@include: ../_partials/provider-intro-->

The YouTube Source creates sources based on [YouTube](https://www.youtube.com/) content. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources) source workflow, it allows connecting to multiple accounts with different configurations.

Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| --- | --- | --- |
| [Videos Source](./youtube/videos) | | General source authenticated with an API key. |
| -- [Videos Query](./youtube/videos#videos-query) | [Video Type](#video-type) | Fetches public videos with advanced search params. |
| [My Channel Source](./youtube/mychannel) | | Source based on a channel belonging to the authenticated account. |
| -- [Channel Query](./youtube/mychannel#my-channel-query) | [Channel Type](#channel-type) | Fetches the channel content. |
| -- [Video Query](./youtube/mychannel#my-channel-video-query) | [Video Type](#video-type) | Fetches a single video from the channel. |
| -- [Videos Query](./youtube/mychannel#my-channel-videos-query) | [Video Type](#video-type) | Fetches videos from the channel. |
| -- [Playlist Query](./youtube/mychannel#my-channel-playlist-query) | [Playlist Type](#playlist-type) | Fetches a specific playlist content from the channel. |
| -- [Playlist Videos Query](./youtube/mychannel#my-channel-playlist-videos-query) | [Video Type](#video-type) | Fetches videos from the channel specific playlist. |
| [My Playlist Source](./youtube/myplaylist) | | Source based on a playlist belonging to the authenticated account. |
| -- [Video Query](./youtube/myplaylist#my-playlist-video-query) | [Video Type](#video-type) | Fetches a single video from the playlist. |
| -- [Videos Query](./youtube/myplaylist#my-playlist-videos-query) | [Video Type](#video-type) | Fetches videos from the playlist. |

## Content Types

The content types define the mapping options for the source content.

### Video Type

The **Video Type** defines the mapping options of a YouTube Video object.

![YouTube Video Mapping](../assets/providers/youtube-type-video.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this video. | `String` |
| *Title* | The title of this video. | `String` | `Limit` |
| *Description* | The description of this video. | `String` | `Limit` |
| *URL* | The YouTube public URL, e.g. `www.youtube.com/watch?v=c2pz2mlSfXA`. | `String` |
| *Iframe Player* | Generates an HTML embed video player with several configuration settings. | `String` |
| *Published At* | The date this video was published. | `String` | `Date` |
| *Thumbnail URL* | The URL to this video thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| *Thumbnail Width* | The width of this video thumbnail with same size options as for URL. | `String` |
| *Thumbnail Height* | The height of this video thumbnail with same size options as for URL. | `String` |
| *Total Views* | Number of times this video has been viewed. | `Int` |
| *Total Comments* | Number of comments for this video. | `Int` |
| *Total Likes* | Number of users that have indicated they like this video. | `Int` |
| *Total Dislikes* | Number of users that have indicated they dislike this video. | `Int` |

### Channel Type

The **Channel Type** defines the mapping options of a YouTube Channel object.

![YouTube Channel Mapping](../assets/providers/youtube-type-channel.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this channel. | `String` |
| *Title* | The title of this channel. | `String` | `Limit` |
| *Description* | The description of this channel. | `String` | `Limit` |
| *Country* | The country with which this channel is associated. | `String` |
| *Published At* | The date this channel was published. | `String` | `Date` |
| *Thumbnail URL* | The URL to this channel thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| *Thumbnail Width* | The width of this channel thumbnail with same size options as for URL. | `String` |
| *Thumbnail Height* | The height of this channel thumbnail with same size options as for URL. | `String` |
| *Total Views* | Number of times this channel has been viewed. | `Int` |
| *Total Videos* | Number of public videos uploaded to this channel. | `Int` |
| *Total Subscribers* | Number of subscribers this channel has, the value is rounded down to three significant figures. | `Int` |

### Playlist Type

The **Playlist Type** defines the mapping options of a YouTube Playlist object.

![YouTube Video Mapping](../assets/providers/youtube-type-playlist.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this playlist. | `String` |
| *Title* | The title of this playlist. | `String` | `Limit` |
| *Description* | The description of this playlist. | `String` | `Limit` |
| *Iframe Player* | Generates an HTML embed playlist player with several configuration settings. | `String` |
| *Published At* | The date this playlist was published. | `String` | `Date` |
| *Thumbnail URL* | The URL to this playlist thumbnail with different size options, `Low`, `Medium` (default), `High Resolution`, `Standard`, and `Max Resolution` | `String` |
| *Thumbnail Width* | The width of this playlist thumbnail with same size options as for URL. | `String` |
| *Thumbnail Height* | The height of this playlist thumbnail with same size options as for URL. | `String` |
