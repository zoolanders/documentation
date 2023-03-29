---
name: Season
title: Season Access Rule
collection: Date & Time
description: Validates against the current season
icon: '
  <path stroke="none" d="M16.625 12.563c0-.892.734-1.626 1.625-1.626h8.125v3.25H18.25a1.633 1.633 0 01-1.625-1.624zm-13 3.25h6.5c.891 0 1.625.733 1.625 1.624 0 .892-.734 1.625-1.625 1.625h-6.5v-3.25z"/>
  <path stroke="none" d="M7.688 2c.445 0 .812.367.812.813v.812h13v-.813c0-.445.367-.812.813-.812.445 0 .812.367.812.813v.812h1.625A3.265 3.265 0 0128 6.875V24.75A3.265 3.265 0 0124.75 28H5.25A3.265 3.265 0 012 24.75V6.875a3.265 3.265 0 013.25-3.25h1.625v-.813c0-.445.367-.812.813-.812zM3.625 8.5v16.25c0 .891.734 1.625 1.625 1.625h19.5c.891 0 1.625-.734 1.625-1.625V8.5H3.625z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Season Access Rule evaluates whether the current season matches one of the selected seasons.

---

## Settings

{% image %}
![Season Access Rule](/next/assets/ytp/access/rule-season.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The seasons that the current season must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| **Hemisphere** | The hemisphere from which to calculate the current season. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
