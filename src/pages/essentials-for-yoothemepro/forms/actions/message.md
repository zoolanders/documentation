---
title: Message Action
description: Show a message in a modal
icon: '
  <path stroke-width="2" fill="none" d="m 29 1 v 22 h -22.3 l -5.7 5 v -27 z"/>
  <path d="M13.572 10.877h2.856v2.857h-2.856v-2.857Zm-5.714 0h2.857v2.857H7.858v-2.857Zm11.426 0h2.858v2.857h-2.858v-2.857Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Message Action** displays a custom message in a modal. Use it to show the submitter a *Thank You* message or additonal information.

---

## Settings

{% image %}
![Message Action Settings](/assets/ytp/forms/action-message-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **Message** | The content to display in the modal. | &#x2713; | &#x2713; | &#x2713; |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Message action and set the Content of the message.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
