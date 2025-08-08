---
title: Language
description: Validates against the site's language
collection: Site
---

# Language Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-language.svg-->
</div>

The **Language Rule** evaluates whether the site language matches one of the selected languages.

![Language Rule Settings](./assets//rule-language.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The languages that the site must match, at least one, for the condition to be considered valid. Only the installed languages will be listed. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
