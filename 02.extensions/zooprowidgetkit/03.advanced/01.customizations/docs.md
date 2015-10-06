---
title: Customizations
taxonomy:
    category: docs
---

## Customization of the widget layout

In Widgetkit 2 you don't have access to the core widgets layout. But it is possible to override some of the existing ones or create the Custom Widget, you can follow the [extending type](http://yootheme.com/widgetkit/documentation/customizing/custom-widget-plugin) guide to integrate.

 
## Custom widget position
 
If the widget you are rendering have more fields that the basics, you need to add them manually using the **Add** button below the mapping fields:

![Add custom field](1-wk-add-custom-field.png)
 
For example, if your widget has an additional "Date" field, input "Date" and press "Add" button, then you would be able to map it as the others.

## Custom mapping layout

Default Mapping layouts are placed in `/plugins/system/widgetkit_zl/plugin/renderer/item`. You can add custom layouts there. It will not be overridden by extension updating.  

