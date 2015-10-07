---
title: Integration
taxonomy:
    category: docs
---

Once **Widgetkit ZOOlanders** is installed the new content type will be available in the dropdown list during creating new widget in Widgetkit component:
 
![New content type in Widgetkit component](1-new-content-type.png)

## New features of Widgetkit ZOOPro content type

in WK ZOO Pro we are mapping **positions** instead of the ZOO Type elements to the widget fields:
 
![Assign position](4-assign-position.png)
 
The Content positions can render HTML, so it is possible to put there a lot of content in the position.
 
If there are some extra elements that don't fit into any of the default positions there are extra Custom positions in Mapping layouts (custom 1-5). 

## Mapping layouts

**Widgetkit ZOOlanders** has it's own Mapping render layouts that allows to configure the elements for each widget position. As you would do with any other render layout, just Drag and Drop the desired elements to the appropriate position.

![Mapping layouts](2-mapping-layouts.png)

Select the particular layout during creating widget:

![Mapping select layouts](3-mapping-select-layout.png)

Mapping is not rendering, you are only telling Widgetkit what Elements you want him to use, but not how to display them. Instead use Widgetkit render options when setting the Widget.

>>>> The Mapping is not a layout, so you can't choose any display setting available in the element. All that is ignored and only the raw element value is passed to Widgetkit.