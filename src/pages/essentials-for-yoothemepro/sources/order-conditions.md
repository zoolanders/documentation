---
title: Order Conditions
---

**Order Conditions** are rules applied during a query execution that will determine the records ordering.

{% image %}
![Query Order Conditions](/assets/ytp/sources/query-order-conditions.webp)
{% /image %}

---

## Condition Settings

A single order condition configuration.

{% image %}
![Query Order Condition](/assets/ytp/sources/query-order-condition.webp)
{% /image %}

| Setting | Description | Dynamic | Required |
| ------- | ----------- | :-----: | :------: |
| **Name** | A name to better identify this condition. | &#x2713; |
| **Status** | Should this condition be evaluated. | &#x2713; |
| **Field** | The field of the currently evaluated record to use for the condition evaluation. | | &#x2713; |
| **Direction** | The ordering direction, ascendent `ASC` or descendent `DESC`. | &#x2713; | &#x2713; |
