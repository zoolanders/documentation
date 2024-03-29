---
name: Heroicons
title: Heroicons Icon Collection
package: http://static.zoolanders.com/icons/heroicons_1.0.0.zip
url: https://heroicons.com
description: Beautiful hand-crafted icons, by the makers of Tailwind CSS.
release: March 30, 2021
license: MIT
version: 1.0.0
icons: 452
icon: '
    <path fill="none" stroke-width="2.7" stroke-linejoin="round" d="M16 4.542a23.241 23.241 0 0013.713 4.83c.189 1.083.287 2.198.287 3.338 0 8.825-5.915 16.274-14 18.589C7.915 28.984 2 21.535 2 12.71c0-1.14.098-2.256.287-3.34A23.238 23.238 0 0016 4.543v-.001z" transform="matrix(.893 0 0 .89582 .712 -1.054)"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Heroicons Icon Collection](/assets/ytp/icons/collection-Heroicons.webp)
{% /image %}
