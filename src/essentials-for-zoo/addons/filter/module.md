# Module

The ZOOfilter Module renders the filter form with the following settings:

| Setting | Description |
| --- | --- |
| _Items_ | The ZOO App and Type which Items will be filtered. |
| _Form Method_ | The method that will be used by the Form to send the search data, **GET** or **POST**. |
| _Show Ordering_ | If enabled the Ordering Form will be displayed in the results page allowing to reorder the filtered results. |
| _Show Search Page Title_ | If enabled the **Search Page Title** field value will be displayed in the results page. |
| _Search Page Title_ | The search page title value. |
| _Show Submit Button_ | If enabled the **Submit** button will be displayed in the search form. |
| _Show Clear Button_ | If enabled the **Clean** button will be displayed in the search form allowing to clear the contents of any entered filtering criteria. |
| _Show Permalink_ | If enabled **Get Permalink** option will be displayed allowing to copy the URL of the result page. |
| _Result Columns_ | The amount of columns with which the Items will be rendered in the results view. |
| _Form Columns_ | The amount of columns with which the search elements will be rendered on the search form (only for module UIkit layout). |
| _Items per Page_ | The amount of Items per page that will be displayed in the results view. |
| _Max Number of Results_ | By default 1000, it will limit the amount of entries in the filter results. Any items matching the filter criteria that are beyond the limit will not be rendered. |
| _Search form style_ | The Layout that will be used for displaying the search form wrapper. **Default** layout will display the form using the standard styles while **UIkit** will display it using UIkit style. |
| _Page Layout_ | The Layout that will be used for displaying the results. **Search** page will display the results using standard results display while **Json**, exclusively for custom layouts, will return the result in JSON format. **UIkit** layout is like Search layout but with UIkit styling. |
| _Ordering Layout_ | The layout that will be used to render the order form. |
| _Result Layout_ | The layout that will be used to render the results view. |
| _Module Layout_ | The layout that will be used to render the form. |
| _Result Page Itemid_ | Allows associating the Results page with a Menu Item by appending the specified Itemid to the results page URL. |
| _Module Class Suffix_ | The module class suffix, used for styling. |

::: warning
Take into consideration that Form POST method does not support pagination between results.
:::
