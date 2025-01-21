---
title: Day
description: Validates against the current day
collection: Date & Time
---

## Day Rule {#day}

<div class="tm-resource-icon">
    <!--@include: ../assets/rules/rule-day.svg-->
</div>

The **Day Rule** evaluates whether the current day matches one of the selected days.

![Day Rule Settings](./assets/rules/rule-day.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The days that the current day must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
