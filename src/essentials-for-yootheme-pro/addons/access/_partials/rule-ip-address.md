---
title: IP Address
description: Validates against the IP Address
collection: Device
---

## IP Address Rule {#ip-address}

![IP Address Rule](./assets/rules/rule-ip-address.svg)

The **IP Address Rule** evaluates whether the device ip address matches one of the specified patterns.

![IP Address Rule Settings](./assets/rules/rule-ip-address.webp)

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Selection* | The IP Address list with optional range that the device must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `127.0.0.1, 128.0-129.1`. | &#x2713; | &#x2713; |
| *Reversed* | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |
<!--@include: ./advanced-rule-settings-->
