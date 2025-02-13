## Airtable Source {#airtable}

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/airtable.svg-->
</div>

The **Airtable Source** feeds data from [Airtable](https://airtable.com/) bases supporting [Record](#airtable-record-query) and [Records](#airtable-records-query) queries.

<!--@include: ./common-provider-settings.md-->

![Airtable Source Configuration](./assets/providers/airtable-config.webp)

| Setting | Description |
| --- | --- |
| *Account* | The Airtable Account which to authenticate with. |
| *Base* | The Airtable base which to retrieve the data from. |
| *Table* | The Airtable base table which data to create the source with. |

### Airtable Record Query

Fetches a single record from an Airtable base and resolves to [Airtable Record Type](#airtable-record-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *Record ID* | The ID of the record to query. | | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

### Airtable Records Query

Fetches records from an Airtable base and resolves to a list of [Airtable Record Type](#airtable-record-type).

| Setting | Description | Default | Dynamic |
| --- | --- | --- | :---: |
| *View* | Optional table view to use instead of a raw query. |
| *Start* | The offset applied to the query. | `1` | &#x2713; |
| *Quantity* | The limit applied to the query. | `20` | &#x2713; |
| *Cache* | The duration in seconds before the cache is invalidated and the query re-executed. | `3600` |

### Airtable Record Type

The record type will be dynamically generated based on the Airtable base table schema by mapping [Airtable field types](https://airtable.com/developers/web/api/field-model) with GraphQL types as follows.

| Airtable Field Types | Type | Filters |
| --- | --- | --- |
| Number, Count, Currency, Duration, Percent, Rating, Auto number | *Int* |
| AI Text, Long Text, Rich text, Single line text | *String* | *Limit* |
| Date, Date and time, Created time, Last modified time | *String* | *Date* |
| Multiple select | *String* with separator |
| Created by, Last modified by, Collaborator, Multiple collaborators | [Airtable User](#airtable-user-type) |
| Multiple attachments | [Airtable Attachment](#airtable-attachment-type) |

Every record has the following fields available regardless of it schema.

| Field | Description | Type | Filters |
| --- | --- | --- | --- |
| *ID* | The unique identifier of this record. | *String* |
| *Created Time* | The unixstamp when this record was created. | *String* | *Date* |

### Airtable User Type

| Field | Description | Type |
| --- | --- | --- |
| *Email* | The user email. | *String* |
| *Name* | The user name. | *String* |
| *ID* | The user unique identifier. | *String* |

### Airtable Attachment Type

| Field | Description | Type |
| --- | --- | --- |
| *URL* | The attachment url, e.g. `https://v5.airtableusercontent.com/foo`. <br><small>Notice that URLs expire 2 hours after being returned from the Airtable API.</small> | *String* |
| *Filename* | The attachment filename, e.g. `foo.jpg`. | *String* |
| *Type* | The attachment content type, e.g. `image/jpeg`. | *String* |
| *Size* | The attachment file size, in bytes. | *Int* |
| *Width* | The attachment width in pixels, if attachment is an image. | *Int* |
| *Height* | The attachment height in pixels, if attachment is an image. | *Int* |
| *Thumbnail* | The attachment thumbnail, if attachment is an image. | *String* |
| *ID* | Unique attachment id. | *String* |
