---
title: User
description: Validates against current user
collection: Site
---

## User Rule {#user}

![User Rule](./assets/rules/rule-user.svg)

The **User Rule** evaluates whether the current user's `id` or `username` matches one of the selection.

![User Rule Settings](./assets/rules/rule-user.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The ids or usernames that the user must match, at least one, for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `346, johndoe`. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
