---
title: Integration
taxonomy:
    category: docs
---
## Set up the Plugin 

Access the configuration trough the **Joomla Plugin Manager** (Joomla Administration / Extensions / Plug-in Manager / ZOOseo) and set the options as needed.

| Field       | Description |
| :---------- | :---------- |
| **Category path in URL** | generate the url using the category structure the item / category is in. This is the preferred version, and also what you probably expect. It removes /category and /item from the url, and limits the alias conflicts between category and items only to the category and items on the same level (ie: within the same category. The Result is something like /base/url/category/subcategory/subsubcategory/the-item-alias.
| **Remove /item** | removes the /item from the generated SEF urls.
| **Remove /category** | removes the /category from the generated SEF urls.
| **Redirect old urls** | will redirect the the old urls (/item and /category) to the new ones to avoid content duplication.
| **Alias Priority** | allows to choose which alias should take priority if a category and an item have the same one.
| **Overwrite Item Metadata** | if enabled, even the manually set metadata of the item will be overwritten. Recommended only if you're fixing your site metadata the first time. Should be disabled later to allow custom metadata.
| **Overwrite Category Metadata** | if enabled, even the manually set metadata of the category will be overwritten. Recommended only if you're fixing your site metadata the first time. Should be disabled later to allow custom metadata
| **Item: Generate on** | allows to set when the metadata should be generated, on item saving or displaying (init). On init is great for first time generation, but has very bad performance, so it's better to leave it to saved for live sites.
| **Category: Generate on** | allows to set when the metadata should be generated, on category saving or displaying (init). On init is great for first time generation, but has very bad performance, so it's better to leave it to saved for live sites.
| **Item Separator** | separator if there are more elements in the same position. For keywords, comma will always be used.
| **Category Separator** | separator if there are more elements in the same position. For keywords, comma will always be used.
| **Category Metatitle** | what fields has to be used to set the metatitle in the category.
| **Category Metadescription** | what fields has to be used to set the metadescription in the category.
| **Category Keywords** | what fields has to be used to set the keywords in the category.
| **Category Author** | what fields has to be used to set the author in the category.

## Item Metadata Layout

Locate and open the ZOOseo **Item Metadata** layout assignment view for the App and Type you would like to work on. For detailed information please review the [ZOO Positions Assignments doc](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

Drag & Drop the elements you would like to be rendered as Meta Data and Open Graph content.

### Item Metadata

ZOOseo allows for automatic metadata insertion on your Items during saving or displaying. In both case the rendering content is set in the ZOOseo Item Metadata layout.

| Field       | Description |
| :---------- | :---------- |
| **Title** | the title of your page.
| **Description** | a one to two sentence description of your page.
| **Keywords** | a comma separate words describing your page.
| **Author** | the page author name

### Opengraph

ZOOseo allows setting the Open Graph data using the ZOOseo Item Metadata layout.

| Field       | Description |
| :---------- | :---------- |
| **Open Graph Title** | the title of your page as it should appear within the graph.
| **Open Graph Description** | a one to two sentence description of your page.
| **Open Graph Type** | the type of your page, e.g., "video.movie".
| **Open Graph Image** | an image URL which should represent your page within the graph. ZOOseo will retrieve automatically the url from the image element.
| **Open Graph Url** | the canonical URL of your page that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/".
| **Open Graph Custom** | set custom OG properties using the element "Alternative label" to set the property type.

For more information about Open Graph visit it's [official page](http://ogp.me/), for testing we recommend [Facebook Debuger](https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fdebug%2F).
