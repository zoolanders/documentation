## CSV Source {#csv}

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-csv.svg-->
</div>

The **CSV Source** feeds data from local [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) or [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) files supporting [Records](#csv-records-query) query with dynamic filtering and/or ordering.

<!--@include: ./common-provider-settings.md-->

![CSV Source Settings](./assets/providers/csv-config.webp)

| Setting | Description | Default |
| --- | --- | --- |
| *File* | The relative or absolute local path to the file which to use as source. |
| *Delimeter* | The delimiter character the content is formated with. | `,` |
| *Enclosure* | The enclosure character the content is formated with. | `"` |

### CSV Records Query

Fetches records from the file and resolves to a list of dynamically generated CSV record type based on the file schema.

![CSV Records Query](./assets/providers/csv-query-records.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Filters* | The list of filter conditions applied to the query. | `[]` | &#x2713; |
| *Ordering* | The list of ordering conditions applied to the query. | `[]` | &#x2713; |
| *Start* | The offset applied to the query. | `1` |  &#x2713; |
| *Quantity* | The limit applied to the query. | `20` |  &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |
