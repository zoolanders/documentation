## Save to Google Sheet Action {#save-google-sheet}

<div class="tm-resource-icon">
    <!--@include: ../assets/action-save-google-sheet.svg-->
</div>

The **Save to Google Sheet Action** stores each submission data as a new record in the specified Google Drive Spreadsheet. Use it to store data or log submissions.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Google account used to connect to Google Drive via OAuth. | &#x2713; |
| *Spreadsheet* | The Google Drive Spreadsheet to which to connect. | &#x2713; |
| *Sheet* | The Spreadsheet Sheet to use as the data destination, defaults to the first sheet. |
| *Value Input Option* | Defines how the data will be interpreted when saved to the spreadsheet. _Raw_, the values will be stored as-is, or _User Entered_, the values will be parsed as if were typed into the UI. |
<!--@include: ./common-action-settings.md-->

<!--@include: ./common-action-content-mapping.md-->