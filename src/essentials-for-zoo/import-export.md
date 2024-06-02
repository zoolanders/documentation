# Import/Export

The ZOO import/export feature is automatically overridden by the ZOOlanders Essentials version. It advantages is the support for custom elements and multi-steps process, which avoids timeout errors with big sized files. The supported formats are JSON and CSV.

::: tip
You can always revert to the ZOO default version by disabling the ZOOlanders ZOOport Plugin.
:::

## JSON

When exported to JSON, a complete App data will be exported into one single file. This format is recommended when moving data from one App instance to another.

::: warning
Bear in mind that the generated JSON file is not compatible with the ZOO native importer.
:::

## CSV

The CSV format has it limitations and it usage should be limited when moving data _in_ or _out_ of ZOO.

Currently only this elements are supported: Text/Pro, Textarea/Pro, Link/Pro, GoogleMaps/Pro, Date/Pro, Image/Pro, Media/Pro, Download/Pro, RelatedItems/Pro, RelatedCategories/Pro, Email, Select, Radio, Checkbox, Country, Gallery, PricePro, Quantity & AddToCart.

::: tip
Formatting a CSV file can be confusing. To get an accurate CSV example populate the App instance with dummy data and export it.
:::

### Updating Existing Data

A popular use for the CSV format it to update the element data of existing ZOO items. For such provide a column with items IDs and set it as _Id_ during element assignment step.

::: warning
Updating categories is not supported.
:::

## Troubleshooting

### Slow Imports

The import process can be slowed down because of plugins hooking into the `item:save` event, eg 'Search - ZOO' or 'Smart Search - ZOO'. You can disable those with caution, as most likely for production you would want their hooks to be processed.

### A CSV file won't import or it does with broken symbols

Please make sure the file is UTF-8 encoded and the dates are formatted as `YYYY-MM-DD HH:MM:SS`.

### Importing Related Items

There is a known limitation when export/importing RelatedItems/Pro data using CSV within one App instance. When certain item is the first in the list and it is related with the last item, such relation will not be saved because at the moment when the first item is imported, the last one doesn't exist yet. As a solution you can do the following:

1. Import the CSV file in a new App instance. Items will be imported with new IDs without the relations.
2. Export CSV from this new App. Items IDs will be saved in the file.
3. Copy the IDs from the recently exported CSV file and update the initial CSV file with new IDs.
4. Import the updated CSV file. The existent Items will be updated and relations imported.

::: warning
Make sure the Related Items relation is set using an item _ID_ or _alias_. But be aware that in case there is an item existing in any App instance with the same alias as one of the Related Items, the imported item will be related to this existent item.
:::

### Importing multiple element values with CSV

Each value must have a separate column. In case of Option elements such as Select, all options must be configured before hand in the backend.
