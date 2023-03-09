---
title: Conditions and Filters
---

**Conditions & Filters** specify what and when a source content will be fetched and/or rendered. {% .lead %}

In order to have full control over a dynamic content it is important to understand that there are different types of conditions executed at different moments of the rendering workflow. Learn them individually, their differences and how to combine them.

| Type | Description | Execution Time | Dynamic Support |
| ---- | ----------- | -------------- | --------------- |
| [Query Conditions](#query-conditions) | Provided by each source individually. | Query | Partial |
| [Dynamic Condition](#dynamic-condition) | Provided globally as part of the Dynamic Content core workflow. | Render | None |
| [Access Condition](#access-condition) | Provided globally as part of the Essentials Access addon workflow. | Render | Full |

---

## Query Conditions

**Query Conditions** are conditions set during a source mapping that determine what content should be returned. Those will vary on every source and are usually static with the exception of [Filter](./query-conditions#filter-conditions)/[Order](./query-conditions#order-conditions) conditions of [Database](providers/database), [CSV](providers/csv) and [RSS](providers/rss) sources.

{% image %}
![Query Conditions](/assets/ytp/sources/query-conditions.webp)
{% /image %}

---

## Dynamic Condition

**Dynamic Conditions**, part of the [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#dynamic-conditions) core workflow, is a condition set during a source mapping to determine should the element be displayed. The amount of conditions is limited to one, and cannot use other dynamic values during the evaluation.

{% image %}
![Dynamic Conditions](/assets/ytp/sources/dynamic-conditions.webp)
{% /image %}

---

## Access Condition

**Access Conditions**, part of the [Essentials Access Addon](../access/) workflow, work in a similar way as [Dynamic Condition](#dynamic-condition) do, but with support for dynamic content, multiple rules and custom evaluation logic. You can opt to use them instead as per the benefits.

{% image %}
![Access Conditions](/assets/ytp/sources/access-conditions.webp)
{% /image %}

---

## Execution Performance

When using **Query Conditions**, the content is fetched pre-filtered and the load in memory minimum, e.g. from 500 items 20 would be loaded and then rendered.

When using **Dynamic Conditions**  or **Access Conditions**, all content is fetched into memory, then filtered during runtime, e.g. from 500 items 500 items would be loaded, then filtered to 20 and rendered.

Considering that the more data is loaded into memory the longer it takes for the page to load and higher the risk of getting an exhausted memory fatal error, we can conclude that **Query Conditions** are the way to go and should be prefered when available. When that is not the case, we should try the next best approach, combine them.

---

## Combined Conditions

Not all queries support conditions, and if do most likely do not support evaluating dynamic values. In such situations a good strategy is to combine **Query Conditions** with **Dynamic/Access Conditions**. In practice that would mean load the minimum amount of content into memory, e.g. from a specific category, then further filter down those during the rendering.

{% callout type="warning" title="Pagination Errors" %}
Be aware of the pagination (offset and limit) while combining conditions as the results might not be what you expect. For example, you might set a limit condition of 20, but the final filtered result be 18.

As a rule of thumb, when an exact amount of items is required do not combine conditions.
{% /callout %}
