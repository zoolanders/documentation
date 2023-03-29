---
name: URL
title: URL Access Rule
collection: Site
description: Validates against the site's URL
icon: '
  <path stroke="none" d="M6.615 15a8.925 8.925 0 01-.282-2.167c.005-.73.1-1.458.282-2.166h3.662a17.823 17.823 0 00-.152 2.166c.007.725.057 1.448.152 2.167h2.188a15.958 15.958 0 01-.173-2.167c.008-.725.065-1.449.173-2.166h5.07c.108.717.165 1.441.173 2.166-.008.726-.066 1.45-.173 2.167h2.188c.095-.719.145-1.442.152-2.167a17.823 17.823 0 00-.152-2.166h3.662c.182.708.277 1.435.282 2.166A8.925 8.925 0 0123.385 15l2.448 1.083v-3.25C25.833 6.89 20.943 2 15 2 9.057 2 4.167 6.89 4.167 12.833v3.25L6.615 15zm15.882-6.5H19.3a16.953 16.953 0 00-1.495-3.857 8.703 8.703 0 014.69 3.857zM15 4.21a15.27 15.27 0 012.07 4.29h-4.14A15.27 15.27 0 0115 4.21zm-2.806.433A16.953 16.953 0 0010.7 8.5H7.503a8.657 8.657 0 014.691-3.857z"/>
  <path stroke="none" d="M24.75 17.167v8.666H5.25v-8.666h19.5m0-2.167H5.25a2.177 2.177 0 00-2.167 2.167v8.666c0 1.19.978 2.167 2.167 2.167h19.5a2.177 2.177 0 002.167-2.167v-8.666A2.177 2.177 0 0024.75 15z"/>
  <path stroke="none" d="M10.196 18.333h1.768v3.416c0 .336-.056.656-.16.96-.104.296-.272.56-.496.784a1.967 1.967 0 01-.712.48c-.344.128-.752.192-1.232.192-.28 0-.584-.024-.912-.064-.336-.04-.608-.112-.832-.232a2.15 2.15 0 01-.608-.488 1.929 1.929 0 01-.376-.664 3.63 3.63 0 01-.16-.968v-3.416h1.76v3.496c0 .312.088.56.264.736.176.176.416.264.72.264s.544-.088.72-.264c.168-.168.256-.416.256-.736v-3.496zM13.156 24.061v-5.728h2.952c.544 0 .96.048 1.256.144.288.088.52.264.696.52.176.256.264.56.264.928 0 .32-.064.592-.2.824-.136.232-.32.416-.56.56-.152.088-.36.168-.624.224.216.072.368.144.464.208.064.048.16.152.28.304.128.152.208.272.248.352l.856 1.664h-2l-.944-1.752c-.12-.224-.224-.368-.32-.44a.748.748 0 00-.432-.136h-.16v2.328h-1.776zm1.776-3.408h.752c.08 0 .232-.024.464-.08a.425.425 0 00.288-.176.548.548 0 00.112-.336.522.522 0 00-.176-.424c-.12-.096-.336-.144-.656-.144h-.784v1.16zM19.355 18.333h1.768v4.32h2.768v1.408h-4.536v-5.728z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The URL Access Rule evaluates whether the site URL matches one of the specified patterns.

---

## Settings

{% image %}
![URL Access Rule](/next/assets/ytp/access/rule-url.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Patterns** | The list of patterns that the Site URL must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `localhost, about/team`. | &#x2713; | &#x2713; |
| **Use RegExp** | Whether to enable [Regular Expressions](https://regex101.com) in the patterns. | | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}