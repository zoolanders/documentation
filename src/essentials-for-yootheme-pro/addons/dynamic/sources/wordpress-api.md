# WordPress API Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-wordpress.svg-->
</div>

The **WordPress API Source** feeds data from [WordPress](https://wordpress.org/) sites using the WordPress REST API, supporting [Post](#post-query), [Posts](#posts-query), [Page](#page-query), [Pages](#pages-query), [Category](#category-query), and [Categories](#categories-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

<!--![WordPress API Source Configuration](./assets/wordpress-api-config.webp)-->

> **Note:** Configuration screenshot to be added.

| Setting | Description |
| --- | --- |
| *URL* | The base URL of the WordPress site to retrieve the data from, e.g. `https://mysite.com`. |
| *Authentication* | Optional API Token or Application Password for authenticated requests. For security, create a dedicated user with minimal permissions. |

## Post Query

Fetches a single post from the WordPress site and resolves to [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Post ID* | The ID of the post to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Posts Query

Fetches posts from the WordPress site and resolves to a list of [Post Type](#post-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Categories* | Optional category IDs to filter posts, comma-separated. | | &#x2713; |
| *Tags* | Optional tag IDs to filter posts, comma-separated. | | &#x2713; |
| *Status* | Filter by post status: Publish, Future, Draft, Pending, Private, or Any. | `Publish` |
| *Author* | Optional author ID to filter posts. | | &#x2713; |
| *Search* | Optional search query to filter posts. | | &#x2713; |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Limit* | The limit applied to the query. | `10` | &#x2713; |
| *Order By* | Sort posts by date, relevance, id, title, or slug. | `date` |
| *Order* | Sort order: Ascending or Descending. | `desc` |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Page Query

Fetches a single page from the WordPress site and resolves to [Page Type](#page-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Page ID* | The ID of the page to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Pages Query

Fetches pages from the WordPress site and resolves to a list of [Page Type](#page-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Parent* | Optional parent page ID to filter pages. | | &#x2713; |
| *Status* | Filter by page status: Publish, Future, Draft, Pending, Private, or Any. | `Publish` |
| *Author* | Optional author ID to filter pages. | | &#x2713; |
| *Search* | Optional search query to filter pages. | | &#x2713; |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Limit* | The limit applied to the query. | `10` | &#x2713; |
| *Order By* | Sort pages by date, relevance, id, title, or slug. | `date` |
| *Order* | Sort order: Ascending or Descending. | `desc` |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Category Query

Fetches a single category from the WordPress site and resolves to [Category Type](#category-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Category ID* | The ID of the category to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Categories Query

Fetches categories from the WordPress site and resolves to a list of [Category Type](#category-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Parent* | Optional parent category ID to filter categories. | | &#x2713; |
| *Hide Empty* | Whether to hide categories with no posts. | `false` |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Limit* | The limit applied to the query. | `10` | &#x2713; |
| *Order By* | Sort categories by name, slug, count, or id. | `name` |
| *Order* | Sort order: Ascending or Descending. | `asc` |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Post Type

Defines the mapping options of a WordPress Post object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the post. | *String* |
| *Title* | The title of the post. | *String* | *Limit* |
| *Content* | The full content of the post. | *String* | *Limit* |
| *Excerpt* | The excerpt of the post. | *String* | *Limit* |
| *Slug* | The URL-friendly slug of the post. | *String* |
| *Status* | The status of the post (publish, future, draft, pending, private). | *String* |
| *Type* | The type of the post. | *String* |
| *Link* | The URL to the post. | *String* |
| *Date* | The publication date of the post. | *String* | *Date* |
| *Date GMT* | The publication date of the post in GMT. | *String* | *Date* |
| *Modified* | The last modification date of the post. | *String* | *Date* |
| *Modified GMT* | The last modification date of the post in GMT. | *String* | *Date* |
| *Author* | The ID of the author. | *String* |
| *Featured Media* | The ID of the featured media. | *String* |
| *Comment Status* | Whether comments are allowed (open or closed). | *String* |
| *Ping Status* | Whether pings are allowed (open or closed). | *String* |
| *Sticky* | Whether the post is sticky. | *Boolean* |
| *Format* | The post format (standard, aside, gallery, link, image, quote, status, video, audio, chat). | *String* |
| *Categories* | Array of category IDs assigned to the post. | *String* |
| *Tags* | Array of tag IDs assigned to the post. | *String* |

## Page Type

Defines the mapping options of a WordPress Page object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the page. | *String* |
| *Title* | The title of the page. | *String* | *Limit* |
| *Content* | The full content of the page. | *String* | *Limit* |
| *Excerpt* | The excerpt of the page. | *String* | *Limit* |
| *Slug* | The URL-friendly slug of the page. | *String* |
| *Status* | The status of the page (publish, future, draft, pending, private). | *String* |
| *Type* | The type of the page. | *String* |
| *Link* | The URL to the page. | *String* |
| *Date* | The publication date of the page. | *String* | *Date* |
| *Date GMT* | The publication date of the page in GMT. | *String* | *Date* |
| *Modified* | The last modification date of the page. | *String* | *Date* |
| *Modified GMT* | The last modification date of the page in GMT. | *String* | *Date* |
| *Author* | The ID of the author. | *String* |
| *Featured Media* | The ID of the featured media. | *String* |
| *Parent* | The ID of the parent page. | *String* |
| *Menu Order* | The order of the page in menus. | *Int* |
| *Comment Status* | Whether comments are allowed (open or closed). | *String* |
| *Ping Status* | Whether pings are allowed (open or closed). | *String* |
| *Template* | The theme template file to use. | *String* |

## Category Type

Defines the mapping options of a WordPress Category object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the category. | *String* |
| *Name* | The name of the category. | *String* | *Limit* |
| *Slug* | The URL-friendly slug of the category. | *String* |
| *Description* | The description of the category. | *String* | *Limit* |
| *Parent* | The ID of the parent category. | *String* |
| *Count* | The number of posts in the category. | *Int* |
| *Link* | The URL to the category archive. | *String* |
| *Taxonomy* | The taxonomy type (category). | *String* |
