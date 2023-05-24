---
title: Redirect Action
description: Redirect the browser to a custom URL
icon: '
  <path fill="none" stroke-width="2" stroke-linecap="square" d="M9.856 3.977h14.697l3.788 2.927-3.787 2.952L8.39 9.855V3.974m7.345 11.761H5.446l-3.757 2.894 3.757 2.984h11.763v-5.876m-2.944 13.225v-7.349m0-5.878V9.856m0-5.879V1.048"/>
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
| **New Window** | Should the redirection happen in a new window instead. |
| **Timeout** | The seconds to wait before triggering the redirect. |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a Redirect action and set the URL in the *Redirect To* field.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
