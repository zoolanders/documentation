---
name: IP Address
title: IP Address Access Rule
collection: Device
description: Validates against the IP Address
icon: '
  <path stroke="none" d="M6.615 15a8.925 8.925 0 01-.282-2.167c.005-.73.1-1.458.282-2.166h3.662a17.823 17.823 0 00-.152 2.166c.007.725.057 1.448.152 2.167h2.188a15.958 15.958 0 01-.173-2.167c.008-.725.065-1.449.173-2.166h5.07c.108.717.165 1.441.173 2.166-.008.726-.066 1.45-.173 2.167h2.188c.095-.719.145-1.442.152-2.167a17.823 17.823 0 00-.152-2.166h3.662c.182.708.277 1.435.282 2.166A8.925 8.925 0 0123.385 15l2.448 1.083v-3.25C25.833 6.89 20.943 2 15 2 9.057 2 4.167 6.89 4.167 12.833v3.25L6.615 15zm15.882-6.5H19.3a16.953 16.953 0 00-1.495-3.857 8.703 8.703 0 014.69 3.857zM15 4.21a15.27 15.27 0 012.07 4.29h-4.14A15.27 15.27 0 0115 4.21zm-2.806.433A16.953 16.953 0 0010.7 8.5H7.503a8.657 8.657 0 014.691-3.857z"/>
  <path stroke="none" d="M24.75 17.167v8.666H5.25v-8.666h19.5m0-2.167H5.25a2.177 2.177 0 00-2.167 2.167v8.666c0 1.19.978 2.167 2.167 2.167h19.5a2.177 2.177 0 002.167-2.167v-8.666A2.177 2.177 0 0024.75 15z"/>
  <path stroke="none" d="M10.732 18.333h1.998v6.444h-1.998zM14.145 18.333h3.312c.72 0 1.26.17 1.62.513.36.342.54.837.54 1.467 0 .648-.198 1.16-.585 1.52-.396.37-.99.55-1.791.55h-1.098v2.394h-1.998v-6.444zm1.998 2.745h.495c.378 0 .648-.063.8-.198a.631.631 0 00.235-.513.72.72 0 00-.198-.513c-.135-.144-.387-.207-.765-.207h-.567v1.43z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The IP Address Access Rule evaluates whether the device ip address matches one of the specified patterns.

---

## Settings

{% image %}
![IP Address Access Rule](/assets/ytp/access/rule-ip-address.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The IP Address list with optional range that the device must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `127.0.0.1, 128.0-129.1`. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
