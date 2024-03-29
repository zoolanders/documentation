---
description: Save data to a Database table
icon: '
  <path stroke="none" d="M4.327 23.029c0-.734.647-1.336 1.434-1.336.788 0 1.435.602 1.435 1.336 0 .733-.647 1.336-1.435 1.336-.787 0-1.434-.603-1.434-1.336Zm0-15.965c0-.734.647-1.336 1.434-1.336.788 0 1.435.602 1.435 1.336 0 .733-.647 1.336-1.435 1.336-.787 0-1.434-.603-1.434-1.336Z"/>
  <path fill="none" stroke-width="2" d="M28.925 28.925H1.075V17.213h27.85v11.712ZM1.075 1.075h27.85v11.712H1.075V1.075Z"/>
'
---

# SaveTo Database Action

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The **SaveToDatabase Action** stores each submission data as a new record in a local or external Database Table. Use it to store or log submissions.

## Settings

![SaveToDatabase Action Settings](./assets/action-savetodb-settings.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Database** | The name of the database to which to connect. | &#x2713; |
| **Table** | The name of the database Table to which to connect. | &#x2713; |
| **Content** | The [mapping configuration](#mapping) of the submission data to the table columns. | &#x2713; |
| **Custom Connection** | Should the connection be manually inputed instead of inherited from the system. |

{% details title="Common Settings
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

## Connection

The connection to the Database is by default system inherited with the possibility for manual override.

![SaveToDatabase Action Connection](./assets/action-savetodb-connection.webp)

| Setting | Description |
| ------- | ----------- |
| **Host** | The server host IP or address to which to connect, e.g. `127.0.0.1`. |
| **Port** | The port to use for the connection, e.g. `3306`. |
| **Username / Password** | The username & password which to use for the connection. |

## Update Record

When the Update Record setting is enabled the Submission Data will override an existing table record which will be determined by the association configuration. If no associated record is found, a new record will be appended instead.

![SaveToDatabase Action Update](./assets/action-savetodb-update.webp)

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Update Record** | Should a record be updated instead of appended. |
| **Associative Key** | The table column key that will be used to associate the record. | | &#x2713; |
| **Associative Value** | The table column value that will be used to associate the record. | &#x2713; | &#x2713; |

An example to understand the association is to think of a `Users Table` with an `ID` column as its primary key. In such a scenario, the submission data should contain the `user_id` value representing the user row being updated, the *Associative Key* should be set as `ID`, and the *Associative Value* mapped to the Form Submission `user_id`.

## Mapping

Once the table has been chosen, its columns will appear in the Content field ready to be mapped, being the column configuration pre-established by the table schema. The mapping will determine what value will be saved at what column of the record that is being saved or updated.

![SaveTo Action Mapping](./assets/action-saveto-mapping.webp)

Not all columns require a value, in fact, mapping is disabled by default and must be enabled for each column independently. Once enabled, the value can be inputted manually or dynamically with the use of the [Dynamic Workflow](../../dynamic).

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | The value that will be mapped to the column. | &#x2713; |

## Integration

1. [Create](../../integration) a Form Area and access it Settings Panel.
1. Add a SaveToDatabase action and fulfill the required settings.

