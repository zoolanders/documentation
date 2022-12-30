---
title: SaveTo CSV Action
description: Save data to a CSV or TSV file
icon: '
  <path fill="none" stroke-width="2" d="M25.719 8.569v20.366H4.281V1.065h11.79"/>
  <path stroke="none" d="M18.76 24.041c.521-.146.907-.388 1.152-.729.245-.34.387-.817.423-1.43H18.76v-2.715h2.806v2.35c0 .414-.056.843-.164 1.294a2.63 2.63 0 0 1-.61 1.166c-.315.347-.703.619-1.135.798-.434.178-.733.267-.897.267v-1Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **SaveToCSV Action** saves each submission data as a new record in the specified local CSV or TSV file. Use it to store or log submissions.

---

## Settings

{% image %}
![SaveToCSV Action Settings](/assets/ytp/forms/action-savetocsv-settings.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **File** | The path to the file where the submission data will be added. | &#x2713; |
| **Delimeter / Enclosure** | The characters the file is formatted with, defaults to a comma (`,`) and double-quote (`"`). |
| **Content** | The [mapping configuration](#mapping) of the submission data to the file columns. | &#x2713; |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

---

## Mapping

Once the file has been chosen, its columns will appear in the Content field ready to be mapped, being the column configuration pre-established by the file schema. The mapping will determine what value will be saved at what column of the record that is being saved or updated.

{% image %}
![SaveTo Action Mapping](/assets/ytp/forms/action-saveto-mapping.webp)
{% /image %}

Not all columns require a value, in fact, mapping is disabled by default and must be enabled for each column independently. Once enabled, the value can be inputted manually or dynamically with the use of the [Dynamic Workflow](../dynamic).

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Value** | The value that will be mapped to the column. | &#x2713; |

---

## Integration

1. [Load or Create](../integration) a Form Area and access it Settings Panel.
1. Add a SaveToDatabase action and fulfill the required settings.

{% partial file="ytp-formarea-field-integration.md" variables={preset: $markdoc.frontmatter.preset} /%}
