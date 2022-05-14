# SEO

Essentials adds several SEO improvements, disabled by default, leaving up to you to decide when and what best works for your project. The settings are to be found in the _ZOO SEO - Essentials_ plugin configuration:

- `Category path in URL`: If enabled it will generate the url using the category structure, the **item**/**category** is in, removing the `/category` and `/item` and limiting the alias conflicts between category/items to the same level. The resulting URL could look like `/baseurl/category/sub-category/sub-sub-category/item-alias`.
- `Remove /item`: If enabled the `/item` part will be removed from the generated SEF urls.
- `Remove /category`: If enabled the `/category` part will be removed from the generated SEF urls.
- `Redirect old urls`: If enabled it will redirect the old urls (`/item` and `/category`) to the new ones avoiding content duplication.
- `Alias Priority`: Allows choosing which alias should take priority if a Category and an Item have the same one.
- `Overwrite Item Metadata`: If enabled even the manually set metadata of the Item will be overwritten. Recommended only if you're fixing the site metadata, should be disabled later in order to allow custom metadata.
- `Overwrite Category Metadata`: If enabled even the manually set metadata of the Category will be overwritten. Recommended only if you're fixing the site metadata, should be disabled later in order to allow custom metadata.

::: tip
To get further SEO improvements combine the above with any 3rd party Joomla SEO Extension.
:::

::: warning
When changing the base urls duplicate contents issues could arise. Even though in such case canonical urls will be set in place, you should make sure those are working as expected for your site.
:::
