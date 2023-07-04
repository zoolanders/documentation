---
name: Ionicons
title: Ionicons Icon Collection
description: Beautifully crafted open source icons built by the Ionic Framework team.
package: http://static.zoolanders.com/icons/ionicons_5.5.1.zip
url: https://ionicons.com
release: March 23, 2021
license: MIT
groups:
  - outline
  - filled
  - sharp
  - logo
version: 5.5.1
icons: 1332
icon: '
    <path stroke="none" d="M15 4.513C9.208 4.513 4.513 9.208 4.513 15S9.208 25.487 15 25.487 25.487 20.792 25.487 15c0-.773-.083-1.525-.241-2.248l2.459-.537c.196.898.3 1.83.3 2.785 0 7.182-5.823 13.004-13.005 13.004S1.996 22.182 1.996 15C1.996 7.818 7.818 1.996 15 1.996c3.182 0 6.1 1.144 8.36 3.043l-1.619 1.927A10.438 10.438 0 0015 4.513z"/>
    <path stroke="none" d="M24.229 6.19a1.259 1.259 0 100 2.519 1.259 1.259 0 000-2.518zm-3.776 1.26a3.776 3.776 0 117.552 0 3.776 3.776 0 01-7.552 0z"/>
    <circle stroke="none" cx="16" cy="16" r="6" transform="translate(1.576 1.576) scale(.83897)"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Ionicons Icon Collection](/assets/ytp/icons/collection-ionicons.webp)
{% /image %}
