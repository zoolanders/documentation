# CSV

This source is based on a locally-stored CSV file. The file must have a CSV formatted header, which means the first line must contain the column names that will be used as the field name during the content mapping. The following lines represent the records.

Once the source has been created, as instructed in the [Getting Started](../sources/#getting-started) guide, you will be able to map its contents to any Builder element, as well as to filter and order its records by a field content with static or dynamic conditions. For example, you could filter the records to only show the ones belonging to the current user using the Site Source as a dynamic value for the filter condition.

The cache is set to `3600` seconds by default, if your workflow requires immediate results disable the cache by setting it to `0`.
