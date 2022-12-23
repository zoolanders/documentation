---
title: SaveToDatabase Action
description: Save data to a Database table
icon: '
    <path d="M15 2C9 2 4.475 4.044 4.475 6.755V23.24c0 2.71 4.525 4.758 10.525 4.758s10.525-2.042 10.525-4.758V6.754C25.525 4.043 21 2 15 2zm9.225 15.745c0 1.634-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459V14.61c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zm0-5.496c0 1.634-3.788 3.46-9.225 3.46-5.437 0-9.225-1.82-9.225-3.46V9.114c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zM15 3.3c5.437 0 9.225 1.82 9.225 3.459 0 1.64-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459C5.775 5.119 9.563 3.3 15 3.3zm0 23.394c-5.437 0-9.225-1.82-9.225-3.458V20.1c1.761 1.453 5.15 2.397 9.225 2.397 4.074 0 7.47-.944 9.225-2.397v3.135c0 1.639-3.788 3.458-9.225 3.458z" fill-rule="nonzero" stroke-width=".300263"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **SaveToDatabase Action** stores each submission data as a new record in a local or external Database Table. Use it to store or log submissions.

---

## Settings

{% image %}
![SaveToDatabase Action Settings](/assets/ytp/forms/action-savetodb-settings.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Database** | The name of the database to which to connect. | &#x2713; |
| **Table** | The name of the database Table to which to connect. | &#x2713; |
| **Content** | The [mapping configuration](#mapping) of the submission data to the table columns. | &#x2713; |
| **Custom Connection** | Defines if the connection should be manually inputed instead of inherited from the system. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Connection

The connection to the Database is by default system inherited with the possibility for manual override.

{% image %}
![SaveToDatabase Action Connection](/assets/ytp/forms/action-savetodb-connection.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Host** | The server host IP or address to which to connect, e.g. `127.0.0.1`. |
| **Port** | The port which to use for the connection, e.g. `3306`. |
| **Username / Password** | The username & password which to use for the connection. |

---

## Update Record

When Update Record setting is enabled the Submission Data will override an existing table record which will be determined by the association configuration. If no associated record is found, a new record will be appended instead.

{% image %}
![SaveToDatabase Action Update](/assets/ytp/forms/action-savetodb-update.webp)
{% /image %}

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Update Record** | Defines if a record should be updated instead of appended. |
| **Associative Key** | The table column key that will be used to associate the record. | | &#x2713; |
| **Associative Value** | The table column value that will be used to associate the record. | &#x2713; | &#x2713; |

An example to understand the association is to think of an `Users Table` with an `ID` column as it primary key. In such scenario the submission data should contain the `user_id` value representing the user row being updated, the *Associative Key* should be set as `ID`, and the *Associative Value* mapped to the Form Submission `user_id`.

---

## Mapping

Once the table has been chosen it columns will appear in the Content field ready to be mapped, being the column configuration pre-established by the table schema. The mapping will determine what value will be saved at what column of the record being saved or updated.

{% image %}
![SaveTo Action Mapping](/assets/ytp/forms/action-saveto-mapping.webp)
{% /image %}

Not all columns requires a value, in fact, mapping is disabled by default and must be enabled for each column independently. Once enabled the value can be inputed manually or dynamically with the use of the [Dynamic Workflow](../dynamic).

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | The value that will be mapped to the column. | &#x2713; |

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a SaveToDatabase action and fulfill the required settings.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
