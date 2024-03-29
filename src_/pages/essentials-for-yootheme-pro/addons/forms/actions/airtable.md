---
title: Airtable Actions
description: Interact with Airtable
icon: '
    <path stroke="none" d="m2.733 10.771-.026-.001a.698.698 0 0 0-.495.206.635.635 0 0 0-.212.437v9.053a.69.69 0 0 0 .987.582l-.004.002 7.125-3.416 3.216-1.555a.646.646 0 0 0-.062-1.181l-.004-.002-10.302-4.08a.616.616 0 0 0-.223-.047h-.001l.001.002ZM27.349 10.728a.637.637 0 0 0-.244.05l.004-.001-10.846 4.2a.664.664 0 0 0-.411.611v9.637a.65.65 0 0 0 .893.596l-.004.002 10.847-4.214a.632.632 0 0 0 .412-.592v-9.642a.65.65 0 0 0-.65-.646l-.001-.001ZM14.991 4.131c-.5 0-.977.102-1.41.287l.023-.009-9.677 4.002a.653.653 0 0 0 .009 1.207l.004.002 9.73 3.854a3.536 3.536 0 0 0 2.681-.008l-.023.008 9.729-3.854a.655.655 0 0 0 .018-1.206l-.005-.002-9.702-4.002a3.474 3.474 0 0 0-1.374-.278h-.005l.002-.001Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Airtable Action** interacts with [Airtable](https://airtable.com/) bases with support for [Dynamic Workflow](../../dynamic).

---

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

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Delete a Record

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Authentication** | The Airtable authentication credentials. | &#x2713; |
| **Base** | The Airtable base which to connect to. | &#x2713; |
| **Table** | The Airtable table which to connect to. | &#x2713; |
| **Record** | The Airtable record ID which to delete. | &#x2713; |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Create](../../integration) a Form Area and access it Settings Panel.
1. Add an Airtable action and populate the required settings.
