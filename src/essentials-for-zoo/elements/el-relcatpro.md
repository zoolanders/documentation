# Element - RelatedCategoriesPro

RelatedCategoriesPro extends with new features the ZOO Relatedcategories element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

::: tip
In order to better understand the following read the [Integration Section](./integration.md).
:::

## Config

- `Multiselect`: Allows choosing if the category selection should be limited to one or multiple categories.
- `Relate to Item`: Allows choosing if the Selected Categories should be actually related to the Item. This feature is limited to the Categories that are part of the same App the Item is.
- `App`: Allows choosing the App which Categories will be displayed as relating options.
- `Root Category`: Allows choosing the root category which childs will be displayed as relating options.

## Layouts

### Default

Renders the related categories or those categories items depending on the following settings.

- Categories Mode
  - `Inherit Primary Cat`: If enabled the Item Primary category will be auto-added to the selected list.
- Items Mode
  - `Related Layout`: Allows choosing the layout that will be used for rendering the Items.
  - `Render Current Item`: If enabled, the current Item will be rendered as part of the selected list.
  - Order: allows setting the items order.
