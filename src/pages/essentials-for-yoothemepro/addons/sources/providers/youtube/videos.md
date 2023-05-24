---
title: YouTube Videos Source
description: Content Source based on YouTube Videos
icon: '
    <path stroke="none" d="M15.006 24.394h-.014c-.784-.005-7.72-.068-9.685-.6A4.018 4.018 0 012.48 20.97c-.515-1.93-.482-5.647-.478-5.944-.004-.295-.037-4.042.476-5.988l.002-.006c.366-1.358 1.474-2.474 2.824-2.844l.01-.003c1.943-.51 8.892-.573 9.678-.578h.014c.787.005 7.74.068 9.688.6a4.017 4.017 0 012.824 2.822c.533 1.947.484 5.703.478 6.02.004.312.035 3.995-.476 5.935l-.001.005a4.02 4.02 0 01-2.83 2.826l-.005.002c-1.942.51-8.892.573-9.678.578zM4.441 9.558c-.451 1.718-.408 5.417-.408 5.454v.027c-.014 1.026.034 3.997.409 5.404a1.98 1.98 0 001.394 1.39c1.45.392 7.099.516 9.163.53 2.07-.014 7.727-.134 9.166-.511a1.982 1.982 0 001.392-1.39c.375-1.427.422-4.384.408-5.403v-.032c.019-1.039-.018-4.044-.406-5.463l-.001-.004a1.982 1.982 0 00-1.396-1.393c-1.436-.393-7.093-.516-9.163-.53-2.068.014-7.72.134-9.163.51a2.037 2.037 0 00-1.395 1.41zm22.097 11.166zM12.41 19.113v-8.226L19.52 15l-7.11 4.113z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The YouTube Videos Source, part of the [YouTube Source](../) collection, creates sources based on YouTube videos fetched with advanced search and API Key.

---

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![YouTube Videos Source](/assets/ytp/sources/youtube-videos-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **API Key** | The Google API Key which to [authenticate](#authentication) with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "YouTube Videos"} /%}

---

### Authentication

Authentication is based on an API Key driven by the [Google API Key Driver](/essentials-for-yoothemepro/auth/drivers/google-api-key).

{% image %}
![Google API Key Driver](/assets/ytp/auths/driver-google-api-key.webp)
{% /image %}

{% callout title="Keys Security" %}
Learn more about Essentials [Keys security protocols](/essentials-for-yoothemepro/oauth-keys-secrets#security).
{% /callout %}

---

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Videos Query

Fetches public videos with advanced query params resolving to a list of [Video Type](../youtube#video-type).

{% image %}
![YouTube Videos Query](/assets/ytp/sources/youtube-videos-query.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Channel** | | Restricts the results to videos created by a specific channel ID. |
| **Query Term** | | The list of terms the videos should be associated with. Use the Boolean NOT (`-`) and OR (`\|`) operators to exclude or find videos that are associated with one of several search terms. For example, to match either "boating" or "sailing", set as `boating\|sailing`. Similarly, to exclude "fishing", set as `boating\|sailing -fishing`. |
| **Since/Until** | | Restricts the results to videos that have been published within the specified range of dates. |
| **Location/Radius** | | Location in conjunction with radius, defines a circular geographic area to which to restrict the videos. The location points the center of the area with latitude/longitude coordinates e.g. `37.42307,-122.08427`, while the radius is the maximum distance from the location in `m`, `km`, `ft`, or `mi` units, e.g `5km`. |
| **Region** | | Restricts the results to videos that can be viewed in the specified country. The value is an [ISO 3166-1 alpha-2](https://www.iso.org/iso-3166-country-codes.html) country code, e.g `ES`.
| **Language** | | Restricts the results to videos that are most relevant to the specified language. The value is typically an [ISO 639-1 two-letter](https://www.loc.gov/standards/iso639-2/php/code_list.php) language code, however, you should use the values `zh-Hans` for simplified Chinese and `zh-Hant` for traditional Chinese. Note that results in other languages will still be returned if they are highly relevant to the search query term. |
| **Definition** | `Any` | Restricts the results based on the videos quality, either `High Definition`, `Standard Definition`,  or `Any`. HD videos are available for playback in at least 720p, though higher resolutions, like 1080p, might also be available. |
| **Duration** | `Any` | Restricts the results based on the videos duration, either `Long`, longer than 20 minutes, `Medium`, between four and 20 minutes, `Short`, less than four minutes, or `Any`. |
| **Start** | `1` | The starting point, e.g of a list of 20 videos start from the number 2. |
| **Quantity** | `20` | The maximum amount of videos to retrieve. |
| **Order** | `Relevance` | The order in which the videos will be returned, within `Date`, reverse chronological order based on the date the videos were created, `Rating`, from highest to lowest rating, `Relevance`, based on their relevance to the search query, `Title`, alphabetically by title, or `View Count`, from highest to lowest number of views. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
