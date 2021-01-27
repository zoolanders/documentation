# Providers

A Source Provider, as the name suggests, provides Sources as per a configuration. For example a *CSV Source Provider* will provide the specified CSV file content as a Source, while a Instragram Provider will provide the media from an account.

While creating custom providers is possible, the following is the list of the core providers.

## CSV

This provider allows you to create sources from **locally-stored CSV files**. The CSV file **must have a header**, which means the first line of the CSV file must contain the column names that will be used as the fields names during the content mapping.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**.

## Google Sheets

This provider allows you to create sources from **a Google Sheets spreadsheets**. The spreadsheet **must have a header**, which means the first line of the sheet must contain the column names that will be used as the fields names during the content mapping.

In order for the Provider to have access to the sheets, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration. The advantage is that you can also use **private** google sheets, without making them publicly accessible.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**, choose which interval of columns the system takes into account and the amount of time the content will be cached.

## Instagram

This provider allows you to create Sources from **Personal and Business Instagram accounts or pages**. A Personal account will allow you to display the images from your own Instagram account, but not from any of the pages you manage. The Professional account will instead allow you to display media from any of the pages to which your **Facebook** account manages, but not any of your Personal ones. If you have both, simply create two or more sources.

In order for the Provider to have access to the media, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration.

::: tip
Check the [Official Facebook Docs](https://www.facebook.com/business/help/898752960195806) to learn how to link your Facebook account to your Instagram page.
:::
