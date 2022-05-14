---
sidebarDepth: 0
---
# F.A.Q.

## Why am I not able to publish the Event item?
Most likely because the Item event date has already past and the **Unpublish Past Events** option is enabled in Events application settings.

## How to change the date format or separator between the date and time?
Access the **DatePro** assignment position, where the date is being displayed, and adjust the fields **Date Format** and **End Date Format**.

## How to display the Event start and end date?
In the **DatePro** render layout settings choose the **_event** Sublayout and set the date formats as required.

## How to change the texts `from`, `until` and `to`?
Override the **DatePro** language constants `PLG_ZLELEMENTS_DP_FROM`, `PLG_ZLELEMENTS_DP_UNTIL` and `PLG_ZLELEMENTS_DP_TO` through the **Joomla! Language Manager**.

## Why the events are not being found by it date value?
The search does not support items with repeatable dates. If **DatePro** is set as **repeatable** and your items have multiple dates, those may not be correctly displayed in the search results.
