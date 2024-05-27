---
title: CSV
description: Save data to a CSV or TSV file
---

<!--@include: ./_partials/intro.md-->

The **SaveToCSV Action** saves each submission data as a new record in the specified local CSV or TSV file. Use it to store data or log submissions.

::: tip Pre-formatted CSV File
To use the SaveToCSV action, you must provide a pre-existing and pre-formatted CSV file. The action won't create or format the file by itself. The CSV file can be as basic as a list of column headers separated by commas set in the very first line, as for example `Name,Comment,Date`.
:::

## Settings

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **File** | The path to the pre-existing and pre-formatted file where the data will be appended. | &#x2713; |
| **Delimeter** | The character used to separate columns data, defaults to a comma (`,`). |
| **Enclosure** | The character used to enclose columns data, defaults to a double-quote (`"`). |

::: details Common Settings
<!--@include: ./_partials/common-settings.md-->
:::

## Content Mapping

Once a CSV file has been chose, a list of fields will be loaded for each column of the file. By default, the columns are disabled, and no content is saved, resulting in a blank row being appended. Therefore, it is essential to enable all columns that should contain data and set a static or dynamic value in their configuration panel.

![SaveTo Action Mapping](./assets/action-saveto-mapping.webp)

The first icon from the right toggles the column configuration as `enabled` or `disabled`. A disabled column will be greyed out and it content will result in an empty string.

The second icon from the right indicates wheter the column has a content set or is empty.
