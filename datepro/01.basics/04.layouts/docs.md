---
title: Layouts
taxonomy:
    category: docs
---

DatePro has several layouts which can be used right away, but make sure to check the [customizations](http://documentation.zoolanders.com/datepro/advanced/customizations) guide if your project requires some specific output.

## Default_default

Renders the **date** or **start date** (if Event mode) value with the specified format.

| Field       | Description |
| :---------- | :---------- |
| **Date Format** | The date display format. Allows choosing from several standard date formats or set your own. |
| **Custom format** | Only shown when Date Format is set to Custom format it allows to specify the custom date format following the [PHP standard date string syntax](https://secure.php.net/manual/en/function.strftime.php). |

## Default_event

Renders the **start** and **end** date values with the specified format as an from/until Event.

| Field       | Description |
| :---------- | :---------- |
| **Date Format / Custom format** | Those settings are the same as the ones from the Default Sublayout. |
| **Override End Date Format** | If set to **allways** the **end** date display format will be overridden with the specified format. <br /> If set to **If one day event** the format will be overridden only if the **start** and **end** date have the same **day** value.

## Resume

Renders a resume of the dates when there are several dates and/or hours stated.
