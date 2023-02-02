---
title: Database Source
description: Content Source based on Database
icon: '
    <path stroke-width=".3" d="M15 2C9 2 4.475 4.044 4.475 6.755V23.24c0 2.71 4.525 4.758 10.525 4.758s10.525-2.042 10.525-4.758V6.754C25.525 4.043 21 2 15 2zm9.225 15.745c0 1.634-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459V14.61c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zm0-5.496c0 1.634-3.788 3.46-9.225 3.46-5.437 0-9.225-1.82-9.225-3.46V9.114c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zM15 3.3c5.437 0 9.225 1.82 9.225 3.459 0 1.64-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459C5.775 5.119 9.563 3.3 15 3.3zm0 23.394c-5.437 0-9.225-1.82-9.225-3.458V20.1c1.761 1.453 5.15 2.397 9.225 2.397 4.074 0 7.47-.944 9.225-2.397v3.135c0 1.639-3.788 3.458-9.225 3.458z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Database Source** feeds data from local or external MySQL Database Tables, supporting relations and dynamic filtering/ordering. Based on the [multi-instance](manager#multi-instance) source workflow it allows connecting to multiple databases with different configurations.

---

## Integration

{% partial file="ytp-sources-integration.md" variables={source: "Database"} /%}

---

## Source

The **Database Source** creates a Dynamic Content source from a local or remote Database Table.

### Configuration

{% image %}
![Database Instance Configuration](/assets/ytp/sources/db-config.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | The name that will identify this source, defaults to `Database`. |
| **Custom Connection** | Should the connection to the database be done using custom configuration instead of the site configuration. |
| **Database** | The name of the database to which to connect to. | &#x2713; |
| **Table** | The table from which to create the source. | &#x2713; |
| **Primary Key** | The primary key of the selected table, this is specially important when using relations. | &#x2713; |
| **Relations** | The list of [relations](#table-relations) and their configuration. |

By default the connection to the database will be done using the site configuration, if *Custom Connection* is enabled the custom inputs will be used instead with support the local as remote servers.

{% image %}
![Database Instance Connection](/assets/ytp/sources/db-config-connection.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Host** | The IP or domain of the database server. | &#x2713; |
| **Port** | The port which to use to connect to the server. | &#x2713; |
| **Username / Password** | The credentials which to use to connect to the server. | &#x2713; |

---

### Table Relations

Complex data structures typically involve several tables related between them, if that's the case you can set as many relations as needed of the type:

- **One to One**, also known as **BelongsTo**, where a single entry relates with another single entry, e.g. Article belongs to an Author.
- **One to Many**, also known as **HasMany**, where a single entry relates with multiple entries, e.g. Article is assigned to many Categories.

{% image %}
![Database Instance Relations](/assets/ytp/sources/db-config-relations.webp)
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

## Record Query

For each [Source](#source) a **Record Query** is created on the fly and made available as Dynamic Content option under the Database Group. It fetches a single record from the table and resolves to a dynamically generated record type based on the table schema.

{% image %}
![Database Record Query](/assets/ytp/sources/db-query-record.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of [filter conditions](../query-conditions#filter-conditions) applied to the query. |
| **Ordering** | `[]` | The list of [ordering conditions](../query-conditions#order-conditions) applied to the query. |
| **Random** | `false` | Should the ordering be randomized ignoring any ordering condition. |
| **Start** | `1` | The offset applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |

---

## Records Query

For each [Source](#source) a **Records Query** is created on the fly and made available as Dynamic Content option under the Database Group. It fetches records from the table and resolves to a dynamically generated list of record type based on the table schema.

{% image %}
![Database Records Query](/assets/ytp/sources/db-query-records.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of [filter conditions](../query-conditions#filter-conditions) applied to the query. |
| **Ordering** | `[]` | The list of [ordering conditions](../query-conditions#order-conditions) applied to the query. |
| **Random** | `false` | Should the ordering be randomized ignoring any ordering condition. |
| **Start** | `1` | The offset applied to the query. |
| **Quantity** | `20` | The limit applied to the query. |
| **Cache** | `3600` | The duration in seconds before the cache is invalidated and the query re-executed. |
