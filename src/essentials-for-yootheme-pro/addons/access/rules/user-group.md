---
title: User Group
description: Validates against the current user's group
collection: Site
---

<!--@include: ./_partials/intro.md-->

The User Group Access Rule evaluates whether the current user is part of the selected user groups.

::: warning Limited Detection
Notice that this rule is specific to Joomla.
:::

## Settings

![User Group Access Rule](../assets/rules/rule-user-group.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The groups that the user must match, at least one, for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Match All** | Whether all groups must be matched for the validation to pass. |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings.md-->
:::

