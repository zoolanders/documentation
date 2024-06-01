## Save to CSV Action {#save-csv}

![Sate to CSV Action](./assets/action-save-csv.svg)

The **Save to CSV Action** saves each submission data as a new record in the specified local [CSV](https://en.wikipedia.org/wiki/Comma-separated_values) or [TSV](https://en.wikipedia.org/wiki/Tab-separated_values) file. Use it to store data or log submissions.

::: warning Pre-formatted CSV File
This action won't create or format the file by itself, you must provide a path to a pre-existing and pre-formatted file. The file can be as basic as a list of column headers separated by commas set in the very first line, as for example `Name, Comment, Date`.
:::

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *File* | The path to the file where the data will be appended. | &#x2713; |
| *Delimeter* | The character used to separate columns data, defaults to a comma (`,`). |
| *Enclosure* | The character used to enclose columns data, defaults to a double-quote (`"`). |
<!--@include: ./common-action-settings.md-->

<!--@include: ./common-action-content-mapping.md-->
