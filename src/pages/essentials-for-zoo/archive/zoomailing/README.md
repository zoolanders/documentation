# ZOOmailing

The ZOOlanders ZOOmailing Plugin is a ZOO integration with [AcyMailing](http://www.acyba.com/acymailing). Once the plugin is enabled a _ZOO_ tag should be available in the AcyMailing Newsletter Tags assistant. The tag presents two tabs, [Items Tab](#items-tab) for inserting specific items, and [Categories Tab](#categories-tab) for inserting category specific items.

## AcyMailing Tabs

### Items Tab

If you have a lot of items you might want to filter them down to locate the specific one you wish to insert. That's exactly what the filter options do.

- `Type`: The Type of items that you would like to filter with. Multiple selections are allowed.
- `Category`: The Category of items that you would like to filter with. Multiple selections are allowed.
- `Tag`: The items Tags that you would like to filter with. Multiple selections are allowed.
- `Filter`: A string for the item title you would like to filter with.

Click the **Go** button to apply the filters and **Reset** to clear any filtering criteria.

Right above the filters we can choose the **Layout** and **Online Layout** settings. Both are referencing the same ZOO Item rendering layouts that will be used to render the items when the Newsletter is sent or, in the case of Online layout, when the Newsletter is viewed on the frontend of your site. You can keep those by Default for now, will be getting back to them in the [Layouts](#layouts) section.

> Having the option to choose different layouts is very useful, for example you may render a **Video** in the online version and a linked **Image** instead on the emailed ones.

Now that you have filtered the items and selected the layouts you can choose the items to be included. From the below list just click on the Items title to select them and click again to deselect them.

Once you are satisfied with the selection click the top right **Insert the Tag** button for inserting the result into the Newsletter content.

### Categories Tab

Being Categories tab dynamic its options allows setting, beside the category, few other filters that would be applied during the items rendering.

- `Min. Items`: The minimum amount of items that needs to pass the filter criteria in order for the entire tag to be rendered.
- `Max. Items`: The maximum amount of items to be included. Leave blank to include all.
- `Order by`: The items order to be applied.
- `Filter by`: The items filter to be applied.
- `Num. of columns`: The number of columns that will be used to display the items.
- `Since`: Combined with the **Filter By** field allows setting the number of days since the item was created or modified.

Right above the filters we can choose the ZOO Item rendering layout that will be used to render the items when the Newsletter is sent.

Finally you can select the categories from which the items will be retrieved. From the below list just click on the Categories title to select them and click again to deselect them.

Once you are satisfied with the selection click the top right **Insert the Tag** button for inserting the result into the Newsletter content.

## Layouts

ZOOmailing layouts are standard ZOO layouts for rendering the Items content during the Newsletter processing. They will be used to fullfill the Newsletter content with each one of the Items. You can follow the [Custom Layouts & Positions ZOO guide](https://yootheme.com/support/zoo/custom-layouts-and-positions) to create your custom layouts which should be stored in `plugins/acymailing/zoomailing/zoomailing/renderer/item` folder.

## Hints

### Multilanguage

On multilanguage sites preview and sent newsletters are displayed in the current backend language. For autonewsletter you can change the language of the content in the newsletter, adding the language parameter in the URL for automatic cron sending.

```
index.php?option=com_acymailing&ctrl=cron&lang=en
index.php?option=com_acymailing&ctrl=cron&lang=de
```

### Send a Newsletter whenever a new ZOO Item is published

ZOOmailing does not manage the newsletters schedule, but you can set AcyMailing to send a Newsletter every day with ZOOmailing tag that will retrieve the items by its **created** or **modified** date (currently **published** date is not supported). If there are no items matching the criteria, no Newsletter will be send.

### Send most recent items automatically

First, setup AcyMailing auto newsletter, that will send a newsletter according to the particular schedule. Then add ZOOmailing tag to the newsletter that will take recent ZOO items and render according to the configured ZOOmailing layout. Tag allows to render the last items newly created or modified ("Filter by" option) since some days.

## Troubleshooting

### The ZOOmailing Plugin doesn't allow to be enabled

Make sure that [AcyMailing](https://www.acyba.com/acymailing.html) component is installed and its version is between 3.9.x and 5.x. AcyMailing 6 is not supported.

### The rendered tag returns no items

Most likely the ZOOmailing layout is not populated, you can find those in the [ZOO Layout Positions](https://yootheme.com/support/zoo/layout-positions) settings view. Also make sure that tag includes a category ID.

### The items style in the newsletter doesn't match

The final destination for the content is the AcyMailing newsletter, so all the styling must be set on the newsletter it self (see AcyMailing documentation). If you need to adapt the html structure returned from ZOOmailing, you can create a custom render [layout](#layouts).
