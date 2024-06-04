## Vimeo Source {#vimeo}

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/vimeo.svg-->
</div>

The Vimeo Source feeds media from [Vimeo](https://www.vimeo.com) supporting [My Videos](#vimeo-my-videos-query), [My Folder Videos](#vimeo-my-folder-videos-query) and [My Showcase Videos](#vimeo-my-showcase-videos-query) queries.

<!--@include: ./common-provider-settings.md-->

![Vimeo Source Configuration](./assets/providers/vimeo-config.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Account* | The Vimeo Account which to authenticate with. | &#x2713; |

### Vimeo My Videos Query

Fetches videos from the authenticated account and resolves to a list of [Vimeo Video Type](#vimeo-video-type).

![Vimeo My Videos Query](./assets/providers/vimeo-query-myvideos.webp)

| Setting | Default | Description |
| --- | --- | --- |
| *Query* | | The search term by which to filter the videos. |
| *Attribute* | | The video attribute by which to filter the videos, within _Featured_, _Live_, and _No Live_. |
| *Tags* | | Comma separated tags by which to filter the videos. |
| *Sort* | `Default` | The order of the videos, within _Default_, _Alphabetical_, _Date_, _Modified_, _Duration_, _Last User Action_, _Total Plays_, and _Total Likes_. |
| *Direction* | `Descending` | The order direction of the videos, _Ascending_ or _Descending_. |
| *Page* | `1` | The page number of the videos. |
| *Per Page* | `25` | The number of videos to return on each page, up to a maximum of 100. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Vimeo My Folder Videos Query

Fetches videos from the authenticated account specific folder and resolves to a list of [Vimeo Video Type](#vimeo-video-type).

![Vimeo My Vimeo Folder Videos Query](./assets/providers/vimeo-query-myfolder-videos.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Folder ID* | | The unique identifier of the folder from which to retrieve the videos. | &#x2713; |
| *Include Subfolders* | | Whether to include videos of all subfolders. |
| *Query* | | The search term by which to filter the videos. |
| *Sort* | `Default` | The order of the videos, within _Default_, _Alphabetical_, _Date_, _Duration_, and _Last User Action_. |
| *Direction* | `Descending` | The order direction of the videos, _Ascending_ or _Descending_. |
| *Page* | `1` | The page number of the videos. |
| *Per Page* | `25` | The number of videos to return on each page, up to a maximum of 100. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Vimeo My Showcase Videos Query

Fetches videos from the authenticated account specific showcase and resolves to a list of [Vimeo Video Type](#vimeo-video-type).

![Vimeo My Vimeo Showcase Videos Query](./assets/providers/vimeo-query-myshowcase-videos.webp)

| Setting | Default | Description | Required |
| --- | --- | --- | :---: |
| *Showcase ID* | | The unique identifier of the showcase from which to retrieve the videos. | &#x2713; |
| *Password* | | The password of the showcase in case it has one. |
| *Query* | | The search term by which to filter the videos. |
| *Sort* | `Default` | The order of the videos, within _Default_, _Alphabetical_, _Comments_, _Date_, _Modified_, _Duration_, _Total Plays_, and _Total Likes_. |
| *Direction* | `Descending` | The order direction of the videos, _Ascending_ or _Descending_. |
| *Page* | `1` | The page number of the videos. |
| *Per Page* | `25` | The number of videos to return on each page, up to a maximum of 100. |
| *Cache* | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Vimeo Video Type

Defines the mapping options of a Vimeo Video object.

![Vimeo Video Mapping](./assets/providers/vimeo-type-video.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this video. | *String* |
| *URL* | The URL of this video, e.g. `vimeo.com/123456789`. | *String* |
| *Custom URL* | The custom URL of this video. | *String* |
| *Type* | The type of this video, _live_ (is or was a live event), _stock_ (is a Vimeo Stock video), or _video_ (standard Vimeo video). | *String* |
| *Title* | The title of this video. | *String* | *Limit* |
| *Description* | A brief explanation of this video's content. | *String* | *Limit* |
| *Duration* | The duration of this video in seconds. | *Int* |
| *Language* | The primary language of this video. | *String* |
| *License* | The [Creative Commons](https://creativecommons.org/licenses/) license given to this video under _BY_, _BY-NC_, _BY-NC-ND_, _BY-NC-SA_, _BY-ND_, _BY-SA_, or _CC0_. | *String* |
| *Thumbnail* | The path to the locally cached video picture. | *String* |
| *Width* | The width of this video in pixels. | *Int* |
| *Height* | The height of this video in pixels. | *Int* |
| *Tags* | A formated list of all tags assigned to this video, joined with a custom separator. | *String* |
| *Categories* | A formated list of all categories this video belongs to, joined with a custom separator, optional link and style. | *String* |
| *Created At* | The time this video was created. | *String* | *Date* |
| *Released At* | The time this video was released. | *String* | *Date* |
| *Modified At* | The time this video was modified. | *String* | *Date* |
| *Total Plays* | Number of times this video has been played. | *Int* |
| *Total Comments* | Number of times this video has been commented. | *Int* |

### Vimeo User Type

Defines the mapping options of a Vimeo User object.

![Vimeo User Mapping](./assets/providers/vimeo-type-user.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this user. | *String* |
| *URL* | The absolute URL of this user profile page. | *String* |
| *Name* | The display name of this user. | *String* |
| *Gender* | The gender of this user. | *String* |
| *Bio* | The long bio text of this user. | *String* | *Limit* |
| *Bio Short* | The short bio text of this user. | *String* | *Limit* |
| *Location* | The location of this user. | *String* |
| *Is Expert* | Whether the creator enrolled in and successfully completed the Vimeo Experts program. | *String* |
