---
name: Week
title: Week Access Rule
collection: Date & Time
description: Validates against the current week
icon: '
  <path stroke="none" d="M19.875 12.563c0-.446.367-.813.813-.813h1.625c.445 0 .812.367.812.813v1.624a.816.816 0 0 1-.813.813h-1.625a.817.817 0 0 1-.812-.813v-1.624ZM15.542 12.563c0-.446.367-.813.812-.813h1.625c.446 0 .813.367.813.813v1.624a.816.816 0 0 1-.813.813h-1.625a.817.817 0 0 1-.812-.813v-1.624ZM11.208 12.563c0-.446.367-.813.813-.813h1.625c.445 0 .812.367.812.813v1.624a.816.816 0 0 1-.812.813H12.02a.817.817 0 0 1-.813-.813v-1.624ZM6.875 12.563c0-.446.367-.813.813-.813h1.625c.445 0 .812.367.812.813v1.624a.816.816 0 0 1-.813.813H7.688a.817.817 0 0 1-.813-.813v-1.624Z"/>
  <path stroke="none" d="M7.688 2c.445 0 .812.367.812.813v.812h13v-.813c0-.445.367-.812.813-.812.445 0 .812.367.812.813v.812h1.625A3.265 3.265 0 0 1 28 6.875V24.75A3.265 3.265 0 0 1 24.75 28H5.25A3.265 3.265 0 0 1 2 24.75V6.875a3.265 3.265 0 0 1 3.25-3.25h1.625v-.813c0-.445.367-.812.813-.812ZM3.625 8.5v16.25c0 .891.734 1.625 1.625 1.625h19.5c.891 0 1.625-.734 1.625-1.625V8.5H3.625Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Week Access Rule evaluates whether the current week of the year matches one of the patterns.

---

## Settings

{% image %}
![Week Access Rule](/next/assets/ytp/access/rule-week.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The list or range of weeks in a year that the current week must match, considering that in average a year has 52 weeks and the week starts in Monday. Separate the entries with a comma and/or new line, e.g `2, 5-8`. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
