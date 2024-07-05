## XML Source {#xml}

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/xml.svg-->
</div>

The **XML Source** feeds data from any [XML](https://en.wikipedia.org/wiki/XML) url or local file, reading its structure and building a dedicated query and source types to the best of its abilities.

<!--@include: ./common-provider-settings.md-->

If the source is a remote file, the url and an optional api key based authentication is required:

![XML Source Url Settings](./assets/providers/xml-url-config.webp)

| Setting                   | Description                                                    |
|---------------------------|----------------------------------------------------------------|
| *URL*                     | The feed URL from which to generate the source content.        |
| *Requires Authentication* | If the url is protected by an authorization.                   |
| *Authentication*          | The authentication details to use.  |

When an authentication is present, you can specify its details. Currently only API key method is supported, either via a header or a query parameter.

![API Key Auth Settings](./assets/providers/xml-source-api-key-auth.webp)

| Setting          | Description                                                |
|------------------|------------------------------------------------------------|
| *API Key*        | The api key to use                                         
| *API Key Mode*   | Where the key is set, in a header or in a query parameter. |
| *Parameter Name* | The name of the header or of the query parameter where they api key is set

If the source is a local file, the file path is required.

| Setting | Description | 
| --- | --- |
| *File* | The relative or absolute local path to the file which to use as source. |

![XML Source Url Settings](./assets/providers/xml-file-config.webp)

Optionally a [xpath filter](https://en.wikipedia.org/wiki/XPath) can be set, which will allow to narrow down your xml file if you need to. It's also possible to map some of the result item property to dedicated types, to make better use of YOOtheme Pro filters, such as dates or numbers.

![XML Settings](./assets/providers/xml-config.webp)

| Setting        | Description                       | 
|----------------|-----------------------------------|
| *XPath Filter* | Optional XPath filter, like "/jobs/job". |
| *Data Typesr*  | Data type mapping for each field. |

### XML Query

Fetches records from the xml file and resolves to a list of dynamically generated record type based on the feed schema.

![XML Source Query](./assets/providers/xml-query-config.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Start* | The offset applied to the query. | `1` | &#x2713; |
| *Quantity* | The limit applied to the query. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |
