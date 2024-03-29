---
name: Datetime
title: Datetime Access Rule
collection: Date & Time
description: Validates against the current date & time
icon: '
  <path stroke="none" d="M19.875 23.446c0-.826.207-1.592.616-2.293a4.56 4.56 0 0 1 1.665-1.665 4.44 4.44 0 0 1 2.285-.612 4.6 4.6 0 0 1 3.225 1.333c.41.405.733.891.972 1.459.24.567.36 1.154.36 1.778a4.49 4.49 0 0 1-.36 1.77 4.554 4.554 0 0 1-.972 1.455c-.405.405-.891.73-1.455.968-.563.24-1.15.361-1.77.361a4.624 4.624 0 0 1-3.237-1.333 4.586 4.586 0 0 1-.972-1.45 4.39 4.39 0 0 1-.357-1.77zm1.005 0c0 .96.348 1.795 1.049 2.504.701.7 1.536 1.05 2.512 1.05.64 0 1.236-.159 1.778-.479a3.6 3.6 0 0 0 1.301-1.296c.32-.547.482-1.139.482-1.779a3.47 3.47 0 0 0-.482-1.782 3.574 3.574 0 0 0-1.3-1.301 3.456 3.456 0 0 0-1.779-.478c-.64 0-1.236.158-1.779.478a3.65 3.65 0 0 0-1.304 1.3 3.431 3.431 0 0 0-.478 1.783zm3.209 0v-2.698a.33.33 0 0 1 .097-.24.327.327 0 0 1 .239-.096c.093 0 .174.032.239.097a.327.327 0 0 1 .097.239v2.492l1.455.846a.33.33 0 0 1 .153.207.304.304 0 0 1-.036.251.315.315 0 0 1-.292.17.281.281 0 0 1-.17-.048l-1.548-.904a.334.334 0 0 1-.17-.117.308.308 0 0 1-.064-.199z"/>
  <path stroke="none" d="M19.309 27.247a.753.753 0 0 1-.753.753H5.25A3.265 3.265 0 0 1 2 24.75V6.875a3.265 3.265 0 0 1 3.25-3.25h1.625v-.812c0-1.05 1.625-1.05 1.625 0v.812h13v-.812c0-1.05 1.625-1.05 1.625 0v.812h1.625A3.265 3.265 0 0 1 28 6.875v10.721a.787.787 0 0 1-.787.787h-.014a.824.824 0 0 1-.824-.824V8.5H3.625v16.25c0 .891.734 1.625 1.625 1.625h13.264c.439 0 .795.356.795.796v.076z"/>
  <path stroke="none" d="M19.875 12.563c0-.446.367-.813.813-.813h1.625c.445 0 .812.367.812.813v1.624a.816.816 0 0 1-.813.813h-1.625a.817.817 0 0 1-.812-.813v-1.624z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The Datetime Access Rule evaluates whether the current date & time matches the specified datetime range.

## Settings

{% image %}
![Datetime Access Rule](/assets/ytp/access/rule-datetime.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **From/Until** | The range of date & time in `Y-m-d H:i` format that the current time must constrain to for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
