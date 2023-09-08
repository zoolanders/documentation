---
title: Email Action
description: Send an email with a dynamic workflow
icon: '
  <path fill="none" stroke-width="2" d="M27 5.087 9.107 18.338l.04 6.575 3.868-4.295 6.31 3.664L27 5.087 3 14.756l6.107 3.582"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Email Action** sends preset emails with support for [Dynamic Workflow](../../dynamic) and [Attachments](#attachments). Use it to send a *Thank You* email to the submitter, a transactional email to the site owner, etc.

---

## Settings

{% image %}
![Email Action Settings](/assets/ytp/forms/action-email-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **Body** | The main content of the email. | &#x2713; | &#x2713; | &#x2713; |
| **Subject** | The subject of the email. | &#x2713; | &#x2713; | &#x2713; |
| **Recipients** | The list of addresses to which the email will be sent, separated by a comma. | &#x2713; | &#x2713; | &#x2713; |
| **From Name/Email** | The name and email address of the email sender, defaults to the site configuration one. | &#x2713; | &#x2713; |
| **Reply To** | The list of addresses to which the recipient will be replying, separated by a comma. | &#x2713; | &#x2713; |
| **CCs** | The list of addresses to which the email will be sent as a Carbon Copy, separated by a comma. | &#x2713; | &#x2713; |
| **BCCs** | The list of addresses to which the email will be sent as a Blind Carbon Copy, separated by a comma. | &#x2713; | &#x2713; |
| **Send as HTML** | Should the email content be sent as HTML instead of plain text. |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Content

The main content of the email is set in the Body setting where [Data Placeholders](../../dynamic#data-placeholders) are supported and recommended to display data submitted by the form.

{% callout type="warning" %}
At the moment there are no templates or quick actions to create this content automatically for you, it's a manual process.
{% /callout %}

---

## Attachments

Attachments can be set as **static**, a file from the local server, or as **dynamic**, a file submitted by the user. Each dynamic entry is a reference to a Form Area [Upload Field](../../fields/upload).

{% image %}
![Email Action Attachments](/assets/ytp/forms/action-email-attachments.webp)
{% /image %}

{% callout type="warning" title="Submitted Attachments" %}
When a file is submitted by the user, the [Data Placeholder](../dynamic#data-placeholders)  of the uploaded file holds just the name of the file, if you would like to send that file within the email must be set as a Dynamic Attachment instead.
{% /callout %}

---

## Integration

1. [Create](../../integration) a Form Area and access it Settings Panel.
1. Add an Email action and populate the required settings *Subject* and *Body*.
