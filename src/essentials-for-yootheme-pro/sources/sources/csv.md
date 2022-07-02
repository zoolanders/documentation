# CSV

This source is based on a locally-stored CSV file. The file must have a CSV formatted header, which means the first line must contain the column names that will be used as the field name during the content mapping. The following lines represent the records.

## Configuration

Before being able to use a CSV file as Dynamic Content, a source instance based on it must be created first.

1. Access _**Essentials**_ -> _**Sources**_ section in the YOOtheme Pro Customizer.
1. Click on the *New Source* button and choose _CSV_ from the available sources.
1. Optionally set a name that will be a reference for this source instance.
1. Choose a file and make sure the _enclosure_ and _delimiter_ defaults match the file format or adjust accordingly.
1. Click the *Save* button to confirm the source creation.

You can always come back and further adjust the source configuration, after the changes the source instance will be recreated.

## Dynamic Content

Once the source instance is created it will appear as a [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#content-sources) option under the group _CSV_. When selected, query settings will appear allowing to set the filter, order, and cache for the rows that are being fetched.

### Filters

The Filters allow setting static or dynamic conditions with custom evaluation logic which will be used to filter down the table rows during the fetching. Each condition is set in a panel that has access to Dynamic Content of its own, allowing to make advanced queries, for example, fetch records that belong to the current user.

### Ordering

Similarly, it is possible to order the fetched values using static and/or dynamic conditions.

### Cache

The fetched content is cached by default during `3600` seconds, if your workflow requires immediate or dynamic results disable the cache by setting it to `0`.

## Fields Mapping

Once the source is created and selected as the Dynamic Content the CSV columns will become available for [mapping](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#field-mapping).

## Routing

At the moment sources don't support routing, meaning that it is not possible to display a view of a single record or paginate the results.
