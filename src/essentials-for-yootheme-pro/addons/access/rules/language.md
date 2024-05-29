---
title: Language
description: Validates against the site's language
collection: Site
---

<!--@include: ./_partials/intro-->

The Language Access Rule evaluates whether the site language matches one of the selected languages.

## Settings

![Language Access Rule](../assets/rules/rule-language.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The languages that the site must match, at least one, for the condition to be considered valid. Only the installed languages will be listed. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings-->
:::
