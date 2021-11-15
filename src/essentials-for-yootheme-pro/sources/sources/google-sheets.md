# Google Sheets

This source allows you to create content from **a Google Sheets spreadsheets**. The spreadsheet **must have a header**, which means the first line of the sheet must contain the column names that will be used as the field name during the content mapping.

In order to have access to the sheets, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration. The advantage is that you can also use **private** google sheets, without making them publicly accessible.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**, choose which interval of columns the system takes into account and the amount of time the content will be cached.
