# Bluesky Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-bluesky.svg-->
</div>

The **Bluesky Source** feeds data from the [Bluesky](https://bsky.app/) social platform supporting [Author Feed](#author-feed-query), [List Feed](#list-feed-query), [Posts](#posts-query) and [Profile](#profile-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

| Setting | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| _Actor_ | The Bluesky actor AT Identifier from which to create the source. |

## Author Feed Query

Fetches posts and reposts made by the authenticated profile and resolves to [Feed Type](#feed-type).

| Setting | Description                                                                        | Default | Dynamic  |
| ------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _Limit_ | The maximum number of posts to fetch.                                              |         | &#x2713; |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

## List Feed Query

Fetches posts and reposts from profiles from a list and resolves to [Feed Type](#feed-type).

| Setting | Description                                                                        | Default | Dynamic  |
| ------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _List_  | The list of profiles from which to create the source from.                         |         | &#x2713; |
| _Limit_ | The maximum number of posts to fetch.                                              |         | &#x2713; |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

## Posts Query

Fetches posts made by the authenticated profile matching a search criteria and resolves to [Post Type](#post-type).

| Setting    | Description                                                                                                                                                                   | Default | Dynamic  |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | :------: |
| _Query_    | Syntax, phrase, boolean, and faceting is unspecified, but Lucene query syntax is recommended.                                                                                 |         | &#x2713; |
| _Since_    | Filter results for posts after the indicated datetime (inclusive). Can be a datetime, or just an ISO date `YYYY-MM-DD`.                                                       |         | &#x2713; |
| _Until_    | Filter results for posts before the indicated datetime (not inclusive). Can be a datetime, or just an ISO date `YYYY-MM-DD`.                                                  |         | &#x2713; |
| _Mentions_ | Filter to posts which mention the given account.                                                                                                                              |         | &#x2713; |
| _Language_ | Filter to posts in the given language. Expected to be based on post language field, though Bluesky server may override language detection.                                    |         | &#x2713; |
| _Domain_   | Filter to posts with URLs (facet links or embeds) linking to the given domain (hostname). Bluesky server may apply hostname normalization.                                    |         | &#x2713; |
| _URL_      | Filter to posts with links (facet links or embeds) pointing to this URL. Bluesky server may apply URL normalization or fuzzy matching.                                        |         | &#x2713; |
| _Tag_      | Filter to posts with the given tag (hashtag), based on rich-text facet or tag field. Do not include the hash (#) prefix. Multiple tags can be specified, with _AND_ matching. |         | &#x2713; |
| _Limit_    | The maximum number of posts to fetch.                                                                                                                                         |         | &#x2713; |
| _Sort_     | The order by wich to sort the posts, _Top_ or _Latest_.                                                                                                                       | _Top_   |
| _Cache_    | The duration in seconds before the cache is invalidated and the query re-executed.                                                                                            | `3600`  |

## Profile Query

Fetches the authenticated profile detailed data and resolves to [Profile Type](#profile-type).

| Setting | Description                                                                        | Default |
| ------- | ---------------------------------------------------------------------------------- | ------- |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

## Feed Type

Defines the mapping options of a Bluesky Feed object.

| Field  | Description    | Type               |
| ------ | -------------- | ------------------ |
| _Post_ | The feed post. | [Post](#post-type) |

## Post Type

Defines the mapping options of a Bluesky Post object.

| Field           | Description                                | Type                             | Filters |
| --------------- | ------------------------------------------ | -------------------------------- | ------- |
| _CID_           | Unique identifier of the content.          | _String_                         |
| _URI_           | Uniform Resource Identifier of the post.   | _String_                         |
| _Author_        | Author of the post.                        | [Profile](#profile-type)         |
| _Text_          | Text of the post.                          | _String_                         | _Limit_ |
| _Media Type_    | If present, the type of media in the post. | _String_                         |
| _Images_        | Images of the post.                        | [Post Image](#post-image-type)   |
| _Images Counts_ | The total amount of images of the post.    | _Int_                            |
| _Videos_        | Videos of the post.                        | [Post Video](#post-video-type)   |
| _GIF_           | GIF of the post.                           | [Post GIF](#post-gif-type)       |
| _Reply Count_   | Number of replies to the post.             | _Int_                            |
| _Repost Count_  | Number of reposts of the post.             | _Int_                            |
| _Like Count_    | Number of likes on the post.               | _Int_                            |
| _Quote Count_   | Number of quotes of the post.              | _Int_                            |
| _Indexed At_    | Timestamp when the post was indexed.       | _String_                         | _Date_  |
| <!--            | _Labels_                                   | Labels associated with the post. | -->     |

## Post Video Type

Defines the mapping options of a Bluesky Post Video object.

| Field           | Description                                   | Type     |
| --------------- | --------------------------------------------- | -------- |
| _CID_           | Content Identifier for the video.             | _String_ |
| _Thumbnail URL_ | URL of the thumbnail image.                   | _String_ |
| _Playlist_      | URL of the video playlist, or a single video. | _String_ |
| _Height_        | Height of the video.                          | _Int_    |
| _Width_         | Width of the video.                           | _Int_    |

## Post Image Type

Defines the mapping options of a Bluesky Post Image object.

| Field           | Description                     | Type     | Filters |
| --------------- | ------------------------------- | -------- | ------- |
| _Thumbnail URL_ | URL of the thumbnail image.     | _String_ |
| _Fullsize URL_  | URL of the full-size image.     | _String_ |
| _Alt Text_      | Alternative text for the image. | _String_ | _Limit_ |
| _Height_        | Height of the image.            | _Int_    |
| _Width_         | Width of the image.             | _Int_    |

## Post GIF Type

Defines the mapping options of a Bluesky Post GIF object.

| Field           | Description                 | Type     | Filters |
| --------------- | --------------------------- | -------- | ------- |
| _URI_           | URL of the GIF.             | _String_ |
| _Title_         | Title of the GIF.           | _String_ | _Limit_ |
| _Description_   | Description of the GIF.     | _String_ | _Limit_ |
| _Thumbnail URL_ | URL of the thumbnail image. | _String_ |

## Profile Type

Defines the mapping options of a Bluesky Profile object.

| Field             | Description                                            | Type     | Filters |
| ----------------- | ------------------------------------------------------ | -------- | ------- |
| _DID_             | Unique identifier.                                     | _String_ |
| _Handle_          | Unique alias used as username and url for the profile. | _String_ |
| _Display name_    | Profile Display Name.                                  | _String_ |
| _Description_     | Profile description.                                   | _String_ | _Limit_ |
| _Avatar_          | Profile avatar URL.                                    | _String_ |
| _Banner_          | Profile banner URL.                                    | _String_ |
| _Created At_      | Profile date of creation.                              | _String_ | _Date_  |
| _Followers Count_ | Total number of followers.                             | _Int_    |
| _Follows Count_   | Total number of follows.                               | _Int_    |
| _Posts Count_     | Total number of posts.                                 | _Int_    |
