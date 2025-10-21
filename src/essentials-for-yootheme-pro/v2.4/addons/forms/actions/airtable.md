# Airtable Action

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/airtable.svg-->
</div>

The **Airtable Action** creates or deletes records from an [Airtable](https://airtable.com/) base.

## Create Record

Creates or update a base record.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Authentication* | The Airtable authentication credentials. | &#x2713; |
| *Base* | The Airtable base which to connect to. | &#x2713; |
| *Table* | The Airtable table which to connect to. | &#x2713; |
| *Record* | The Airtable record ID which to update. If left empty, a new record will be created instead. | |  &#x2713; |
| *Fields* | Data mapping for the record fields. | &#x2713; | &#x2713; |
| *Type Cast* | When enabled, Airtable API will perform best-effort for automatic data conversion. E.g. from a string to integer. |
| *Replace* | When enabled, Airtable API will replace the entire record instead of patch it. |
<!--@include: ./_partials/common-action-settings.md-->

<!--@include: ./_partials/common-action-content-mapping.md-->

## Delete Record

Deletes a base record.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Authentication* | The Airtable authentication credentials. | &#x2713; |
| *Base* | The Airtable base which to connect to. | &#x2713; |
| *Table* | The Airtable table which to connect to. | &#x2713; |
| *Record* | The Airtable record ID which to delete. | &#x2713; | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->
