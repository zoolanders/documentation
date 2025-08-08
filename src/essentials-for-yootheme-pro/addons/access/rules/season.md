---
title: Season
description: Validates against the current season
collection: Date & Time
---

# Season Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-season.svg-->
</div>

The **Season Rule** evaluates whether the current season matches one of the selected seasons.

![Season Rule Settings](./assets//rule-season.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The seasons that the current season must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| *Hemisphere* | The hemisphere from which to calculate the current season. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
