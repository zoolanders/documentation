# Recipes

## Menu Assignment

There is a case when you would like to display a pre-filtered list of Items without allowing further filtering.

1. Following the [integration guide](#integration) setup the search form.
2. Perform the desired filtering and then copy the URL of the result page.
3. Add a new Joomla! **External URL** Menu Item.
4. In the link address area paste the **URL** that you just copied.
5. Optionally remove the ZOOfilter Module.

When accessing the new created **View** the list of pre-filtered Items should be displayed.

## Search in Categories Hierarchy

In it possible to setup search in categories hierarchy using Category element and Ajax layout.

1. Add Category element to ZOOfilter Search layout. For more information check the [integration guide](#ntegration).
2. Configuring the element select Ajax layout.
3. Specify Application and Root category.

As the result a Dropdown form with parent categories list will be displayed. When the category is selected, the second Dropdown form with sub-categories will be shown.
