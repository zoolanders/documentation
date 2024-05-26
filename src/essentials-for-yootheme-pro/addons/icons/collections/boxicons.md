---
name: Boxicons
title: Boxicons Icon Collection
url: https://boxicons.com
package: http://static.zoolanders.com/icons/boxicons_2.0.7.zip
description: High-Quality Web Icons Set
release: October 23, 2020
license: MIT
version: 2.0.7
icons: 1500
icon: '
    <path stroke="none" d="M3.224 8.452a3.522 3.522 0 00-.536 1.876v9.053c0 1.448.724 2.656 2.051 3.38l9.174 5.07c.845.483 1.931-.12 1.931-1.086V14.682l-12.62-6.23z"/>
    <path stroke="none" d="M26.588 6.948l-9.416-4.587a4.122 4.122 0 00-3.38 0L4.86 6.948c-.774.423-1.383 1.01-1.757 1.714.038-.071.078-.141.121-.21l12.62 6.23v-.008l10.744-5.432a1.27 1.27 0 000-2.294z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

![Boxicons Icon Collection](/assets/ytp/icons/collection-boxicons.webp)
