---
title: Redirect Action
description: Redirect the browser to a custom URL
icon: '
  <path d="M15.672 28.003h-2.008v-3.93H2.997V13.818l22.178.004 3.83 5.123-3.834 5.128h-9.499v3.93Zm10.853-9.058-2.387-3.143H4.996v6.267h19.16l2.37-3.124Z" fill-rule="nonzero"/>
  <path d="M13.665 13.929h2.007v-1.67h11.327V2.002L4.82 2.007.991 7.13l3.834 5.128h8.842l-.002 1.67ZM3.47 7.13l2.388-3.143h19.14v6.267H5.842L3.47 7.13Z" fill-rule="nonzero"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Redirect Action** redirects the browser to a specified URL, with an optional message that will be displayed using the Joomla / WordPress core message display system.

---

## Settings

{% image %}
![Redirect Action Settings](/assets/ytp/forms/action-redirect-settings.webp)
{% /image %}

| Setting | Description | Placeholder | Dynamic | Required |
| ------- | ----------- | :---------: | :-----: | :------: |
| **Redirect To** | The URL where to redirect the browser to. | &#x2713; | &#x2713; | &#x2713; |
| **New Window** | Defines if the redirection should happen in a new window instead. |
| **Timeout** | The seconds to wait before triggering the redirect. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Redirect action and set the URL in the *Redirect To* field.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
