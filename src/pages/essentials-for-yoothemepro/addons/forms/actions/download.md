---
title: Download Action
description: Trigger a file download
icon: '
  <path fill="none" stroke-width="2" d="M 1 21 v 8 h 28 v -8"/>
  <path fill="none" stroke-width="2" d="M9.455 13.879 15 19.424l5.545-5.545"/>
  <path fill="none" stroke-width="2" d="M 15 19 V 0"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Download Action** triggers the download of the specified file. Use it to automatically start the download of a file after successful submission.

---

## Settings

{% image %}
![Download Action Settings](/assets/ytp/forms/action-download-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **File** | The path to the file which download to trigger. | &#x2713; | &#x2713; | &#x2713; |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Download action and set a file in the settings.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
