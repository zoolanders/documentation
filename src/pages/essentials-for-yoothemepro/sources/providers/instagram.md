---
title: Instagram Source
description: Content Source based on Instagram media
icon: '
    <path stroke="none" d="M20.128 2H9.887C5.539 2 2 5.525 2 9.858v10.284C2 24.475 5.539 28 9.887 28h10.226C24.475 28 28 24.475 28 20.142V9.858C28.014 5.525 24.475 2 20.128 2zm5.705 18.778a5.061 5.061 0 01-5.055 5.055H9.222a5.061 5.061 0 01-5.055-5.055V9.222a5.061 5.061 0 015.055-5.055h11.556a5.061 5.061 0 015.055 5.055v11.556z"/>
    <circle stroke="none" cx="22.034" cy="8.153" r="1.574"/>
    <path stroke="none" d="M15.043 8.428c-3.683 0-6.687 2.975-6.687 6.644 0 3.684 2.99 6.659 6.687 6.659 3.698 0 6.688-2.977 6.688-6.659-.014-3.669-3.004-6.644-6.688-6.644zm.073 10.905a4.325 4.325 0 01-4.334-4.319 4.324 4.324 0 014.334-4.318 4.324 4.324 0 014.333 4.318 4.324 4.324 0 01-4.333 4.319z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Instagram Source** feeds data from [Instagram](https://www.instagram.com/) Personal and Business accounts. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Instagram"} /%}

{% callout title="Cache" %}
You can adjust the cache time as needed but being this an API-driven source it is highly recommended to keep the cache active.
{% /callout %}

---

## Source and Queries

Follow through [integration](#integration) to create one or more Instagram source instances. Refer to the following table for all the available sources and it queries.

| Source / Query | Resolves To | Description |
| -------------- | ----------- | ----------- |
| [Personal Account Source](#personal-account-source) | | Source based on an Instagram Personal account. |
| -- [Media](#media-query) | [Media Type](#media-type) | Fetches media from the source. |
| -- [Media Single](#media-single-query) | [Media Type](#media-type) | Fetches a single media from the source. |
| -- -- [Album Media](#album-media-query) | [Album Media Type](#album-media-type) | Fetches child media from the parent media if it's an Album. |
| [Business Account Source](#business-account-source) | | Source based on an Instagram Business source. |
| -- [Media](#media-query) | [Media Type](#media-type) | Fetches media from the source. |
| -- [Media Single](#media-single-query) | [Media Type](#media-type) | Fetches a single media from the source. |
| -- -- [Album Media](#album-media-query) | [Album Media Type](#album-media-type) | Fetches child media from the parent media if it's an Album. |
| -- [Hashtagged Media](#hashtagged-media-query) | [Media Type](#media-type) | Fetches media that have been hashtagged with a specific hash. |
| -- [User](#user-query) | [User Type](#user-type) | Fetches the Business Account user profile. |

---

## Reference

### Personal Account Source

The **Personal Account Source** creates a Dynamic Content source from the [oAuth authenticated](../../auths-manager#google-oauth-driver) Instagram Personal Account.

{% image %}
![Instagram Personal Source Configuration](/assets/ytp/sources/ig-personal-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `Instagram`. |
| **Account** | The Instagram Account which to [authenticate](../../auths-manager#instagram-oauth-driver) with. | &#x2713; |

---

### Business Account Source

The **Business Account Source** creates a Dynamic Content source from the [oAuth authenticated](../../auths-manager#google-oauth-driver) Instagram Business Account.

{% image %}
![Instagram Business Source Configuration](/assets/ytp/sources/ig-business-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `Instagram Business`. |
| **Account** | The Facebook Account which to [authenticate](../../auths-manager#facebook-oauth-driver) with. | &#x2713; |
| **Page** | The Facebook Page associated with the Instagram Business account. | &#x2713; |

---

### Media Query

For each [Personal Account Source](#personal-account-source) and [Business Account Source](#business-account-source) a **Media Query** is created on the fly and made available as Dynamic Content option under the Instagram Group. It fetches media from the authenticated account and resolves to a list of [Media Type](#media-type).

{% image %}
![Instagram Media Query](/assets/ytp/sources/ig-query-media.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Type** | `All` | The type of media to fetch, `All`, `Image`, or `Video`. |
| **Amount** | `20` | The maximum amount of media to fetch. |
| **Since/Until** | `null` | The `start` and/or `end` datetime the fetched media will be restricted to. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Media Single Query

For each [Personal Account Source](#personal-account-source) and [Business Account Source](#business-account-source) a **Media Single Query** is created on the fly and made available as Dynamic Content option under the Instagram Group. It fetches a single media from the authenticated account and resolves to a [Media Type](#media-type).

{% image %}
![Instagram Media Single Query](/assets/ytp/sources/ig-query-media-single.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **ID** | | Unique identifier of the media to retrieve. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
| **Children** | | A Multi Item option resolving to [Album Media Query](#album-media-query). |

---

### Album Media Query

Part of the [Media Single Query](#media-single-query) as `Multiple Items Source -> Children Media` it fetches media from the parent Media if it's of the type Album, resolves to a list of [Album Media Type](#album-media-type).

{% image %}
![Instagram Album Media Query](/assets/ytp/sources/ig-query-media-single.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **ID** | | Unique identifier of the media to retrieve. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### Hashtagged Media Query

For each [Business Account Source](#business-account-source) a **Hashtagged Media Query** is created on the fly and made available as Dynamic Content option under the Instagram Group. It fetches top and recent hashtagged media from the authenticated business account and resolves to a list of [Media Type](#media-type).

{% image %}
![Instagram Hashtagged Media Query](/assets/ytp/sources/ig-query-hashtagged-media.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Hashtag** | | The hashtag to query for. | &#x2713; |
| **Edge** |`Top` | Should the query look for `Top Media` or `Recent Media` hashtagged with. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

### User Query

For each [Business Account Source](#business-account-source) an **User Query** is created on the fly and made available as Dynamic Content option under the Instagram Group. It fetches the user profile from the authenticated account and resolves to a [User Type](#user-type).

{% image %}
![Instagram User Query](/assets/ytp/sources/ig-query-user.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `0` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

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
