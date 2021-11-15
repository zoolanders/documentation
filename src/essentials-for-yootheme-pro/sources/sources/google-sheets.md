# Google Sheets

This source allows you to create content from **a Google Sheets spreadsheets**. The spreadsheet **must have a header**, which means the first line of the sheet must contain the column names that will be used as the field name during the content mapping.

In order to have access to the sheets, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration. The advantage is that you can also use **private** google sheets, without making them publicly accessible.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**, choose which interval of columns the system takes into account and the amount of time the content will be cached.

## Dynamic Filter/Order

Once a source has been set it's possible to filter and/or ordering it values when mapping the source to an element.

1. Choose an element to map, e.g. List Element, and access it Advanced Tab.
1. Select the source under the Google Sheet group of the Dynamic Content field.
1. A Filter and Order Configuration will appear, access one of them.
1. Create a new Filter or Ordering, which would open a new panel.
1. Choose a field which value should be used during evaluation.
1. Set a value that the field is expected to resolve to.
1. Optionally make the value dynamic by accessing the Advanced Tab and choosing a source which contents you will be then able to map.
