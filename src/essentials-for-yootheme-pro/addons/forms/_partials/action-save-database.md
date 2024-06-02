## Save to Database Action {#save-database}

![Save to Database Action](./assets/action-save-database.svg)

The **Save to Database Action** stores each submission data as a new record in a local or external database table. Use it to store data or log submissions.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Database* | The name of the database to which to connect. | &#x2713; |
| *Custom Connection* | Allows overriding the system default database connection. |
| -- *Host* | The server host IP or address to which to connect, e.g. `127.0.0.1`. | &#x2713; |
| -- *Port* | The port to use for the connection, e.g. `3306`. | &#x2713; |
| -- *Creds* | The username & password which to use for the connection. | &#x2713; |
| *Table* | The name of the database Table to which to connect. | &#x2713; |
| *Update Record* | Should a record be updated instead of created. |
| -- *Associative Key* | The table column key that will be used to associate the record. | &#x2713; |
| -- *Associative Value* | The table column value that will be used to associate the record. | &#x2713; | &#x2713; |
| *Content* | The mapping configuration of the submission data to the table columns. | &#x2713; | &#x2713; |
<!--@include: ./common-action-settings.md-->

<!--@include: ./common-action-content-mapping.md-->

### Update Record {#database-update-record}

When the Update Record setting is enabled the submitted data will override an existing table record determined by the association configuration. If no associated record is found, a new record will be created instead.

![SaveToDatabase Action Update](./assets/actions/action-savetodb-update.webp)

An example to understand the association is to think of a _Users Table_ with an _ID_ column as its primary key. In such a scenario, the submission data should contain the _user_id_ value representing the user row being updated, the _Associative Key_ should be set as _ID_, and the _Associative Value_ mapped to the Form Submission _user_id_.
