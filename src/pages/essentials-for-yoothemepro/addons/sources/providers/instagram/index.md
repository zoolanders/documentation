---
title: Instagram Source
description: Content Source based on Instagram
icon: '
    <path stroke="none" d="M20.128 2H9.887C5.539 2 2 5.525 2 9.858v10.284C2 24.475 5.539 28 9.887 28h10.226C24.475 28 28 24.475 28 20.142V9.858C28.014 5.525 24.475 2 20.128 2zm5.705 18.778a5.061 5.061 0 01-5.055 5.055H9.222a5.061 5.061 0 01-5.055-5.055V9.222a5.061 5.061 0 015.055-5.055h11.556a5.061 5.061 0 015.055 5.055v11.556z"/>
    <circle stroke="none" cx="22.034" cy="8.153" r="1.574"/>
    <path stroke="none" d="M15.043 8.428c-3.683 0-6.687 2.975-6.687 6.644 0 3.684 2.99 6.659 6.687 6.659 3.698 0 6.688-2.977 6.688-6.659-.014-3.669-3.004-6.644-6.688-6.644zm.073 10.905a4.325 4.325 0 01-4.334-4.319 4.324 4.324 0 014.334-4.318 4.324 4.324 0 014.333 4.318 4.324 4.324 0 01-4.333 4.319z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Instagram Source feeds data from [Instagram](https://www.instagram.com/) Personal and Business accounts. Based on the [multi-instance](/essentials-for-yoothemepro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| -------------- | ----------- | ----------- |
| [Personal Account Source](./personal) | | Source based on an Instagram Personal account. |
| -- [Media](./personal#media-query) | [Media Type](#media-type) | Fetches media from the source. |
| -- [Media Single](./personal#media-single-query) | [Media Type](#media-type) | Fetches a single media from the source. |
| -- -- [Album Media](./personal#album-media-query) | [Album Media Type](#album-media-type) | Fetches child media from the parent media if it's an Album. |
| [Business Account Source](./business) | | Source based on an Instagram Business source. |
| -- [Media](./business#media-query) | [Media Type](#media-type) | Fetches media from the source. |
| -- [Media Single](./business#media-single-query) | [Media Type](#media-type) | Fetches a single media from the source. |
| -- -- [Album Media](./business#album-media-query) | [Album Media Type](#album-media-type) | Fetches child media from the parent media if it's an Album. |
| -- [Hashtagged Media](./business#hashtagged-media-query) | [Media Type](#media-type) | Fetches media that have been hashtagged with a specific hash. |
| -- [User](./business#user-query) | [User Type](#user-type) | Fetches the Business Account user profile. |

---

## Content Types

The content types define the mapping options for the source content.

### Media Type

{% image %}
![Instagram Media Mapping](/assets/ytp/sources/ig-type-media.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this media. | `String` |
| **Type** | The type of this media, `Album`, `Image`, or `Video`. | `String` |
| **URL** | The path to the locally cached media asset. | `String` |
| **Thumbnail URL** | The path to the locally cached media thumbnail asset. | `String` |
| **Permalink** | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | `String` |
| **Caption** | The caption content. | `String` | `Limit` |
| **Hashtags** | The media hashtags as a custom formated string with `Separator` argument. | `String` |
| **Created At** | The time this media was created. | `String` | `Date` |
| **Created By** | The username of the user who created this media. | `String` |

| Business Only Options | Description | Type |
| --------------------- | ----------- | ---- |
| **Total Comments** | Number of comments made one this media. | `Int` |
| **Total Likes** | Number of user that liked this media. | `Int` |

---

### Album Media Type

{% image %}
![Instagram Album Media Mapping](/assets/ytp/sources/ig-type-album-media.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this media. | `String` |
| **Type** | The type of this media, `Album`, `Image`, or `Video`. | `String` |
| **URL** | The path to the locally cached media asset. | `String` |
| **Thumbnail URL** | The path to the locally cached media thumbnail asset. | `String` |
| **Permalink** | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | `String` |
| **Created At** | The time this media was created. | `String` | `Date` |
| **Created By** | The username of the user who created this media. | `String` |

---

### User Type

{% image %}
![Instagram User Mapping](/assets/ytp/sources/ig-type-user.webp)
{% /image %}

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of this user. | `String` |
| **Name** | The name of this user. | `String` |
| **Website** | The website of this user profile. | `String` |
| **Biography** | The biography of this user profile. | `String` | `Limit` |
| **Picture URL**  | The profile picture URL of this user. | `String` |
| **Total Followers** | Number of Instagram users following this user. | `Int` |
| **Total Follows** | Number of Instagram users this user follows. | `Int` |
| **Total Media** | Number of Instagram Media published on this user. | `Int` |
