# Getting Started

## Installation

1. Download the package from the [ZOOlanders Site](https://www.zoolanders.com).
2. Enter the _Joomla! Extension Manager_ and install it through the **Upload Package File** option.

> If you have issues with the installation try the alternative **Install from Directory** method. Upload the unzipped package content into the `/tmp` folder, input the folder path and click on the Install button.

::: tip
If your site is multilingual or the main language is not English, you may want to install the INI translation files for each language. Similarly as above, [download](http://static.zoolanders.com/translations/) and install the translation packages.
:::

## Integration

### 1. Add the Compare element

The Compare element, provided with ZOOcompare, displays a button which will allow adding the Item to the comparison list. Go ahead and add the element to the Type which Items you would like to allow comparing:

![ZOOcompare - add Compare element to the item type](./assets/compare-add-element.png)

If you are not familiar with the process you can review the [ZOO](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types) guide.

### 2. Assign the Compare element to a render layout

Once the element is set in the Type, it must be assigned to some rendering layout, as for example the Teaser. Assign the element to the desired layout and configure as needed:

![ZOOcompare - add Compare element to the layout](./assets/compare-add-element-layout.png)

### 3. Set the comparison chart

Now that the compare button is in place, it allows adding the Items to the compare list and access the comparison chart. The Chart is very flexible and allows you to set, beside the Data to be compared, Headers, Groups, Tools and more. For setting it up open the  *Compare* layout assignment view for the App and Type you are setting up, then Drag & Drop the elements you would like to be part of the comparison chart:

![ZOOcompare - Compare layout](./assets/compare-chart-layout.png)

### 4. Fine tune the application settings

Finally, in the App Instance Configuration under the ZOOcompare Tab we can set the following App options:

- `Main Layout`: The layout that will be used to display the Chart.
- `Max Items`: The maximum amount if Items that could be added for comparing at a time.

![ZOOcompare tab in the application settings](./assets/application-zoocompare-tab.png)

> If there is no ZOOcompare section in the application settings, copy the application config file `/plugins/system/zoocompare/config/application/zoocompare.xml` to your application `/config` folder.
