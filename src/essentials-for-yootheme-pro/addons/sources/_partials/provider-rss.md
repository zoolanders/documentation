## RSS Source {#rss}

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/rss.svg-->
</div>

The **RSS Source** feeds data from [RSS](https://en.wikipedia.org/wiki/RSS) 0.9, 1.0, 2.0, and Atom specifications supporting [Feed](#rss-feed-query) and [Entries](#rss-entries-query) queries.

<!--@include: ./common-provider-settings.md-->

![RSS Source Settings](./assets/providers/rss-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *URL* | The feed URL from which to generate the source content. | &#x2713; |

### RSS Feed Query

Fetches information from the feed and resolves to a dynamically generated feed type based on it schema.

![RSS Source Feed Query](./assets/providers/rss-query-feed.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### RSS Entries Query

Fetches records from the feed and resolves to a list of dynamically generated record type based on the feed schema.

![RSS Source Entries Query](./assets/providers/rss-query-entries.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Filters* | `[]` | The list of filter conditions applied to the query. |
| *Ordering* | `[]` | The list of ordering conditions applied to the query. |
| *Start* | `1` | The offset applied to the query. |
| *Quantity* | `20` | The limit applied to the query. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
