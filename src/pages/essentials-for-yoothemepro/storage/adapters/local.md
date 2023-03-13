---
title: Local Storage Adapter
description: A storage adapter for the local server
icon: '
  <path d="M14.998 28.007c-7.133 0-13.002-5.869-13.002-13.002 0-7.132 5.87-13.002 13.002-13.002C22.13 2.003 28 7.873 28 15.005c-.008 7.13-5.872 12.995-13.002 13.002Zm0-24.12c-6.1 0-11.118 5.02-11.118 11.118 0 6.1 5.019 11.118 11.118 11.118 6.1 0 11.118-5.018 11.118-11.118-.007-6.096-5.022-11.11-11.118-11.117Z"/>
  <path d="M14.998 19.716c-2.585 0-4.71-2.126-4.71-4.71 0-2.585 2.125-4.711 4.71-4.711 2.584 0 4.71 2.126 4.71 4.71-.002 2.583-2.127 4.708-4.71 4.711Zm0-7.537a2.84 2.84 0 0 0-2.827 2.826 2.84 2.84 0 0 0 2.827 2.827 2.84 2.84 0 0 0 2.826-2.827 2.857 2.857 0 0 0-2.826-2.826Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Local Storage Adapter** stores files in a local folder, inside or outside the site's root directory.

{% image %}
![Local Storage Adapter](/assets/ytp/storage/adapter-local.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | A name to identify this storage. |
| **Root** | The path that will be used as the storage root, e.g. `layouts` as a site relative path or `/layouts` as a server absolute. |
| **Write Permission** | Wether the storage will have Write in addition to Read permission. |