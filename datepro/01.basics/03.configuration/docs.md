---
title: Configuration
taxonomy:
    category: docs
---

## Configuration View

DatePro inherits the Basic [Configuration fields](/zoolanders/elements/fields#configuration) adding its own:

| Field       | Description |
| :---------- | :---------- |
| **Mode** | The date type, can be set as single Date or Event (date range). |
| **Time** | If enabled the date would allow inputing the time as well. |

## Assignment View

DatePro inherits the Basic, Filter and Separator [Assignment fields](/zoolanders/elements/fields#assignment) adding its own:

### Default layout: Default sublayout

Will render the **date** or **start date** (if Event mode) value with the specified format.

| Field       | Description |
| :---------- | :---------- |
| **Date Format** | The date display format. Allows choosing from several standard date formats or set your own. |
| **Custom format** | Only shown when Date Format is set to Custom format it allows to specify the custom date format following the [PHP standard date string syntax](https://secure.php.net/manual/en/function.strftime.php). |

### Default layout: Event sublayout

Will render the **start** and **end** date values with the specified format as an from/until Event.

Will render the formatted dates value with from and until indications.

| Field       | Description |
| :---------- | :---------- |
| **Date Format / Custom format** | Those settings are the same as the ones from the Default Sublayout. |
| **Override End Date Format** | If set to **allways** the **end** date display format will be overridden with the specified format. <br /> If set to **If one day event** the format will be overridden only if the **start** and **end** date have the same **day** value.

### Resume layout

Will render a clever resume of the dates when there are several dates and/or hours stated.
