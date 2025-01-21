---
title: Dynamic
description: Validates against dynamic content
collection: Misc
---

## Dynamic Rule {#dynamic}

<div class="tm-resource-icon">
    <!--@include: ../assets/rules/rule-dynamic.svg-->
</div>

The **Dynamic Rule** determines whether a given value satisfies a specific set of conditions. This Rule is versatile and can be applied to multiple scenarios as both the value and the condition value can be set either static or dynamic.

![Dynamic Rule Settings](./assets/rules/rule-dynamic.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Value* | The value that must validate for the condition to be considered valid. | &#x2713; | &#x2713; |
| *Evaluation* | The logic that will be applied to the specified value, _Is empty_, _Includes_, _Equals to_, _Greater than_, _Starts with_ or _Ends with_. | &#x2713; |
| *Evaluation Value* | The value that the main value will be evaluated with, if required by the evaluation logic. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
