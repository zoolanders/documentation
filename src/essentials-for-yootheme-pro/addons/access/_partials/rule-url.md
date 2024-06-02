---
title: URL
description: Validates against the site's URL
collection: Site
---

## URL Rule {#url}

![URL Rule](./assets/rules/rule-url.svg)

The **URL Rule** evaluates whether the site URL matches one of the specified patterns.

![URL Rule Settings](./assets/rules/rule-url.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Patterns* | The list of patterns that the Site URL must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `localhost, about/team`. | &#x2713; | &#x2713; |
| *Use RegExp* | Whether to enable [Regular Expressions](https://regex101.com) in the patterns. | | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
