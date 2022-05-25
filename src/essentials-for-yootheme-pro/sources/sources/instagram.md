# Instagram

This source is based on Media from Personal and Business Instagram accounts. A Personal account will allow you to display the images from your own Instagram account, but not from any of the Facebook pages you manage. The Professional account will instead allow you to display media from Facebook pages [associated](https://www.facebook.com/business/help/898752960195806) with an Instagram account, but not any of your Personal ones. If you have both, simply create two or more sources.

Once the source has been created, as instructed in the [Getting Started](../sources/#getting-started) guide, you will be able to map its contents to any Builder element.

The cache is set to `3600` seconds by default, if your workflow requires immediate results disable the cache by setting it to `0`, but being this an API-driven source it is not recommended.

::: tip
This source requires granting permission to the _ZOOlanders OAuth App_, but you can also create your Facebook App and use it instead.
:::

## Queries

The following source queries are supported out of the box, although the [Instagram API](https://developers.facebook.com/docs/instagram-api) might allow further integration.

### Media Query

Retrieves all photo and video IG Media objects of the authenticated User account or Page associated to a Business account.

### Hashtagged Media Query

Business Accounts Only. Retrieves a collection of the most recently published or the most popular photo and video IG Media objects that have been tagged with a hashtag.

## Types

### Media Type

Each query returns a, or a list of, `Media Type` which has the following available properties for mapping.

| Name | Type | Description |
| -----| ---- | ----------- |
| Media Type | `String` | Can be `CAROUSEL_ALBUM`, `IMAGE`, or `VIDEO`. |
| Media Url | `String` | The Media Url, locally cached the first time is accessed. |
| Media Thumbnail Url | `String` | The Media Thumbnail Url, locally cached the first time is accessed. |
| Caption | `String` | The caption content. |
| Permalink | `String` | Permanent URL to the media. |
| Timestamp | `String` | ISO 8601-formatted creation date in UTC (default is UTC ±00:00). |
| Username | `String` | Username of user who created the media. |
| Hashtags | `String` | Media hashtags listed with a custom separator. |
| Hashtags | `ListOf` | Media hashtags available as a multi item content with an `id` and `name` available for mapping. |
| Comments Count | `Int` | Total of comments (Business accounts only). |
| Like Count | `Int` | Total of likes (Business accounts only). |
