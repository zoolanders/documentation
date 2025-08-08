---
title: User Level
description: Validates against current user access/role
collection: Site
---

# User Level Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-user-level.svg-->
</div>

The **User Level Rule** evaluates whether the current user's access or role level matches one of the selection.

![User Level Rule Settings](./assets//rule-user-level.webp)

| Setting     | Description                                                                                                 | Required | Dynamic  |
| ----------- | ----------------------------------------------------------------------------------------------------------- | :------: | :------: |
| _Selection_ | The Access or Role levels that the user must match, at least one, for the condition to be considered valid. | &#x2713; | &#x2713; |
| _Match All_ | Whether all levels must be matched for the validation to pass.                                              |
| _Reversed_  | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`.           |          | &#x2713; |

<!--@include: ./advanced-rule-settings-->
