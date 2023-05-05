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

{% callout title="Pre-formatted CSV File" %}
To use the SaveToCSV action, you must provide a pre-existing and pre-formatted CSV file. The action won't create or format the file by itself. The CSV file can be as basic as a list of column headers separated by commas set in the very first line, as for example `Name,Comment,Date`.
{% /callout %}

---

## How To Integrate

To use the SaveToCSV action, first load or create a Form Area and access its configuration panel. Then, add an instance of the SaveToCSV action and configure its settings.

{% image %}
![SaveToCSV Action Settings](/next/assets/ytp/forms/action-savetocsv-settings.webp)
{% /image %}

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **File** | The path to the pre-existing and pre-formatted file where the data will be appended. | &#x2713; |
| **Delimeter / Enclosure** | The characters used to format the file, defaults to a comma (`,`) and double-quote (`"`). |

{% details title="Common Settings" %}
    {% partial file="ytp-formarea-action-common-settings.md" /%}
{% /details %}

Once the file is set, a list of configurable panels will appear for each column in the Columns field. By default, the columns are disabled, and no content is saved, resulting in a blank row being appended. Therefore, it is essential to enable all columns that should contain data and set a static or dynamic value in their configuration panel.

{% image %}
![SaveTo Action Mapping](/next/assets/ytp/forms/action-saveto-mapping.webp)
{% /image %}

| Action/Status | Description |
| ------ | ----------- |
| **Toggle** | First icon from the right. Toggles the column configuration as `enabled` or `disabled`. A disabled column will be greyed out and it content will result in an empty string. |
| **Mapping Status** | Second icon from the right. Indicates wheter the column has a content set or is empty. |
