## Google Sheets Action {#google-sheets}

<div class="tm-resource-icon">
    <!--@include: ../assets/action-google-sheets.svg-->
</div>

The **Google Sheets Action** creates and deletes records from [Google Sheets](https://workspace.google.com/products/sheets/) spreadsheets. Use it to store data or log submissions.

### Create Record {#google-sheets-record-upsert}

Creates a spreadsheet record.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Google account used to connect to Google Drive via OAuth. | &#x2713; |
| *Spreadsheet* | The Google Drive Spreadsheet to which to connect. | &#x2713; |
| *Sheet* | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet. |
| *Value Input Option* | Defines how the data will be interpreted when saved to the spreadsheet. _Raw_, the values will be stored as-is, or _User Entered_, the values will be parsed as if were typed into the UI. |
<!--@include: ./common-action-settings.md-->

<!--@include: ./common-action-content-mapping.md-->

### Delete Record {#google-sheets-record-delete}

Deletes a spreadsheet record.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Google account used to connect to Google Drive via OAuth. | &#x2713; |
| *Spreadsheet* | The Google Drive Spreadsheet to which to connect. | &#x2713; |
| *Sheet* | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet. |
| *Column* | The column that will identify the record to be deleted. | &#x2713; |
| *Value* | The value that will identify the record to be deleted. | &#x2713; | &#x2713; |
<!--@include: ./common-action-settings.md-->
