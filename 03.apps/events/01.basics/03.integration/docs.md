---
title: Integration
taxonomy:
    category: docs
---

## First Steps

### Step 1. Set up the Type

Create a new **Events App** Instance. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/create-a-new-app-instance).

You can adjust now or leave for later the general calendar and template options. Please review the [App section](#app).

### Step 2. Set up the view

The App is ready and you can proceed displaying it in the Frontend. Follow the [official ZOO docs](http://www.yootheme.com/zoo/documentation/getting-started/how-to-create-a-joomla-menu-link) to set up the **Events App** Frontpage view.

### Step 3. Set up the Module

Create and assign to a position a **ZOO Events** module setting up the App we have created in the Step 1 and the Menu Item created in the Step 2.

For more information on the module please review it [section](#module).

## App configuration

| Field       | Description |
| :---------- | :---------- |
| **Unpublish Past Events** | allows to set if the past events should be automatically unpublished by the system.
| **Items per page** | allows to set the numbers of Items to be shown on each page.
| **Item order** | allows to set the initial Item ordering.
| **Alpha index** | allows to choose if the alpha index should contain categories, items or both.
| **First Day of the Week** | allows to choose if the first day of the week is Sunday or Monday.

## Template configuration

| Field       | Description |
| :---------- | :---------- |
| **Day Template** | allows to choose the Item Layout to display when only one event exists for the chosen day in the Events module.
| **Date Format** | allows to choose the date format to display in the Day view.
| **Custom Date Format** | allows to set and override the Date Format with a custom format.
| **Day Show Title** | allows to Show/Hide the search title when only one event exists for the chosen day in the Events module.

## Types

The Events App comes preset with two Types: Event and Venue.

The **Event** type includes the following elements:

| Field       | Description |
| :---------- | :---------- |
| **Venue** | (Related Items Pro) - allows to have bi-directional relation with the associated Venue entry.
| **Description** | (Textarea Pro) - allows to set an description.
| **Event picture** | (Image Pro) - allows to set an image.
| **Event date** | (Date Pro) - allows to set the event date. The first DatePro element instance is considered as the event date.

The information how to configure the date format is available in DatePro element section.  

>>>>> Please take into account that **Events** is only compatible with ZOOlanders **Date Pro** element. It is not recommended to use core "Date" element instead of "Date Pro".

The **Venue** type includes the following elements:
	
| Field       | Description |
| :---------- | :---------- |
| **Related Events** | (Related Items Pro) - allows to have bi-directional relation with the associated Event entry.
| **Venue Address** | (Google Maps Pro) - allows to set the address and display it on a map.
| **Description** | (Textarea Pro) - allows to set an description.
| **Venue picture** | (Image Pro) - allows to set an image.
	
## Module

The **ZOO Events module** is used to display an Calendar view of the events.

### Options

It is only possible to show events from the same Type/App at a time and you would need to choose it in the Module params.

| Field       | Description |
| :---------- | :---------- |
| **Application** | allows to choose the Events Application instance whose Events you want to display.
| **Events App Menu Item** | allows to select the Events Menu Item you created for the Events Application you selected above.
| **Module Class Suffix** | allows to set a module class suffix for specific module styling.
