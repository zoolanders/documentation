---
sidebarDepth: 1
---

# Sources

## Database

This source allows you to create content from a local or external Database Table with support for dynamic filters and ordering.

### Getting Started

1. Access the `Essentials -> Content Sources` section in the YOOtheme Pro Customizer.
1. Create a new source of a type Database and fulfill the settings.

You can create as many **One to One** and **One to Many** relations as required. One to One relation, also known as **BelongsTo**, allows relating an entry with another single entry, e.g. _Article_ belongs to an _Author_. One to Many relation, also known as **HasMany**, allows relating an entry with multiple entries, e.g. _Article_ has many _Categories_.

::: tip
Relations can get complex and difficult to debug, an alternative is to create a [MySQL View](https://dev.mysql.com/doc/refman/8.0/en/view-syntax.html) which solves all the relations and use that view as the main Table.
:::

### Content Mapping

At this point, the source content will be available for mapping to an element.

1. Choose an element to map, e.g. List Element, and access it Advanced Tab.
1. Select the source under the Google Sheet group of the Dynamic Content field.
1. A Filter and Order Configuration will appear, access one of them.
1. Create a new Filter or Ordering, which would open a new panel.
1. Choose a field which value should be used during evaluation.
1. Set a value that the field is expected to resolve to.
1. Optionally make the value dynamic by accessing the Advanced Tab and choosing a source which contents you will be then able to map.

## CSV

This source allows you to create content from **locally-stored CSV files**. The CSV file **must have a header**, which means the first line of the CSV file must contain the column names that will be used as the field name during the content mapping.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**.

## Instagram

This source allows you to create content from **Personal** and **Business** Instagram accounts or pages. A Personal account will allow you to display the images from your own Instagram account, but not from any of the pages you manage. The Professional account will instead allow you to display media from any of the pages to which your **Facebook** account manages, but not any of your Personal ones. If you have both, simply create two or more sources.

In order to have access to the media, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration.

::: tip
Check the [Official Facebook Docs](https://www.facebook.com/business/help/898752960195806) to learn how to link your Facebook account to your Instagram page.
:::

## Google Sheets

This source allows you to create content from **a Google Sheets spreadsheets**. The spreadsheet **must have a header**, which means the first line of the sheet must contain the column names that will be used as the field name during the content mapping.

In order to have access to the sheets, you will have to grant permission to the _ZOOlanders OAuth App_, which process is done during the source configuration. The advantage is that you can also use **private** google sheets, without making them publicly accessible.

When the source is being set as the element Dynamic Content you can choose how many records to fetch by setting an **offset** and a **limit**, choose which interval of columns the system takes into account and the amount of time the content will be cached.
