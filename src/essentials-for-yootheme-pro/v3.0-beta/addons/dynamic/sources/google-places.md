# Google Places Source Provider

<div class="tm-resource-icon">
    <!--@include: ../assets/provider-google-places.svg-->
</div>

The **Google Places Source** feeds data from [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview) supporting a [Place](#place-query).

## Settings

<!--@include: ./_partials/common-provider-settings.md-->

| Setting | Description |
| --- | --- |
| *Account* | The Google Account which to authenticate with. |
| *API Key* | The Google Places API key for authenticating requests. |

## Place Query

Fetches a single place by Place ID and resolves to [Place Type](#place-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Place ID* | The unique Place ID to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

## Place Type

Defines the mapping options of a Google Places Place object.

| Option | Description | Type | Filters |
| --- | --- | --- | --- |
| *Place ID* | The unique identifier for this place. | *String* |
| *Name* | The human-readable name of the place. | *String* | *Limit* |
| *Formatted Address* | The full address of the place. | *String* | *Limit* |
| *Address Components* | The address broken down into components. | [Address Component](#address-component-type) |
| *Phone Number* | The place's phone number in international format. | *String* |
| *International Phone Number* | The place's phone number in international format with country code. | *String* |
| *Website* | The website associated with the place. | *String* |
| *URL* | The URL of the Google Maps page for this place. | *String* |
| *Rating* | The place's rating from 1.0 to 5.0, based on aggregated user reviews. | *Float* |
| *User Ratings Total* | The total number of ratings for this place. | *Int* |
| *Price Level* | The price level of the place, from 0 (free) to 4 (very expensive). | *Int* |
| *Types* | The types that describe the place, separated by comma. | *String* |
| *Business Status* | The operational status of the place: `OPERATIONAL`, `CLOSED_TEMPORARILY`, or `CLOSED_PERMANENTLY`. | *String* |
| *Opening Hours* | The regular opening hours for the place. | [Opening Hours](#opening-hours-type) |
| *Photos* | Photos associated with the place. | [Photo](#photo-type) |
| *Reviews* | User reviews for the place. | [Review](#review-type) |
| *Geometry* | The location and viewport of the place. | [Geometry](#geometry-type) |
| *Vicinity* | A simplified address for the place. | *String* | *Limit* |
| *UTC Offset* | The number of minutes this place's current timezone is offset from UTC. | *Int* |
| *Icon* | The URL of the icon for the place's category. | *String* |
| *Icon Background Color* | The hex color code of the place's category icon. | *String* |

## Address Component Type

Defines the mapping options of an Address Component object.

| Field | Description | Type |
| --- | --- | --- |
| *Long Name* | The full text description of the address component. | *String* |
| *Short Name* | The abbreviated form of the address component. | *String* |
| *Types* | The types of this address component, separated by comma. | *String* |

## Opening Hours Type

Defines the mapping options of an Opening Hours object.

| Field | Description | Type |
| --- | --- | --- |
| *Open Now* | Whether the place is currently open. | *Boolean* |
| *Periods* | The periods describing when the place is open. | [Period](#period-type) |
| *Weekday Text* | The formatted opening hours for each day of the week, separated by line breaks. | *String* |

## Period Type

Defines the mapping options of a Period object describing opening hours.

| Field | Description | Type |
| --- | --- | --- |
| *Open Day* | The day of the week (0=Sunday, 6=Saturday) when the period starts. | *Int* |
| *Open Time* | The time of day in 24-hour "hhmm" format when the period starts. | *String* |
| *Close Day* | The day of the week (0=Sunday, 6=Saturday) when the period ends. | *Int* |
| *Close Time* | The time of day in 24-hour "hhmm" format when the period ends. | *String* |

## Photo Type

Defines the mapping options of a Photo object.

| Field | Description | Type |
| --- | --- | --- |
| *Photo Reference* | The reference string used to construct the photo URL. | *String* |
| *Width* | The maximum width of the photo in pixels. | *Int* |
| *Height* | The maximum height of the photo in pixels. | *Int* |
| *HTML Attributions* | The attributions for the photo, separated by line breaks. | *String* |

## Review Type

Defines the mapping options of a Review object.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *Author Name* | The name of the user who submitted the review. | *String* | *Limit* |
| *Author URL* | The URL to the user's Google Maps profile. | *String* |
| *Language* | The language code for the review. | *String* |
| *Profile Photo URL* | The URL to the user's profile photo. | *String* |
| *Rating* | The user's rating for the place, from 1 to 5. | *Int* |
| *Relative Time Description* | A relative time description of when the review was posted. | *String* | *Limit* |
| *Text* | The review text. | *String* | *Limit* |
| *Time* | The time the review was submitted as a Unix timestamp. | *Int* |

## Geometry Type

Defines the mapping options of a Geometry object.

| Field | Description | Type |
| --- | --- | --- |
| *Location* | The latitude and longitude of the place, separated by comma. | *String* |
| *Latitude* | The latitude of the place. | *Float* |
| *Longitude* | The longitude of the place. | *Float* |
| *Viewport* | The viewport for displaying the place. | [Viewport](#viewport-type) |

## Viewport Type

Defines the mapping options of a Viewport object.

| Field | Description | Type |
| --- | --- | --- |
| *Northeast* | The northeast corner of the viewport, formatted as "latitude,longitude". | *String* |
| *Southwest* | The southwest corner of the viewport, formatted as "latitude,longitude". | *String* |
