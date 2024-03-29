---
title: Conditions and Filters
---

Apply conditions to the source content during fetching and/or rendering phase.

It's important to understand the different types of conditions in dynamic content, their differences in execution time or dynamic values support, and learn how to combine them effectively.

| Type | Description | Execution Time | Dynamic Support |
| ---- | ----------- | -------------- | --------------- |
| [Query Conditions](#query-conditions) | Provided by each source individually. | Query | Partial |
| [Dynamic Condition](#dynamic-condition) | Provided globally as part of the Dynamic Content core workflow. | Render | None |
| [Access Condition](#access-condition) | Provided globally as part of the Essentials Access addon workflow. | Render | Full |

## Query Conditions

Filter and/or order query conditions are rules, applied during a query execution, that the content must evaluate to in order to be included in the fetched results. The conditions are provided and supported by every source individually.

{% image %}
![Query Conditions](/assets/ytp/sources/query-conditions.webp)
{% /image %}

## Dynamic Condition

Part of the [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#dynamic-conditions) core workflow, Dynamic Condition is set during a source mapping to determine should the element be displayed. The amount of conditions is limited to one, and cannot use dynamic content for more advanced evaluation.

{% image %}
![Dynamic Conditions](/assets/ytp/sources/dynamic-conditions.webp)
{% /image %}

## Access Condition

Part of the [Access Addon](/essentials-for-yootheme-pro/addons/access) workflow, Access Condition has the same functionality as the [Dynamic Condition](#dynamic-condition), but with support for dynamic content, multiple rules and custom evaluation logic. You can opt to use it instead as per higher possibilities.

{% image %}
![Access Conditions](/assets/ytp/sources/access-conditions.webp)
{% /image %}

## Execution Performance

With **Query Conditions**, the content is fetched pre-filtered and the load in memory minimum, e.g. from 500 items 20 would be loaded, then 20 elements rendered.

With **Dynamic or Access Condition**, all content is fetched into memory, then the elements are filtered during runtime, e.g. from 500 items 500 items would be loaded, then 500 elements conditioned during the pre-rendering phase, but only 20 rendered.

To optimize page loading speed and minimize the risk of memory errors, Query Conditions are the preferred method and should always be used if available. If not available, the next best approach is to combine different types of conditions. This is because the more data loaded into memory and processing required during runtime, the slower the page loads and the higher the risk of running into memory errors.

## Combined Conditions

Not all queries support conditions, and if do most likely do not support evaluating dynamic values. In such situations a good strategy is to combine **Query Conditions** with **Dynamic or Access Condition**. In practice that would mean load the minimum amount of content into memory, e.g. load items from a specific category, then further filter down those during the rendering.

{% callout type="warning" title="Pagination Errors" %}
Be aware of the pagination (offset and limit) while combining conditions as the results might not be what you expect. For example, you might set a limit condition of 20, but the final filtered result be 18.

As a rule of thumb, when an exact amount of items is required do not combine conditions.
{% /callout %}
