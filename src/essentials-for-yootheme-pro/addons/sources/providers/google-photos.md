---
title: Google Photos
description: Content Source based on Google Photos media
---

<!--@include: ../_partials/provider-intro.md-->

The Google Photos source feeds media from the Google Photos service. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

![Google Photos Configuration](../assets/providers/google-photos-config.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Google account which to authenticate with. | &#x2713; |

::: details Common Settings
<!--@include: ../_partials/provider-common-settings.md-->
:::

### Authentication

Authentication is based on the OAuth protocol driven by the [Google OAuth Driver](/essentials-for-yootheme-pro/auth/drivers/google-oauth).

![Google OAuth Driver](/essentials-for-yootheme-pro/auth/assets/driver/google-oauth.webp)

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Album Query

Fetches a single album resolving to a [Album Type](#album-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Album ID** | |  The ID of the album to query. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Albums Query

Fetches all albums from the library resolving to a list of [Album Type](#album-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Album Media Query

Fetches media from a single album resolving to a list of [Media Type](#media-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Album ID** | |  The ID of the album to query. | &#x2713; |
| **Page Size** | |  The number of the page which to query. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

## Content Types

The content types define the mapping options for the source content.

### Album Type

Defines the mapping options of an Album object.

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of the album. | `String` |
| **Title** | Title of the album. | `String` | `Limit` |
| **Cover Photo URL** | The album cover photo URL. | `String` |
| **Total Media Count** | The album total amount of media. | `Int` |

### Media Type

Defines the mapping options of a Media object.

#### Media

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Opaque identifier of the media. | `String` |
| **URL** | The path to the locally cached media file, with optionall arguments `Width` and `Height` . | `String` |
| **Description** | Description of the media. This is shown to the user in the item's info section in the Google Photos app. | `String` | `Limit` |
| **Filename** | Filename of the media. This is shown to the user in the item's info section in the Google Photos app. | `String` |
| **MIME Type** | MIME type of the media. For example, `image/jpeg`. | `String` |

#### Metadata

| Option | Description | Type |
| ------ | ----------- | ---- |
| **Width** | Original width (in pixels) of the media. | `Int` |
| **Height** | Original height (in pixels) of the media. | `Int` |
| **Creation Time** | Time when the media was first created (not when it was uploaded to Google Photos). | `String` |
| **Camera Brand** | Brand of the camera with which the photo was taken. | `String` |
| **Camera Model** | Model of the camera with which the photo was taken. | `String` |

#### Metadata (Video)

| Option | Description | Type |
| ------ | ----------- | ---- |
| **Frame Rate** | Frame rate of the media in case is a video. | `Int` |

#### Metadata (Photo)

| Option | Description | Type |
| ------ | ----------- | ---- |
| **Camera ISO** | ISO of the camera with which the photo was taken. | `Int` |
| **Focal Length** | Focal length of the camera lens with which the photo was taken. | `Int` |
| **Aperture F** | Aperture f number of the camera lens with which the photo was taken. | `Int` |
| **Exposure Time** | Exposure time of the camera aperture in seconds when the photo was taken. | `String` |
