---
name: Browser
title: Browser Access Rule
collection: Device
description: Validates against the browser
icon: '
  <path stroke="none" d="M1 4.151c0-1.186.915-2.148 2.042-2.148h23.916c1.127 0 2.042.962 2.042 2.148l-.01 21.552c0 1.179-.87 2.3-1.99 2.3H2.997c-1.12 0-2.009-1.128-2.009-2.306L1 4.15zm2.286-.167a.301.301 0 00-.292.307l.003 1.986 4.42.022.003-2.315H3.286zm5.896 0L9.167 6.3h4.666V3.984H9.182zm6.401 0V6.3H27V4.29a.3.3 0 00-.292-.307H15.583zM27 8.14L2.997 8.121l-.012 17.576a.3.3 0 00.292.307h23.421c.16 0 .292-.139.292-.307L27 8.14z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A condition based on the **Browser Access Rule** will validate if the browser agent matches one of the specified browsers.

Supported browsers:

- Desktop: `Chrome`, `Firefox`, `Opera`, `Safari`, `Edge`, `MSIE`.
- Mobile: `Android`, `iPad`, `iPhone`, `iPod`, `Blackberry`, `IEMobile`, `NetFront`, `NokiaBrowser`, `Opera Mini`, `Opera Mobi`, `UC Browser`.

{% callout type="warning" title="Limited Detection" %}
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
{% /callout %}

---

## Settings

{% image %}
![Browser Access Rule](/assets/ytp/access/rule-browser.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The browsers list with optional version range that the browser agent must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `Chrome, Firefox 60-70`. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
