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
