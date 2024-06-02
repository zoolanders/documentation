## Instagram Source {#instagram}

![Instagram Source](/essentials-for-yootheme-pro/assets/brands/instagram.svg)

The **Instagram Source** feeds data from Personal and Business [Instagram](https://www.instagram.com/) accounts supporting [Media](#instagram-media-query), [Media Single](#instagram-media-single-query), [Hashtagged Media](#instagram-hashtagged-media-query) and [User](#instagram-user-query) queries.

<!--@include: ./common-provider-settings.md-->

![Instagram Source Settings](./assets/providers/ig-business-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Account* | The Instagram Account which to authenticate with. | &#x2713; |
| *Page* | The Facebook Page associated with the Instagram Business account. Not applicable for Instagram Personal. | &#x2713; |

### Instagram Media Query

Fetches media from the authenticated account and resolves to a list of [Instagram Media Type](#instagram-media-type).

![Instagram Media Query](./assets/providers/ig-query-media.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Type* | `All` | The type of media to fetch, _All_, _Image_, or _Video_. |
| *Amount* | `20` | The maximum amount of media to fetch. |
| *Since/Until* | `null` | The `start` and/or `end` datetime the fetched media will be restricted to. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Instagram Media Single Query

Fetches a single media from the authenticated account and resolves to a [Media Type](#instagram-media-type).

![Instagram Media Single Query](./assets/providers/ig-query-media-single.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *ID* | | Unique identifier of the media to retrieve. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

If the Media is of Album Type you can fetch it media with the Multi Items query which resolves to a list of [Instagram Album Media Type](#instagram-album-media-type).

![Instagram Album Media Query](./assets/providers/ig-query-media-single.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *ID* | | Unique identifier of the media to retrieve. | &#x2713; |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

#### Instagram Hashtagged Media Query

Fetches top and recent hashtagged media from the authenticated business account and resolves to a list of [Instagram Media Type](#instagram-media-type).

::: warning Notice
This query is only available for Instagram Business Accounts
:::

![Instagram Hashtagged Media Query](./assets/providers/ig-query-hashtagged-media.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Hashtag* | | The hashtag to query for. | &#x2713; |
| *Edge* | `Top` | Should the query look for _Top Media_ or _Recent Media_ hashtagged with. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

#### Instagram User Query

Fetches the user profile from the authenticated account and resolves to a [Instagram User Type](#instagram-user-type).

::: warning Notice
This query is only available for Instagram Business Accounts
:::

![Instagram User Query](./assets/providers/ig-query-user.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Cache* | `0` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Instagram Media Type

![Instagram Media Mapping](./assets/providers/ig-type-media.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this media. | *String* |
| *Type* | The type of this media, _Album_, _Image_, or _Video_. | *String* |
| *URL* | The path to the locally cached media asset. | *String* |
| *Thumbnail URL* | The path to the locally cached media thumbnail asset. | *String* |
| *Permalink* | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | *String* |
| *Caption* | The caption content. | *String* | *Limit* |
| *Hashtags* | The media hashtags as a custom formated string with _Separator_ argument. | *String* |
| *Created At* | The time this media was created. | *String* | *Date* |
| *Created By* | The username of the user who created this media. | *String* |

| Business Only Options | Description | Type |
| --- | --- | --- |
| *Total Comments* | Number of comments made one this media. | *Int* |
| *Total Likes* | Number of user that liked this media. | *Int* |

### Instagram Album Media Type

![Instagram Album Media Mapping](./assets/providers/ig-type-album-media.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this media. | *String* |
| *Type* | The type of this media, _Album_, _Image_, or _Video_. | *String* |
| *URL* | The path to the locally cached media asset. | *String* |
| *Thumbnail URL* | The path to the locally cached media thumbnail asset. | *String* |
| *Permalink* | The Instagram Media URL, e.g. `www.instagram.com/p/CO9O62hnpR5nkt`. | *String* |
| *Created At* | The time this media was created. | *String* | *Date* |
| *Created By* | The username of the user who created this media. | *String* |

### Instagram User Type

![Instagram User Mapping](./assets/providers/ig-type-user.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | Unique identifier of this user. | *String* |
| *Name* | The name of this user. | *String* |
| *Website* | The website of this user profile. | *String* |
| *Biography* | The biography of this user profile. | *String* | *Limit* |
| *Picture URL* | The profile picture URL of this user. | *String* |
| *Total Followers* | Number of Instagram users following this user. | *Int* |
| *Total Follows* | Number of Instagram users this user follows. | *Int* |
| *Total Media* | Number of Instagram Media published on this user. | *Int* |
