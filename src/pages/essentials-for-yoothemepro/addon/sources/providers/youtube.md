---
title: YouTube Source
description: Content Source based on YouTube content
icon: '
    <path stroke="none" d="M15.006 24.394h-.014c-.784-.005-7.72-.068-9.685-.6A4.018 4.018 0 012.48 20.97c-.515-1.93-.482-5.647-.478-5.944-.004-.295-.037-4.042.476-5.988l.002-.006c.366-1.358 1.474-2.474 2.824-2.844l.01-.003c1.943-.51 8.892-.573 9.678-.578h.014c.787.005 7.74.068 9.688.6a4.017 4.017 0 012.824 2.822c.533 1.947.484 5.703.478 6.02.004.312.035 3.995-.476 5.935l-.001.005a4.02 4.02 0 01-2.83 2.826l-.005.002c-1.942.51-8.892.573-9.678.578zM4.441 9.558c-.451 1.718-.408 5.417-.408 5.454v.027c-.014 1.026.034 3.997.409 5.404a1.98 1.98 0 001.394 1.39c1.45.392 7.099.516 9.163.53 2.07-.014 7.727-.134 9.166-.511a1.982 1.982 0 001.392-1.39c.375-1.427.422-4.384.408-5.403v-.032c.019-1.039-.018-4.044-.406-5.463l-.001-.004a1.982 1.982 0 00-1.396-1.393c-1.436-.393-7.093-.516-9.163-.53-2.068.014-7.72.134-9.163.51a2.037 2.037 0 00-1.395 1.41zm22.097 11.166zM12.41 19.113v-8.226L19.52 15l-7.11 4.113z"/>

'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **YouTube Source** creates sources based on [YouTube](https://www.youtube.com/) content. Based on the [multi-instance](manager#multi-instance) source workflow, it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "YouTube"} /%}

{% callout title="Cache" %}
You can adjust the cache time as needed but being this an API-driven source it is highly recommended to keep the cache active.
{% /callout %}

---

## Source and Queries

