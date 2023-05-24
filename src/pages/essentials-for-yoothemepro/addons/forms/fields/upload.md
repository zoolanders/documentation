---
title: Upload Field Element
description: A one-line file upload form control
preset: /assets/ytp/presets/FormArea-Upload.json
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path fill="none" stroke-width="2" d="M11 15 15 11l4 4"/>
  <path fill="none" stroke-width="2" d="M15 11v9"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **Upload Element** displays a [\<input type="file"\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file) HTML element wrapped with a [UIkit Custom Control](https://getuikit.com/docs/form#custom-controls), use it to allow users uploading one or more files from their device.

![Upload Element](/assets/ytp/forms/fields/upload.webp)

---

## Settings

It inherits common settings with the following specifics:

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Upload to** | The server path where the file will be uploaded to. | &#x2713; |
| **Filename** | An optional filename to rename the uploaded file with. | &#x2713; |
| **Allow multiple** | Should be allowed to upload multiple files simultaneously. |
| **Avoid collisions** | Should the uploaded filename be renamed in the case of a name conflict with a pre-existing file. The new name will be the original name appended with `_{n}`, being `n` a sequential number. |

{% details title="Common Settings" %}
  {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

### Display

{% image %}
![Upload Display](/assets/ytp/forms/fields/upload-display.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Display** | The combination of HTML elements to show, `Button & Input`, `Button`, `Link`, or `Native`. |
| **Text** | The text for the button or link, if those are displayed. |

---

### Upload Input

{% image %}
![Upload Input](/assets/ytp/forms/fields/upload-input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Icon** | The name of the Icon that will be displayed inside the input field. |
| **Icon Alignment** | The side of the field where the icon will be aligned, `Left` or `Right`. |

---

### Upload Button

{% image %}
![Upload Button](/assets/ytp/forms/fields/upload-button.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Full Width** | Should the button occupy the full width of its parent. |
| **Icon** | The name of the Icon that will be displayed inside the input field. |
| **Icon Alignment** | The side of the button where the icon will be aligned, `Left` or `Right`. |

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Mime Types** | The comma-separated list of mime types that the uploaded files must constrain to, e.g. `image/png, video/*`. | &#x2713; | &#x2713; | &#x2713; |
| **Extensions** | The comma-separated list of file extensions that the uploaded files must constrain to, e.g. `png, jpg, gif`. | &#x2713; | &#x2713; | &#x2713; |
| **Min File Size** | The minimum size that the uploaded files must constrain to, `greater than` or `equal to`, using any standard size unit `B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, or `YB`.  | &#x2713; | | &#x2713; |
| **Max File Size** | The maximum size that the uploaded files must constrain to, `lower than` or `equal to`, using the same size units as Min File Size. | &#x2713; | | &#x2713; |

{% details title="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and create a Form Area.
1. Add an Upload Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

