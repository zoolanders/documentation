---
name: Day
title: Day Access Rule
collection: Date & Time
description: Validates against the current day
icon: '
  <path stroke="none" d="M9.611 20.725v-3.738h3.675v-.99H9.61v-2.945h4.004v-.992H8.5v8.665h1.112zm5.356 0h1.099v-4.133c0-.9.369-1.636 1.549-1.636.203 0 .419.007.534.025v-.997a2.924 2.924 0 00-.413-.032c-.945 0-1.447.52-1.644.921h-.033v-.819h-1.092v6.67zm4.559-8.276a.69.69 0 00.732.691.699.699 0 00.695-.695.699.699 0 00-.695-.696l-.034.001h-.006a.695.695 0 00-.692.692v.007zm.152 8.276h1.092v-6.67h-1.092v6.67z"/>
  <path stroke="none" d="M7.688 2c.445 0 .812.367.812.813v.812h13v-.813c0-.445.367-.812.813-.812.445 0 .812.367.812.813v.812h1.625A3.265 3.265 0 0128 6.875V24.75A3.265 3.265 0 0124.75 28H5.25A3.265 3.265 0 012 24.75V6.875a3.265 3.265 0 013.25-3.25h1.625v-.813c0-.445.367-.812.813-.812zM3.625 8.5v16.25c0 .891.734 1.625 1.625 1.625h19.5c.891 0 1.625-.734 1.625-1.625V8.5H3.625z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The Day Access Rule evaluates whether the current day matches one of the selected days.

## Settings

{% image %}
![Day Access Rule](/assets/ytp/access/rule-day.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The days that the current day must match, at least one, for the condition to be considered valid. Timezone from Site configuration is automatically applied. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
