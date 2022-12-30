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

The **Instagram Source** feeds data from [Instagram](https://www.instagram.com/) Personal and Business accounts. Based on the multi-instance source workflow it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Instagram"} /%}

The cache is set to 3600 seconds by default, if your workflow requires immediate results disable the cache by setting it to 0, but being this an API-driven source it is not recommended.

---

## Instance

If you have followed the [integration](#integration) guide there should already be a a

### Configuration


{% image %}
![Instagram Instance Configuration](/assets/ytp/sources/ig-config.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The text to be shown while there is no user input. |
| **Account** | The text to be shown while there is no user input. |
| **Page** | The text to be shown while there is no user input. |


### Authentication

This is the process where you connect to your Instagram account and grant *ZOOlanders OAuth App* permission to read it media on your behalf.

1. In the Account field press the Picker icon.
1. Follow the instructions and grant the necessary permissions.

{% image %}
![Instagram Authentication](/assets/ytp/sources/ig-auth.gif)
{% /image %}

{% callout title="Permissions" %}
You can revoke granted permissions anytime or use your own App instead, learn all about it in the [Essentials Auths](../../auths) documentation.
{% /callout %}

---

## Queries

### Query Types

Query Types specify the Dynamic Content options that will become available for each source instance. They perform the fetching of the data and ultimately resolve to one of, or a list of, Object Types.

#### Media Query Type

Fetches all Media from the authenticated account, resolves to a list of Media Type.

{% details title="Show Settings" %}
  | Setting | Default | Description |
  | ------- | ------- | ----------- |
  | **Type** | `All` | The type of media to fetch, `All`, `Image`, or `Video`. |
  | **Amount** | `20` | The maximum amount of media to fetch. |
  | **Since/Until** | `null` | The `start` and/or `end` datetime the fetched media will be restricted to. |
  | **Cache** | `3680` | The duration in seconds before the cache is invalidated and the query re-executed. Set to `0` to disable. |

  ---
{% /details %}

#### Media (Single) Query Type

Fetches a Media from the authenticated account specified with it ID, resolves to a Media Type.

{% details title="Show Settings" %}
  | Setting | Default | Description |
  | ------- | ------- | ----------- |
  | **ID** | `null` | The user ID. |
  | **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. Set to `0` to disable. |

  ---
{% /details %}

#### Hashtagged Media Query Type

Fetches all Media from the authenticated account that has been hashtagged with a specified hash, resolves to a list of Media Type.

{% details title="Show Settings" %}
  | Setting | Default | Description |
  | ------- | ------- | ----------- |
  | **Hashtag** | `null` | The hashtag to query for. |
  | **Edge** |`Top` | Should the query look for `Top Media` or `Recent Media` hashtagged with. |
  | **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. Set to `0` to disable. |

  ---
{% /details %}

#### User Query Type

Retrieves the authenticated IG Business User account information returning a User Type.

{% details title="Show Settings" %}
  | Setting | Default | Description |
  | ------- | ------- | ----------- |
  | **ID** | `null` | The user ID. |
  | **Cache** | `0` | The duration in seconds before the cache is invalidated and the query re-executed. Set to `0` to disable. |

  ---
{% /details %}

### Object Types

#### Media Type

{% details title="Media Type" %}
  | Option | Type | Description |
  | -----| ---- | ----------- |
  | ID | `String` | The Media ID. |
  | Media Type | `String` | The Media Type, `Album`, `Image`, or `Video`. |
  | Media URL | `String` | The Media URL, locally cached the first time is accessed. |
  | Media Thumbnail URL | `String` | The Media Thumbnail URL, locally cached the first time is accessed. |
  | Caption | `String` | The caption content. |
  | Permalink | `String` | The Permanent URL to the media. |
  | Timestamp | `String` | The ISO 8601-formatted creation date in UTC (default is UTC ±00:00). |
  | Username | `String` | The Username of user who created the media. |
  | Hashtags | `String` | The Media hashtags listed with a custom separator. |
  | Hashtags | `ListOf` | The Media hashtags available as a multi item content with an `id` and `name` available for mapping. |
  | Children | `ListOf` | The Media children whe  the Media is an `Album`. |
  | Comments Count | `Int` | The total amount of comments (Business Account Only). |
  | Like Count | `Int` | The total amount of likes (Business Account Only). |
{% /details %}

---

#### User Type

{% details title="User Type" %}
  | Option | Type | Description |
  | -----| ---- | ----------- |
  | ID | `String` | The user ID. |
  | Name | `String` | The user name. |
  | Website | `String` | The user website. |
  | Biography | `String` | The user biography content. |
  | Picture URL | `String` | The user profile picture URL. |
  | Followers Count | `Int` | The total amount of profiles are following the user . |
  | Follows Count | `Int` | The total amount of profiles the user is following. |
  | Media Count | `Int` | The total amount of media the user has posted. |

  ---
{% /details %}
