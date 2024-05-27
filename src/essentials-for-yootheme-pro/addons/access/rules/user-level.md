---
title: User Level
description: Validates against current user access/role
collection: Site
---

<!--@include: ./_partials/intro.md-->

The User Level Access Rule evaluates whether the current user's access or role level matches one of the selection.

## Settings

![User Level Access Rule](../assets/rules/rule-user-level.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The Access or Role levels that the user must match, at least one, for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Match All** | Whether all levels must be matched for the validation to pass. |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings.md-->
:::

