---
title: Instagram
description: Content Source based on Instagram
---

<!--@include: ../_partials/provider-intro-->

The Instagram Source feeds data from [Instagram](https://www.instagram.com/) Personal and Business accounts. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources) source workflow it allows connecting to multiple accounts with different configurations.

Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| --- | --- | --- |
| [Personal Account Source](./instagram/personal) | | Source based on an Instagram Personal account. |
| -- [Media](./instagram/personal#media-query) | [Media Type](#media-type) | Fetches media from the source. |
| -- [Media Single](./instagram/personal#media-single-query) | [Media Type](#media-type) | Fetches a single media from the source. |
| -- -- [Album Media](./instagram/personal#album-media-query) | [Album Media Type](#album-media-type) | Fetches child media from the parent media if it's an Album. |
| [Business Account Source](./instagram/business) | | Source based on an Instagram Business source. |
| -- [Media](./instagram/business#media-query) | [Media Type](#media-type) | Fetches media from the source. |
| -- [Media Single](./instagram/business#media-single-query) | [Media Type](#media-type) | Fetches a single media from the source. |
| -- -- [Album Media](./instagram/business#album-media-query) | [Album Media Type](#album-media-type) | Fetches child media from the parent media if it's an Album. |
| -- [Hashtagged Media](./instagram/business#hashtagged-media-query) | [Media Type](#media-type) | Fetches media that have been hashtagged with a specific hash. |
| -- [User](./instagram/business#user-query) | [User Type](#user-type) | Fetches the Business Account user profile. |

## Content Types

The content types define the mapping options for the source content.

### Media Type

![Instagram Media Mapping](../assets/providers/ig-type-media.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this media. | `String` |
| *Type* | The type of this media, `Album`, `Image`, or `Video`. | `String` |
| *URL* | The path to the locally cached media asset. | `String` |
| *Thumbnail URL* | The path to the locally cached media thumbnail asset. | `String` |
| *Permalink* | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | `String` |
| *Caption* | The caption content. | `String` | `Limit` |
| *Hashtags* | The media hashtags as a custom formated string with `Separator` argument. | `String` |
| *Created At* | The time this media was created. | `String` | `Date` |
| *Created By* | The username of the user who created this media. | `String` |

| Business Only Options | Description | Type |
| --- | --- | --- |
| *Total Comments* | Number of comments made one this media. | `Int` |
| *Total Likes* | Number of user that liked this media. | `Int` |

### Album Media Type

![Instagram Album Media Mapping](../assets/providers/ig-type-album-media.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this media. | `String` |
| *Type* | The type of this media, `Album`, `Image`, or `Video`. | `String` |
| *URL* | The path to the locally cached media asset. | `String` |
| *Thumbnail URL* | The path to the locally cached media thumbnail asset. | `String` |
| *Permalink* | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | `String` |
| *Created At* | The time this media was created. | `String` | `Date` |
| *Created By* | The username of the user who created this media. | `String` |

### User Type

![Instagram User Mapping](../assets/providers/ig-type-user.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this user. | `String` |
| *Name* | The name of this user. | `String` |
| *Website* | The website of this user profile. | `String` |
| *Biography* | The biography of this user profile. | `String` | `Limit` |
| *Picture URL* | The profile picture URL of this user. | `String` |
| *Total Followers* | Number of Instagram users following this user. | `Int` |
| *Total Follows* | Number of Instagram users this user follows. | `Int` |
| *Total Media* | Number of Instagram Media published on this user. | `Int` |
