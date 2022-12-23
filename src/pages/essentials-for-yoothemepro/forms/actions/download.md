---
title: Download Action
description: Trigger a file download
icon: '
  <path d="m5.86 13.739 1.378-1.379 6.462 6.463-.029-16.82h1.95l.03 16.82 6.46-6.463 1.38 1.379-8.816 8.816-8.815-8.816ZM2.997 26.202l.037 1.8h24.002l-.036-1.8H2.997Z" fill-rule="nonzero"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Download Action** triggers the download of the specified file. Use it to automatically start the download of a file after a successful submission.

---

## Settings

{% image %}
![Download Action Settings](/assets/ytp/forms/action-download-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **File** | The path to the file which download to trigger. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Download action and set a file in the settings.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
