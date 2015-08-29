---
title: Layouts
taxonomy:
    category: docs
---

DownloadPro has several layouts which can be used right away, but make sure to check the [customizations](/zoolanders/elements/customizations) guide if your project requires some specific output.

## Default_default

Renders a current file download link.

| Field       | Description |
| :---------- | :---------- |
| **Download Name** | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| **New window** | If enabled the download will be processed in a new window. |

## Default_buttonlink

Renders a current file download button.

| Field       | Description |
| :---------- | :---------- |
| **Download Name** | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| **New window** | If enabled the download will be processed in a new window. |

## Default_imagelink

Renders an icon linking to the current file download. Each file has a different icon relative to it extension.

| Field       | Description |
| :---------- | :---------- |
| **Download Name** | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| **New window** | If enabled the download will be processed in a new window. |
| **Set** | Select the style for the icons. The default set is stored in the element `tmpl/render/default/_sublayouts/_imagelink/sets/default` path. You can create your own style and store it in the `custom_elements` folder as described in the [customizations doc](/zoolanders/elements/customizations). |

## Default_download_limit

Renders the current file download limit value.

## Default_filehits

Renders the current file amount of downloads value.

## Default_filesize

Renders the current file size value.

## Default_raw_link

Renders the current file raw link value.
