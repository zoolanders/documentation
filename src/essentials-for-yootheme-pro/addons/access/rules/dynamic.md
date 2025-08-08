---
title: Dynamic
description: Validates against dynamic content
collection: Misc
---

# Dynamic Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-dynamic.svg-->
</div>

The **Dynamic Rule** determines whether a given value satisfies a specific set of conditions. This Rule is versatile and can be applied to multiple scenarios as both the value and the condition value can be set either static or dynamic.

![Dynamic Rule Settings](./assets//rule-dynamic.webp)

| Setting            | Description                                                                                                                               | Required | Dynamic  |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | :------: | :------: |
| _Value_            | The value that must validate for the condition to be considered valid.                                                                    | &#x2713; | &#x2713; |
| _Evaluation_       | The logic that will be applied to the specified value, _Is empty_, _Includes_, _Equals to_, _Greater than_, _Starts with_ or _Ends with_. | &#x2713; |
| _Evaluation Value_ | The value that the main value will be evaluated with, if required by the evaluation logic.                                                | &#x2713; | &#x2713; |
| _Reversed_         | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`.                                         |          | &#x2713; |

<!--@include: ./advanced-rule-settings-->
