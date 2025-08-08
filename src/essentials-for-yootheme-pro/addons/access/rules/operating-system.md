---
title: Operating System
description: Validates against the operating system
collection: Device
---

# Operating System Rule

<div class="tm-resource-icon">
    <!--@include: ./assets/rule-operating-system.svg-->
</div>

The **Operating System Rule** evaluates whether the browser agent matches one of the specified patterns, e.g. `MacOS 10.1`.

Supported OS: _Mac OS X_, _Mac OS Classic_, _Linux_, _Open BSD_, _Sun OS_, _QNX_, _BeOS_, _OS/2_, _Windows_, _Windows Vista_, _Windows Server 2003_, _Windows XP_, _Windows 2000 sp1_, _Windows 2000_, _Windows NT_, _Windows Me_, _Windows 98_, _Windows 95_, _Windows CE_.

::: warning Limited Detection
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
:::

![Operating System Rule Settings](./assets//rule-os.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The Operating System list with optional version range that the browser agent must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `Windows, Mac OS X 10.2-10`. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
