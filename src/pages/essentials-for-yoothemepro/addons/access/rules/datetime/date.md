---
name: Date
title: Date Access Rule
collection: Date & Time
description: Validates against the current date
icon: '
  <path stroke="none" d="M19.875 12.563c0-.446.367-.813.813-.813h1.625c.445 0 .812.367.812.813v1.624a.817.817 0 01-.813.813h-1.625a.817.817 0 01-.812-.813v-1.624z"/>
  <path stroke="none" d="M7.688 2c.445 0 .812.367.812.813v.812h13v-.813c0-.445.367-.812.813-.812.445 0 .812.367.812.813v.812h1.625A3.265 3.265 0 0128 6.875V24.75A3.265 3.265 0 0124.75 28H5.25A3.265 3.265 0 012 24.75V6.875a3.265 3.265 0 013.25-3.25h1.625v-.813c0-.445.367-.812.813-.812zM3.625 8.5v16.25c0 .891.734 1.625 1.625 1.625h19.5c.891 0 1.625-.734 1.625-1.625V8.5H3.625z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Date Access Rule evaluates whether the current date matches the specified date range.

---

## Settings

{% image %}
![Date Access Rule](/assets/ytp/access/rule-date.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **From/Until** | The range of date in `Y-m-d` format that the current date must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
