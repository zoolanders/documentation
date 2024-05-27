---
title: Device
description: Validates against the device type
collection: Device
---

<!--@include: ./_partials/intro.md-->

The Device Access Rule evaluates whether the browser agent matches one of the selected device types, `Mobile`, `Table`, or `Desktop`.

::: warning Limited Detection
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
:::

## Settings

![Device Access Rule](../assets/rules/rule-device.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The device types that the browser agent must match, at least one, for the condition to be considered valid. . | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings.md-->
:::

