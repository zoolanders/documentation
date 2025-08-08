# Airtable Action

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/airtable.svg-->
</div>

The **Airtable Action** creates or deletes records from an [Airtable](https://airtable.com/) base.

## Create Record

Creates or update a base record.

| Setting          | Description                                                                                                       | Required | Dynamic  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- | :------: | :------: |
| _Authentication_ | The Airtable authentication credentials.                                                                          | &#x2713; |
| _Base_           | The Airtable base which to connect to.                                                                            | &#x2713; |
| _Table_          | The Airtable table which to connect to.                                                                           | &#x2713; |
| _Record_         | The Airtable record ID which to update. If left empty, a new record will be created instead.                      |          | &#x2713; |
| _Fields_         | Data mapping for the record fields.                                                                               | &#x2713; | &#x2713; |
| _Type Cast_      | When enabled, Airtable API will perform best-effort for automatic data conversion. E.g. from a string to integer. |
| _Replace_        | When enabled, Airtable API will replace the entire record instead of patch it.                                    |

<!--@include: ./_partials/common-action-settings.md-->

<!--@include: ./_partials/common-action-content-mapping.md-->

## Delete Record

Deletes a base record.

| Setting          | Description                              | Required | Dynamic  |
| ---------------- | ---------------------------------------- | :------: | :------: |
| _Authentication_ | The Airtable authentication credentials. | &#x2713; |
| _Base_           | The Airtable base which to connect to.   | &#x2713; |
| _Table_          | The Airtable table which to connect to.  | &#x2713; |
| _Record_         | The Airtable record ID which to delete.  | &#x2713; | &#x2713; |

<!--@include: ./_partials/common-action-settings.md-->
