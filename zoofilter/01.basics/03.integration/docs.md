---
title: Integration
taxonomy:
    category: docs
---

## Search form

ZOOfilter Search form is displayed by the *ZOOfilter Module* and controlled by the *ZOOfilter Plugin*. Currently is limited to search through one App and Type at the time.

The Form inputs are composed by the Elements in the ZOOfilter layouts.

To configure the search form please follow the next instructions:

1. Go to the ZOO/gearwheel tab/<your app>
2. Open the *ZOOfilter Search* Default layout for the Type you would like to create the Form for. 
3. Drag & Drop the elements you would like the Search Form to be composed by.

For detailed information please review the [ZOO Positions Assignments doc](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

Notice that the render layouts and params are specific for the form purpose. Only the searchable and Elements with a group are compatible with this layout. 

### Fields

ZOOfilter Form fields are composed by the Elements for whom ZOOfilter will use specific group layouts. Those layouts are stored in the **modules/mod_zoofilter/tmpl/_elements** folder, where you can even store your custom layouts.

#### Custom elements

If you are using custom elements and those are searchable you would need to assign them the Group manually for ZOOfilter to recognise them:

1. Open the custom element XML file.
2. Localize the `<element/>` tag.
3. Add a zfgroup attribute with the appropriate category value.

  Eg: `<element type="textpro" zfgroup="input">`

Save the file and done!

#### Groups

In order to apply the correct field layout to each Element ZOOfilter groups them into *Category, Date, Input, Option, Rating* and *Tag*. When an Element is assigned to a position of the *Search Layout* the Group specific layout will appear as options.

**Category**

For the Elements considered part of the Category group (e.g. Categories), the following layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a Dropdown form field.
| **Checkbox** | Will render a Checkbox form field.
| **Radio** | Will render a Radio form field.
| **Ajax** | Is used for search in categories hierarchy. Will render a Dropdown form with parent categories list. When the category is selected, the second Dropdown form with sub-categories will be displayed.

**Date**

For the Elements considered part of the Date group (e.g. Date), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a date Input form field.
| **Range** | Will render two date Inputs form fields for range searches.

**Input**

For the Elements considered part of the Input group (e.g.Text), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a text Input form field.
| **Range** | Will render two text Inputs form fields for range searches.

**Option**

For the Elements considered part of the Option group (e.g. Checkbox, Radio), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Default** | Will render a Dropdown form field.
| **Checkbox** | Will render a Checkbox form field.
| **Radio** | Will render a Radio form field.

**Rating**

For the Elements considered part of the Rating group (e.g. Rating), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Select** | Will render a Dropdown form field.
| **Checkbox** | Will render a Checkbox form field.
| **Radio** | Will render a Radio form field.
| **Range** | Will render two text Inputs form fields for range searches.

**Tag**

For the Elements considered part of the Tag group (e.g. Tags), next layouts are available:

| Field       | Description |
| :---------- | :---------- |
| **Select** | Will render a Dropdown form field.
| **Checkbox** | Will render a Checkbox form field.
| **Radio** | Will render a Radio form field.

## Results displaying

You can set up the view of the results page in the **"ZOOfilter Result"** layout. The procedure is the same as for the Search layout.

Drag & Drop the elements you would like the results page to be composed by. You can place any Element here. 

For detailed information please review the [ZOO Positions Assignments doc](http://yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

## Results ordering

**Order layout** is used for the order form rendered in the search results view (if required). It would allow to reorder the results by this element value. Notice that not all elements are compatible with this layout, only the ones that are orderable.

For each element you can set:

| Field       | Description |
| :---------- | :---------- |
| **Alternative Label** | allows to override the default element label displayed in the order form.
| **Value Type** | allows to choose which type comparison should be used when ordering with this value.

**By default** the results ordering is specified by the application ordering settings.

## ZOOfilter Module

The Module is used to display the Search Forms.

It is only possible to filter Items from the same Type/App at a time and you would need to choose it in the Module params. It is possible however to display several Modules with different configurations in the same page.
 
| Field       | Description |
| :---------- | :---------- |
| **Items** | allows to choose the ZOO App and Type which Items will be filtered.
| **Form method** | allows to choose the method that will be used by the Form to send the search data.<p>- **GET** Recommended.</p><p>- **POST** This method does NOT support pagination between results.</p>
| **Show Ordering** | allows to choose if the Ordering Form should be displayed in the results page. If enabled it will allow the users to reorder the filtered results.
| **Show search page title** | allows to choose if the Page Title should be displayed in the results page. If enabled it will allow the users to reorder the filtered results. See Search page title below.
| **Show Submit Button** | allows to choose if the Submit button should be displayed in the search form.
| **Show Clear Button** | allows to choose if the Clean button should be displayed in the search form. The button allows to clear the contents of any presently entered filtering criteria.
| **Show Permalink** | allows to display the link "Get permalink for this search". When click you will be able to copy the URL of the result page.  
| **Search page title** | allows to set the Search page title. See previous Show search page title.
| **Columns** | allows to choose the amount of columns with which will be rendered the Items in the results view.
| **Items Per Page** | allows to choose the amount of Items per page that will be displayed in the results view.
| **Max number of results** | allows to set a maximum number of results to display. 1000 (default) will display up to 1000 results/entries in the filter results. Any items matching the filter criteria that are beyond 1000 will not be rendered. You can set this to any valid integer.
| **Page Layout** | allows to set the type of Page Layout for the results page:<p>- **Search** (default) will display the results using standard results display</p><p>- **Json** will return the JSON (code) result of the filtering operation. This option is meant for custom results layouts.</p><p>- **Search_uikit** will display the results using UIkit results display</p>
| **Ordering Layout** | allows to choose the Order Layout that will be used to render the order form.
| **Result Layout** | allows to choose the Result Layout that will be used to render Items in the results view.
| **Module Layout** | allows to choose the Search Layout that will be used to render the form.
| **Result Page Itemid** | allows to set a specific Itemid on the results page.
| **Module Class Suffix** | allows to set a module class suffix for specific module styling.|

## Menu Assignment

There is a case when you would like to display a prefilter list of ZOO items, without letting them actually refilter the list. ZOO doesn't come with that ability, and it might not be obvious, but with the ZOOfilter extension you CAN do that, and relatively easily:

1. Following the configuration guide setup the search form and results page. Set up and display a list of Items filtered as desired. Then copy the URL of the result page.
2. Add a new Menu Item as usual in Joomla.
3. From the available Menu Types select **External URL**.
4. In the link address area, paste the URL that you copied in the point 1.
5. Save your new menu item.
