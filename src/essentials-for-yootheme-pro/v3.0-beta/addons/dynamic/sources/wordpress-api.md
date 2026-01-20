# WordPress API Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-wordpress.svg-->
</div>

The **WordPress API Source** feeds data from [WordPress](https://wordpress.org/) sites using the WordPress REST API, supporting [Post](#post-query), [Posts](#posts-query), [Page](#page-query), [Pages](#pages-query), [Category](#category-query), and [Categories](#categories-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

<!--![WordPress API Source Configuration](./assets/wordpress-api-config.webp)-->

| Setting | Description |
| --- | --- |
| *URL* | The base URL of the WordPress site to retrieve the data from, e.g. `https://mysite.com`. |
| *Authentication* | Optional API Token or Application Password for authenticated requests. For security, create a dedicated user with minimal permissions. |

## Post Query

Fetches a single post from the WordPress site and resolves to [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Post ID* | The ID of the post to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Posts Query

Fetches posts from the WordPress site and resolves to a list of [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Filter by Status* | Filter by post status: Publish, Future, Draft, Pending, Private, or Any. | `publish` | |
| *Sticky* | Filter posts marked as sticky. | | |
| *Filter by Slug* | Filter posts by slug. Enter one or multiple values separated by commas. | | &#x2713; |
| *Filter by ID* | Include specific post IDs, comma-separated. | | &#x2713; |
| *Exclude* | Exclude specific post IDs, comma-separated. | | &#x2713; |
| *Filter by Author* | Include specific author IDs, comma-separated. | | &#x2713; |
| *Exclude Author* | Exclude specific author IDs, comma-separated. | | &#x2713; |
| *Filter by Categories* | Include specific category IDs, comma-separated. | | &#x2713; |
| *Exclude Categories* | Exclude specific category IDs, comma-separated. | | &#x2713; |
| *Filter by Tags* | Include specific tag IDs, comma-separated. | | &#x2713; |
| *Exclude Tags* | Exclude specific tag IDs, comma-separated. | | &#x2713; |
| *Filter by Term* | Search term matching title, excerpt, and content. | | &#x2713; |
| *Columns* | Custom columns to search within, comma-separated. | | |
| *Published After* | Filter posts published after this date (ISO8601 format). | | &#x2713; |
| *Before* | Filter posts published before this date (ISO8601 format). | | &#x2713; |
| *Modified After* | Filter posts modified after this date (ISO8601 format). | | &#x2713; |
| *Modified Before* | Filter posts modified before this date (ISO8601 format). | | &#x2713; |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Quantity* | The number of posts per page. | `20` | &#x2713; |
| *Page* | The page number to display. | `1` | &#x2713; |
| *Order By* | Sort posts by date, relevance, id, include, title, or slug. | `date` | |
| *Order* | Sort order: asc or desc. | `desc` | |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Page Query

Fetches a single page from the WordPress site and resolves to [Page Type](#page-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Page ID* | The ID of the page to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Pages Query

Fetches pages from the WordPress site and resolves to a list of [Page Type](#page-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Filter by Status* | Filter by page status: Publish, Future, Draft, Pending, Private, or Any. | `publish` | |
| *Filter by Slug* | Filter pages by slug. Enter one or multiple values separated by commas. | | &#x2713; |
| *Menu Order* | Filter pages by menu_order value. | | &#x2713; |
| *Filter by ID* | Include specific page IDs, comma-separated. | | &#x2713; |
| *Exclude* | Exclude specific page IDs, comma-separated. | | &#x2713; |
| *Filter by Parent* | Include specific parent page IDs, comma-separated. | | &#x2713; |
| *Exclude Parent* | Exclude specific parent page IDs, comma-separated. | | &#x2713; |
| *Filter by Author* | Include specific author IDs, comma-separated. | | &#x2713; |
| *Exclude Author* | Exclude specific author IDs, comma-separated. | | &#x2713; |
| *Filter by Term* | Search term matching title, excerpt, and content. | | &#x2713; |
| *Columns* | Custom columns to search within, comma-separated. | | |
| *Published After* | Filter pages published after this date (ISO8601 format). | | &#x2713; |
| *Before* | Filter pages published before this date (ISO8601 format). | | &#x2713; |
| *Modified After* | Filter pages modified after this date (ISO8601 format). | | &#x2713; |
| *Modified Before* | Filter pages modified before this date (ISO8601 format). | | &#x2713; |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Quantity* | The number of pages per page. | `20` | &#x2713; |
| *Page* | The page number to display. | `1` | &#x2713; |
| *Order By* | Sort pages by date, relevance, id, include, title, slug, or menu_order. | `date` | |
| *Order* | Sort order: asc or desc. | `desc` | |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Category Query

Fetches a single category from the WordPress site and resolves to [Category Type](#category-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Category ID* | The ID of the category to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Categories Query

Fetches categories from the WordPress site and resolves to a list of [Category Type](#category-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Parent* | Optional parent category ID to filter categories. | | &#x2713; |
| *Hide Empty* | Whether to hide categories with no posts. | `false` | |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Limit* | The limit applied to the query. | `10` | &#x2713; |
| *Order By* | Sort categories by name, slug, count, or id. | `name` | |
| *Order* | Sort order: asc or desc. | `asc` | |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Post Type

Defines the mapping options of a WordPress Post object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the post. | *String* | |
| *Title* | The title of the post. | *String* | *Limit* |
| *Slug* | The URL-friendly slug of the post. | *String* | |
| *Type* | The type of the post. | *String* | |
| *URL* | The URL to the post. | *String* | |
| *Status* | The status of the post (publish, future, draft, pending, private). | *String* | |
| *Comment Status* | Whether comments are allowed (open or closed). | *String* | |
| *Ping Status* | Whether pings are allowed (open or closed). | *String* | |
| *Sticky* | Whether the post is sticky. | *Boolean* | |
| *Format* | The post format (standard, aside, gallery, link, image, quote, status, video, audio, chat). | *String* | |
| *Excerpt* | The excerpt of the post. | *String* | *Limit* |
| *Content* | The full content of the post. | *String* | *Limit* |
| *Published* | The publication date of the post. | *String* | *Date* |
| *Published (GMT)* | The publication date of the post in GMT. | *String* | *Date* |
| *Modified* | The last modification date of the post. | *String* | *Date* |
| *Modified (GMT)* | The last modification date of the post in GMT. | *String* | *Date* |
| *Featured Media* | The featured media object. | [Media Type](#media-type) | |
| *Author* | The author of the post. | [User Type](#user-type) | |
| *Tags* | The tags assigned to the post. | List of [Tag Type](#tag-type) | |
| *Categories* | The categories assigned to the post. | List of [Category Type](#category-type) | |
| *Field* | Access to custom fields. | *PostFields* | |

## Page Type

Defines the mapping options of a WordPress Page object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the page. | *String* | |
| *Title* | The title of the page. | *String* | *Limit* |
| *Slug* | The URL-friendly slug of the page. | *String* | |
| *Type* | The type of the page. | *String* | |
| *URL* | The URL to the page. | *String* | |
| *Status* | The status of the page (publish, future, draft, pending, private). | *String* | |
| *Comment Status* | Whether comments are allowed (open or closed). | *String* | |
| *Ping Status* | Whether pings are allowed (open or closed). | *String* | |
| *Excerpt* | The excerpt of the page. | *String* | *Limit* |
| *Content* | The full content of the page. | *String* | *Limit* |
| *Menu Order* | The order of the page in menus. | *Int* | |
| *Published* | The publication date of the page. | *String* | *Date* |
| *Published (GMT)* | The publication date of the page in GMT. | *String* | *Date* |
| *Modified* | The last modification date of the page. | *String* | *Date* |
| *Modified (GMT)* | The last modification date of the page in GMT. | *String* | *Date* |
| *Featured Media* | The featured media object. | [Media Type](#media-type) | |
| *Author* | The author of the page. | [User Type](#user-type) | |
| *Parent* | The parent page. | [Page Type](#page-type) | |
| *Field* | Access to custom fields. | *PageFields* | |

## Category Type

Defines the mapping options of a WordPress Category object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the category. | *String* | |
| *Name* | The name of the category. | *String* | |
| *Slug* | The URL-friendly slug of the category. | *String* | |
| *Description* | The description of the category. | *String* | |
| *Link* | The URL to the category archive. | *String* | |
| *Count* | The number of posts in the category. | *Int* | |
| *Taxonomy* | The taxonomy type (category). | *String* | |
| *Parent* | The parent category. | [Category Type](#category-type) | |

## Tag Type

Defines the mapping options of a WordPress Tag object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the tag. | *String* | |
| *Name* | The name of the tag. | *String* | |
| *Slug* | The URL-friendly slug of the tag. | *String* | |
| *Description* | The description of the tag. | *String* | *Limit* |
| *URL* | The URL to the tag archive. | *String* | |
| *Count* | The number of posts with this tag. | *Int* | |
| *Taxonomy* | The taxonomy type (post_tag). | *String* | |

## Media Type

Defines the mapping options of a WordPress Media object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the media. | *String* | |
| *Title* | The title of the media. | *String* | *Limit* |
| *Slug* | The URL-friendly slug of the media. | *String* | |
| *Type* | The type of the media. | *String* | |
| *URL* | The URL to the media attachment page. | *String* | |
| *Source URL* | The direct URL to the media file. | *String* | |
| *Status* | The status of the media. | *String* | |
| *Alt Text* | The alternative text for the media. | *String* | |
| *Media Type* | The media type (image, file, video, audio). | *String* | |
| *MIME Type* | The MIME type of the media file. | *String* | |
| *Comment Status* | Whether comments are allowed (open or closed). | *String* | |
| *Ping Status* | Whether pings are allowed (open or closed). | *String* | |
| *Published* | The publication date of the media. | *String* | *Date* |
| *Published (GMT)* | The publication date of the media in GMT. | *String* | *Date* |
| *Modified* | The last modification date of the media. | *String* | *Date* |
| *Modified (GMT)* | The last modification date of the media in GMT. | *String* | *Date* |
| *Author* | The author of the media. | [User Type](#user-type) | |

## User Type

Defines the mapping options of a WordPress User object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the user. | *String* | |
| *Slug* | The URL-friendly slug of the user. | *String* | |
| *Name* | The display name of the user. | *String* | |
| *Nickname* | The nickname of the user. | *String* | |
| *First Name* | The first name of the user. | *String* | |
| *Last Name* | The last name of the user. | *String* | |
| *IP* | The IP address of the user. | *String* | |
| *Email* | The email address of the user. | *String* | |
| *Description* | The description of the user. | *String* | *Limit* |
| *Login Name* | The username used for login. | *String* | |
| *Login Password* | The password field (write-only). | *String* | |
| *URL* | The website URL of the user. | *String* | |
| *URL as Author* | The URL to the user's author archive. | *String* | |
| *Locale* | The locale setting of the user. | *String* | |
| *Registered Date* | The date the user registered. | *String* | *Date* |
| *Roles* | The roles assigned to the user. | *String* | |
| *Capabilities* | The capabilities of the user. | *String* | |
| *Extra Capabilities* | Additional capabilities. | *String* | |
| *Avatar URLs* | The avatar URLs at various sizes. | *String* | |
