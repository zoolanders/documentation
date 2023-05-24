# Groups restrictions

## Global

Sometimes you need to assign particular groups for client user if he buys some product. It is useful for 3d party extensions that uses User Groups to manage the access to some section of the site.

For any item type ZOOcart element configuration has additional option **Assign Users Groups**. By default it is unchecked and groups are not assigned. If Assign Users Groups is checked the group list will be available:

![Groups assigning - product](./zoocart-group-assign-product.png)

You can select one or more groups in **User groups to assign** list. Selected groups will be assigned to the user if his order becomes finished (see note below).

> The groups will be assigned to the buyer user if the order has a status equal to "Finished State" in the [Order settings](../../basics/settings.md#orders).

**Subscription** item type has additional groups list **User groups to remove**. These groups will be removed from the buyer user after subscription ending:

![Groups assigning - subscription](./zoocart-group-assign-subscription.png)

> The groups will be removed from the buyer user if subscription expired according to the time or the order receives a status equal to "Canceled State" in the [Order settings](../../basics/settings.md#orders).

## Override on Item

It is possible to override the groups from the Global settings on the Item Edit page for each specific item, but the assigning / removing behaviours are the same.

To override the groups for the specific item go to the **Item Edit page** and find ZOOcart element. By default **Global settings** is checked therefore the item inherits the settings from the Element configuration:

![Groups overriding for item](./zoocart-group-assign-override-groups.png)

If uncheck the Global checkbox, the groups select box will be available:

![Groups overriding for item](./zoocart-group-assign-override.png)

The subscription item has additional select box with groups to remove.

![Groups overriding for item](./zoocart-group-assign-override-subscription.png)
