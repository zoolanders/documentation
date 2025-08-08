---
title: Week
description: Validates against the current week
collection: Date & Time
---

# Week Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-week.svg-->
</div>

The **Week Rule** evaluates whether the current week of the year matches one of the patterns.

![Week Rule Settings](./assets//rule-week.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The list or range of weeks in a year that the current week must match, considering that in average a year has 52 weeks and the week starts in Monday. Separate the entries with a comma and/or new line, e.g `2, 5-8`. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
