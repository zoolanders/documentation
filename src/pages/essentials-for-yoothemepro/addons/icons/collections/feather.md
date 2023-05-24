---
name: Feather
title: Feather Icon Collection
package: http://static.zoolanders.com/icons/feather_4.28.0.zip
url: https://feathericons.com
description: Simply beautiful open source icons.
release: April 5, 2020
license: MIT
version: 4.28.0
icons: 286
icon: '
    <path stroke-width="1.2" fill="none" stroke-linecap="round" stroke-linejoin="round" d="M25.148 15.3a7.395 7.395 0 002.165-5.227c0-4.055-3.337-7.392-7.392-7.392-1.96 0-3.842.78-5.228 2.165l-8.312 8.312v10.467h10.467l8.3-8.324zM19.927 10.08L2.687 27.32M21.774 18.7H11.307"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Feather Icon Collection](/assets/ytp/icons/collection-feather.webp)
{% /image %}

---

## Integration

Follow through to install the {% $markdoc.frontmatter.name %} collection as part of the Essentials Icons workflow.


1. Open the Icon Collections Manager
1. Add a new collection

Or go manually

{% quick-links %}
    {% quick-link title="Download" href=$markdoc.frontmatter.package description="foo" download="true" /%}
{% /quick-links %}
