---
title: Instagram Personal Account Source
description: Content Source based on Instagram Personal account
icon: '
    <path stroke="none" d="M20.128 2H9.887C5.539 2 2 5.525 2 9.858v10.284C2 24.475 5.539 28 9.887 28h10.226C24.475 28 28 24.475 28 20.142V9.858C28.014 5.525 24.475 2 20.128 2zm5.705 18.778a5.061 5.061 0 01-5.055 5.055H9.222a5.061 5.061 0 01-5.055-5.055V9.222a5.061 5.061 0 015.055-5.055h11.556a5.061 5.061 0 015.055 5.055v11.556z"/>
    <circle stroke="none" cx="22.034" cy="8.153" r="1.574"/>
    <path stroke="none" d="M15.043 8.428c-3.683 0-6.687 2.975-6.687 6.644 0 3.684 2.99 6.659 6.687 6.659 3.698 0 6.688-2.977 6.688-6.659-.014-3.669-3.004-6.644-6.688-6.644zm.073 10.905a4.325 4.325 0 01-4.334-4.319 4.324 4.324 0 014.334-4.318 4.324 4.324 0 014.333 4.318 4.324 4.324 0 01-4.333 4.319z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Instagram Personal Source, part of the [Instagram Source](../) collection, creates sources based on the Instagram Personal accounts content.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![Instagram Personal Settings](/assets/ytp/sources/ig-personal-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Instagram Account which to [authenticate](#authentication) with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "Instagram Personal"} /%}

---

### Authentication

Authentication is based on the OAuth protocol driven by the [Instagram OAuth Driver](/essentials-for-yoothemepro/auth/drivers/instagram-oauth).

{% image %}
![Instagram OAuth Driver](/assets/ytp/auths/driver-instagram-oauth.webp)
{% /image %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Media Query

Fetches media from the authenticated account and resolves to a list of [Media Type](../#media-type).

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

Fetches a single media from the authenticated account and resolves to a [Media Type](../#media-type).

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

Part of the [Media Single Query](#media-single-query), as `Multiple Items Source -> Children Media`, fetches media from the parent Media if it's of the type Album, resolves to a list of [Album Media Type](../#album-media-type).

{% image %}
![Instagram Album Media Query](/assets/ytp/sources/ig-query-media-single.webp)
{% /image %}

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **ID** | | Unique identifier of the media to retrieve. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
