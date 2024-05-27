---
title: Email
core: true
description: Send transactional emails
---

<!--@include: ./_partials/intro.md-->

The **Email Action** sends preset emails with support for [Dynamic Workflow](../../dynamic) and [Attachments](#attachments). Use it to send a *Thank You* email to the submitter, a transactional email to the site owner, etc.

## Settings

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

::: details Common Settings
<!--@include: ./_partials/common-settings.md-->
:::

## Content

The main content of the email is set in the Body setting where [Dynamic Workflow](../../dynamic) can be used to compose a template.

## Attachments

Attachments can be set as **static** file from the local server or as a **dynamic** file submitted by the user. Each dynamic entry is a reference to a Form Area [Upload Field](../../fields/upload).

::: warning Submitted Attachments
When a file is submitted by the user, the [Data Placeholder](../../dynamic#data-placeholders)  of the uploaded file holds just the name of the file, if you would like to send that file within the email must be set as a Dynamic Attachment instead.
:::
