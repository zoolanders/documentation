### Execution and Performance

You might have noticed that every **Dynamic Content** has **Query Conditions** and **Dynamic Conditions** settings that allow filtering the fetched content, and you might wonder what are the differences and when to use one or the other, or even combine them.

When using **Query Conditions** (settings available during the source mapping), the content is fetched pre-filtered and the load in memory minimum, e.g. from 500 items 20 would be loaded and then rendered.

When using **Dynamic Condition** (common filters available during the source mapping), all content is fetched into memory, then filtered during runtime, e.g. from 500 items 500 items would be loaded, then filtered to 20 and rendered.

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
