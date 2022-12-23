---
title: Message Action
description: Show a message in a modal
icon: '
  <path d="M29.004 2.003v20.664H6.33L.996 28.003V2m4.582 18.668 21.426.002V3.988H3.002v19.264l2.576-2.585Z" fill-rule="nonzero"/>
  <path d="M13.667 11.153h2.666v2.667h-2.666v-2.667Zm-5.335 0H11v2.667H8.332v-2.667Zm10.669 0h2.667v2.667H19v-2.667Z" fill-rule="nonzero"/>
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
