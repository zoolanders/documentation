---
title: Query Conditions
---

## Filter Condition

{% image %}
![Query Filter Condition](/assets/ytp/sources/query-filter-condition.webp)
{% /image %}

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Name** | A name to better identify this condition. | &#x2713; |
| **Status** | Should this condition be evaluated. | &#x2713; |
| **Field** | The field of the currently evaluated record to use for the condition evaluation. | | &#x2713; |
| **Operator** | The operator for the evaluation, see full list bellow. | | &#x2713; |
| **-- Is Null** | The field must `be null`. |
| **-- Is not Null** | The field must `not be null`. |
| **-- Is empty** | The field must `be empty`. |
| **-- Is not empty** | The field must `not be empty`. |
| **-- Equal To** | The field must be `equal to` the specified value. |
| **-- Not Equal To** | The field must `not be equal to` the specified value. |
| **-- Less than** | The field must be `less than` the specified value. |
| **-- Greater than** | The field must be `greater than` the specified value. |
| **-- Less than or equal to** | The field must be `less than or equal to` the specified value. |
| **-- Greater than or equal to** | The field must be `greater than or equal to` the specified value. |
| **-- Starts with** | The field must `start with` the specified value. |
| **-- Ends with** | The field must `end with` the specified value. |
| **-- LIKE** | The field must `match a pattern` specified in value.  |
| **-- LIKE %%** | The field must `match a pattern` specified in value which will be wrapped with `%` wildcard that represents `zero`, `one`, or `multiple` characters. |
| **Value** | The static or dynamic value that the field is being evaluated with. | &#x2713; | &#x2713; |

---

## Filter Evaluation Logic

{% image %}
![Query Filter Conditions](/assets/ytp/sources/query-filter-conditions.webp)
{% /image %}

| Setting | Default | Description |
| ------- | ------- | ----------- |
| **Filters** | `[]` | The list of filter conditions applied during the query execution. |
| **Mode** | `AND` | The filter conditions evaluation logic, `AND`, `OR`, or `Custom`. |
| **-- AND** |  | All conditions must evaluate as true. |
| **-- OR** |  | At least one condition must evaluate as true. |
| **-- Custom** |  | Reference a condition with brackets `{}` and it index number, e.g. `{1}`. Combine conditions with the logic operators `AND\|OR`, e.g. `{1} AND {2} OR {3}`. Alter the execution order with parenthesis `()`, e.g. `{1} AND ({2} OR {3})` where the conditions 2 and 3 will be evaluated first. |

---

## Order Condition

{% image %}
![Query Order Condition](/assets/ytp/sources/query-order-condition.webp)
{% /image %}

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Name** | A name to better identify this condition. | &#x2713; |
| **Status** | Should this condition be evaluated. | &#x2713; |
| **Field** | The field of the currently evaluated record to use for the condition evaluation. | | &#x2713; |
| **Direction** | The ordering direction, ascendent `ASC` or descendent `DESC`. | &#x2713; | &#x2713; |
