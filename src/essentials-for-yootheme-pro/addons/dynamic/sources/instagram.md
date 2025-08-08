# Instagram Source Provider

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/instagram.svg-->
</div>

The **Instagram Source** feeds data from Personal and Business [Instagram](https://www.instagram.com/) accounts supporting [Media](#media-query), [Media Single](#media-single-query), [Hashtagged Media](#hashtagged-media-query) and [User](#user-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

![Instagram Source Settings](./assets/ig-business-config.webp)

| Setting   | Description                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------- |
| _Account_ | The Instagram Account which to authenticate with.                                                        |
| _Page_    | The Facebook Page associated with the Instagram Business account. Not applicable for Instagram Personal. |

## Media Query

Fetches media from the authenticated account and resolves to a list of [Media Type](#media-type).

![Instagram Media Query](./assets/ig-query-media.webp)

| Setting       | Description                                                                        | Default | Dynamic  |
| ------------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _Type_        | The type of media to fetch, _All_, _Image_, or _Video_.                            | `All`   |
| _Offset_      | The offset media to fetch.                                                         | `0`     | &#x2713; |
| _Limit_       | The maximum amount of media to fetch.                                              | `20`    | &#x2713; |
| _Since/Until_ | The `start` and/or `end` datetime the fetched media will be restricted to.         |         | &#x2713; |
| _Cache_       | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

## Media Single Query

Fetches a single media from the authenticated account and resolves to a [Media Type](#media-type).

![Instagram Media Single Query](./assets/ig-query-media-single.webp)

| Setting | Description                                                                        | Default | Dynamic  |
| ------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _ID_    | Unique identifier of the media to retrieve.                                        |         | &#x2713; |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

If the Media is of Album Type you can fetch it media with the Multi Items query which resolves to a list of [Album Media Type](#album-media-type).

![Instagram Album Media Query](./assets/ig-query-media-single.webp)

| Setting | Description                                                                        | Default | Dynamic  |
| ------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _ID_    | Unique identifier of the media to retrieve.                                        |         | &#x2713; |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

### Hashtagged Media Query

Fetches top and recent hashtagged media from the authenticated business account and resolves to a list of [Media Type](#media-type).

![Instagram Hashtagged Media Query](./assets/ig-query-hashtagged-media.webp)

| Setting   | Description                                                                        | Default | Dynamic  |
| --------- | ---------------------------------------------------------------------------------- | ------- | :------: |
| _Hashtag_ | The hashtag to query for.                                                          |         | &#x2713; |
| _Edge_    | Should the query look for _Top Media_ or _Recent Media_ hashtagged with.           | `Top`   |
| _Cache_   | The duration in seconds before the cache is invalidated and the query re-executed. | `3600`  |

::: warning Notice
Take into consideration that this query is available for Instagram **Business** Accounts only and that the API imposes the following limitations:

- Only returns public photos and videos.
- Will not return promoted/boosted/ads media.
- Responses will not always be in chronological order.
- Maximum of 30 unique hashtags within a 7 day period.
  :::

### User Query

Fetches the user profile from the authenticated account and resolves to a [User Type](#user-type).

![Instagram User Query](./assets/ig-query-user.webp)

| Setting | Default                                                                            | Description |
| ------- | ---------------------------------------------------------------------------------- | ----------- |
| _Cache_ | The duration in seconds before the cache is invalidated and the query re-executed. | `0`         |

::: warning Notice
This query is only available for Instagram Business Accounts
:::

## Media Type

![Instagram Media Mapping](./assets/ig-type-media.webp)

| Option              | Description                                                               | Type     | Filters |
| ------------------- | ------------------------------------------------------------------------- | -------- | ------- |
| _ID_                | Unique identifier of this media.                                          | _String_ |
| _Type_              | The type of this media, _Album_, _Image_, or _Video_.                     | _String_ |
| _Media URL_         | The path to the locally cached media asset.                               | _String_ |
| _Media Preview URL_ | The path to the locally cached media preview asset.                       | _String_ |
| _Permalink_         | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`.       | _String_ |
| _Caption_           | The caption content.                                                      | _String_ | _Limit_ |
| _Hashtags_          | The media hashtags as a custom formated string with _Separator_ argument. | _String_ |
| _Created At_        | The time this media was created.                                          | _String_ | _Date_  |
| _Created By_        | The username of the user who created this media.                          | _String_ |

| Business Only Options | Description                             | Type  |
| --------------------- | --------------------------------------- | ----- |
| _Total Comments_      | Number of comments made one this media. | _Int_ |
| _Total Likes_         | Number of user that liked this media.   | _Int_ |

## Album Media Type

![Instagram Album Media Mapping](./assets/ig-type-album-media.webp)

| Option          | Description                                                         | Type     | Filters |
| --------------- | ------------------------------------------------------------------- | -------- | ------- |
| _ID_            | Unique identifier of this media.                                    | _String_ |
| _Type_          | The type of this media, _Album_, _Image_, or _Video_.               | _String_ |
| _URL_           | The path to the locally cached media asset.                         | _String_ |
| _Thumbnail URL_ | The path to the locally cached media thumbnail asset.               | _String_ |
| _Permalink_     | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | _String_ |
| _Created At_    | The time this media was created.                                    | _String_ | _Date_  |
| _Created By_    | The username of the user who created this media.                    | _String_ |

## User Type

![Instagram User Mapping](./assets/ig-type-user.webp)

| Option            | Description                                       | Type     | Filters |
| ----------------- | ------------------------------------------------- | -------- | ------- |
| _ID_              | Unique identifier of this user.                   | _String_ |
| _Name_            | The name of this user.                            | _String_ |
| _Website_         | The website of this user profile.                 | _String_ |
| _Biography_       | The biography of this user profile.               | _String_ | _Limit_ |
| _Picture URL_     | The profile picture URL of this user.             | _String_ |
| _Total Followers_ | Number of Instagram users following this user.    | _Int_    |
| _Total Follows_   | Number of Instagram users this user follows.      | _Int_    |
| _Total Media_     | Number of Instagram Media published on this user. | _Int_    |
