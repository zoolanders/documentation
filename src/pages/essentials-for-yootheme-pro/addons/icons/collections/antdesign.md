---
name: Ant Design
title: Ant Design Icon Collection
description: The abstract trees of the Ant Design SVG icons
url: https://github.com/ant-design/ant-design-icons
package: http://static.zoolanders.com/icons/antdesign_4.0.0.zip
release: February 28, 2020
license: MIT
icons: 638
version: 4.0.0
icon: '
    <path stroke="none" d="M28.563 6.771l-6.808 4.196-6.53-8.71a.28.28 0 00-.227-.112.28.28 0 00-.225.113l-6.527 8.71L1.434 6.77a.284.284 0 00-.428.278L3.68 27.366c.037.276.275.49.559.49h21.524a.56.56 0 00.556-.49L28.995 7.05a.286.286 0 00-.432-.278zm-4.41 18.69H5.844L3.96 11.137l4.891 3.013 6.15-8.204 6.148 8.204 4.891-3.013-1.886 14.326zM15 14.908a3.945 3.945 0 00-3.94 3.942 3.943 3.943 0 003.94 3.94 3.943 3.943 0 003.94-3.94A3.945 3.945 0 0015 14.907zm0 5.631a1.687 1.687 0 01-1.686-1.69A1.69 1.69 0 0115 17.159a1.69 1.69 0 010 3.38z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Ant Design Icon Collection](/assets/ytp/icons/collection-antdesign.webp)
{% /image %}
