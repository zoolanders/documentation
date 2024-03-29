---
title: Airtable
description: Content Source based on Airtable apps
icon: '
    <path stroke="none" d="m2.733 10.771-.026-.001a.698.698 0 0 0-.495.206.635.635 0 0 0-.212.437v9.053a.69.69 0 0 0 .987.582l-.004.002 7.125-3.416 3.216-1.555a.646.646 0 0 0-.062-1.181l-.004-.002-10.302-4.08a.616.616 0 0 0-.223-.047h-.001l.001.002ZM27.349 10.728a.637.637 0 0 0-.244.05l.004-.001-10.846 4.2a.664.664 0 0 0-.411.611v9.637a.65.65 0 0 0 .893.596l-.004.002 10.847-4.214a.632.632 0 0 0 .412-.592v-9.642a.65.65 0 0 0-.65-.646l-.001-.001ZM14.991 4.131c-.5 0-.977.102-1.41.287l.023-.009-9.677 4.002a.653.653 0 0 0 .009 1.207l.004.002 9.73 3.854a3.536 3.536 0 0 0 2.681-.008l-.023.008 9.729-3.854a.655.655 0 0 0 .018-1.206l-.005-.002-9.702-4.002a3.474 3.474 0 0 0-1.374-.278h-.005l.002-.001Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The Airtable Source feeds data from Airtable platform. Based on the [multi-instance](/essentials-for-yootheme-pro/addons/sources/multi-instance-sources/) source workflow it allows connecting to multiple accounts with different configurations.

## Settings

The source settings determines the content structure, every time the instance is saved the structure will be regenerated.

{% image %}
![Google Sheet Instance Configuration](/assets/ytp/sources/airtable-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Airtable Account which to authenticate with. | &#x2713; |
| **Base** | The Airtable base which to retrieve the data from. | &#x2713; |
| **Table** | The Airtable base table which data to create the source with. | &#x2713; |

{% partial file="ytp-sources-common-settings.md" variables={name: "Airtable"} /%}

### Authentication

Authentication is based on the Airtable Personal Access Token driven by the [Airtable Token Driver](/essentials-for-yootheme-pro/auth/drivers/airtable-access-token).

{% image %}
![Airtable Access Token Driver](/assets/ytp/auths/driver-airtable-access-token.webp)
{% /image %}

## Content Queries

For every source instance the following content queries will be made available as Dynamic Content option.

### Record Query

Fetches a single record from the Airtable base table and resolves to a dynamically generated list of record type based on the table schema.

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Record ID** | | The ID of the record to query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

### Records Query

Fetches a single record from the Airtable base table and resolves to a dynamically generated list of record type based on the table schema.

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **View** | | Optional table view to use instead of a raw query. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
