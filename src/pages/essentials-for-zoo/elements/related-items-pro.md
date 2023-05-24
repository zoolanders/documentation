# Element - RelatedItemsPro

RelatedItemsPro extends with new features the ZOO RelatedItems element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

{% callout %}
In order to better understand the following read the [Integration Section](./integration.md).
{% /callout %}

## Config

- `Editable`: Determines if the element should allow make relations or only show them. Usually combined with Bi-relation feature.
- `Authored by User`: Limit the relations list to items authored by current User.
- `Hide Unpublished`: Limit the relations list to published items.

### Items

- `Apps`: Limit the relations list to items belonging to selected Apps.
- `Types`: Limit the relations list to items being of selected Type.
- `Bi-Related Elements`: Choose the elements from other Types that will be used for the bi-directional relation.

{% callout %}
Bi-relation is a very powerful feature, for example an _Event_ and _Venue_ items could be related to each other by saving only one of them, the other will be related to the first one automatically.
{% /callout %}

## Layouts

### Default - default

Renders the related items with the following settings.

- `Related Layout`: Allows choosing the layout that will be used for rendering the Items.
- `Link to Item`: When **Related Layout** is set to **Item Name** allows linking the name to the Item full view.
- `Subrelated Element`: It allows rendering the relations from the related Items. For example if a Car item is related to Concessionary Item it would allow rendering all the Cars from that Concessionary.
- `Exclude it Self`: When rendering subrelations allows excluding the current Item.
- `Order`: allows choosing the rendered Items order.

### Widgetkit

Widgetkit layout is an integration layer between the element and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the element data as content. Therefore it is possible to render the related items data set in a Widgetkit widget. For details about configuration options visit the [Widgetkit documentation](https://yootheme.com/support/widgetkit/).
