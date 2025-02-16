# LinkedIn Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-linkedin.svg-->
</div>

The **LinkedIn Source** feeds data from the [LinkedIn](https://linkedin.com/) social platform supporting Organization [Post](#organization-post-query) and [Posts](#organization-posts-query) queries.

:::warning LinkedIn Dev App Required
Notice that this source requires a [Custom LinkedIn Dev App](/essentials-for-yootheme-pro/auths/custom-linkedin-dev-app) for authentication.
:::

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

| Setting | Description |
| --- | --- |
| *Account* | The LinkedIn account which to connect with. |
| *Organization* | The LinkedIn Organization from which to create the source. Only organizations that the authenticated user is an administrator of will be shown. |

## Organization Post Query

Fetches a single post belonging to an organization and resolves to a [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *URN* | URN of the post, in full format like `urn:li:ugcPost:1234567890`. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Organization Posts Query

Fetches posts belonging to an organization and resolves to a list of [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Start* | The start number of posts to fetch. | `1` | &#x2713; |
| *Count* | The maximum number of posts to fetch. | `10` | &#x2713; |
| *Sort By* | The order by which to sort the posts, `Last Modified` or `Created`. | `Last Modified` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Post Type

Defines the mapping options of a LinkedIn Post object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the content. | *String* |
| *State* | The state of the content. | *String* |
| *Visibility* | The visibility of the content. | *String* |
| *Commentary* | The user generated commentary for the content. | *String* | *Limit* |
| *Created At* | The post creation date. | *String* | *Date* |
| *Published At* | The post publication date. | *String* | *Date* |
| *Modified At* | The post last modification date. | *String* | *Date* |
| *Author* | The author of the content. | [Organization](#organization-type) |
| *Article* | The posted content of an Article. | [Post Article](#post-article-type) |
| *Media* | The posted media. | [Post Media](#post-media-type) |
| *Images* | The posted images. | [Post Media](#post-media-type)[] |

## Post Article Type

Defines the mapping options of a LinkedIn Post Article object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the content. | *String* |

## Post Media Type

Defines the mapping options of a LinkedIn Post Media object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the content. | *String* |
| *Alt Text* | Alternative text for the media. | *String* | *Limit* |
| *URL* | URL of the media. | *String* |
| *Type* | Type of the media content, either image or video. | *String* |

## Organization Type

Defines the mapping options of a LinkedIn Organization object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of the organization. | *String* |
| *Name* | The organization name. | *String* |
| *Vanity Name* | The organization vanity name. | *String* |
| *Description* | The organization description. | *String* | *Limit* |
| *Website* | The organization website. | *String* |
| *Logo URL* | The organization logo URL. | *String* |
