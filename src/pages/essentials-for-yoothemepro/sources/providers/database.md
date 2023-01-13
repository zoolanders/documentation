---
title: Database Source
description: Content Source based on MySQL Database Tables
icon: '
    <path stroke-width=".3" d="M15 2C9 2 4.475 4.044 4.475 6.755V23.24c0 2.71 4.525 4.758 10.525 4.758s10.525-2.042 10.525-4.758V6.754C25.525 4.043 21 2 15 2zm9.225 15.745c0 1.634-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459V14.61c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zm0-5.496c0 1.634-3.788 3.46-9.225 3.46-5.437 0-9.225-1.82-9.225-3.46V9.114c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zM15 3.3c5.437 0 9.225 1.82 9.225 3.459 0 1.64-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459C5.775 5.119 9.563 3.3 15 3.3zm0 23.394c-5.437 0-9.225-1.82-9.225-3.458V20.1c1.761 1.453 5.15 2.397 9.225 2.397 4.074 0 7.47-.944 9.225-2.397v3.135c0 1.639-3.788 3.458-9.225 3.458z"/>
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

## Instance

After following through [integration](#integration) an Instagram instance will become available which can be managed in the [Sources Manager](manager).

{% image %}
![Instagram Instance Configuration](/assets/ytp/sources/ig-config.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this source instance, defaults to `Instagram`. |
| **Account** | The account to which to connect to retrieve the media, requires [authentication](manager#authentication). |
| **Page** | The Facebook Page associated with the account, when Instagram Business account. |

---

## Queries

For each instance, the following queries will be available as Dynamic Content options under the Instagram Group.

### Media Query

Fetches all Media from the authenticated Personal or Business account, resolves to a list of [Media Type](#media-type).

{% image %}
![Instagram Media Query](/assets/ytp/sources/ig-query-media.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Type** | `All` | The type of media to fetch, `All`, `Image`, or `Video`. |
| **Amount** | `20` | The maximum amount of media to fetch. |
| **Since/Until** | `null` | The `start` and/or `end` datetime the fetched media will be restricted to. |
| **Cache** | `3680` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Media (Single) Query

Fetches a Media from the authenticated Personal or Business account specified with its ID, resolves to a [Media Type](#media-type).

{% image %}
![Instagram Media Single Query](/assets/ytp/sources/ig-query-media-single.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **ID** | `null` | The user ID. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Hashtagged Media Query

Fetches all Media from the authenticated Instagram Business account that has been hashtagged with a specified hash, resolves to a list of [Media Type](#media-type).

{% image %}
![Instagram Hashtagged Media Query](/assets/ytp/sources/ig-query-hashtagged-media.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Hashtag** | `null` | The hashtag to query for. |
| **Edge** |`Top` | Should the query look for `Top Media` or `Recent Media` hashtagged with. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### User Query

Retrieves the authenticated Instagram Business User account information, resolves to a [User Type](#user-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `0` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Mapping Options

The mapping options are specified by the following `Object Types`, which one will be used is determined by the [queries](#queries).

### Media Type

{% image %}
![Instagram Media Mapping](/assets/ytp/sources/ig-mapping-media.webp)
{% /image %}

| Option | Type | Description |
| -----| ---- | ----------- |
| ID | `String` | The Media ID. |
| Type | `String` | The Media Type, `Album`, `Image`, or `Video`. |
| URL | `String` | The Media URL, locally cached the first time is accessed. |
| Thumbnail URL | `String` | The Media Thumbnail URL, locally cached the first time is accessed. |
| Caption | `String` | The caption content. |
| Permalink | `String` | The Permanent URL to the media. |
| Timestamp | `String` | The ISO 8601-formatted creation date in UTC (default is UTC ±00:00). |
| Username | `String` | The Username of the user who created the media. |
| Hashtags | `String` | The Media hashtags listed with a custom separator. |
| Hashtags | `ListOf` | The Media hashtags available as a multi-item content with an `id` and `name` available for mapping. |
| Children | `ListOf` | The Media children when the Media is an `Album`. |
| Comments Count | `Int` | The total amount of comments (Business Account Only). |
| Like Count | `Int` | The total amount of likes (Business Account Only). |

### User Type

{% image %}
![Instagram User Mapping](/assets/ytp/sources/ig-mapping-user.webp)
{% /image %}

| Option | Type | Description |
| -----| ---- | ----------- |
| ID | `String` | The user ID. |
| Name | `String` | The user name. |
| Website | `String` | The user website. |
| Biography | `String` | The user biography content. |
| Picture URL | `String` | The user profile picture URL. |
| Followers Count | `Int` | The total amount of profiles following the user. |
| Follows Count | `Int` | The total amount of profiles the user is following. |
| Media Count | `Int` | The total amount of media the user has posted. |

