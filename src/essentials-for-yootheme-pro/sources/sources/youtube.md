# YouTube

This source is based on Media from YouTube. Once the source has been created, as instructed in the [Getting Started](../) guide, you will be able to map its contents to any Builder element.

The cache is set to `3600` seconds by default, if your workflow requires immediate results disable the cache by setting it to `0`, but being this an API-driven source it is not recommended.

::: tip
This source requires granting permission to the _ZOOlanders OAuth App_, but you can also create your Google App and use it instead.
:::

## Queries

The following source queries are supported out of the box, although the [YouTube API](https://developers.google.com/youtube/v3/docs) allows further integration.

### Videos Query

Returns a list of videos that match the request parameters.

### Playlist Videos Query

Returns a collection of playlist items that match the request parameters.

### Channel Videos Query

Returns a collection of channel items that match the request parameters.

## Types

### Video Type

Each query returns a, or a list of, `Video Type` which has the following available properties for mapping.

| Name | Type | Description |
| -----| ---- | ----------- |
| `ID` | String | The ID that YouTube uses to uniquely identify the video. |
| `URL` | String | The unique URL to the YouTube video. |
| `Title` | String | The video's title. |
| `Description` | String | The video's description. |
| `Published At` | String | The date and time that the video was published. |
| `View Count` | String | The number of times the video has been viewed. |
| `Comment Count` | String | The number of comments for the video. |
| `Like Count` | String | The number of users who have indicated that they liked the video. |
| `Dislike Count` | String | The number of users who have indicated that they disliked the video. |
| `Thumbnail URL` | String | Des |
| `Thumbnail Width` | String | Des |
| `Thumbnail Height` | String | Des |
