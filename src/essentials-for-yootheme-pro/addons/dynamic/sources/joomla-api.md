# Joomla API Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-joomla.svg-->
</div>

The **Joomla API Source** feeds data from [Joomla](https://www.joomla.org/) sites using the Joomla Web Services API, supporting [Article](#article-query), [Articles](#articles-query), [Category](#category-query), and [Categories](#categories-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

| Setting | Description |
| --- | --- |
| *URL* | The base URL of the Joomla site to retrieve the data from, e.g. `https://mysite.com`. |
| *Authentication* | The API Token obtained from the Joomla User Manager dashboard. For security, create a dedicated user with minimal permissions and use its API Token. |

## Article Query

Fetches a single article from the Joomla site and resolves to [Article Type](#article-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Article ID* | The ID of the article to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Articles Query

Fetches articles from the Joomla site and resolves to a list of [Article Type](#article-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Filter by State* | Filter by publication state: Any, Published, Unpublished, Archived, or Trashed. | `Published` | |
| *Filter by Category* | Optional category ID to filter articles. | | &#x2713; |
| *Filter by Tag* | Filter articles by tag. Enter one or multiple values separated by commas. | | &#x2713; |
| *Filter by Author* | Optional author ID to filter articles. | | &#x2713; |
| *Filter by Language* | Filter articles by language code, e.g. `en-GB`. | | &#x2713; |
| *Filter by Term* | Filter by a custom string term. Matches partial terms in article general fields. | | &#x2713; |
| *Field* | Optional field to search within when using Term filter. | | |
| *Order By* | The field to sort by: ID, Alias, Created, Modified, or Published. | `id` | |
| *Direction* | The sort direction: Ascending or Descending. | `desc` | |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Quantity* | The limit applied to the query. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Category Query

Fetches a single category from the Joomla site and resolves to [Category Type](#category-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Category ID* | The ID of the category to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Categories Query

Fetches categories from the Joomla site and resolves to a list of [Category Type](#category-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Start* | The offset applied to the query. | `0` | &#x2713; |
| *Quantity* | The limit applied to the query. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` | |

## Article Type

Defines the mapping options of a Joomla Article object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the article. | *Int* | |
| *Title* | The title of the article. | *String* | |
| *Alias* | The URL-friendly alias of the article. | *String* | |
| *Content* | The combined content (introtext + fulltext) of the article. | *String* | |
| *Created* | The creation date and time of the article. | *String* | *Date* |
| *Modified* | The last modification date and time of the article. | *String* | *Date* |
| *Publish Up* | The start publishing date and time. | *String* | *Date* |
| *Publish Down* | The finish publishing date and time. | *String* | *Date* |
| *Featured* | Whether the article is featured. | *Boolean* | |
| *Hits* | The number of times the article has been viewed. | *Int* | |
| *Image Intro* | The intro image with URL, alt text, and caption. | [Media Type](#media-type) | |
| *Image Fulltext* | The fulltext image with URL, alt text, and caption. | [Media Type](#media-type) | |
| *Tags* | The tags assigned to the article. | List of [Tag Type](#tag-type) | |
| *Category* | The category the article belongs to. | [Category Type](#category-type) | |
| *Author* | The user who created the article. | [User Type](#user-type) | |
| *Field* | Access to custom fields. | *ArticleFields* | |

## Category Type

Defines the mapping options of a Joomla Category object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the category. | *Int* | |
| *Title* | The title of the category. | *String* | |
| *Alias* | The URL-friendly alias of the category. | *String* | |
| *Description* | The description of the category. | *String* | |
| *Note* | Internal note for the category. | *String* | |
| *Published* | The publication state of the category. | *Int* | |
| *Access* | The access level ID of the category. | *Int* | |
| *Access Level* | The access level name of the category. | *String* | |
| *Checked Out* | The ID of the user who checked out the category. | *Int* | |
| *Checked Out Time* | The time when the category was checked out. | *String* | *Date* |
| *Level* | The level of the category in the hierarchy. | *Int* | |
| *Language* | The language code of the category. | *String* | |
| *Language Title* | The language title of the category. | *String* | |
| *Language Image* | The language image of the category. | *String* | |
| *Created By* | The user who created the category. | [User Type](#user-type) | |
| *Created By Alias* | The alias of the category creator. | *String* | |
| *Editor* | The editor used for the category. | *String* | |
| *Count Trashed* | The number of trashed items in this category. | *Int* | |
| *Count Unpublished* | The number of unpublished items in this category. | *Int* | |
| *Count Published* | The number of published items in this category. | *Int* | |
| *Count Archived* | The number of archived items in this category. | *Int* | |
| *Parent ID* | The parent category. | [Category Type](#category-type) | |

## Media Type

Defines the mapping options of a Joomla Media object used for article images.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *URL* | The media file URL. | *String* | |
| *Alt Text* | The alternative text for the media. | *String* | *Limit* |
| *Caption* | The caption for the media. | *String* | *Limit* |
| *Width* | The width of the media. | *String* | |
| *Height* | The height of the media. | *String* | |

## Tag Type

Defines the mapping options of a Joomla Tag object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the tag. | *Int* | |
| *Title* | The title of the tag. | *String* | *Limit* |
| *Alias* | The URL-friendly alias of the tag. | *String* | |
| *Description* | The description of the tag. | *String* | *Limit* |
| *Published* | The publication state of the tag. | *Int* | |
| *Checked Out* | The ID of the user who checked out the tag. | *Int* | |
| *Checked Out Time* | The time when the tag was checked out. | *String* | *Date* |
| *Created By* | The user who created the tag. | [User Type](#user-type) | |
| *Path* | The full path of the tag. | *String* | |
| *Editor* | The editor used for the tag. | *String* | |
| *Parent ID* | The parent tag. | [Tag Type](#tag-type) | |

## User Type

Defines the mapping options of a Joomla User object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of the user. | *Int* | |
| *Name* | The name of the user. | *String* | |
| *Username* | The username of the user. | *String* | |
| *Email* | The email address of the user. | *String* | |
| *Send Email* | Whether the user should receive emails. | *Int* | |
| *Register Date* | The date the user registered. | *String* | *Date* |
| *Last Visit Date* | The date of the user's last visit. | *String* | *Date* |
| *Last Reset Time* | The time of the user's last password reset. | *String* | *Time* |
| *Is Blocked* | Whether the user is blocked. | *Int* | |
| *Reset Count* | The number of password reset attempts. | *Int* | |
| *Group Count* | The number of user groups the user belongs to. | *Int* | |
| *Group Names* | The names of the user groups. | *String* | |
| *Field* | Access to custom user fields. | *UserFields* | |
