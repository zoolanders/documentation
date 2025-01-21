## RSS Source {#rss}

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/rss.svg-->
</div>

The **RSS Source** is a specialized version of the [XML Source](#xml) that feeds data from [RSS](https://en.wikipedia.org/wiki/RSS) 0.9, 1.0, 2.0, and Atom specifications supporting [Feed](#rss-feed-query) and [Entries](#rss-entries-query) queries.

<!--@include: ./common-provider-settings.md-->

![RSS Source Settings](./assets/providers/rss-config.webp)

| Setting | Description |
| --- | --- |
| *URL* | The feed URL from which to generate the source content. |

### RSS Feed Query

Fetches information from the feed and resolves to a dynamically generated feed type based on it schema.

![RSS Source Feed Query](./assets/providers/rss-query-feed.webp)

| Setting | Description | Default |
| --- | --- | --- |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

### RSS Entries Query

Fetches records from the feed and resolves to a list of dynamically generated record type based on the feed schema.

![RSS Source Entries Query](./assets/providers/rss-query-entries.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Filters* | The list of filter conditions applied to the query. | `[]` | &#x2713; |
| *Ordering* | The list of ordering conditions applied to the query. | `[]` | &#x2713; |
| *Start* | The offset applied to the query. | `1` | &#x2713; |
| *Quantity* | The limit applied to the query. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |
