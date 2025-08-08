# TikTok Source Provider

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/tiktok.svg-->
</div>

The **TikTok Source** feeds media from [TikTok](https://www.vimeo.com) supporting [My Videos](#my-videos-query) query.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

![TikTok Source Configuration](./assets/tiktok-config.webp)

| Setting | Description |
| --- | --- |
| *Account* | The TikTok Account which to authenticate with. |

## My Videos Query

Fetches videos from the authenticated account and resolves to a list of [Video Type](#video-type).

![TikTok Videos Query](./assets/tiktok-query-videos.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Filter by ID* | Filter videos comma separated list of IDs, up to maximum 20 videos. | | &#x2713; |
| *Filter by date* | Filter videos created before the specified date. | | &#x2713; |
| *Start* | The starting point, e.g of a list of 20 videos start from the number 2. | `1` | &#x2713; |
| *Quantity* | The maximum amount of videos to retrieve. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Video Type

Defines the mapping options of a TikTok Video object.

![TikTok Video Mapping](./assets/tiktok-type-video.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this video. | *String* |
| *Title* | The title of this video, max length 150. | *String* | *Limit* |
| *Description* | The description for this video, max length 150. | *String* | *Limit* |
| *Duration* | The duration of this video in seconds. | *Int* |
| *Width* | The width of this video. | *Int* |
| *Height* | The height of this video. | *Int* |
| *Cover* | The path to the locally cached video cover. | *String* |
| *Embed Link* | The embed link of tiktok.com for this video. | *String* |
| *Embed HTML* | The HTML code for embedded video. | *String* |
| *Share URL* | A shareable link for this video. Note that the website behaves differently on Mobile and Desktop devices. | *String* |
| *Created At* | The time this video was created. | *String* | *Date* |
| *Total Shares* | Number of times this video has been shared. | *Int* |
| *Total Likes* | Number of times this video has been liked. | *Int* |
| *Total Comments* | Number of times this video has been commented. | *Int* |
| *Total Views* | Number of times this video has been viewed. | *Int* |
