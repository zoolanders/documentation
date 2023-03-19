---
name: Octicons
title: Octicons Icon Collection
url: https://github.com/primer/octicons
package: http://static.zoolanders.com/icons/octicons_13.0.0.zip
description: Set of SVG icons built by GitHub for GitHub.
release: April 7, 2021
license: MIT
version: 13.0.0
icons: 433
icon: '
    <path stroke="none" d="M15 1.999c-7.365 0-13.33 5.965-13.33 13.33 0 5.898 3.815 10.88 9.114 12.647.668.116.917-.284.917-.633 0-.317-.017-1.368-.017-2.483-3.349.615-4.215-.817-4.482-1.567-.15-.384-.8-1.566-1.366-1.883-.467-.25-1.133-.867-.016-.883 1.049-.017 1.8.967 2.049 1.367 1.2 2.017 3.116 1.449 3.883 1.1.115-.867.466-1.45.849-1.783-2.966-.333-6.065-1.483-6.065-6.582 0-1.449.517-2.65 1.366-3.583-.133-.333-.6-1.698.133-3.532 0 0 1.117-.35 3.666 1.366 1.066-.299 2.2-.45 3.332-.45 1.133 0 2.266.151 3.333.45 2.548-1.733 3.665-1.365 3.665-1.365.734 1.833.267 3.2.134 3.531.849.934 1.366 2.117 1.366 3.583 0 5.116-3.115 6.249-6.082 6.582.484.416.9 1.216.9 2.466 0 1.782-.017 3.215-.017 3.666 0 .35.25.766.916.633A13.38 13.38 0 0028.33 15.33c0-7.365-5.965-13.33-13.33-13.33z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A collection of {% code %}{% $markdoc.frontmatter.icons %}{% /code %} icons from {% elink href=$markdoc.frontmatter.url %}{% $markdoc.frontmatter.name %}{% /elink %} released on {% $markdoc.frontmatter.release %} under the {% code %}{% $markdoc.frontmatter.license %}{% /code %} license as version {% code %}{% $markdoc.frontmatter.version %}{% /code %}.

{% image %}
![Octicons Icon Collection](/assets/ytp/icons/collection-octicons.webp)
{% /image %}

---

## Integration

Follow through to install the {% $markdoc.frontmatter.name %} collection as part of the Essentials Icons workflow.


1. Open the Icon Collections Manager
1. Add a new collection

Or go manually

{% quick-links %}
    {% quick-link title="Download" href=$markdoc.frontmatter.package description="foo" download="true" /%}
{% /quick-links %}