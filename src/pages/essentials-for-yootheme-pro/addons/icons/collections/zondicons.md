---
name: Zondicons
title: Zondicons Icon Collection
package: http://static.zoolanders.com/icons/zondicons_1.0.0.zip
description: A set of icons with charming yet sophisticated personality designed by Steve
  Schoger.
release: July 12, 2017
license: CC
url: https://zondicons.com
version: 1.0.0
icons: 297
icon: '
    <path fill="none" stroke-width="2" d="M25.86 16.207a9.054 9.054 0 01-4.224 7.167L15 27.066l-6.636-3.692a9.054 9.054 0 01-4.223-7.167V6.554c4.078 0 7.843-1.351 10.859-3.62a17.938 17.938 0 0010.86 3.62v9.653z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Zondicons Icon Collection](/assets/ytp/icons/collection-zondicons.webp)
{% /image %}
