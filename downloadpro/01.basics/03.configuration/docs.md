---
title: Configuration
taxonomy:
    category: docs
---

## Configuration View

DownloadPro inherits the Basic and Files [Configuration fields](/zoolanders/elements/fields#configuration) adding its own:

| Field       | Description |
| :---------- | :---------- |
| **Download Mode** | Allows choosing the download mode by **Direct** for direct file downloads, **Attachment** for providing the download as attachment and **Protected**, to protect the download against unauthorized access. |

## Assignment View

DownloadPro inherits the Basic, Filter and Separator [Assignment fields](/zoolanders/elements/fields#assignment) adding its own:

### Default layout: Default and ButtonLink sublayouts

| Field       | Description |
| :---------- | :---------- |
| **Download Name** | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| **New window** | If enabled the download will be processed in a new window. |

### Default layout: ImageLink sublayout

| Field       | Description |
| :---------- | :---------- |
| **Download Name** | A custom text for the Download button or link. Supported `{filename}` and `{title}` variables. |
| **New window** | If enabled the download will be processed in a new window. |
| **Set** | Select the style for the icons. The default set is stored in the element `tmpl/render/default/_sublayouts/_imagelink/sets/default` path. You can create your own style and store it in the `custom_elements` folder as described in the [customizations doc](/zoolanders/elements/customizations). |
