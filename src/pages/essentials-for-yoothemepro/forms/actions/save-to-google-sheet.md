---
title: SaveToGoogleSheet Action
description: Save data to a Google Spreadsheet
icon: '
    <path d="M7.687 2c4.328-.011 1.71-.023 8.94 0 .727.002.727 1.623 0 1.625-7.23.023-4.612.011-8.94 0a.819.819 0 00-.813.817v21.121c0 .447.366.813.813.813h14.626a.815.815 0 00.813-.813s-.014-15.412 0-15.439c.358-.695 1.191-.686 1.624 0 .011.018 0 15.44 0 15.44A2.438 2.438 0 0122.313 28H7.687a2.438 2.438 0 01-2.437-2.437V4.442A2.446 2.446 0 017.687 2z" stroke="none"/>
    <path d="M20.215 13.095H9.785a.87.87 0 00-.869.87v10.429c0 .48.39.869.87.869h10.429c.48 0 .869-.39.869-.87V13.965a.87.87 0 00-.87-.869zm-9.56 5.215h3.476v1.738h-3.477V18.31zm5.214 0h3.477v1.738h-3.477V18.31zm3.477-1.738h-3.477v-1.739h3.477v1.739zm-5.215-1.739v1.739h-3.477v-1.739h3.477zm-3.477 6.953h3.477v1.739h-3.477v-1.739zm5.215 1.739v-1.739h3.477v1.739h-3.477z" stroke="none" fill-rule="nonzero"/>
    <g>
        <path d="M24.931 8.478l1.51-2.156L23.246.888H20.37l-3.194 5.434 1.51 2.156h6.245zm-.282-.542h-5.406l.828-1.355h5.527l-.949 1.355zm-1.404-1.897h-2.843l1.407-2.306 1.436 2.306zm2.4 0h-1.761l-2.87-4.609h1.922l2.709 4.609zm-5.113-4.356l.956 1.535-2.712 4.444-.956-1.365 2.712-4.614z" fill-rule="nonzero" stroke-width=".2999321999999999"/>
    </g>
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
| **Sheet** | The Spreadsheet Sheet which to use as data destination, defaults to the first sheet. |
| **Value Input Option** | Defines how the data will be interpreted when saved to the spreadsheet. `Raw`, the values will be stored as-is, or `User Entered`, the values will be parsed as if were typed into the UI. |

{% details summary="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Mapping

Once the spreadsheet has been chosen it columns will appear in the Content field ready to be mapped, being the column configuration pre-established by the sheet first row schema. The mapping will determine what value will be saved at what column of the record being saved or updated.

{% image %}
![SaveTo Action Mapping](/assets/ytp/forms/action-saveto-mapping.webp)
{% /image %}

Not all columns requires a value, in fact, mapping is disabled by default and must be enabled for each column independently. Once enabled the value can be inputed manually or dynamically with the use of the [Dynamic Workflow](../dynamic).

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | The value that will be mapped to the column. | &#x2713; |

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a SaveToGoogleSheett action and fulfill the required settings.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
