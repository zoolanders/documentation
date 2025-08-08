# ZOOitem Pro

ZOOitem Pro is a module that renders ZOO items with advanced pre-filtering.

## Layouts

Several layouts are available right out of the box.

### Default Layout

Renders the pre-filtered Items in an Unordered List.

| Setting               | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| _Renderer Layout_     | The ZOO render layout that will be used for the Items rendering.              |
| _Media Position_      | The media position alignment.                                                 |
| _Cache Time_          | The Items caching time before they are recached. Set to 0 to disable caching. |
| _Module Class Suffix_ | The class that will be prefixed to the module wrapper.                        |
| _Filter/Order_        | This layout supports the advanced [filter and order](#settings) feature.      |

### Current Layout

Constrained to Item full view renders current Item content in positions outside ZOO.

| Setting               | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| _Renderer Layout_     | The ZOO render layout that will be used for the Items rendering. |
| _Media Position_      | The media position alignment.                                    |
| _Module Class Suffix_ | The class that will be prefixed to the module wrapper.           |

### CurrentTags Layout

Constrained to Item full view renders Items that are tagged with current Item tags. Supports additional pre-filtering.

| Setting               | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| _Renderer Layout_     | The ZOO render layout that will be used for the Items rendering.              |
| _Media Position_      | The media position alignment.                                                 |
| _Cache Time_          | The Items caching time before they are recached. Set to 0 to disable caching. |
| _Module Class Suffix_ | The class that will be prefixed to the module wrapper.                        |
| _Filter/Order_        | This layout supports the advanced [filter and order](#settings) feature.      |

### Currentcat Layout

Constrained to Category full view renders current Category Items. Supports additional pre-filtering.

| Setting               | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| _Renderer Layout_     | The ZOO render layout that will be used for the Items rendering.              |
| _Media Position_      | The media position alignment.                                                 |
| _Cache Time_          | The Items caching time before they are recached. Set to 0 to disable caching. |
| _Module Class Suffix_ | The class that will be prefixed to the module wrapper.                        |
| _Filter/Order_        | This layout supports the advanced [filter and order](#settings) feature.      |

### Grid Layout

Renders the pre-filtered Items in a grid.

| Setting               | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| _Renderer Layout_     | The ZOO render layout that will be used for the Items rendering.              |
| _Media Position_      | The media position alignment.                                                 |
| _Cache Time_          | The Items caching time before they are recached. Set to 0 to disable caching. |
| _Columns_             | The number of columns to be used when displaying the grid.                    |
| _Module Class Suffix_ | The class that will be prefixed to the module wrapper.                        |
| _Filter/Order_        | This layout supports the advanced [filter and order](#settings) feature.      |

### Widgetkit Layout

Widgetkit layout is a integration layer between the module and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the module Items as content. For details about configuration options visit the [Widgetkit documentation](http://yootheme.com/support/widgetkit/).

## Settings

### Filter Settings

| Setting           | Description                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Apps_            | Filters the Items by the Apps they are part of. No selection equals to all.                                                                                   |
| _Types_           | Filters the Items by their Types. No selection equals to all.                                                                                                 |
| _Categories_      | Filters the Items by the Categories they are part of. No selection equals to all.                                                                             |
| _Tags_            | Filters the Items by the Tags they are tagged with. No selection equals to all.                                                                               |
| _Author_          | Filters the Items by their Authors. Values are set with User IDs delimited by a comma. The `[userid]` variable can be used to add the ID of the current User. |
| _Published State_ | Filters the Items by their Published State.                                                                                                                   |
| _Frontpage State_ | Filters the Items by their Frontpage State.                                                                                                                   |
| _Offset_          | The query offset.                                                                                                                                             |
| _Limit_           | The query limit.                                                                                                                                              |
| _Created_         | Filters the Items by its created date.                                                                                                                        |
| _Modified_        | Filters the Items by its modified date.                                                                                                                       |
| _Published Up_    | Filters the Items by its published up date.                                                                                                                   |
| _Published Down_  | Filters the Items by its published down date.                                                                                                                 |

::: tip
Dates inputs support `[yesterday]`, `[today]` and `[tomorrow]` variables allowing dynamic filtering.
:::

::: warning
Filtering on repeatable dates is not supported.
:::

### Order Settings

| Setting        | Description                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Random_       | Sets a random order for the filtered items.                                                                                                        |
| _Reverse_      | Reverse the final ordering.                                                                                                                        |
| _Priority_     | If enabled the Items priority would be considered for the ordering.                                                                                |
| _Alphanumeric_ | Allows choosing if the ordering should be done with alphanumeric values. Enable if your order is failing, specially if there are numbers involved. |
| _Core_         | Allows to choose the core element by which will be made the order.                                                                                 |

::: tip
More options are available for the Element specific filtering and ordering depending of the _App/Type_ selected.
:::
