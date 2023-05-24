---
title: Data Action
description: Add or alter submission data
icon: '
  <path fill="none" stroke-width="2" d="M28.992 15.341v13.651H1.008V1.008h13.651"/>
  <path stroke="none" d="M18.7 9.6 27.5.9l1.6 1.6-8.8 8.7-1.6 0 0-1.6Z"/>
  <path fill="none" stroke-width="2" d="M6 11h8"/>
  <path fill="none" stroke-width="2" d="M6 17 h18"/>
  <path fill="none" stroke-width="2" d="M6 23 h18"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Data Action** adds or alters the submission data. Use it to:

- Duplicate a submitted date with a custom format for consequent actions use.
- Add context information to the Submission, e.g. the `Request -> Timestamp` (current date & time) or IP.
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

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Data action and input data entries as required.
