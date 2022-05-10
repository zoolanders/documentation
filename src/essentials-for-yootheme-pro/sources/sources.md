---
sidebarDepth: 1
---

# Sources

## Database

This source allows you to create content from a local or external Database Table with support for dynamic filters and ordering.

1. Access the `Essentials -> Content Sources` section in the YOOtheme Pro Customizer.
1. Create a new source of a type `Database`, fulfill the settings and save.

You can create as many **One to One** and **One to Many** relations as required. One to One relation, also known as **BelongsTo**, allows relating an entry with another single entry, e.g. _Article_ belongs to an _Author_. One to Many relation, also known as **HasMany**, allows relating an entry with multiple entries, e.g. _Article_ has many _Categories_.

::: tip
Relations can get complex and difficult to debug, an alternative is to create a [MySQL View](https://dev.mysql.com/doc/refman/8.0/en/view-syntax.html) which solves all the relations and use that view as the main Table.
:::

At this point the new source should become available as part of the _Dynamic Content_ workflow under the _Database_ group. Please refer to the [official documentation](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) for further details on how to use and map dynamic content on your layout elements.

During the Dynamic Content selection you will be able to Filter and Order the records by it field content based on static or dynamic values. For example, you could filter the records to only show the ones belonging to the current user.

## CSV

This source allows you to create content from **locally-stored CSV files**. The CSV file **must have a header**, which means the first line of the CSV file must contain the column names that will be used as the field name during the content mapping.

1. Access the `Essentials -> Content Sources` section in the YOOtheme Pro Customizer.
1. Create a new source of a type `CSV`, fulfill the settings and save.

At this point the new source should become available as part of the _Dynamic Content_ workflow under the _CSV_ group. Please refer to the [official documentation](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) for further details on how to use and map dynamic content on your layout elements.

During the Dynamic Content selection you will be able to Filter and Order the records by it field content based on static or dynamic values. For example, you could filter the records to only show the ones belonging to the current user.

## Google Sheet

This source allows you to create content from a **Google Drive Spreadsheet**. The spreadsheet **must have a header**, which means the first line of the sheet must contain the column names that will be used as the field name during the content mapping.

1. Access the `Essentials -> Content Sources` section in the YOOtheme Pro Customizer.
1. Create a new source of a type `Google Sheet`.
1. Grant permission to the _ZOOlanders OAuth App_.
1. Choose the Spreadsheet (it doesn't have to be public) and save.

At this point the new source should become available as part of the _Dynamic Content_ workflow under the _Google Sheet_ group. Please refer to the [official documentation](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) for further details on how to use and map dynamic content on your layout elements.

During the Dynamic Content selection you will be able to choose how many records to fetch by setting an **offset** and a **limit**, and the amount of time the content will be cached.

## Instagram

This source allows you to create content from **Personal** and **Business** Instagram accounts or pages. A Personal account will allow you to display the images from your own Instagram account, but not from any of the pages you manage. The Professional account will instead allow you to display media from any of the pages to which your **Facebook** account manages, but not any of your Personal ones. If you have both, simply create two or more sources.

1. Access the `Essentials -> Content Sources` section in the YOOtheme Pro Customizer.
1. Create a new source of a type `Instagram`.
1. Grant permission to the _ZOOlanders OAuth App_, and save.

::: tip
If using Instagram Business you must link the account to a Facebook Page first, learn how to do so on [Official Facebook Docs](https://www.facebook.com/business/help/898752960195806).
:::

At this point the new source should become available as part of the _Dynamic Content_ workflow under the _Instagram_ group. Please refer to the [official documentation](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) for further details on how to use and map dynamic content on your layout elements.
