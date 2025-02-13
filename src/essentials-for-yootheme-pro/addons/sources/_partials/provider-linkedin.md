## LinkedIn Source {#linkedin}

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-linkedin.svg-->
</div>

The **LinkedIn Source** feeds data from the [LinkedIn](https://linkedin.com/) social platform supporting Organization [Post](#linkedin-organization-post-query) and [Posts](#linkedin-organization-posts-query) queries.

:::warning LinkedIn App
In order to authenticate you will need to create a custom LinkedIn App [following this guide](../../auths/custom-linkedin-dev-app.md).
:::

<!--@include: ./common-provider-settings.md-->

| Setting | Description |
| --- | --- |
| *Account* | The LinkedIn account which to connect with. |
| *Organization* | The LinkedIn Organization from which to create the source. Only organizations that the authenticated user is an administrator of will be shown. |

### LinkedIn Organization Post Query

Fetches a single post belonging to an organization and resolves to a [LinkedIn Post Type](#linkedin-post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *URN* | URN of the post, in full format like `urn:li:ugcPost:1234567890`. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

### LinkedIn Organization Posts Query

Fetches posts belonging to an organization and resolves to a list of [LinkedIn Post Type](#linkedin-post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Start* | The start number of posts to fetch. | `1` | &#x2713; |
| *Count* | The maximum number of posts to fetch. | `10` | &#x2713; |
| *Sort By* | The order by which to sort the posts, `Last Modified` or `Created`. | `Last Modified` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

### LinkedIn Post Type

Defines the mapping options of a LinkedIn Post object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the content. | `String` |
| *State* | The state of the content. | `String` |
| *Visibility* | The visibility of the content. | `String` |
| *Commentary* | The user generated commentary for the content. | `String` | `limit` |
| *Created At* | The post creation date. | `String` | `date` |
| *Published At* | The post publication date. | `String` | `date` |
| *Modified At* | The post last modification date. | `String` | `date` |
| *Author* | The author of the content. | [Organization](#linkedin-organization-type) |
| *Article* | The posted content of an Article. | [Post Article](#linkedin-post-article-type) |
| *Media* | The posted media. | [Post Media](#linkedin-post-media-type) |
| *Images* | The posted images. | [Post Media](#linkedin-post-media-type)[] |

### LinkedIn Post Article Type

Defines the mapping options of a LinkedIn Post Article object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the content. | `String` |

### LinkedIn Post Media Type

Defines the mapping options of a LinkedIn Post Media object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the content. | `String` |
| *Alt Text* | Alternative text for the media. | `String` | `limit` |
| *URL* | URL of the media. | `String` |
| *Type* | Type of the media content, either image or video. | `String` |

### LinkedIn Organization Type

Defines the mapping options of a LinkedIn Organization object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the organization. | `String` |
| *Name* | The organization name. | `String` |
| *Vanity Name* | The organization vanity name. | `String` |
| *Description* | The organization description. | `String` | `limit` |
| *Website* | The organization website. | `String` |
| *Logo URL* | The organization logo URL. | `String` |
