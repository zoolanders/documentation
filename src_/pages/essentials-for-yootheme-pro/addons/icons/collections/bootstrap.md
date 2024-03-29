---
name: Bootstrap
title: Bootstrap Icon Collection
url: https://icons.getbootstrap.com
package: http://static.zoolanders.com/icons/bootstrap_1.4.1.zip
description: Official Bootstrap SVG icon collection
release: March 30, 2021
license: MIT
version: 1.4.1
icons: 1370
icon: '
    <path stroke="none" d="M10.225 21.502h5.648c2.932 0 4.694-1.476 4.694-3.895 0-1.792-1.237-3.114-3.095-3.307v-.16c1.353-.228 2.41-1.513 2.41-2.953 0-2.113-1.553-3.43-4.133-3.43h-5.524v13.745zm2.134-7.925V9.568h2.893c1.582 0 2.506.743 2.506 2.01 0 1.304-.982 2-2.867 2h-2.532zm0 6.116v-4.429h2.96c2.01 0 3.069.752 3.069 2.191 0 1.457-1.02 2.238-2.945 2.238H12.36z"/>
    <path stroke="none" d="M1.996 8.498c0-3.567 2.935-6.502 6.502-6.502h13.004c3.567 0 6.502 2.935 6.502 6.502v13.004c0 3.567-2.935 6.502-6.502 6.502H8.498c-3.567 0-6.502-2.935-6.502-6.502V8.498zm6.502-4.877c-2.675 0-4.877 2.202-4.877 4.877v13.004c0 2.675 2.202 4.877 4.877 4.877h13.004c2.675 0 4.877-2.202 4.877-4.877V8.498c0-2.675-2.202-4.877-4.877-4.877H8.498z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Bootstrap Icon Collection](/assets/ytp/icons/collection-bootstrap.webp)
{% /image %}
