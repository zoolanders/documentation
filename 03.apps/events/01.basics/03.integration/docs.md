---
title: Integration
taxonomy:
    category: docs
---

Following the [ZOO guide](http://www.yootheme.com/zoo/documentation/getting-started/create-a-new-app-instance) create a new **Events App** instance. In the configuration options review and set as required the following:

| Field       | Description |
| :---------- | :---------- |
| **Unpublish Past Events** | If enabled the past events will be automatically unpublished by the system. |
| **Items per Page** | The numbers of Items to be displayed on each page. |
| **Item Order** | The initial Item order. |
| **Alpha Index** | Allows choosing if the alpha index should contain categories, items or both. |
| **First Day of the Week** | Allows choosing the first day of the week. |

In the Template configuration give special attention to:

| Field       | Description |
| :---------- | :---------- |
| **Day Template** | The Item Layout to display when only one event exists for the chosen day. |
| **Date Format** | The date format to display in the Day view. |
| **Custom Date Format** | Allows overriding the Date Format with a custom format. |
| **Day Show Title** | Allows to Show/Hide the search title when only one event exists for the chosen day. |

Now that the App is ready let's display it Frontpage or other view following the [ZOO guide](http://www.yootheme.com/zoo/documentation/getting-started/how-to-create-a-joomla-menu-link).

The **Events Module** displays a calendar with the Events (Items) happening on each day, to set it up assign a new Events module instance to the desired position choosing the App previously set.

| Field       | Description |
| :---------- | :---------- |
| **Application** | The Events Application instance whose Events you want to display. |
| **Events App Menu Item** | The Menu Item associated with the Events App. |
| **Module Class Suffix** | The module class suffix for specific module styling. |

>>> It is only possible to show events from the same App/Type on the same calendar.

You can now start creating Events and/or Venues in the newly created App or keep reading to get to know more about the Types composition.

**Event**

| Field       | Element | Description |
| :---------- | :---------- | :---------- |
| **Venue** | RelatedItemsPro | Allows bi-directional relation with the associated Venue entry, among others. |
| **Description** | TextareaPro | The event description. |
| **Event picture** | ImagePro | The event image. |
| **Event date** | DatePro | The event date. The first DatePro element instance is considered as the event date. |

>>> Please take into consideration that **Events Type** requires at least one instance of the **DatePro** element.

**Venue**

| Field       | Element | Description |
| :---------- | :---------- | :---------- |
| **Related Events** | RelatedItemsPro | Allows bi-directional relation with the associated Event entry, among others. |
| **Venue Address** | GoogleMapsPro | The venue address. |
| **Description** | TextareaPro | The venue description. |
| **Venue picture** | ImagePro | The venue image. |
