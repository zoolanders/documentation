# Google Sheets Action

<div class="tm-resource-icon">
    <!--@include: ./assets/action-google-sheets.svg-->
</div>

The **Google Sheets Action** creates and deletes records from [Google Sheets](https://workspace.google.com/products/sheets/) spreadsheets. Use it to store data or log submissions.

## Create Record

Creates a spreadsheet record.

| Setting              | Description                                                                                                                                                                                | Required | Dynamic |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | :-----: |
| _Account_            | The Google account used to connect to Google Drive via OAuth.                                                                                                                              | &#x2713; |
| _Spreadsheet_        | The Google Drive Spreadsheet to which to connect.                                                                                                                                          | &#x2713; |
| _Sheet_              | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet.                                                                                                         |
| _Value Input Option_ | Defines how the data will be interpreted when saved to the spreadsheet. _Raw_, the values will be stored as-is, or _User Entered_, the values will be parsed as if were typed into the UI. |

<!--@include: ./_partials/common-action-settings.md-->

<!--@include: ./_partials/common-action-content-mapping.md-->

## Delete Record

Deletes a spreadsheet record.

| Setting       | Description                                                                        | Required | Dynamic  |
| ------------- | ---------------------------------------------------------------------------------- | :------: | :------: |
| _Account_     | The Google account used to connect to Google Drive via OAuth.                      | &#x2713; |
| _Spreadsheet_ | The Google Drive Spreadsheet to which to connect.                                  | &#x2713; |
| _Sheet_       | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet. |
| _Column_      | The column that will identify the record to be deleted.                            | &#x2713; |
| _Value_       | The value that will identify the record to be deleted.                             | &#x2713; | &#x2713; |

<!--@include: ./_partials/common-action-settings.md-->
