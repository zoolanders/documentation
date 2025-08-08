---
title: Month
description: Validates against the current month
collection: Date & Time
---

# Month Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-month.svg-->
</div>

The **Month Rule** evaluates whether the current month matches one of the selected months.

![Month Rule Settings](./assets//rule-month.webp)

| Setting     | Description                                                                                                                                                      | Required | Dynamic  |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: | :------: |
| _Selection_ | The months that the current month must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| _Reversed_  | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`.                                                                |          | &#x2713; |

<!--@include: ./advanced-rule-settings-->
