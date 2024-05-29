---
title: Time
description: Validates against the current time
collection: Date & Time
---

<!--@include: ./_partials/intro-->

The Time Access Rule evaluates whether the current time matches the specified time range.

## Settings

![Time Access Rule](../assets/rules/rule-time.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **From/Until** | The range of time in `H:i` format that the current time must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings-->
:::

