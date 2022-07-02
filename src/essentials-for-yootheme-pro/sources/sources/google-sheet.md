# Google Sheet

This source is based on a Google Drive Spreadsheet. The spreadsheet must have a header, which means the first line must contain the column names that will be used as the field name during the content mapping. The following lines represent the records.

## Configuration

Before being able to use a Google Spreadsheet as Dynamic Content, a source instance based on it must be created first.

1. Access _**Essentials**_ -> _**Sources**_ section in the YOOtheme Pro Customizer.
1. Click on the *New Source* button and choose _Google Sheet_ from the available sources.
1. Optionally set a name that will be a reference for this source instance.
1. Choose a spreadsheet and leave the rest as per default or adjust accordingly.
1. Click the *Save* button to confirm the source creation.

You can always come back and further adjust the source configuration, after the changes the source instance will be recreated.

## Dynamic Content

Once the source instance is created it will appear as a [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#content-sources) option under the group _Google Sheet_. When selected, query settings will appear.

### Cache

The fetched content is cached by default during `3600` seconds, even though it is possible to disable the cache by setting it to `0` this is an API-driven source and it is not recommended, you should consider using a CSV or Database source instead.

## Fields Mapping

Once the source is created and selected as the Dynamic Content the Sheet columns will become available for [mapping](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#field-mapping).

## Routing

At the moment sources don't support routing, meaning that it is not possible to display a view of a single record or paginate the results.
