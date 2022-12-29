---
title: SaveTo GoogleSheet Action
description: Save data to a Google Spreadsheet
icon: '
  <path fill="none" stroke-width="2" d="M25 9v19l-20 0 0-26 11 0"/>
  <path stroke="none" d="m24.103 8.295 1.51-2.156L22.418.705h-2.876l-3.194 5.434 1.51 2.156h6.245Zm-.282-.542h-5.406l.828-1.355h5.527l-.949 1.355Zm-1.404-1.897h-2.843l1.407-2.306 1.436 2.306Zm2.4 0h-1.761l-2.87-4.609h1.922l2.709 4.609ZM19.704 1.5l.956 1.535-2.712 4.444-.956-1.365L19.704 1.5Z"/>
  <path stroke="none" d="M21.084 12.617H8.916v12.168h12.168V12.617Zm-10.43 5.215h3.477v1.738h-3.477v-1.738Zm5.215 0h3.477v1.738h-3.477v-1.738Zm3.477-1.738h-3.477v-1.739h3.477v1.739Zm-5.215-1.739v1.739h-3.477v-1.739h3.477Zm-3.477 6.953h3.477v1.739h-3.477v-1.739Zm5.215 1.739v-1.739h3.477v1.739h-3.477Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **SaveToGoogleSheet Action** stores each submission data as a new record in the specified Google Drive Spreadsheet. Use it to store or log submissions.

---

## Settings

{% image %}
![SaveToGoogleSheet Action Settings](/assets/ytp/forms/action-savetogsheet-settings.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Google account used to connect to Google Drive via oAuth. | &#x2713; |
| **Spreadsheet** | The Google Drive Spreadsheet to which to connect. | &#x2713; |
| **Sheet** | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet. |
| **Value Input Option** | Defines how the data will be interpreted when saved to the spreadsheet. `Raw`, the values will be stored as-is, or `User Entered`, the values will be parsed as if were typed into the UI. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Mapping

Once the spreadsheet has been chosen, its columns will appear in the Content field ready to be mapped, being the column configuration pre-established by the sheet's first-row schema. The mapping will determine what value will be saved at what column of the record that is being saved or updated.

{% image %}
![SaveTo Action Mapping](/assets/ytp/forms/action-saveto-mapping.webp)
{% /image %}

Not all columns require a value, in fact, mapping is disabled by default and must be enabled for each column independently. Once enabled the value can be inputted manually or dynamically with the use of the [Dynamic Workflow](../dynamic).

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | The value that will be mapped to the column. | &#x2713; |

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a SaveToGoogleSheett action and fulfill the required settings.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
