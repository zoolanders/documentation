---
title: Time
description: Validates against the current time
collection: Date & Time
---

# Time Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-time.svg-->
</div>

The **Time Rule** evaluates whether the current time matches the specified time range.

![Time Rule Settings](./assets//rule-time.webp)

| Setting      | Description                                                                                                         | Required | Dynamic  |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | :------: | :------: |
| _From/Until_ | The range of time in `H:i` format that the current time must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| _Reversed_   | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`.                   |          | &#x2713; |

<!--@include: ./advanced-rule-settings-->
