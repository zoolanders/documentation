---
name: Device
title: Device Access Rule
collection: Device
description: Validates against the device type
icon: '
  <path fill="none" stroke-width="2" d="M2.246 7.348c0-1.4 1.152-2.551 2.55-2.551h20.407c1.4 0 2.55 1.151 2.55 2.55v11.48c0 1.398-1.15 2.55-2.55 2.55H4.797c-1.4 0-2.55-1.152-2.55-2.55V7.346zM9.9 25.203H20.1"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Device Access Rule evaluates whether the browser agent matches one of the selected device types, `Mobile`, `Table`, or `Desktop`.

{% callout type="warning" title="Limited Detection" %}
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
{% /callout %}

---

## Settings

{% image %}
![Device Access Rule](/next/assets/ytp/access/rule-device.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The device types that the browser agent must match, at least one, for the condition to be considered valid. . | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