Follow through [integration](#integration) to create one or more YouTube source instances. Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| -------------- | ----------- | ----------- |
| [Videos Source](#videos-source) | | General source authenticated with an API key. |
| -- [Videos Query](#videos-query) | [Video Type](#video-type) | Fetches public videos with advanced search params. |
| [My Channel Source](#my-channel-source) | | Source based on a channel belonging to the authenticated account. |
| -- [Channel Query](#my-channel-query) | [Channel Type](#channel-type) | Fetches the channel content. |
| -- [Video Query](#my-channel-video-query) | [Video Type](#video-type) | Fetches a single video from the channel. |
| -- [Videos Query](#my-channel-videos-query) | [Video Type](#video-type) | Fetches videos from the channel. |
| -- [Playlist Query](#my-channel-playlist-query) | [Playlist Type](#playlist-type) | Fetches a specific playlist content from the channel. |
| {% nowrap %}-- -- [Playlist Videos Query](#my-channel-playlist-videos-query){% /nowrap %} | [Video Type](#video-type) | Fetches videos from the channel specific playlist. |
| [My Playlist Source](#my-playlist-source) | | Source based on a playlist belonging to the authenticated account. |
| -- [Video Query](#my-playlist-video-query) | [Video Type](#video-type) | Fetches a single video from the playlist. |
| -- [Videos Query](#my-playlist-videos-query) | [Video Type](#video-type) | Fetches videos from the playlist. |

---

## Reference

### Videos Source

The **Videos Source** creates a Dynamic Content source from YouTube videos authenticating with an [API Key](../../auths-manager#google-api-driver).

{% image %}
![YouTube Videos Source](/assets/ytp/sources/youtube-videos-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `YouTube`. |
| **API Key** | The Google API Key which to authenticate with. | &#x2713; |

---

### My Channel Source

The **My Channel Source** creates a Dynamic Content source from one of the YouTube channels owned by the [OAuth authenticated](../../auths-manager#google-oauth-driver) account.

{% image %}
![My YouTube Channel Source](/assets/ytp/sources/youtube-mychannel-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `YouTube My Channel`. |
| **Account** | The Google Account which to authenticate with. | &#x2713; |
| **Channel** | The YouTube Channel from which to create the source. | &#x2713; |

---

### My Playlist Source

The **My Playlist Source** creates a Dynamic Content source from one of the YouTube playlists owned by the [OAuth authenticated](../../auths-manager#google-oauth-driver) account.

{% image %}
![My YouTube Playlist Source](/assets/ytp/sources/youtube-myplaylist-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `YouTube My Playlist`. |
| **Account** | The Google Account which to authenticate with. | &#x2713; |
| **Playlist** | The YouTube Playlist from which to create the source. | &#x2713; |

---

### Videos Query

For each [Videos Source](#videos-source) a **Videos Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches public videos with advanced query params resolving to a list of [Video Type](#video-type).

{% image %}
![YouTube Videos Query](/assets/ytp/sources/youtube-videos-query.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Channel** | | Restricts the results to videos created by a specific channel ID. |
| **Query Term** | | The list of terms the videos should be associated with. Use the Boolean NOT (`-`) and OR (`\|`) operators to exclude or find videos that are associated with one of several search terms. For example, to match either "boating" or "sailing", set as `boating\|sailing`. Similarly, to exclude "fishing", set as `boating\|sailing -fishing`. |
| **Since/Until** | | Restricts the results to videos that have been published within the specified range of dates. |
| **Location/Radius** | | Location in conjunction with radius, defines a circular geographic area to which to restrict the videos. The location points the center of the area with latitude/longitude coordinates e.g. `37.42307,-122.08427`, while the radius is the maximum distance from the location in `m`, `km`, `ft`, or `mi` units, e.g `5km`. |
| **Region** | | Restricts the results to videos that can be viewed in the specified country. The value is an [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) country code, e.g `ES`.
| **Language** | | Restricts the results to videos that are most relevant to the specified language. The value is typically an [ISO 639-1 two-letter](https://www.loc.gov/standards/iso639-2/php/code_list.php) language code, however, you should use the values `zh-Hans` for simplified Chinese and `zh-Hant` for traditional Chinese. Note that results in other languages will still be returned if they are highly relevant to the search query term. |
| **Definition** | `Any` | Restricts the results based on the videos quality, either `High Definition`, `Standard Definition`,  or `Any`. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. |
| **Duration** | `Any` | Restricts the results based on the videos duration, either `Long`, longer than 20 minutes, `Medium`, between four and 20 minutes, `Short`, less than four minutes, or `Any`. |
| **Start** | `1` | The starting point, e.g of a list of 20 videos start from the number 2. |
| **Quantity** | `20` | The maximum amount of videos to retrieve. |
| **Order** | `Relevance` | The order in which the videos will be returned, within `Date`, reverse chronological order based on the date the videos were created, `Rating`, from highest to lowest rating, `Relevance`, based on their relevance to the search query, `Title`, alphabetically by title, or `View Count`, from highest to lowest number of views. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Query

For each [My Channel Source](#my-channel-source) a **My Channel Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches the channel content resolving to a [Channel Type](#channel-type).

{% image %}
![My YouTube Channel Query](/assets/ytp/sources/youtube-mychannel.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Video Query

For each [My Channel Source](#my-channel-source) a **My Channel Video Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches a single video from the channel resolving to a [Video Type](#video-type).

{% image %}
![My YouTube Channel Video Query](/assets/ytp/sources/youtube-mychannel-video.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Video** | | The playlist video which content to fetch. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Channel Videos Query

For each [My Channel Source](#my-channel-source) a **My Channel Videos Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches videos from the channel resolving to a list of [Video Type](#video-type).

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

For each [My Channel Source](#my-channel-source) a **My Channel Playlist Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches a single playlist from the channel resolving to a [Playlist Type](#playlist-type).

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

Part of the [My Channel Playlist Query](#my-playlist-video-query) as `Multiple Items Source -> Videos` it fetches videos from the playlist resolving to a list of [Video Type](#video-type).

{% image %}
![My YouTube Channel Videos Query](/assets/ytp/sources/youtube-mychannel-playlist-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | | The maximum amount of videos to fetch. |

---

### My Playlist Video Query

For each [My Playlist Source](#my-playlist-source) a **My Playlist Video Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches a single video from the playlist resolving to a [Video Type](#video-type).

{% image %}
![My YouTube Playlist Video Query](/assets/ytp/sources/youtube-myplaylist-video.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Video** | | The playlist video which content to fetch. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### My Playlist Videos Query

For each [My Playlist Source](#my-playlist-source) a **My Playlist Videos Query** is created on the fly and made available as Dynamic Content option under the YouTube Group. It fetches videos from the playlist resolving to a list of [Video Type](#video-type).

{% image %}
![My YouTube Playlist Videos Query](/assets/ytp/sources/youtube-myplaylist-videos.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Start** | `1` | The starting position to retrieve the videos at. |
| **Quantity** | `20` | The maximum amount of videos to fetch. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Video Type

The **Video Type** defines the mapping options of a YouTube Video object.

{% image %}
![YouTube Video Mapping](/assets/ytp/sources/youtube-type-video.webp)
{% /image %}

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

---

### Channel Type

The **Channel Type** defines the mapping options of a YouTube Channel object.

{% image %}
![YouTube Channel Mapping](/assets/ytp/sources/youtube-type-channel.webp)
{% /image %}

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

---

### Playlist Type

The **Playlist Type** defines the mapping options of a YouTube Playlist object.

{% image %}
![YouTube Video Mapping](/assets/ytp/sources/youtube-type-playlist.webp)
{% /image %}

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
