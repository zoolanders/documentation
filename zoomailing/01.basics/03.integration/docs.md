---
title: Integration
taxonomy:
    category: docs
---

At this point a **ZOO** tag should be available in the **AcyMailing** Newsletter Tags assistant. The tag presents two tabs, **Items**, for inserting specific items and **Categories**, for inserting category specific items. Let's look at each one individually.

>>>>> Both tabs have a common **Application** option which allows choosing the ZOO App we want to work with.

## Items Tab

If you have a lot of items you might want to filter them down to locate the specific one you wish to insert. That's exactly what the filter options do.

| Field       | Description |
| :---------- | :---------- |
| **Type** | The Type of items that you would like to filter with. Multiple selections are allowed. |
| **Category** | The Category of items that you would like to filter with. Multiple selections are allowed. |
| **Tag** | The items Tags that you would like to filter with. Multiple selections are allowed. |
| **Filter** | A string for the item title you would like to filter with. |

Click the **Go** button to apply the filters and **Reset** to clear any filtering criteria.

Right above the filters we can choose the **Layout** and **Online Layout** settings. Both are referencing the same ZOO Item rendering layouts that will be used to render the items when the Newsletter is sent or, in the case of Online layout, when the Newsletter is viewed on the frontend of your site. You can keep those by Default for now, will be getting back to them in the [Layouts](#layouts) section.

>>>>>> Having the option to choose different layouts is very useful, for example you may render a **Video** in the online version and a linked **Image** instead on the emailed ones.

Now that you have filtered the items and selected the layouts you can choose the items to be included. From the below list just click on the Items title to select them and click again to deselect them.

Once you are satisfied with the selection click the top right **Insert the Tag** button for inserting the result into the Newsletter content.

## Categories Tab

Being Categories tab dynamic its options allows setting, beside the category, few other filters that would be applied during the items rendering.

| Field       | Description |
| :---------- | :---------- |
| **Min. Items** | The minimum amount of items that needs to pass the filter criteria in order for the entire tag to be rendered. |
| **Max. Items** | The maximum amount of items to be included. Leave blank to include all. |
| **Order by** | The items order to be applied. |
| **Filter by** | The items filter to be applied. |
| **Num. of columns** | The number of columns that will be used to display the items. |
| **Since** | Combined with the **Filter By** field allows setting the number of days since the item was created or modified. |

Right above the filters we can choose the  ZOO Item rendering **Layout** that will be used to render the items when the Newsletter is sent. You can keep it by Default for now, will be getting back to it in the [Layouts](#layouts) section.

Finally you can select the categories from which the items will be retrieved. From the below list just click on the Categories title to select them and click again to deselect them.

Once you are satisfied with the selection click the top right **Insert the Tag** button for inserting the result into the Newsletter content.

## Layouts

ZOOmailing layouts are standard ZOO layouts for rendering the Items content during the Newsletter processing. As such, by following the [elements assignment](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) guide you can Drag & Drop the elements you wish to display in your Newsletter for each one of the Items.

>>>>> Creating custom layouts is possible and sometimes necessary to fulfill the projects specifics. To do so follow the [ZOO guide](http://yootheme.com/zoo/documentation/developers/create-a-new-layout-with-positions) taking in consideration the layouts are stored in `plugins/acymailing/zoomailing/zoomailing/renderer/item` folder.
