# Google Sheet

This source is based on a Google Drive Spreadsheet. The spreadsheet must have a header, which means the first line must contain the column names that will be used as the field name during the content mapping. The following lines represent the records.

Once the source has been created, as instructed in the [Getting Started](../) guide, you will be able to map its contents to any Builder element. Notice that this source doesn't support filtering or ordering, which is determined by the Spreadsheet itself.

The cache is set to `3600` seconds by default, if your workflow requires immediate results you could disable the cache by setting it to `0`, but being this an API-driven source it is not recommended and you should consider using a CSV or Database source instead.
