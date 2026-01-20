# CSV Action

<div class="tm-resource-icon">
    <!--@include: ./assets/action-csv.svg-->
</div>

The **CSV Action** creates and deletes records from a local [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) or [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) file. Use it to store data or log submissions.

::: warning Pre-formatted CSV File
This action won't create or format the file by itself, you must provide a path to a pre-existing and pre-formatted file. The file can be as basic as a list of column headers separated by commas set in the very first line, as for example `Name,Comment,Date`.
:::

## Create Record

Creates a CSV file record.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *File* | The path to the file where the data will be appended. | &#x2713; |
| *Delimeter* | The character used to separate columns data, defaults to a comma (`,`). |
| *Enclosure* | The character used to enclose columns data, defaults to a double-quote (`"`). |
<!--@include: ./_partials/common-action-settings.md-->

<!--@include: ./_partials/common-action-content-mapping.md-->

## Delete Record

Deletes a CSV file record.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *File* | The path to the file where the data will be appended. | &#x2713; |
| *Delimeter* | The character used to separate columns data, defaults to a comma (`,`). |
| *Enclosure* | The character used to enclose columns data, defaults to a double-quote (`"`). |
| *Column* | The column that will identify the record to be deleted. | &#x2713; |
| *Value* | The value that will identify the record to be deleted. | &#x2713; | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->
