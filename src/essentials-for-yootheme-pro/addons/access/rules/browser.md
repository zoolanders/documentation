---
title: Browser
description: Validates against the browser
collection: Device
---

<!--@include: ./_partials/intro-->

The Browser Access Rule evaluates whether the browser agent matches one of the specified patterns, e.g. `Firefox 90`.

Supported browsers:

- Desktop: `Chrome`, `Firefox`, `Opera`, `Safari`, `Edge`, `MSIE`.
- Mobile: `Android`, `iPad`, `iPhone`, `iPod`, `Blackberry`, `IEMobile`, `NetFront`, `NokiaBrowser`, `Opera Mini`, `Opera Mobi`, `UC Browser`.

::: warning Limited Detection
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
:::

## Settings

![Browser Access Rule](../assets/rules/rule-browser.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The browsers list with optional version range that the browser agent must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `Chrome, Firefox 60-70`. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

::: details Advanced Settings
<!--@include: ./_partials/advanced-settings-->
:::
