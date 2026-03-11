# Google Business Profile Source Provider

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/google-business-profile.svg-->
</div>

The **Google Business Profile Source** feeds data from [Google Business Profile](https://business.google.com/) supporting [Location](#location-query), [Review](#review-query), [Reviews](#reviews-query), [Media](#media-query) and [Posts](#posts-query) queries.

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

![Google Business Profile location Source](./assets/gbp-location-config.webp)

| Setting | Description |
| --- | --- |
| *Account* | The Google Account which to authenticate with. |
| *Profile* | The Google Business Profile from which to retrieve the locations. |
| *Location* | The Google Business Profile location from which to create the source. |

## Location Query

Fetches a single location from the profile resolving to a [Location Type](#location-type).

![Google Business Profile Location Query](./assets/gbp-query-location.webp)

| Setting | Description | Default |
| --- | --- | --- |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |
| *Multiple Items* |
| -- [Business Hours](#period-type) | A subquery fetching this location open hours. |
| -- [Special Hours](#period-type) | A subquery fetching this location special hours. |

## Review Query

Fetches a single review from the profile location resolving to a [Review Type](#review-type).

![Google Business Profile Review Query](./assets/gbp-query-review.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Review* | The location review which content to fetch. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Reviews Query

Fetches reviews from the profile location resolving to a list of [Review Type](#review-type).

![Google Business Profile Reviews Query](./assets/gbp-query-reviews.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Order By* | The order by which to fetch the reviews, _Latest_, _Rating Ascending_, or _Rating Descending_. | `Latest` |
| *Quantity* | The maximum amount of reviews to fetch. | `10` |  &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Media Query

Fetches media from the profile location resolving to a list of [Media Type](#media-type).

![Google Business Profile Media Query](./assets/gbp-query-media.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Quantity* | The maximum amount of media to fetch. | `20` |  &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Posts Query

Fetches posts from the profile location resolving to a list of [Post Type](#post-type).

![Google Business Profile Post Query](./assets/gbp-query-posts.webp)

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Quantity* | The maximum amount of posts to fetch. | `20` |  &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Location Type

Defines the mapping options of a Google Business Profile Location object.

![Google Business Profile Location Mapping](./assets/gbp-type-location.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this location. | *String* |
| *Title* | The title of this location. | *String* | *Limit* |
| *Description* | The description of this location. | *String* | *Limit* |
| *Phone* | The primary phone number of this location. | *String* |
| *Website* | The website of this location. | *String* |
| *Category* | The primary category that describes this location business. | *String* |
| *Labels* | The free-form tags of this location, separated by a comma. | *String* |
| *Language* | The language of this location. | *String* |
| *Store Code* | The external identifier for this location. | *String* |
| *Coordinates* | The latitude and longitude for this location, separated by a comma. | *String* |
| *Latitude* | The latitude for this location. | *String* |
| *Longitude* | The longitude for this location. | *String* |
| *Total Reviews* | The number of reviews for this location. | *Int* |
| *Average Rating* | The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating. | *Int* |
| *Reviews URI* | The Google URI pointing to this location reviews. | *String* |
| *New Review URI* | The Google URI pointing to a form where a new review for this location can be posted. | *String* |
| *Google Maps URI* | The Google Maps URI pointing to this location. | *String* |
| *Google Maps Place ID* | The Google Maps Place ID for this location. | *String* |
| *Address* | The address for this location. | [Postal Address](#postal-address-type) |

## Review Type

Defines the mapping options of a Google Business Profile Location Review object.

![Google Business Profile Location Review Mapping](./assets/gbp-type-review.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this location. | *String* |
| *Comment* | The body of this review comment as plain text with markups. | *String* | *Limit* |
| *Original Comment* | The comment of this review without translation. | *String* | *Limit* |
| *Translated Comment* | The translated comment of this review. | *String* | *Limit* |
| *Star Rating* | The star rating given by this review where five is the highest rated. | *Int* |
| *Created At* | The date this review was created. | *String* | *Date* |
| *Updated At* | The date this review was last modified. | *String* | *Date* |
| *Reply* | The owner/manager of this location's reply to this review. | [Review Reply Type](#review-reply-type) |
| *Reviewer* | The author of this review. | [Reviewer Type](#reviewer-type) |

## Review Reply Type

Defines the mapping options of a Google Business Profile Review Reply object.

![Google Business Profile Review Reply Mapping](./assets/gbp-type-review-reply.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *Comment* | The body of this reply as plain text with markups. | *String* | *Limit* |
| *Updated At* | The date this reply was last modified. | *String* | *Date* |

## Reviewer Type

Defines the mapping options of a Google Business Profile Reviewer object.

![Google Business Profile Reviewer Mapping](./assets/gbp-type-reviewer.webp)

| Option | Description | Type |
| --- | --- | --- |
| *Display Name* | The name of the reviewer, only populated with the reviewer's real name if is not anonymous. | *String* |
| *Profile Photo URL* | The path to the locally cached reviewer profile photo. | *String* |
| *Is Anonymous* | Indicates whether the reviewer has opted to remain anonymous. | *Boolean* |

## Post Type

Defines the mapping options of a Google Business Profile Post object.

![Google Business Profile Post Mapping](./assets/gbp-type-post.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this post. | *String* |
| *URL* | The link to the post in Google search. | *String* |
| *Topic Type* | The topic type of the post, _STANDARD_, _EVENT_, _OFFER_, or _ALERT_. | *String* |
| *Summary* | The description/body of the post. | *String* |
| *Primary Media URL* | The path to the locally cached post primary media thumbnail. | *String* |
| *Language* | The language of the post. | *String* |
| *Created At* | The date this post was created. | *String* | *Date* |
| *Updated At* | The date this post was last modified. | *String* | *Date* |
| *Offer* |
| *Coupon Code* | Offer code that is usable in store or online. | *String* |
| *Redeem Online URL* | Online link to redeem this offer. | *String* |
| *Terms & Conditions* | Terms and conditions of this offer. | *String* |

## Media Type

Defines the mapping options of a Google Business Profile Media object.

![Google Business Profile Media Mapping](./assets/gbp-type-media.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this media. | *String* |
| *Description* | The description of this media. | *String* | *Limit* |
| *Format* | The format of this media, _PHOTO_, _VIDEO_, OR _MEDIA_FORMAT_UNSPECIFIED_. | *String* |
| *Width* | The width of the media, in pixels. | *String* |
| *Height* | The height of the media, in pixels. | *String* |
| *Thumbnail URL* | The path to the locally cached media thumbnail. | *String* |
| *Source URL* | A publicly accessible URL where the media can be retrieved from. | *String* |
| *Google URL* | The Google-hosted URL for this media. For video this will be a preview image with an overlaid play icon. | *String* |
| *Created At* | The date this media was created. | *String* | *Date* |
| *Total Views* | The number of times this media has been viewed. | *Int* |
| *Attribution* |
| *Profile Name* | The name of the attributed user. | *String* |
| *Profile URL* | The URL of the attributed user's Google Maps profile page. | *String* |
| *Profile Photo URL* | The path to the locally cached attributed user's profile photo thumbnail. | *String* |
| *Location Association* |
| *Category* | The [category](https://developers.google.com/my-business/reference/rest/v4/accounts.locations.media#MediaItem.Category) that this location photo belongs to. | *String* |
| *Price List Item ID* | The ID of a price list item that this location media is associated with. | *String* |

## Period Type

Defines the mapping options of a Google Business Profile time period object.

![Google Business Profile Time Period Mapping](./assets/gbp-type-period.webp)

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *Open Period* | The current period during which the location is open, formated as `{start time} - {end time}` with a custom time format setting. | *String* |
| *Open Day* | The day of the week this period starts on. | *String* |
| *Close Day* | The day of the week this period ends on. | *String* |
| *Open Time* | The time this period starts on. | *String* | *Time* |
| *Close Time* | The time this period ends on. | *String* | *Time* |

## Postal Address Type

Defines the mapping options of a Google Business Profile Postal Address object.

![Google Business Profile Postal Address Mapping](./assets/gbp-type-postal-address.webp)

| Option | Description | Type |
| --- | --- | --- |
| *Organization* | The name of the organization for this address. | *String* |
| *Address* | The address lines separated by comma. | *String* |
| *Address Full* | The address lines with postal, locality and area separated by comma. | *String* |
| *Locality* | The city/town portion of this address. | *String* |
| *Sublocality* | The sublocality of this address, this can be neighborhoods, boroughs, districts. | *String* |
| *Administrative Area* | The highest administrative subdivision which is used for postal addresses of a country or region. | *String* |
| *Region Code* | The CLDR region code of the country/region of this address. | *String* |
| *Sorting Code* | The country-specific sorting code, if applicable. | *String* |
| *Postal Code* | The postal code of this address, if applicable. | *String* |
| *Language Code* | The BCP-47 language code of the contents of this address. | *String* |
