# Google Photos Source Provider

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/google-photos.svg-->
</div>

The **Google Photos Source** feeds media from [Google Photos](https://photos.google.com/) supporting [Album](#album-query), [Albums](#albums-query) and [Album Media](#album-media-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

![Google Photos Configuration](./assets/google-photos-config.webp)

| Setting | Description |
| --- | --- |
| *Account* | The Google account which to authenticate with. |

## Album Query

Fetches a single album resolving to a [Album Type](#album-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Album ID* | The ID of the album to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Album Media Query

Fetches media from a single album resolving to a list of [Media Type](#media-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Album ID* | The ID of the album to query. | | &#x2713; |
| *Type* | The media type which to query, _All_, _Images_ or _Videos_. | `All` |
| *Order By* | The order by which to query the media _Date (desc)_ or _Date (asc)_. | `Date (desc)` |
| *Start* | The offset applied to the query. | `1` | &#x2713; |
| *Quantity* | The limit applied to the query. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Albums Query

Fetches all albums from the library resolving to a list of [Album Type](#album-type).

| Setting | Description | Default |
| --- | --- | --- |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Album Type

Defines the mapping options of a Google Photos Album object.

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the album. | *String* |
| *Title* | Title of the album. | *String* | *Limit* |
| *Cover Photo URL* | The album cover photo URL. | *String* |
| *Total Media Count* | The album total amount of media. | *Int* |

## Media Type

Defines the mapping options of a Google Photos Media object.

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Opaque identifier of the media. | *String* |
| *URL* | The path to the locally cached media file, with optionall arguments `Width` and `Height` . | *String* |
| *Description* | Description of the media. This is shown to the user in the item's info section in the Google Photos app. | *String* | *Limit* |
| *Filename* | Filename of the media. This is shown to the user in the item's info section in the Google Photos app. | *String* |
| *MIME Type* | MIME type of the media. For example, `image/jpeg`. | *String* |

## Metadata Type

Defines the mapping options of a Google Photos Metadata object.

| Option | Description | Type |
| --- | --- | --- |
| *Width* | Original width (in pixels) of the media. | *Int* |
| *Height* | Original height (in pixels) of the media. | *Int* |
| *Creation Time* | Time when the media was first created (not when it was uploaded to Google Photos). | *String* |
| *Camera Brand* | Brand of the camera with which the photo was taken. | *String* |
| *Camera Model* | Model of the camera with which the photo was taken. | *String* |
| *Frame Rate* | Frame rate of the media in case is a video. | *Int* |
| *Camera ISO* | ISO of the camera with which the photo was taken. | *Int* |
| *Focal Length* | Focal length of the camera lens with which the photo was taken. | *Int* |
| *Aperture F* | Aperture f number of the camera lens with which the photo was taken. | *Int* |
| *Exposure Time* | Exposure time of the camera aperture in seconds when the photo was taken. | *String* |
