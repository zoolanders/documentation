## Google Photos Source {#google-photos}

![Google Photos Source](/essentials-for-yootheme-pro/assets/brands/google-photos.svg)

The **Google Photos Source** feeds media from [Google Photos](https://photos.google.com/) supporting [Album](#google-photos-album-query), [Albums](#google-photos-albums-query) and [Album Media](#google-photos-album-media-query) queries.

<!--@include: ./common-provider-settings.md-->

![Google Photos Configuration](./assets/providers/google-photos-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Account* | The Google account which to authenticate with. | &#x2713; |

### Google Photos Album Query

Fetches a single album resolving to a [Google Photos Album Type](#google-photos-album-type).

| Setting | Default | Description | Required |
| --- | --- | --- | --- |
| *Album ID* | | The ID of the album to query. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Google Photos Albums Query

Fetches all albums from the library resolving to a list of [Google Photos Album Type](#google-photos-album-type).

| Setting | Default | Description |
| --- | --- | --- |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Google Photos Album Media Query

Fetches media from a single album resolving to a list of [Google Photos Media Type](#google-photos-media-type).

| Setting | Default | Description | Required |
| --- | --- | --- | --- |
| *Album ID* | | The ID of the album to query. | &#x2713; |
| *Page Size* | | The number of the page which to query. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Google Photos Album Type

Defines the mapping options of a Google Photos Album object.

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the album. | *String* |
| *Title* | Title of the album. | *String* | `Limit` |
| *Cover Photo URL* | The album cover photo URL. | *String* |
| *Total Media Count* | The album total amount of media. | *Int* |

### Google Photos Media Type

Defines the mapping options of a Google Photos Media object.

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Opaque identifier of the media. | *String* |
| *URL* | The path to the locally cached media file, with optionall arguments `Width` and `Height` . | *String* |
| *Description* | Description of the media. This is shown to the user in the item's info section in the Google Photos app. | *String* | `Limit` |
| *Filename* | Filename of the media. This is shown to the user in the item's info section in the Google Photos app. | *String* |
| *MIME Type* | MIME type of the media. For example, `image/jpeg`. | *String* |

### Google Photos Metadata Type

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
