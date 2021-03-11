# Sources

Following is the list of the available sources.

## Instagram

This source allows you to create content from **Personal and Business Instagram accounts or pages**. A Personal account will allow you to display the images from your own Instagram account, but not from any of the pages you manage. The Professional account will instead allow you to display media from any of the pages to which your **Facebook** account manages, but not any of your Personal ones. If you have both, simply create two or more sources.

In order to have access to the media, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration.

::: tip
Check the [Official Facebook Docs](https://www.facebook.com/business/help/898752960195806) to learn how to link your Facebook account to your Instagram page.
:::

## Google Sheets

This source allows you to create content from **a Google Sheets spreadsheets**. The spreadsheet **must have a header**, which means the first line of the sheet must contain the column names that will be used as the field name during the content mapping.

In order to have access to the sheets, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration. The advantage is that you can also use **private** google sheets, without making them publicly accessible.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**, choose which interval of columns the system takes into account and the amount of time the content will be cached.

## CSV

This source allows you to create content from **locally-stored CSV files**. The CSV file **must have a header**, which means the first line of the CSV file must contain the column names that will be used as the field name during the content mapping.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**.
