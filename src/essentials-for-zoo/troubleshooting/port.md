# Issues with import/export

## Slow Imports

The import process can be slowed down because of plugins hooking into the `item:save` event, eg 'Search - ZOO' or 'Smart Search - ZOO'. You can disable those with caution, as most likely for production you would want their hooks to be processed.

## A CSV file won't import or it does with broken symbols

Please make sure the file is UTF-8 encoded and the dates are formatted as `YYYY-MM-DD HH:MM:SS`.

## Importing Related Items

There is a known limitation when export/importing RelatedItems/Pro data using CSV within one App instance. When certain item is the first in the list and it is related with the last item, such relation will not be saved because at the moment when the first item is imported, the last one doesn't exist yet. As a solution you can do the following:

1. Import the CSV file in a new App instance. Items will be imported with new IDs without the relations.
2. Export CSV from this new App. Items IDs will be saved in the file.
3. Copy the IDs from the recently exported CSV file and update the initial CSV file with new IDs.
4. Import the updated CSV file. The existent Items will be updated and relations imported.

::: warning
Make sure the Related Items relation is set using an item _ID_ or _alias_. But be aware that in case there is an item existing in any App instance with the same alias as one of the Related Items, the imported item will be related to this existent item.
:::

## Importing multiple element values with CSV

Each value must have a separate column. In case of Option elements such as Select, all options must be configured before hand in the backend.
