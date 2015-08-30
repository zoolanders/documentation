---
title: Rules
taxonomy:
    category: docs
---

Each rule has 3 states that will determine it evaluation:

* **Selection**. The rule will be considered a match only when the following selections **ARE** met.
* **Exclude Selection**. The rule will be considered a match only when the following selections **ARE NOT** met.
* **Ignore**. The rule will not be evaluated.

### User Access

This rule evaluates if the User has the appropriate Joomla! Viewing Access Level.

| Field       | Description |
| :---------- | :---------- |
| **Levels** | The User Access level which will be evaluated. Multiple selection is possible. |
| **Mode** | The rule mode, if the User should have access to all (**AND**) levels or any (**OR**) of them. |
| **User** | The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**). |

### User Group

This rule evaluates if the User is part of the selected Joomla! User Groups.

| Field       | Description |
| :---------- | :---------- |
| **Levels** | The User Group which will be evaluated. Multiple selection is possible. |
| **Mode** | The rule mode, if the User should have access to all (**AND**) levels or any (**OR**) of them. |
| **User** | The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**). |

### Date

This rule evaluates if current date/time matches the specified range. Take in consideration that is used the date/time of your server, not of the visitors system.

| Field       | Description |
| :---------- | :---------- |
| **Start** | The start date/time. |
| **End** | The end date/time. |

### Searchbot

This rule evaluates the searchbot being used, if it's the case.

| Field       | Description |
| :---------- | :---------- |
| **Bots** | The Bots list using <code>\|</code> as a separator. |

### Element value

This rule evaluates the specified Element value. It will check the Element value being stored in the DB, not the one being displayed.

| Field       | Description |
| :---------- | :---------- |
| **Element** | The element which value will be evaluated. |
| **Value** | The element value to be evaluated. |

### Content Plugin

This rule uses the Joomla! Content plugins to make an evaluation. It should be used when there is no specific rule but there is an appropriate Content Plugin.

| Field       | Description |
| :---------- | :---------- |
| **Expression** | Allows to write one or several **Content Plugin Expressions** with a dummy content. If the Expression returns the dummy content the rule will be considered positive. If more than one Expression **ANY** logic will be used by default. Eg. `{lang es}DUMMY{/lang}` |

### Item Author

This rule evaluates if the User is the Item Author or if it has modified it.

| Field       | Description |
| :---------- | :---------- |
| **User** | The type of evaluation that will be performed. |

### ZOOcart Items

This rule evaluates if the User has purchased the specified [ZOOcart](/zoocart) product.

| Field       | Description |
| :---------- | :---------- |
| **Include Current** | If enabled the element Item will be added to the selection. |
| **Items** | The list of products for the evaluation. |
| **Mode** | Allows choosing if the User should have purchased all (**AND**) products or any (**OR**) of them. |
| **User** | The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**). |

### ZOOcart Subscription

This rule evaluates if the User has the specific [ZOOcart](/zoocart) valid Subscription.

| Field       | Description |
| :---------- | :---------- |
| **Include Current** | If enabled the element Item will be added to the selection. |
| **Items** | The list of products for the evaluation. |
| **Mode** | Allows choosing if the User should have purchased all (**AND**) products or any (**OR**) of them. |
| **User** | The user being evaluated, the current viewer (**User**) or the Item's Author (**Author**). |
