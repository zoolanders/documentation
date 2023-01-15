---
title: Google Sheet Source
description: Content Source based on Google Drive Spreadsheets
icon: '
    <path stroke="none" d="M7.687 2c4.328-.011 1.71-.023 8.94 0 .727.002.727 1.623 0 1.625-7.23.023-4.612.011-8.94 0a.819.819 0 00-.813.817v21.121c0 .447.366.813.813.813h14.626a.815.815 0 00.813-.813s-.014-15.412 0-15.439c.358-.695 1.191-.686 1.624 0 .011.018 0 15.44 0 15.44A2.438 2.438 0 0122.313 28H7.687a2.438 2.438 0 01-2.437-2.437V4.442A2.446 2.446 0 017.687 2z"/>
    <path stroke="none" d="M20.215 13.095H9.785a.87.87 0 00-.869.87v10.429c0 .48.39.869.87.869h10.429c.48 0 .869-.39.869-.87V13.965a.87.87 0 00-.87-.869zm-9.56 5.215h3.476v1.738h-3.477V18.31zm5.214 0h3.477v1.738h-3.477V18.31zm3.477-1.738h-3.477v-1.739h3.477v1.739zm-5.215-1.739v1.739h-3.477v-1.739h3.477zm-3.477 6.953h3.477v1.739h-3.477v-1.739zm5.215 1.739v-1.739h3.477v1.739h-3.477z"/>
    <path stroke-width=".3" d="M24.931 8.478l1.51-2.156L23.246.888H20.37l-3.194 5.434 1.51 2.156h6.245zm-.282-.542h-5.406l.828-1.355h5.527l-.949 1.355zm-1.404-1.897h-2.843l1.407-2.306 1.436 2.306zm2.4 0h-1.761l-2.87-4.609h1.922l2.709 4.609zm-5.113-4.356l.956 1.535-2.712 4.444-.956-1.365 2.712-4.614z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Google Sheet Source** feeds data from a Google Sheet spreadsheet. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple accounts with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Google Sheet"} /%}

---

## Instance

After following through [integration](#integration) a Google Sheet instance will become available which can be managed in the [Sources Manager](manager).

### Configuration

{% image %}
![Google Sheet Instance Configuration](/assets/ytp/sources/google-sheet-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source instance, defaults to `Google Sheet`. |
| **Custom Connection** | Should the connection to the database be done using custom configuration instead of the site configuration. |
| **Google Sheet** | The name of the database to which to connect to. | &#x2713; |
| **Table** | The table from which to create the source. | &#x2713; |
| **Primary Key** | The primary key of the selected table, this is specially important when using relations. | &#x2713; |
| **Relations** | The list of [relations](#database-relations) and their configuration. |

---

### Connection

By default the connection to the database will be done using the site configuration, if Custom Connection is enabled the custom inputs will be used instead. Both connecting to a different database from the local server or a remote one is supported.

{% image %}
![Google Sheet Instance Connection](/assets/ytp/sources/google-sheet-config-connection.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Host** | The IP or domain of the remote database server. | &#x2713; |
| **Port** | The port which to use to connect to the remote server. | &#x2713; |
| **Username / Password** | The credentials which to use to connect to the remote server. | &#x2713; |

---

### Google Sheet Relations

Complex data structures typically involve several tables related between them, if that's the case you can set as many relations as needed of the type:

- **One to One**, also known as **BelongsTo**, where a single entry relates with another single entry, e.g. Article belongs to an Author.
- **One to Many**, also known as **HasMany**, where a single entry relates with multiple entries, e.g. Article is assigned to many Categories.

{% image %}
![Google Sheet Instance Relations](/assets/ytp/sources/google-sheet-config-relations.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name to associate the relation with. Shoule be meaningfull, e.g. `Author`. | &#x2713; |
| **Relation Type** | The relation type, `One to One` or `One to Many`. | &#x2713; |
| **Related Table** | The table that is being related with the main table. | &#x2713; |
| **Main Table Key** | The column key from the main table to use for the relation. | &#x2713; |
| **Related Table Key** | The column key from the related table to use for the relation. | &#x2713; |

{% callout title="MySQL Views" %}
Relations can get complex and difficult to debug, an alternative simpler approach is to create a [MySQL View](https://dev.mysql.com/doc/refman/8.0/en/view-syntax.html) with the relations solved and use that view as the main table.
{% /callout %}

---

## Content Queries

For each instance, the following queries will be available as Dynamic Content options under the Google Sheet Group.

### Records Query

Queries records from the source instance database, resolves to a list of dynamically created `Object Type` based on the table columns.

{% image %}
![Google Sheet Records Query](/assets/ytp/sources/google-sheet-query-records.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of [filter conditions](../query-conditions#filter-conditions) applied to the query. |
| **Ordering** | `[]` | The list of [ordering conditions](../query-conditions#order-conditions) applied to the query. |
| **Random** | `false` | Should the ordering be randomized ignoring any ordering condition. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Mapping Fields

The `Object Types` specifying the mapping fields are generated programatically for each instance based on the spreadsheet columns schema.
