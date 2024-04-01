---
title: Google Sheet
description: Save data to a Google Spreadsheet
---

# {{ $frontmatter.title }} Action

{{ $frontmatter.description }}.

The **SaveToGoogleSheet Action** stores each submission data as a new record in the specified Google Drive Spreadsheet. Use it to store data or log submissions.

## Settings

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Account** | The Google account used to connect to Google Drive via OAuth. | &#x2713; |
| **Spreadsheet** | The Google Drive Spreadsheet to which to connect. | &#x2713; |
| **Sheet** | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet. |
| **Value Input Option** | Defines how the data will be interpreted when saved to the spreadsheet. `Raw`, the values will be stored as-is, or `User Entered`, the values will be parsed as if were typed into the UI. |

## Content Mapping

Once the spreadsheet has been chosen, its columns will appear in the Content field ready to be mapped, being the column configuration pre-established by the sheet's first-row schema. The mapping will determine what value will be saved at what column of the record that is being saved or updated.

![SaveTo Action Mapping](./assets/action-saveto-mapping.webp)

Not all columns require a value, in fact, mapping is disabled by default and must be enabled for each column independently. Once enabled the value can be inputted manually or dynamically with the use of the [Dynamic Workflow](../dynamic).
