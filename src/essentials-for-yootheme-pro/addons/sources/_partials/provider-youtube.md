## YouTube Source {#youtube}

![YouTube Source](/essentials-for-yootheme-pro/assets/brands/youtube.svg)

The YouTube Source feeds data from [YouTube](https://www.youtube.com/) supporting [Videos](#youtube-videos-query), [My Channel](#youtube-my-channel-query), [My Channel Video](#youtube-my-channel-video-query), [My Channel Videos](#youtube-my-channel-videos-query), [My Channel Playlist](#youtube-my-channel-playlist-query), [My Channel Playlist Videos](#youtube-my-channel-playlist-videos-query), [My Playlist Video](#youtube-my-playlist-video-query) and [My Playlist Videos](#youtube-my-playlist-videos-query) queries.

<!--@include: ./common-provider-settings.md-->

If the source is based on a YouTube channel or playlist an oAuth authentication is required.

![YouTube Source Configuration Account](./assets/providers/youtube-config-account.webp)

![YouTube Source Configuration Channel](./assets/providers/youtube-config-channel.webp)

![YouTube Source Configuration Playlist](./assets/providers/youtube-config-playlist.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Account* | The Google Account which to authenticate with. | &#x2713; |
| *Channel* | The YouTube Channel from which to create the source. | &#x2713; |
| *Playlist* | The YouTube Playlist from which to create the source. | &#x2713; |

If the source is based on YouTube videos an API Key is required instead.

![YouTube Videos Source Configuration](./assets/providers/youtube-videos-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *API Key* | The Google API Key which to authenticate with. | &#x2713; |

### YouTube Videos Query

Fetches public videos with advanced query params resolving to a list of [YouTube Video Type](#youtube-video-type).

![YouTube Videos Query](./assets/providers/youtube-videos-query.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Channel* | | Restricts the results to videos created by a specific channel ID. |
| *Query Term* | | The list of terms the videos should be associated with. Use the Boolean NOT (`-`) and OR (`\|`) operators to exclude or find videos that are associated with one of several search terms. For example, to match either "boating" or "sailing", set as `boating\|sailing`. Similarly, to exclude "fishing", set as `boating\|sailing -fishing`. |
| *Since/Until* | | Restricts the results to videos that have been published within the specified range of dates. |
| *Location/Radius* | | Location in conjunction with radius, defines a circular geographic area to which to restrict the videos. The location points the center of the area with latitude/longitude coordinates e.g. `37.42307,-122.08427`, while the radius is the maximum distance from the location in `m`, `km`, `ft`, or `mi` units, e.g `5km`. |
| *Region* | | Restricts the results to videos that can be viewed in the specified country. The value is an [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) country code, e.g `ES`. |
| *Language* | | Restricts the results to videos that are most relevant to the specified language. The value is typically an [ISO 639-1 two-letter](https://www.loc.gov/standards/iso639-2/php/code_list.php) language code, however, you should use the values `zh-Hans` for simplified Chinese and `zh-Hant` for traditional Chinese. Note that results in other languages will still be returned if they are highly relevant to the search query term. |
| *Definition* | `Any` | Restricts the results based on the videos quality, either _High Definition_, _Standard Definition_, or _Any_. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. |
| *Duration* | `Any` | Restricts the results based on the videos duration, either _Long_, longer than 20 minutes, `Medium`, between four and 20 minutes, _Short_, less than four minutes, or _Any_. |
| *Start* | `1` | The starting point, e.g of a list of 20 videos start from the number 2. |
| *Quantity* | `20` | The maximum amount of videos to retrieve. |
| *Order* | `Relevance` | The order in which the videos will be returned, within *Date*, reverse chronological order based on the date the videos were created, _Rating_, from highest to lowest rating, _Relevance_, based on their relevance to the search query, _Title_, alphabetically by title, or _View Count_, from highest to lowest number of views. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### YouTube My Channel Query

Fetches the channel content resolving to a [YouTube Channel Type](#youtube-channel-type).

![My YouTube Channel Query](./assets/providers/youtube-mychannel.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### YouTube My Channel Video Query

Fetches a single video from the channel resolving to a [YouTube Video Type](#youtube-video-type).

![My YouTube Channel Video Query](./assets/providers/youtube-mychannel-video.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Video* | | The playlist video which content to fetch. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### YouTube My Channel Videos Query

Fetches videos from the channel resolving to a list of [YouTube Video Type](#youtube-video-type).

![My YouTube Channel Videos Query](./assets/providers/youtube-mychannel-videos.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Start* | `1` | The starting position to retrieve the videos at. |
| *Quantity* | `20` | The maximum amount of videos to fetch. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### YouTube My Channel Playlist Query

Fetches a single playlist from the channel resolving to a [YouTube Playlist Type](#youtube-playlist-type).

![My YouTube Channel Playlist Query](./assets/providers/youtube-mychannel-playlist.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Playlist* | | The YouTube Playlist which content to fetch. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. Minimum amount allowed is `3600`. |
| *Multi Items* | | The related multi-items content to query instead with _Videos_ as the only option. |

### YouTube My Channel Playlist Videos Query

Fetches videos from the playlist resolving to a list of [YouTube Video Type](#youtube-video-type).

![My YouTube Channel Videos Query](./assets/providers/youtube-mychannel-playlist-videos.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Start* | `1` | The starting position to retrieve the videos at. |
| *Quantity* | | The maximum amount of videos to fetch. |

### YouTube My Playlist Video Query

Fetches a single video from the playlist resolving to a [YouTube Video Type](#youtube-video-type).

![My YouTube Playlist Video Query](./assets/providers/youtube-myplaylist-video.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Video* | | The playlist video which content to fetch. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### YouTube My Playlist Videos Query

Fetches videos from the playlist resolving to a list of [YouTube Video Type](#youtube-video-type).

![My YouTube Playlist Videos Query](./assets/providers/youtube-myplaylist-videos.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Start* | `1` | The starting position to retrieve the videos at. |
| *Quantity* | `20` | The maximum amount of videos to fetch. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### YouTube Video Type

Defines the mapping options of a YouTube Video object.

![YouTube Video Mapping](./assets/providers/youtube-type-video.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this video. | *String* |
| *Title* | The title of this video. | *String* | *Limit* |
| *Description* | The description of this video. | *String* | *Limit* |
| *URL* | The YouTube public URL, e.g. `www.youtube.com/watch?v=c2pz2mlSfXA`. | *String* |
| *Iframe Player* | Generates an HTML embed video player with several configuration settings. | *String* |
| *Published At* | The date this video was published. | *String* | *Date* |
| *Thumbnail URL* | The URL to this video thumbnail with different size options, _Low_, _Medium_ (default), _High Resolution_, _Standard_, and `Max Resolution* | *String* |
| *Thumbnail Width* | The width of this video thumbnail with same size options as for URL. | *String* |
| *Thumbnail Height* | The height of this video thumbnail with same size options as for URL. | *String* |
| *Total Views* | Number of times this video has been viewed. | *Int* |
| *Total Comments* | Number of comments for this video. | *Int* |
| *Total Likes* | Number of users that have indicated they like this video. | *Int* |
| *Total Dislikes* | Number of users that have indicated they dislike this video. | *Int* |

### YouTube Channel Type

Defines the mapping options of a YouTube Channel object.

![YouTube Channel Mapping](./assets/providers/youtube-type-channel.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this channel. | *String* |
| *Title* | The title of this channel. | *String* | *Limit* |
| *Description* | The description of this channel. | *String* | *Limit* |
| *Country* | The country with which this channel is associated. | *String* |
| *Published At* | The date this channel was published. | *String* | *Date* |
| *Thumbnail URL* | The URL to this channel thumbnail with different size options, _Low_, _Medium_ (default), _High Resolution_, _Standard_, and _Max Resolution_ | *String* |
| *Thumbnail Width* | The width of this channel thumbnail with same size options as for URL. | *String* |
| *Thumbnail Height* | The height of this channel thumbnail with same size options as for URL. | *String* |
| *Total Views* | Number of times this channel has been viewed. | *Int* |
| *Total Videos* | Number of public videos uploaded to this channel. | *Int* |
| *Total Subscribers* | Number of subscribers this channel has, the value is rounded down to three significant figures. | *Int* |

### YouTube Playlist Type

Defines the mapping options of a YouTube Playlist object.

![YouTube Video Mapping](./assets/providers/youtube-type-playlist.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this playlist. | *String* |
| *Title* | The title of this playlist. | *String* | *Limit* |
| *Description* | The description of this playlist. | *String* | *Limit* |
| *Iframe Player* | Generates an HTML embed playlist player with several configuration settings. | *String* |
| *Published At* | The date this playlist was published. | *String* | *Date* |
| *Thumbnail URL* | The URL to this playlist thumbnail with different size options, _Low_, _Medium_ (default), _High Resolution_, _Standard_, and _Max Resolution_ | *String* |
| *Thumbnail Width* | The width of this playlist thumbnail with same size options as for URL. | *String* |
| *Thumbnail Height* | The height of this playlist thumbnail with same size options as for URL. | *String* |
