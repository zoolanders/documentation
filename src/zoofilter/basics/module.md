# Module

The ZOOfilter Module renders the filter form with the following settings:

- `Items`: The ZOO App and Type which Items will be filtered.
- `Form Method`: The method that will be used by the Form to send the search data, **GET** or **POST**.
- `Show Ordering`: If enabled the Ordering Form will be displayed in the results page allowing to reorder the filtered results.
- `Show Search Page Title`: If enabled the **Search Page Title** field value will be displayed in the results page.
- `Search Page Title`: The search page title value.
- `Show Submit Button`: If enabled the **Submit** button will be displayed in the search form.
- `Show Clear Button`: If enabled the **Clean** button will be displayed in the search form allowing to clear the contents of any entered filtering criteria.
- `Show Permalink`: If enabled **Get Permalink** option will be displayed allowing to copy the URL of the result page.
- `Result Columns`: The amount of columns with which the Items will be rendered in the results view.
- `Form Columns`: The amount of columns with which the search elements will be rendered on the search form (only for module UIkit layout).
- `Items per Page`: The amount of Items per page that will be displayed in the results view.
- `Max Number of Results`: By default 1000, it will limit the amount of entries in the filter results. Any items matching the filter criteria that are beyond the limit will not be rendered.
- `Search form style`: The Layout that will be used for displaying the search form wrapper. **Default** layout will display the form using the standard styles while **UIkit** will display it using UIkit style
- `Page Layout`: The Layout that will be used for displaying the results. **Search** page will display the results using standard results display while **Json**, exclusively for custom layouts, will return the result in JSON format. **UIkit** layout is like Search layout but with UIkit styling.
- `Ordering Layout`: The layout that will be used to render the order form.
- `Result Layout`: The layout that will be used to render the results view.
- `Module Layout`: The layout that will be used to render the form.
- `Result Page Itemid`: Allows associating the Results page with a Menu Item by appending the specified Itemid to the results page URL.
- `Module Class Suffix`: The module class suffix, used for styling.

::: warning
Take into consideration that Form POST method does not support pagination between results.
:::
