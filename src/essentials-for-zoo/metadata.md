# Metadata

## Items Metadata

Setting the Category/Item Metadata individually is most of the times not possible nor desirable. Instead let's use the Item elements data and render it as metadata and for Categories some clever workarounds.

Locate the _ZOOseo Metadata Item_ layout in your ZOO App Type configuration.

Drag & Drop the elements you would like to render for each one of the Metadata positions:

| Setting | Description |
| --- | --- |
| _Title_ | The page title. |
| _Description_ | The page description. |
| _Keywords_ | A comma separate words describing the page. |
| _Author_ | The page author name. |

On the ZOOlanders ZOOseo Plugin settings the following Items Metadata options are available:

| Setting | Description |
| --- | --- |
| _Item: Generate on_ | Allows setting when the metadata should be generated. |
| -- _On Display_ | It will generate the metadata each time an item is displayed. |
| -- _On Save_ | It will generate the metadata only when the item is saved. This is the recommended option for production sites. |
| _Item Separator_ | The separator that will be used if there are more elements in the same position. For keywords, comma will always be used. |

::: warning
The Generate Item metadata **On Display** can significantly affect the site performance.
:::

## Categories Metadata

On the ZOOlanders ZOOseo Plugin settings the following Category Metadata options are available:

| Setting | Description |
| --- | --- |
| _Category: Generate on_ | Allows setting when the metadata should be generated. |
| -- _On Display_ | It will generate the metadata each time a category is displayed. |
| -- _On Save_ | It will generate the metadata only when the category is saved. This is the recommended option for production sites. |
| _Category Separator_ | The separator that will be used if there are more elements in the same position. For keywords, comma will always be used. |
| _Category Metatitle_ | The category field value to set as the category metatitle. |
| _Category Metadescription_ | The category field value to set as the category metadescription. |
| _Category Keywords_ | The category field value to set as the category keywords. |
| _Category Author_ | The category field value to set as the category author. |

::: warning
The Generate Category metadata **On Display** can significantly affect the site performance.
:::

## Open Graph

Using the ZOOseo Item Metadata layout you can Drag & Drop the elements you would like to render for each one of the OpenGraph positions:

| Setting | Description |
| --- | --- |
| _Open Graph Title_ | The title of the page. |
| _Open Graph Description_ | The description of the page. |
| _Open Graph Type_ | The page type, e.g. `video.movie`. |
| _Open Graph Image_ | The page image URL. _Image/Pro_ element value will be automatically retrieved. |
| _Open Graph Url_ | The page canonical URL that will be used as its permanent ID in the graph, e.g.,`http://www.imdb.com/title/tt0117500/`. |
| _Open Graph Custom_ | Allows setting custom OpenGraph properties using the element _Alternative Label_ field value as the property type. |

::: tip
Use the [Static Content Element](./addons/elements/static-content) when the content is the same for each item.
:::

::: tip
For more information about Open Graph visit the [Open Graph official page](http://ogp.me/).
For testing the results checkout [Facebook Debuger](https://www.facebook.com/login.php?next=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fdebug%2F).
:::
