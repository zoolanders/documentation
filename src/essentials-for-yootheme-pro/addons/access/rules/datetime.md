---
title: Datetime
description: Validates against the current date & time
collection: Date & Time
---

<!--@include: ./_partials/intro.md-->

The Datetime Access Rule evaluates whether the current date & time matches the specified datetime range.

## Settings

![Datetime Access Rule](../assets/rules/rule-datetime.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **From/Until** | The range of date & time in `Y-m-d H:i` format that the current time must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings.md-->
:::

