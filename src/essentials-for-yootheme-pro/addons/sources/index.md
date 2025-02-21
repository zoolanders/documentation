---
addon: Sources
---

# Dynamic Sources

Generate dynamic content sources from configuration or service-dependent data, such as database tables, CSV files, Instagram media, Google Spreadsheets, and more.

<!--@include: ../_partials/enable-addon.md-->

---

Lets create a RSS source and render it feed data to a layout.

## Create a Source Instance

Before being able to use a source we must first create an instance of it within the [Sources manager](/essentials-for-yootheme-pro/settings#sources).

![Create a Source Instance](./assets/create-source-instance.gif)

1. Open the Sources manager panel and click on _Add Source_.
2. Choose the source you want to make an instance from, e.g. [RSS](./providers/rss).
3. Set the source name and the configuration basics, e.g. _My Feed_ and `https://www.theverge.com/rss/reviews/index.xml`.
4. Leave the rest as is and save.

## Map the Source Content

Once the source instance has been created it schema will be generated based on it configuration and it content made available for mapping as any other dynamic core source. Lets map it content to the layout.

![Map Source Content](./assets/map-source-content.gif)

1. Open the builder layout where you want to map the source.
1. Add a new _Text Element_ and open it _Advanced Tab_ settings.
1. Finde the _Dynamic Content_ select field and open it.
1. From the _RSS_ group choose the _My Feed Entries_ option.
1. Open the element _Content Tab_ settings and click on the _Dynamic_ button above the content field.
1. Choose the data you want to map from the dropdown options.

A list of the feed entries should be rendered! For more insights about [YOOtheme Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) workflow, consult the corresponding documentation.
