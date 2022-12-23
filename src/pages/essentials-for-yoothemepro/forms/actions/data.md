---
title: Data Action
description: Add or alter submission data
icon: '
  <path d="M15 2C9 2 4.475 4.044 4.475 6.755V23.24c0 2.71 4.525 4.758 10.525 4.758s10.525-2.042 10.525-4.758V6.754C25.525 4.043 21 2 15 2zm9.225 15.745c0 1.634-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459V14.61c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zm0-5.496c0 1.634-3.788 3.46-9.225 3.46-5.437 0-9.225-1.82-9.225-3.46V9.114c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zM15 3.3c5.437 0 9.225 1.82 9.225 3.459 0 1.64-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459C5.775 5.119 9.563 3.3 15 3.3zm0 23.394c-5.437 0-9.225-1.82-9.225-3.458V20.1c1.761 1.453 5.15 2.397 9.225 2.397 4.074 0 7.47-.944 9.225-2.397v3.135c0 1.639-3.788 3.458-9.225 3.458z" fill-rule="nonzero" stroke-width=".300263"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Data Action** adds or alters the submission data. Use it to:

- Duplicate a submitted date with a custom format for consequent actions use.
- Add context information to the Submission, e.g. the [Request](essentials-for-yoothemepro/sources/source/request) Timestamp (current date & time) or IP.
- Add sensitive data without the need to expose it in a hidden input.

{% callout type="warning" title="Order is important" %}
Notice that this action must be executed before any other action relying on the altered data.
{% /callout %}

---

## Settings

{% image %}
![Data Action Settings](/assets/ytp/forms/action-data-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **Data** | The list of data entries to add to the submission.  | | | &#x2713; |
| **Data.Name** | The name or key for the data entry, if data already exists it value will be overwritten. | | | &#x2713; |
| **Data.Value** | The value for the data entry. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Data action and input data entries as required.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
