---
title: Instagram Source
description: Content Source based on Instagram accounts media and profiles
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

## Instance

After following through [integration](#integration) an Instagram instance will become available which can be managed in the [Sources Manager](manager).

### Configuration

{% image %}
![Instagram Instance Configuration](/assets/ytp/sources/ig-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source instance, defaults to `Instagram`. |
| **Account** | The account to which to [authenticate](manager#authentication). | &#x2713; |
| **Page** | The Facebook Page associated with the Instagram Business account, omitted for Personal accounts. | &#x2713; |

---

### Authentication

The authentication to the Instagram account is done through the oAuth protocol, simply follow the UI instructions or learn all about the [Auths Manager](../../auths-manager) first.

---

## Content Queries

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
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

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

## Mapping Fields

The mapping fields are specified by the following `Object Types` which will used by the [content queries](#content-queries).

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
