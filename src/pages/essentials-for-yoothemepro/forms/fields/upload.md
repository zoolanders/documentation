---
title: Upload Field Element
description: A one-line file upload form control
preset: /assets/ytp/presets/FormArea-Upload.json
icon: '
  <path fill="none" stroke-width="2" d="M2 7.5h26v15H2z"/>
  <path d="M11.42059 15.2841195l3.579405-3.579405 3.579405 3.579405" fill="none" stroke-width="1.43176"/>
  <path d="M14.284114 12.4205955h1.431762v7.874691h-1.431762z"/>
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
| **Allow multiple** | Defines if multiple files can be selected and uploaded simultaneously. |
| **Avoid collisions** | Defines if the uploaded filename should be renamed in the case of a name conflict with a prexisting file. The new name will be the original name appended with `_{n}`, being `n` a sequential number. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-field-common-settings.md" /%}
{% /details %}

---

### Display

{% image %}
![Upload Display](/assets/ytp/forms/fields/upload-display.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Display** | Defines the combination of HTML elements to show, `Button & Input`, `Button`, `Link` or `Native` . |
| **Text** | The text for the button or link, if those are displayed. |

---

### Upload Input

{% image %}
![Upload Input](/assets/ytp/forms/fields/upload-input.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Icon** | The name of the Icon that will be displayed inside the input field. |
| **Icon Position** | The side of the field where the icon will be positioned, `left` or `right`. |

---

### Upload Button

{% image %}
![Upload Button](/assets/ytp/forms/fields/upload-button.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Full Width** | Defines if the button will occupy the full width of its parent. |
| **Icon** | The name of the Icon that will be displayed inside the input field. |
| **Icon Position** | The side of the button where the icon will be positioned, `left` or `right`. |

---

## Validation

It inherits common validation with the following specifics:

| Validation | Description | Dynamic | Browser Side | Server Side |
| ---------- | ----------- | :-----: | :----------: | :---------: |
| **Mime Types** | The list of allowed mime types that the file must constrain to. | &#x2713; | &#x2713; | &#x2713; |
| **Extensions** | The list of allowed file extensions that the file must constrain to. | &#x2713; | &#x2713; | &#x2713; |
| **Min File Size** | The minimum size that the file must constrain to, `greater than` or `equal to`, using any standard size unit `B`, `KB`, `MB`, `GB`, `TB`, `PB`, `EB`, `ZB`, or `YB`.  | &#x2713; | | &#x2713; |
| **Max File Size** | The maximum size that the file must constrain to, `lower than` or `equal to`, using the same size units as Min File Size. | &#x2713; | | &#x2713; |

{% details summary="Common Validation" %}
    {% partial file="ytp-formarea-field-common-validation.md" /%}
{% /details %}

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a Upload Element from the Form Essentials group.
1. Access the element settings and input a Control Name.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
