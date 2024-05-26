---
title: Airtable
description: Interact with Airtable base records
---

<!--@include: ./parts/intro.md-->

## Create or Update Record

Create or Update an Airtable base record.

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Authentication** | The Airtable authentication credentials. | &#x2713; |
| **Base** | The Airtable base which to connect to. | &#x2713; |
| **Table** | The Airtable table which to connect to. | &#x2713; |
| **Record** | The Airtable record ID which to update. If left empty, a new record will be created instead. |
| **Fields** | Data mapping for the record fields. | &#x2713; |
| **Type Cast** | When enabled, Airtable API will perform best-effort for automatic data conversion. E.g. from a string to integer. |
| **Replace** | When enabled, Airtable API will replace the entire record instead of patch it. |

::: details Common Settings
<!--@include: ./parts/common-settings.md-->
:::

## Delete Record

Delete an Airtable base record.

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Authentication** | The Airtable authentication credentials. | &#x2713; |
| **Base** | The Airtable base which to connect to. | &#x2713; |
| **Table** | The Airtable table which to connect to. | &#x2713; |
| **Record** | The Airtable record ID which to delete. | &#x2713; |
