## Cloudflare Stream Source {#cloudflare-stream}

![Cloudflare Stream Source](/essentials-for-yootheme-pro/assets/brands/cloudflare.svg)

The **Cloudflare Stream Source** feeds data from [Cloudflare Stream](https://www.cloudflare.com/products/cloudflare-stream/) supporting [Video](#cloudflare-stream-video-query) and [Videos](#cloudflare-stream-videos-query) queries.

<!--@include: ./common-provider-settings.md-->

![Cloudflare Stream Source Configuration](./assets/providers/cf-stream-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Token* | The Cloudflare API Token which to authenticate with. | &#x2713; |
| *Account* | The Cloudflare account which to connecto to. | &#x2713; |
| *Signing Key* | An auto-generated key used to signing private videos. | |

### Cloudflare Stream Video Query

Fetches a single video from the authenticated account and resolves to a [Cloudflare Stream Video Type](#cloudflare-stream-video-type).

![Cloudflare Stream Video Query](./assets/providers/cf-stream-query-video.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Video* | | The Cloudflare Stream video to create the source from. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Cloudflare Stream Videos Query

Fetches videos from the authenticated account and resolves to a list of [Cloudflare Stream Video Type](#cloudflare-stream-video-type).

![Cloudflare Stream Videos Query](./assets/providers/cf-stream-query-videos.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Search* | | The video name search term by which to filter the results. |
| *Since/Until* | | Restricts the results to videos that have been published within the specified range of dates. |
| *Status* | `Ready` | The status by whic to filter the results, within _Ready_, _Queued_, _In Progress_, _Downloading_, and _Error_. |
| *Quantity* | `20` | The amount of videos to fetch. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Cloudflare Stream Video Type

Defines the mapping options of a Cloudflare Stream Video object.

![Cloudflare Stream Video Mapping](./assets/providers/cf-stream-type-video.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this video. | *String* |
| *Title* | The title of this video. | *String* | _Limit_ |
| *Iframe URL* | Generates an iframe URL with _Autoplay_, _Loop_, _Muted_, _Controls_, and _Time_ arguments. | *String* |
| *Preview URL* | The preview URL of this video. | *String* |
| *Playback URL* | The streaming playback URL of this video. | *String* |
| *Size* | The formated size of this video. | *String* |
| *Duration* | The duration of this video in seconds. | *Int* |
| *Width* | The width of this video in pixels. | *Int* |
| *Height* | The height of this video in pixels. | *Int* |
| *Thumbnail* | The path to the dynamically generated and locally cached thumbnail of this video, with _Time_, _Height_, _Width_, and _Fit_ arguments. | *String* |
| *Thumbnail (animated)* | The path to the dynamically generated and locally cached animated thumbnail of this video, with _Time_, _Height_, _Width_, and _Fit_ arguments. | *String* |
| *Created At* | The time this video was created. | *String* | _Date_ |
| *Modified At* | The time this video was last modified. | *String* | _Date_ |
| *Uploaded At* | The time this video was uploaded. | *String* | _Date_ |
