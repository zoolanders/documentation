---
title: Airtable
description: Interact with Airtable
---

# {{ $frontmatter.title }}

<!-- {% elementIcon draw=$markdoc.frontmatter.icon /%} -->

{{ $frontmatter.description }}.

The **Airtable Action** interacts with [Airtable](https://airtable.com/) bases with support for [Dynamic Workflow](../../dynamic).

## Create or Update a Record

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Authentication** | The Airtable authentication credentials. | &#x2713; |
| **Base** | The Airtable base which to connect to. | &#x2713; |
| **Table** | The Airtable table which to connect to. | &#x2713; |
| **Record** | The Airtable record ID which to update. If left empty, a new record will be created instead. |
| **Fields** | Data mapping for the record fields. | &#x2713; |
| **Type Cast** | When enabled, Airtable API will perform best-effort for automatic data conversion. E.g. from a string to integer. |
| **Replace** | When enabled, Airtable API will replace the entire record instead of patch it. |

<!-- {% details title="Common Settings
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %} -->

## Delete a Record

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Authentication** | The Airtable authentication credentials. | &#x2713; |
| **Base** | The Airtable base which to connect to. | &#x2713; |
| **Table** | The Airtable table which to connect to. | &#x2713; |
| **Record** | The Airtable record ID which to delete. | &#x2713; |

<!-- {% details title="Common Settings
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %} -->

## Integration

1. [Create](../../integration) a Form Area and access it Settings Panel.
1. Add an Airtable action and populate the required settings.
