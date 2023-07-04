---
name: Remix Icon
title: Remix Icon Icon Collection
description: A set of open-source neutral-style system symbols for designers and developers
package: http://static.zoolanders.com/icons/remixicon_2.5.0.zip
url: https://remixicon.com
version: 2.5.0
icons: 2271
release: May 23, 2020
license: Apache
icon: '
  <g transform="translate(2.463 1.999) scale(.46432)" stroke-linejoin="round" stroke="none">
    <path d="M32.665 4.01A15.35 15.35 0 0 0 32 8.52C32 15.732 38.268 22 46.519 22c2.127 0 4.172-.545 5.998-1.499.316 1.45.483 2.955.483 4.499 0 11.598-9.402 21-21 21v10H0V4h32c.222 0 .444.003.665.01z"/>
    <path d="m0 4 52 52H0V4z"/>
    <circle cx="46" cy="8" r="8"/>
  </g>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Remix Icon Icon Collection](/assets/ytp/icons/collection-remixicon.webp)
{% /image %}
