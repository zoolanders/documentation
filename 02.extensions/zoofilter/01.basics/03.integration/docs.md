---
title: Integration
taxonomy:
    category: docs
---

The most basic part of a filter it's the form, let's start by integrating the **ZOOfilter Form** which is displayed by the **ZOOfilter Module** and composed by the Elements set in the **ZOOfilter Search** layout. Locate and open the Search Default layout assignment view for the App and Type you would like to create the form for. Following the [elements assignment](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) guide Drag & Drop the elements you would like the search form to be composed by.

>>> Only search compatible elements are supported. ZOOfilter will auto-assign them a group which will determine the [rendering layouts](#elements-groups).

In the same admin view as the Search Layouts are located the **ZOOfilter Results** layouts, those allows setting the elements that will be rendered for each filtered Item in the **Search Results** view. Access the Default one and the same way as before Drag & Drop the elements you would like to be rendered. This is a standard rendering layout, all elements rendering options are available.

Now that the layouts are set we can display the form and see it in action. Create a new ZOOfilter Module instance and assign it to the desired position. Choose the App and Type you have just set and leave the rest of options by default. You can fine tune them later by reviewing the [Module Settings](#module-settings) details. Once the module has been saved, the form should be displayed allowing to perform the filtering.

>>> Currently ZOOfilter is limited to one App and Type filtering at the same time. It is possible however to display several Modules with different configurations in the same page.

## Form Fields

The form fields are set with the elements but their rendering layouts are stored by the Module in the `modules/mod_zoofilter/tmpl/_elements` folder for each group. The layouts can be expanded adding your custom ones using that same folder.

### Elements Groups

The ZOOfilter elements groups are **Category**, **Date**, **Input**, **Option**, **Rating** and **Tag**. ZOO and ZOOlanders elements are auto-grouped, for custom elements, though, assigning a group manually is required by performing few simple [steps](#custom-elements-group).

For the elements considered part of the **Category** group (e.g. Categories), the following layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a Dropdown form field. |
| **Checkbox** | Will render a Checkbox form field. |
| **Radio** | Will render a Radio form field. |
| **Ajax** | Is used for search in categories hierarchy. Will render a Dropdown form with parent categories list. When the category is selected, the second Dropdown form with sub-categories will be displayed. |

For the elements considered part of the **Date** group (e.g. Date), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a date Input form field. |
| **Range** | Will render two date Inputs form fields for range searches. |

For the elements considered part of the **Input** group (e.g. Text), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a text Input form field. |
| **Range** | Will render two text Inputs form fields for range searches. |

For the elements considered part of the **Option** group (e.g. Checkbox, Radio), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a Dropdown form field. |
| **Checkbox** | Will render a Checkbox form field. |
| **Radio** | Will render a Radio form field. |

For the elements considered part of the **Rating** group (e.g. Rating), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Select** | Will render a Dropdown form field. |
| **Checkbox** | Will render a Checkbox form field. |
| **Radio** | Will render a Radio form field. |
| **Range** | Will render two text Inputs form fields for range searches. |

For the elements considered part of the **Tag** group (e.g. Tags), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Select** | Will render a Dropdown form field. |
| **Checkbox** | Will render a Checkbox form field. |
| **Radio** | Will render a Radio form field. |

### Custom Elements Group

If you are using custom elements and those are searchable you would need to assign them the **Group** manually in order for ZOOfilter to recognise them:

1. Open the custom element XML file and localize the `<element>` tag.
2. Add a `zfgroup` attribute with the appropriate category value and save. <br /> E.g: `<element type="textpro" zfgroup="input">`

## Results Ordering

The filtered Itesm order will be determined by the App default ordering, but optionally is possible rendering an **Order Form** in the results view for reordering the Items. In the **ZOOfilter Order** layouts, by Drag & Dropping the elements, is possible to set the ordering form options. Each element assigned represents an option and can be adapted with the following:

| Field       | Description |
| :---------- | :---------- |
| **Alternative Label** | Allows overriding the default element label displayed in the form. |
| **Value Type** | The type comparison that will be used when ordering with this value. |

>>>>> Notice that only **orderable** elements are compatible with this layout.

## Module Settings

When setting up the ZOOfilter Module form those are the settings available:

| Field       | Description |
| :---------- | :---------- |
| **Items** | The ZOO App and Type which Items will be filtered. |
| **Form Method** | The method that will be used by the Form to send the search data, **GET** or **POST**. Take into consideration that POST method does **not** support pagination between results. |
| **Show Ordering** | If enabled the Ordering Form will be displayed in the results page allowing to reorder the filtered results. |
| **Show Search Page Title** | If enabled the **Search Page Title** field value will be displayed in the results page. |
| **Search Page Title** | The search page title value. |
| **Show Submit Button** | If enabled the **Submit** button will be displayed in the search form. |
| **Show Clear Button** | If enabled the **Clean** button will be displayed in the search form allowing to clear the contents of any entered filtering criteria. |
| **Show Permalink** | If enabled **Get Permalink** option will be displayed allowing to copy the URL of the result page. |
| **Columns** | The amount of columns with which the Items will be rendered in the results view. |
| **Items per Page** | The amount of Items per page that will be displayed in the results view. |
| **Max Number of Results** | By default 1000, it will limit the amount of entries in the filter results. Any items matching the filter criteria that are beyond the limit will not be rendered. |
| **Page Layout** | The Layout that will be used for displaying the results. **Search** page will display the results using standard results display while **Json**, exclusively for custom layouts, will return the result in JSON format. |
| **Ordering Layout** | The layout that will be used to render the order form. |
| **Result Layout** | The layout that will be used to render the results view. |
| **Module Layout** | The layout that will be used to render the form. |
| **Result Page Itemid** | Allows associating the Results page with a Menu Item by appending the specified Itemid to the results page URL. |
| **Module Class Suffix** | The module class suffix, used for styling. |
