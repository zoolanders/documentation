---
title: Google Calendar
description: Content Source based on Google Calendar
icon: '
    <path fill="none" stroke-width="2" d="M1.025 22.355V3.231c0-1.218.987-2.206 2.206-2.206h23.538c1.218 0 2.206.988 2.206 2.206v19.125l-6.62 6.62H7.646l-4.414-.001a2.207 2.207 0 0 1-2.206-2.207v-4.413Z"/>
    <path stroke="none" fill-rule="nonzero" d="m16.753 12.162.847 1.285 1.683-1.226v8.081h1.67V9.972h-1.164l-3.036 2.19ZM13.81 14.88v-.092c.393-.212.717-.505.96-.859l.006-.009a2.331 2.331 0 0 0 .393-1.385v.004-.034c0-.524-.157-1.012-.428-1.418l.006.01a2.904 2.904 0 0 0-1.153-.997l-.018-.008a3.746 3.746 0 0 0-1.687-.361h.003a3.208 3.208 0 0 0-2.091.663l.008-.006c-.5.386-.885.9-1.108 1.493l-.008.023 1.527.636a2.13 2.13 0 0 1 .579-.889l.002-.001a1.534 1.534 0 0 1 1.083-.362h-.004l.069-.001c.409 0 .785.14 1.082.375l-.003-.003a1.209 1.209 0 0 1 .453.992v-.003l.001.056c0 .421-.197.796-.505 1.037l-.003.002a1.931 1.931 0 0 1-1.25.4h.004-.798v1.526h.89l.08-.001c.512 0 .985.173 1.36.465l-.004-.004a1.45 1.45 0 0 1 .572 1.188v-.002.03c0 .46-.21.87-.541 1.138l-.003.003a1.935 1.935 0 0 1-1.302.46h.002-.052c-.461 0-.885-.165-1.213-.44l.003.002a2.333 2.333 0 0 1-.73-1.224l-.003-.015-1.542.636a3.45 3.45 0 0 0 1.364 1.963l.01.008c.6.42 1.345.67 2.148.67H12.041c.642 0 1.248-.15 1.786-.42l-.023.011a3.22 3.22 0 0 0 1.261-1.105l.008-.012a2.88 2.88 0 0 0 .46-1.619v.003-.065a2.52 2.52 0 0 0-.49-1.497l.006.007a2.924 2.924 0 0 0-1.22-.962l-.02-.007Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The Google Calendar source feeds data from the Google Calendar service. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![Google Calendar Configuration](/assets/ytp/sources/google-calendar-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Google account which to authenticate with. | &#x2713; |
| **Calendar** | The Google calendar which data to create the source with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "Google Calendar"} /%}

### Authentication

Authentication is based on the OAuth protocol driven by the [Google OAuth Driver](/essentials-for-yootheme-pro/auth/drivers/google-oauth).

{% image %}
![Google OAuth Driver](/assets/ytp/auths/driver-google-oauth.webp)
{% /image %}

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Calendar Query

Fetches the Calendar data resolving to a [Calendar Type](#calendar-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Event Query

Fetches a single event from the calendar and resolves to a [Event Type](#event-type).

| Setting | Default | Description | Required |
| ------- | ------- | ----------- | :------: |
| **Event ID** | |  The ID of the event to query. | &#x2713; |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Events Query

Fetches events from the calendar and resolves to a list of [Event Type](#event-type).

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Query** | | Optionaly filter matching terms in the summary, description, location, attendee\'s displayName and attendee\'s email fields. |
| **Single Events Only** | | Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. |
| **Order By** | | The order by which to query the events, `Start Time (asc)` or `Updated (asc)`. |
| **Quantity** | `250` | The maximum amount of events to query. |
| **Time Min / Max** | |  Lower and Upper bounds (exclusive) for an event\'s start or end time to filter by. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

## Content Types

The content types define the mapping options for the source content.

### Calendar Type

Defines the mapping options of a Calendar object.

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Unique identifier of the calendar. | `String` |
| **Summary** | Title of the calendar. | `String` | `Limit` |
| **Description** | Description of the calendar. | `String` | `Limit` |
| **Location** | Geographic location of the event as free-form text. | `String` | `Limit` |
| **Time Zone** | The calendars default time zone. | `String` |

### Event Type

Defines the mapping options of an Event object.

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Opaque identifier of the event. | `String` |
| **URL** | An absolute link to the event in the Google Calendar Web UI. | `String` |
| **Type** | Specific type of the event, `default`, `outOfOffice`, `focusTime` or `workingLocation`. | `String` |
| **Status** | Status of the event, `confirmed`, `tentative` or `cancelled`. -  | `String` |
| **Visibility** | Visibility of the event, `default`, `public`, `private`, or `confidential`  | `String` |
| **Summary** | Title of the event. | `String` | `Limit` |
| **Description** | Description of the calendar. | `String` | `Limit` |
| **Location** | Geographic location of the event as free-form text. | `String` | `Limit` |
| **Start** | The (inclusive) start time of the event. For a recurring event, this is the start time of the first instance. | `String` | `Date` |
| **End** | The (exclusive) end time of the event. For a recurring event, this is the end time of the first instance. | `String` | `Date` |
| **Created** | Creation time of the event. | `String` | `Date` |
| **Updated** | Last modification time of the event. | `String` | `Date` |
| **Creator** | The creator of the event. | [Profile Type](#profile-type) |
| **Organizer** | The organizer of the event. | [Profile Type](#profile-type) |
| **Attendees** | The attendees of the event. | [Attendee Type](#attendee-type) |
| **Attachments** | File attachments of the event. | [Attachment Type](#attachment-type) |

### Profile Type

Defines the mapping options of a Profile object.

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Identifier of the profile. | `String` |
| **Email** | The profile's email. | `String` |
| **Name** | The profile's name. | `String` | `Limit` |

### Attendee Type

Defines the mapping options of an Attendee object.

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Identifier of the attendee. | `String` |
| **Email** | The attendee's email. | `String` |
| **Name** | The attendee's name. | `String` | `Limit` |
| **Comment** | The attendee's name. | `String` | `Limit` |
| **Response Status** | The attendee's response status, `needsAction`, `declined`, `tentative` or `accepted`. | `String` |
| **Is Organizer** | Whether the attendee is the organizer of the event. | `Boolean` |
| **Is Resource** | Whether the attendee is a resource. | `Boolean` |
| **Is Optional** | Whether this is an optional attendee. | `Boolean` |
| **Additional Guests Count** | Number of additional guests. | `Int` |

### Attachment Type

Defines the mapping options of an Attachment object.

| Option | Description | Type | Filters |
| ------ | ----------- | ---- | ------- |
| **ID** | Identifier of the attached file. | `String` |
| **Title** | Title of the attachment. | `String` | `Limit` |
| **Mime Type** | Internet media type (MIME type) of the attachment. | `String` |
| **File URL** | URL link to the attachment. | `String` |
| **Icon URL** | URL link to the attachment's icon. | `String` |
