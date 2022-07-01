# Database

This source is based on a local or external Database Table with support for dynamic filter and order. You can create as many **One to One** and **One to Many** relations as required.

## Configuration

Before being able to use a Database table as a Dynamic Content, a source instance based on it must be created first.

1. Access _**Essentials**_ -> _**Sources**_ section in the YOOtheme Pro Customizer.
1. Click on the *New Source* button and choose _Database_ from the available sources.
1. Optionally set a name that will be a reference for this source instance.
1. Choose a table in the *Table Field* and leave the rest as per default.
1. Click the *Save* button to confirm the source creation.

You can always come back and further adjust the source configuration, after the changes the source instance will be recreated.

### Database Location

The source will assume the table is part of the local system Database, you can override those defaults with a different Database or connect to an external server.

### Table Relations

Complex data structures typically involve several tables related between them, if that's the case you can set as many relations as needed of the type:

- **One to One**: also known as _BelongsTo_, relates an entry with another single entry, e.g. _Article_ belongs to an _Author_.
- **One to Many**: also known as _HasMany_, relates an entry with multiple entries, e.g. _Article_ has many _Categories_.

::: tip
Relations can get complex and difficult to debug, an alternative simpler approach is to create a [MySQL View](https://dev.mysql.com/doc/refman/8.0/en/view-syntax.html) with the relations solved and use that view as the main table.
:::

## Dynamic Content

Once the source instance is created it will appear as a [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#content-sources) option under the group _Database_. When selected, query settings will appear allowing to set the filter, order, and cache for the rows that are being fetched.

### Filters

The Filters allow setting static or dynamic conditions with custom evaluation logic which will be used to filter down the table rows during the fetching. Each condition is set in a panel that has access to Dynamic Content of its own, allowing to make advanced queries, for example, fetch records that belong to the current user.

### Ordering

Similarly, it is possible to order the fetched values using static and/or dynamic conditions.

### Cache

The fetched content is cached by default during `3600` seconds, if your workflow requires immediate or dynamic results disable the cache by setting it to `0`.

## Fields Mapping

Once the source is created and selected as the Dynamic Content the table fields will become available for [mapping](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#field-mapping).

## Routing

At the moment sources don't support routing, meaning that it is not possible to display a view of a single record or paginate the results.
