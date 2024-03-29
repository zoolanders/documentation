---
name: Font Awesome
title: Font Awesome Icon Collection
groups:
  - regular
  - solid
  - brands
package: http://static.zoolanders.com/icons/fa6_6.0.0.zip
url: https://fontawesome.com
description: Icons and social logos by Font Awesome, the web's most popular icon set.
release: February 2, 2022
license: CC BY 4.0
version: 6.0.0
icons: 1748
icon: '
    <path stroke="none" d="M28.004 2.93v19.506c-3.663 1.309-4.78 1.858-6.937 1.858-3.647 0-5.028-1.858-8.668-1.858-1.196 0-2.125.21-2.972.476v-3.715c.847-.267 1.776-.476 2.972-.476 3.642 0 5.022 1.857 8.668 1.857 1.184 0 2.066-.174 3.222-.54V7.964c-1.156.366-2.038.54-3.222.54-3.647 0-5.028-1.857-8.668-1.857-2.949 0-4.348 1.195-6.688 1.666v17.84a1.857 1.857 0 1 1-3.715 0V3.807C1.996 2.833 2.828 2 3.8 2c.974 0 1.91.832 1.91 1.806v.787c2.34-.466 3.74-1.664 6.688-1.664 3.642 0 5.022 1.858 8.668 1.858 2.16 0 3.274-.55 6.937-1.858Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Font Awesome Icon Collection](/assets/ytp/icons/collection-fontawesome.webp)
{% /image %}
