---
title: Month
description: Validates against the current month
collection: Date & Time
---

## Month Rule {#month}

![Month Rule](./assets/rules/rule-month.svg)

The **Month Rule** evaluates whether the current month matches one of the selected months.

![Month Rule Settings](./assets/rules/rule-month.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The months that the current month must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
