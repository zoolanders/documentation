# Bluesky Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-bluesky.svg-->
</div>

The **Bluesky Source** feeds data from the [Bluesky](https://bsky.app/) social platform supporting [Author Feed](#author-feed-query), [List Feed](#list-feed-query), [Posts](#posts-query) and [Profile](#profile-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

| Setting | Description |
| --- | --- |
| *Actor* | The Bluesky actor AT Identifier from which to create the source. |

## Author Feed Query

Fetches posts and reposts made by the authenticated profile and resolves to [Feed Type](#feed-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Limit* | The maximum number of posts to fetch. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## List Feed Query

Fetches posts and reposts from profiles from a list and resolves to [Feed Type](#feed-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *List* | The list of profiles from which to create the source from. | | &#x2713; |
| *Limit* | The maximum number of posts to fetch. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Posts Query

Fetches posts made by the authenticated profile matching a search criteria and resolves to [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Query* | Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended. | | &#x2713; |
| *Since* | Filter results for posts after the indicated datetime (inclusive). Can be a datetime, or just an ISO date `YYYY-MM-DD`. | | &#x2713; |
| *Until* | Filter results for posts before the indicated datetime (not inclusive). Can be a datetime, or just an ISO date `YYYY-MM-DD`. | | &#x2713; |
| *Mentions* | Filter to posts which mention the given account. | | &#x2713; |
| *Language* | Filter to posts in the given language. Expected to be based on post language field, though Bluesky server may override language detection. | | &#x2713; |
| *Domain* | Filter to posts with URLs (facet links or embeds) linking to the given domain (hostname). Bluesky server may apply hostname normalization. | | &#x2713; |
| *URL* | Filter to posts with links (facet links or embeds) pointing to this URL. Bluesky server may apply URL normalization or fuzzy matching. | | &#x2713; |
| *Tag* | Filter to posts with the given tag (hashtag), based on rich-text facet or tag field. Do not include the hash (#) prefix. Multiple tags can be specified, with *AND* matching. | | &#x2713; |
| *Limit* | The maximum number of posts to fetch. | | &#x2713; |
| *Sort* | The order by wich to sort the posts, *Top* or *Latest*. | *Top* |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Profile Query

Fetches the authenticated profile detailed data and resolves to [Profile Type](#profile-type).

| Setting | Description | Default |
| --- | --- | --- |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Feed Type

Defines the mapping options of a Bluesky Feed object.

| Field | Description | Type |
| --- | --- | --- |
| *Post* | The feed post. | [Post](#post-type) |

## Post Type

Defines the mapping options of a Bluesky Post object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *CID* | Unique identifier of the content. | *String* |
| *URI* | Uniform Resource Identifier of the post. | *String* |
| *Author* | Author of the post. | [Profile](#profile-type) |
| *Text* | Text of the post. | *String* | *Limit* |
| *Media Type* | If present, the type of media in the post. | *String* |
| *Images* | Images of the post. |  [Post Image](#post-image-type) |
| *Images Counts* | The total amount of images of the post. | *Int* |
| *Videos* | Videos of the post. | [Post Video](#post-video-type) |
| *GIF* | GIF of the post. | [Post GIF](#post-gif-type) |
| *Reply Count* | Number of replies to the post. | *Int* |
| *Repost Count* | Number of reposts of the post. | *Int* |
| *Like Count* | Number of likes on the post. | *Int* |
| *Quote Count* | Number of quotes of the post. | *Int* |
| *Indexed At* | Timestamp when the post was indexed. | *String* | *Date* |
<!-- | *Labels* | Labels associated with the post. | -->

## Post Video Type

Defines the mapping options of a Bluesky Post Video object.

| Field | Description | Type |
| --- | --- | --- |
| *CID* | Content Identifier for the video. | *String* |
| *Thumbnail URL* | URL of the thumbnail image. | *String* |
| *Playlist* | URL of the video playlist, or a single video. | *String* |
| *Height* | Height of the video. | *Int* |
| *Width* | Width of the video. | *Int* |

## Post Image Type

Defines the mapping options of a Bluesky Post Image object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *Thumbnail URL* | URL of the thumbnail image. | *String* |
| *Fullsize URL* | URL of the full-size image. | *String* |
| *Alt Text* | Alternative text for the image. | *String* | *Limit* |
| *Height* | Height of the image. | *Int* |
| *Width* | Width of the image. | *Int* |

## Post GIF Type

Defines the mapping options of a Bluesky Post GIF object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *URI* | URL of the GIF. | *String* |
| *Title* | Title of the GIF. | *String* | *Limit* |
| *Description* | Description of the GIF. | *String* | *Limit* |
| *Thumbnail URL* | URL of the thumbnail image. | *String* |

## Profile Type

Defines the mapping options of a Bluesky Profile object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *DID* | Unique identifier. | *String* |
| *Handle* | Unique alias used as username and url for the profile. | *String* |
| *Display name* | Profile Display Name. | *String* |
| *Description* | Profile description. | *String* | *Limit* |
| *Avatar* | Profile avatar URL. | *String* |
| *Banner* | Profile banner URL. | *String* |
| *Created At* | Profile date of creation. |  *String* | *Date* |
| *Followers Count* | Total number of followers. | *Int* |
| *Follows Count* | Total number of follows. | *Int* |
| *Posts Count* | Total number of posts. | *Int* |
