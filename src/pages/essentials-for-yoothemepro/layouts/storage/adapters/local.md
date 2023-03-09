---
title: Local Storage
description: Store your layouts in local folder. It can be inside or outside your site's root directory.
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Local Storage** allows you to prepare an existing folder as a dedicated storage.
The folder can be either relative to your site's root directory, like your `images` folder or a custom folder dedicated to your libraries contents, or an absolute directory. In this case you need to set the full path from the root directory, for example `/home/user/site/layouts`.

The folder needs to be already present and to be readable and writable by the php user. That usually means in a folder within your user's home directory.

In case you're using a folder within your site's folder, remember that the **files are public** and expose to those who know the folder and its contents naming, unless you [explicitly deny access to it](https://stackoverflow.com/questions/9507645/htaccess-deny-from-all).

---

## Settings

{% image %}
![Local Storage Settings](/assets/ytp/layouts/storage-local.webp)
{% /image %}

| Setting  | Description | Required |
|----------| ----------- | :------: |
| **Name** | A name to identify this storage. | &#x2713; |
| **Root** | The path to the folder. If it starts with `/` it's considered to be absolute, otherwise it's relative to the site's root directory. | &#x2713; |

---

## Integration

1.
1.
