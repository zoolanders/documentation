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

| Setting        | Description                                                                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| _Account_      | The LinkedIn account which to connect with.                                                                                                     |
| _Organization_ | The LinkedIn Organization from which to create the source. Only organizations that the authenticated user is an administrator of will be shown. |

## Organization Post Query

Fetches a single post belonging to an organization and resolves to a [Post Type](#post-type).

| Setting | Description                                                                        | Default | Dynamic  |
| ------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _URN_   | URN of the post, in full format like `urn:li:ugcPost:1234567890`.                  |         | &#x2713; |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

## Organization Posts Query

Fetches posts belonging to an organization and resolves to a list of [Post Type](#post-type).

| Setting   | Description                                                                        | Default         | Dynamic  |
| --------- | ---------------------------------------------------------------------------------- | --------------- | :------: |
| _Start_   | The start number of posts to fetch.                                                | `1`             | &#x2713; |
| _Count_   | The maximum number of posts to fetch.                                              | `10`            | &#x2713; |
| _Sort By_ | The order by which to sort the posts, `Last Modified` or `Created`.                | `Last Modified` | &#x2713; |
| _Cache_   | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`          |

## Post Type

Defines the mapping options of a LinkedIn Post object.

| Field          | Description                                    | Type                               | Filters |
| -------------- | ---------------------------------------------- | ---------------------------------- | ------- |
| _ID_           | Unique identifier of the content.              | _String_                           |
| _State_        | The state of the content.                      | _String_                           |
| _Visibility_   | The visibility of the content.                 | _String_                           |
| _Commentary_   | The user generated commentary for the content. | _String_                           | _Limit_ |
| _Created At_   | The post creation date.                        | _String_                           | _Date_  |
| _Published At_ | The post publication date.                     | _String_                           | _Date_  |
| _Modified At_  | The post last modification date.               | _String_                           | _Date_  |
| _Author_       | The author of the content.                     | [Organization](#organization-type) |
| _Article_      | The posted content of an Article.              | [Post Article](#post-article-type) |
| _Media_        | The posted media.                              | [Post Media](#post-media-type)     |
| _Images_       | The posted images.                             | [Post Media](#post-media-type)[]   |

## Post Article Type

Defines the mapping options of a LinkedIn Post Article object.

| Field | Description                       | Type     | Filters |
| ----- | --------------------------------- | -------- | ------- |
| _ID_  | Unique identifier of the content. | _String_ |

## Post Media Type

Defines the mapping options of a LinkedIn Post Media object.

| Field      | Description                                       | Type     | Filters |
| ---------- | ------------------------------------------------- | -------- | ------- |
| _ID_       | Unique identifier of the content.                 | _String_ |
| _Alt Text_ | Alternative text for the media.                   | _String_ | _Limit_ |
| _URL_      | URL of the media.                                 | _String_ |
| _Type_     | Type of the media content, either image or video. | _String_ |

## Organization Type

Defines the mapping options of a LinkedIn Organization object.

| Field         | Description                            | Type     | Filters |
| ------------- | -------------------------------------- | -------- | ------- |
| _ID_          | Unique identifier of the organization. | _String_ |
| _Name_        | The organization name.                 | _String_ |
| _Vanity Name_ | The organization vanity name.          | _String_ |
| _Description_ | The organization description.          | _String_ | _Limit_ |
| _Website_     | The organization website.              | _String_ |
| _Logo URL_    | The organization logo URL.             | _String_ |
