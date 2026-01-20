---
title: User Group
description: Validates against the current user's group
collection: Site
---

# User Group Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-user-group.svg-->
</div>

The **User Group Rule** evaluates whether the current user is part of the selected user groups.

::: warning WordPress
In WordPress this rule requires the [Groups Plugin](https://wordpress.org/plugins/groups/) to be preinstalled.
:::

![User Group Rule Settings](./assets//rule-user-group.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The groups that the user must match, at least one, for the condition to be considered valid. | &#x2713; | &#x2713; |
| *Match All* | Whether all groups must be matched for the validation to pass. |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
