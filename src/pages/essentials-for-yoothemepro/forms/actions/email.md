---
title: Email Action
description: Send an email with dynamic workflow
icon: '
    <path d="M27 5.087 9.107 18.338l.04 6.575 3.868-4.295 6.31 3.664L27 5.087 3 14.756l6.107 3.582" fill="none" fill-rule="nonzero" stroke-width="2.03557"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Email Action** sends preset emails with support for [Dynamic Workflow](../dynamic) and [Attachments](#attachments). Use it to send a *Thank You* email to the submitter, a transactional email to the site owner, etc.

---

## Settings

{% image %}
![Email Action Settings](/assets/ytp/forms/action-email-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **Body** | The content for the email body. | &#x2713; | &#x2713; | &#x2713; |
| **Subject** | The content for the email subject. | &#x2713; | &#x2713; | &#x2713; |
| **From Name/Email** | The name and email address of the email sender, defaults to the site configuration one. | &#x2713; | &#x2713; |
| **Reply To** | The list of addresses to which the recipient will be replying to, separated by comma. | &#x2713; | &#x2713; |
| **Recipients** | The list of addresses to which the email will be sent to, separated by comma. | &#x2713; | &#x2713; |
| **CCs** | The list of addresses to which the email will be sent as a Carbon Copy, separated by comma. | &#x2713; | &#x2713; |
| **BCCs** | The list of addresses to which the email will be sent as a Blind Carbon Copy, separated by comma. | &#x2713; | &#x2713; |
| **Send as HTML** | Defines if the email content should be sent as HTML or plain text. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Attachments

Attachments can be set as **static**, a file from the local server, or as **dynamic**, a file submitted by the user. Each dynamic entry is a reference to a Form Area [Upload Field](../fields/upload).

{% image %}
![Email Action Attachments](/assets/ytp/forms/action-email-attachments.webp)
{% /image %}

{% callout type="warning" title="Submitted Attachments" %}
When a file is submitted by the user, the [Data Placeholder](../dynamic#data-placeholders)  of the uploaded file holds just the name of the file, if you would like to send that file within the email must be set as a Dynamic Attachment instead.
{% /callout %}

---

## Delivery Rate

When dealing with email we must distinguish between sending and delivery. While we can assure the email has been sent we cannot warranty it has been delivered, as that is beyond our control. Most of the time emails are not delivered because of server misconfiguration, but also because are simply discarded by the destination server.

To rise the delivery rate it is important to ensure the emails are being sent from a trusted source, which is only possible with an SMTP server or 3rd party service.

{% callout title="Delivery Test" %}
We recommend the free service from [Mailtrap](https://mailtrap.io/) which allows you to test if an email has been sent and give it a delivery punctuation. If you don't want to open an account feel free to reach out to our support and we will assist you using ours.
{% /callout %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add an Email action and populate the required settings *Subject* and *Body*.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
