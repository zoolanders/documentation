---
title: Layouts
taxonomy:
    category: docs
---

ZOOitemPro has several layouts which can be used right away, but you can [create custom](http://docs.zoolanders.com/extensions/zooitempro/advanced/customizations#custom-layouts) ones if your project requires some specific output.

### Default

Renders the pre-filtered Items in an Unordered List.

| Field       | Description |
| :---------- | :---------- |
| **Renderer Layout** | The ZOO render layout that will be used for the Items rendering. |
| **Media Position** | The media position alignment. |
| **Cache Time** | The Items caching time before they are recached. Set to 0 to disable caching. |
| **Module Class Suffix** | The class that will be prefixed to the module wrapper. |
| **Filter/Order** | This layout supports the advanced [filter and order](#advanced-filter-and-ordering) feature. |

### Current

Constrained to Item full view renders current Item content in positions outside ZOO.

| Field       | Description |
| :---------- | :---------- |
| **Renderer Layout** | The ZOO render layout that will be used for the Items rendering. |
| **Media Position** | The media position alignment. |
| **Module Class Suffix** | The class that will be prefixed to the module wrapper. |

### CurrentTags

Constrained to Item full view renders Items that are tagged with current Item tags. Supports additional pre-filtering.

| Field       | Description |
| :---------- | :---------- |
| **Renderer Layout** | The ZOO render layout that will be used for the Items rendering. |
| **Media Position** | The media position alignment. |
| **Cache Time** | The Items caching time before they are recached. Set to 0 to disable caching. |
| **Module Class Suffix** | The class that will be prefixed to the module wrapper. |
| **Filter/Order** | This layout supports the advanced [filter and order](#advanced-filter-and-ordering) feature. |

### Currentcat

Constrained to Category full view renders current Category Items. Supports additional pre-filtering.

| Field       | Description |
| :---------- | :---------- |
| **Renderer Layout** | The ZOO render layout that will be used for the Items rendering. |
| **Media Position** | The media position alignment. |
| **Cache Time** | The Items caching time before they are recached. Set to 0 to disable caching. |
| **Module Class Suffix** | The class that will be prefixed to the module wrapper. |
| **Filter/Order** | This layout supports the advanced [filter and order](#advanced-filter-and-ordering) feature. |

### Grid

Renders the pre-filtered Items in a grid.

| Field       | Description |
| :---------- | :---------- |
| **Renderer Layout** | The ZOO render layout that will be used for the Items rendering. |
| **Media Position** | The media position alignment. |
| **Cache Time** | The Items caching time before they are recached. Set to 0 to disable caching. |
| **Columns** | The number of columns to be used when displaying the grid. |
| **Module Class Suffix** | The class that will be prefixed to the module wrapper. |
| **Filter/Order** | This layout supports the advanced [filter and order](#advanced-filter-and-ordering) feature. |

### ZOOtrack

ZOOtrack integration rendering the last viewed items.

### Widgetkit

Widgetkit layout is a integration layer between the module and [Widgetkit](http://yootheme.com/widgetkit) allowing to render a Widget using the module Items as content. For details about configuration options visit the [Widgetkit documentation](http://yootheme.com/widgetkit/documentation).

## Advanced filter and ordering

ZOOitemPro provides an advanced filtering and ordering for the rendered Items. Without trying to cover all the possible options, here are the most important ones:

**Filters**

| Field       | Description |
| :---------- | :---------- |
| **Apps** | Filters the Items by the Apps they are part of. No selection equals to all. |
| **Types** | Filters the Items by their Types. No selection equals to all. |
| **Categories** | Filters the Items by the Categories they are part of. No selection equals to all. |
| **Tags** | Filters the Items by the Tags they are tagged with. No selection equals to all. |
| **Author** | Filters the Items by their Authors. Values are set with User IDs delimited by a comma. The **[userid]** variable can be used to add the ID of the current User. |
| **Published State** | Filters the Items by their Published State. |
| **Frontpage State** | Filters the Items by their Frontpage State. |
| **Offset** | The query offset. |
| **Limit** | The query limit. |
| **Created** | Filters the Items by its created date. |
| **Modified** | Filters the Items by its modified date. |
| **Published Up** | Filters the Items by its published up date. |
| **Published Down** | Filters the Items by its published down date. |

>>>>> Dates inputs support **[yesterday]**, **[today]** and **[tomorrow]** variables allowing dynamic filtering.

**Order**

| Field       | Description |
| :---------- | :---------- |
| **Random** | Sets a random order for the filtered items. |
| **Reverse** | Reverse the final ordering. |
| **Priority** | If enabled the Items priority would be considered for the ordering. |
| **Alphanumeric** | Allows choosing if the ordering should be done with alphanumeric values. Enable if your order is failing, specially if there are numbers involved. |
| **Core** | allows to choose the core element by which will be made the order. |

>>> More options are available for the Element specific filtering and ordering depending of the App/Type selected.
