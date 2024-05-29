---
title: Date
description: Validates against the current date
collection: Date & Time
---

<!--@include: ./_partials/intro-->

The Date Access Rule evaluates whether the current date matches the specified date range.

## Settings

![Date Access Rule](../assets/rules/rule-date.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *From/Until* | The range of date in `Y-m-d` format that the current date must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings

<!--@include: ./_partials/advanced-settings-->

:::
