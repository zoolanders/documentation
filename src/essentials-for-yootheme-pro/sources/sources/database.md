# Database

This source is based on a local or external Database Table with support for dynamic filter and order. You can create as many **One to One** and **One to Many** relations as required.

One to One relation, also known as **BelongsTo**, allows relating an entry with another single entry, e.g. _Article_ belongs to an _Author_. One to Many relation, also known as **HasMany**, allows relating an entry with multiple entries, e.g. _Article_ has many _Categories_.

::: tip
Relations can get complex and difficult to debug, an alternative is to create a [MySQL View](https://dev.mysql.com/doc/refman/8.0/en/view-syntax.html) that solves all the relations and use that view as the main table.
:::

Once the source has been created, as instructed in the [Getting Started](../sources/#getting-started) guide, you will be able to map its contents to any Builder element, as well as to filter and order its records by a field content with static or dynamic conditions. For example, you could filter the records to only show the ones belonging to the current user using the Site Source as a dynamic value for the filter condition.

The cache is set to `3600` seconds by default, if your workflow requires immediate results disable the cache by setting it to `0`.
