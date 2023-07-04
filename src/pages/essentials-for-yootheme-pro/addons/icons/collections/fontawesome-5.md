---
name: Font Awesome 5
title: Font Awesome 5 Icon Collection
groups:
  - regular
  - solid
  - brands
package: http://static.zoolanders.com/icons/fontawesome_5.15.4.zip
url: https://fontawesome.com
description: Icons and social logos by Font Awesome, the web's most popular icon set.
release: August 8, 2021
license: CC BY 4.0
version: 5.15.4
icons: 1611
icon: '
    <path fill="none" stroke-width="2" d="M24.432 2.996H5.568a2.573 2.573 0 00-2.572 2.572v18.864a2.573 2.573 0 002.572 2.572h18.864a2.573 2.573 0 002.572-2.572V5.568a2.573 2.573 0 00-2.572-2.572z"/>
    <path stroke="none" d="M23.219 18.33c0 .267-.229.38-.495.495-1.066.457-2.208.876-3.426.876-1.713 0-2.512-1.066-4.568-1.066-1.485 0-3.045.533-4.301 1.104-.076.038-.153.038-.229.076v2.893c0 .795-.599 1.294-1.256 1.294a1.284 1.284 0 01-1.294-1.294V8.776A2.127 2.127 0 016.812 7.1c0-1.18.952-2.132 2.132-2.132 1.18 0 2.132.952 2.132 2.132 0 .685-.305 1.294-.838 1.675v1.18c.154-.051 2.185-1.066 4.264-1.066 2.426 0 3.63 1.028 4.72 1.028 1.446 0 3.045-1.028 3.426-1.028.304 0 .57.228.57.495v8.945z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Font Awesome Icon Collection](/assets/ytp/icons/collection-fontawesome-5.webp)
{% /image %}
