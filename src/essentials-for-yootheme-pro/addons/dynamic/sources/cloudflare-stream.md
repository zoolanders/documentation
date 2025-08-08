# Cloudflare Stream Source Provider

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/cloudflare.svg-->
</div>

The **Cloudflare Stream Source** feeds data from [Cloudflare Stream](https://www.cloudflare.com/products/cloudflare-stream/) supporting [Video](#video-query) and [Videos](#videos-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

![Cloudflare Stream Source Configuration](./assets/cf-stream-config.webp)

| Setting | Description |
| --- | --- |
| *Token* | The Cloudflare API Token which to authenticate with. |
| *Account* | The Cloudflare account which to connecto to. |
| *Signing Key* | An auto-generated key used to signing private videos. Not necessary for public videos. |

## Video Query

Fetches a single video from the authenticated account and resolves to a [Video Type](#video-type).

![Cloudflare Stream Video Query](./assets/cf-stream-query-video.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Video* | The Cloudflare Stream video to create the source from. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Videos Query

Fetches videos from the authenticated account and resolves to a list of [Video Type](#video-type).

![Cloudflare Stream Videos Query](./assets/cf-stream-query-videos.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Search* | The video name search term by which to filter the results. | | &#x2713; |
| *Since/Until* | Restricts the results to videos that have been published within the specified range of dates. | | &#x2713; |
| *Status* | The status by whic to filter the results, within *Ready*, *Queued*, *In Progress*, *Downloading*, and *Error*. | `Ready` |
| *Quantity* | The amount of videos to fetch. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Video Type

Defines the mapping options of a Cloudflare Stream Video object.

![Cloudflare Stream Video Mapping](./assets/cf-stream-type-video.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this video. | *String* |
| *Title* | The title of this video. | *String* | *Limit* |
| *Iframe URL* | Generates an iframe URL with *Autoplay*, *Loop*, *Muted*, *Controls*, and *Time* arguments. | *String* |
| *Preview URL* | The preview URL of this video. | *String* |
| *Playback URL* | The streaming playback URL of this video. | *String* |
| *Size* | The formated size of this video. | *String* |
| *Duration* | The duration of this video in seconds. | *Int* |
| *Width* | The width of this video in pixels. | *Int* |
| *Height* | The height of this video in pixels. | *Int* |
| *Thumbnail* | The path to the dynamically generated and locally cached thumbnail of this video, with *Time*, *Height*, *Width*, and *Fit* arguments. | *String* |
| *Thumbnail (animated)* | The path to the dynamically generated and locally cached animated thumbnail of this video, with *Time*, *Height*, *Width*, and *Fit* arguments. | *String* |
| *Created At* | The time this video was created. | *String* | *Date* |
| *Modified At* | The time this video was last modified. | *String* | *Date* |
| *Uploaded At* | The time this video was uploaded. | *String* | *Date* |
