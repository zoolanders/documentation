# RelatedItemsPro Element

The **RelatedItemsPro Element** extends with new features the ZOO RelatedItems element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

| Setting               | Description                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| _Editable_            | Determines if the element should allow make relations or only show them. Usually combined with Bi-relation feature. |
| _Authored by User_    | Limit the relations list to items authored by current User.                                                         |
| _Hide Unpublished_    | Limit the relations list to published items.                                                                        |
| Items                 |
| _Apps_                | Limit the relations list to items belonging to selected Apps.                                                       |
| _Types_               | Limit the relations list to items being of selected Type.                                                           |
| _Bi-Related Elements_ | Choose the elements from other Types that will be used for the bi-directional relation.                             |

::: tip
Bi-relation is a powerful feature, for example an _Event_ and _Venue_ items could be related to each other by saving only one of them, the other will be related to the first one automatically.
:::

## Default Layout

Renders the related items with the following settings.

| Setting              | Description                                                                                                                                                                         |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Related Layout_     | Allows choosing the layout that will be used for rendering the Items.                                                                                                               |
| _Link to Item_       | When **Related Layout** is set to **Item Name** allows linking the name to the Item full view.                                                                                      |
| _Subrelated Element_ | It allows rendering the relations from the related Items. For example if a Car item is related to Concessionary Item it would allow rendering all the Cars from that Concessionary. |
| _Exclude it Self_    | When rendering subrelations allows excluding the current Item.                                                                                                                      |
| _Order_              | allows choosing the rendered Items order.                                                                                                                                           |

## Widgetkit Layout

Widgetkit layout is an integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. Therefore it is possible to render the related items data set in a Widgetkit widget. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).
