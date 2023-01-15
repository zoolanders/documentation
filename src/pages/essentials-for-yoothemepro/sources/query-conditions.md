---
title: Query Conditions
---

**Query Conditions** are the most performant way to fetch pre-filtered source content. {% .lead %}

Introduced by Essentials, **Query Conditions** builds on top of YOOtheme Pro [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) a workflow for processing content queries with **filter** and **order** conditions based on static or dynamic values. Supported by [Database](providers/database) and [CSV](providers/csv) sources the conditions allow setting advanced queries in the lines of "Fetch all Records authored by the Current User".

---

## Filter Conditions

**Filter Conditions** are rules applied during a query execution that records must evaluate to in order to be included in the fetched results.

{% image %}
![Query Filter Conditions](/assets/ytp/sources/query-filter-conditions.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of [filter conditions](#filter-condition) applied during the query execution. |
| **Mode** | `AND` | The filter conditions [evaluation logic](#evaluation-logic), `AND`, `OR`, or `Custom`. |

### Filter Condition

A single condition configuration.

{% image %}
![Query Filter Condition](/assets/ytp/sources/query-filter-condition.webp)
{% /image %}

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Name** | A name to better identify this condition. | &#x2713; |
| **Status** | Should this condition be evaluated. | &#x2713; |
| **Field** | The field of the currently evaluated record to use for the condition evaluation. | | &#x2713; |
| **Operator** | The operator for the evaluation, see full list bellow. | | &#x2713; |
| **Value** | The static or dynamic value that the field is being evaluated with. | &#x2713; | &#x2713; |

{% details title="List of Operators" %}
| Operator | Description |
| -------- | ----------- |
| **Is Null** | The field must `be null`. |
| **Is not Null** | The field must `not be null`. |
| **Is empty** | The field must `be empty`. |
| **Is not empty** | The field must `not be empty`. |
| **Equal To** | The field must be `equal to` the specified value. |
| **Not Equal To** | The field must `not be equal to` the specified value. |
| **Less than** | The field must be `less than` the specified value. |
| **Greater than** | The field must be `greater than` the specified value. |
| **Less than or equal to** | The field must be `less than or equal to` the specified value. |
| **Greater than or equal to** | The field must be `greater than or equal to` the specified value. |
| **Starts with** | The field must `start with` the specified value. |
| **Ends with** | The field must `end with` the specified value. |
| **LIKE** | The field must `match a pattern` specified in value.  |
| **LIKE %%** | The field must `match a pattern` specified in value which will be wrapped with `%` wildcard that represents `zero`, `one`, or `multiple` characters. |
{% /details %}

### Evaluation Logic

The **mode** setting specifies the evaluation logic for the filter conditions:

- **AND**, where all conditions must evaluate as true.
- **OR**, where at least one condition must evaluate as true.
- **Custom**, where a custom evaluation logic statement must be inputted with the following supported expressions:
  - A condition is referenced with brackets `{}` and it index number, e.g. `{1}`.
  - The operators `AND|OR` combine the conditions with an evalution logic, e.g. `{1} AND {2} OR {3}`.
  - The parenthesis `()` alter the execution order, e.g. `{1} AND ({2} OR {3})` where the conditions 2 and 3 will be evaluated first.

---

## Order Conditions

**Order Conditions** are rules applied during a query execution that will determine the records ordering.

{% image %}
![Query Order Conditions](/assets/ytp/sources/query-order-conditions.webp)
{% /image %}

### Order Condition

A single condition configuration.

{% image %}
![Query Order Condition](/assets/ytp/sources/query-order-condition.webp)
{% /image %}

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Name** | A name to better identify this condition. | &#x2713; |
| **Status** | Should this condition be evaluated. | &#x2713; |
| **Field** | The field of the currently evaluated record to use for the condition evaluation. | | &#x2713; |
| **Direction** | The ordering direction, ascendent `ASC` or descendent `DESC`. | &#x2713; | &#x2713; |

---

## Query vs Dynamic Conditions

You might have noticed that every **Dynamic Content** has a **Dynamic Condition** setting where filtering the fetched content is also possible, and you might wonder what are the differences and when to use one or the other, or even combine them.

### Execution and Performance

With **Query Conditions** the content is fetched pre-filtered and the load in memory minimum, e.g. from 500 items 20 would be loaded and then rendered.

With **Dynamic Condition** all content is fetched into memory, then filtered during runtime, e.g. from 500 items 500 items would be loaded, then filtered to 20 and rendered.

{% callout type="warning" title="Memory Limit" %}
Notice that the more data is loaded into memory the longer it takes for the page to load and higher the risk of getting an exhausted memory fatal error.
{% /callout %}

### Dynamic Factor & Evaluation

Even though **Dynamic Condition** is filtering dynamic content results, the condition per se cannot use other dynamic values during it evaluation. Furthermore, the amount of conditions is limited to only one.

That is not the case with **Query Conditions** where filtering with dynamic values, multiple conditions and evaluation logic is fully supported.

### Combining Conditions

At this point you are most likely convinced to always use **Query Conditions**, and you are certainly right, the problem is not all Dynamic Content queries support them or do so with limits, and a good strategy would envolve using both.

For example, load Articles from a specific Category, fetching the minimum amount of results into memory, then further filter those while rendering. As a bonus, consider using [Access Conditions](../access/conditions) from the Access Addon which work in a similar way as **Dynamic Condition** do, but with support for dynamic values, multiple conditions and evaluation logic.

{% callout type="warning" title="Pagination Errors" %}
Be aware of the pagination (offset and limit) while combining Query and Dynamic Conditions as the results might not be what you expect. For example, you might get 20 pre-filtered items, and further filter them with a dynamic condition getting a final output of 18 items.

As a rule of thumb, when an exact amount of items is required do not combine conditions.
{% /callout %}
