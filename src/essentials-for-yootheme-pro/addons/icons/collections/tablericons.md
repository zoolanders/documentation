---
name: Tabler Icons
title: Tabler Icons Icon Collection
url: https://tabler-icons.io
package: http://static.zoolanders.com/icons/tablericons_1.41.1.zip
description: A set of over 1250 high-quality SVG icons designed on a 24x24 grid and a 2px
  stroke.
release: April 27, 2021
license: MIT
version: 1.41.1
icons: 1298
icon: '
    <path stroke="none" d="M7.776 2.586c4.789-.77 9.66-.77 14.448 0a7.178 7.178 0 015.195 5.196c.771 4.789.771 9.659 0 14.448a7.178 7.178 0 01-5.195 5.195c-4.789.77-9.66.77-14.448 0A7.178 7.178 0 012.58 22.23c-.771-4.79-.771-9.66 0-14.448a7.178 7.178 0 015.195-5.196zm8.635 8.597l-6.348.738-1.88 7.26a2.057 2.057 0 00.275 1.638l4.26-3.973c-.354-.69-.124-1.518.546-1.96a1.775 1.775 0 012.163.172c.58.541.658 1.393.184 2.017-.474.625-1.362.84-2.102.51l-4.26 3.977c.527.303 1.16.399 1.762.267l7.785-1.753.791-5.92-3.176-2.973zm1.337-3.823l-1.219 2.021 4.857 4.86 2.024-1.213-5.662-5.668z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Tabler Icons Icon Collection](/assets/ytp/icons/collection-tablericons.webp)
{% /image %}
