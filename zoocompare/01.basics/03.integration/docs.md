---
title: Integration
taxonomy:
    category: docs
---

## First Steps

**Step 1. Set up the Type**

Please add the Compare element to the Type you would like to compare. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/extend-pre-build-types).

**Step 2. Compare element assignment**

The Compare element is used to display a button which will add the Item to the comparison list and usually you would set it in the App Teaser layout.

Assign the element to the desired layout positions and configure as needed. If you are not familiar with this process please review the [official ZOO docs](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions).

**Step 3. Set up the Chart**

The compare chart is very flexible and allows you to not just set up the Data to be compare but Headers, Groups, Tools and more.

Locate and open the `ZOOcompare Chart / Compare` layout assignment view for the App and Type you have set up in the Step 1. For detailed information please review the [ZOO Positions Assignments](http://www.yootheme.com/zoo/documentation/advanced/assign-elements-to-layout-positions) and [Chart](#chart) section.

Drag & Drop the elements you would like to be part of the comparison chart.

**Step 4. Set up the App instance**

In the App Instance Configuration search for the ZOOcompare Tab and choose the Layout and the Max Items the user can compare, leave empty if there should be no limit.

**Step 5. Set up the Module. Optional.**

Additionally you could set up the ZOOcompare Module in order to list the user selected Items for comparison. Checkout it's [section](#module) for more details about it.

**Done!**

The users can now select and compare the items!

## Chart

The ZOOcompare Chart is the comparison table used to display the Items selected by the User. It's responsive and Bootstrap based.

The `ZOOcompare Chart / Compare` layout is used to assign the elements that will be part of the Chart and can be found in the ZOO Extensions Layouts. It has two positions, **Rows** and **Toolbar**.

* **Rows**

  In this position you can place any Element which data you would like to be displayed in the comparison Chart. Each Element has it's own Rendering options, be sure to set it up as needed. It could happen that the Element has no data, in that case an alternative text could be displayed using the "If no value, render instead* field under the ZOOcompare Section.

  Additionally you can place the **Compare** Element in this position to render special rows such as **Main Header** and **Header** or even add custom ones. Checkout the [Element section](#compare-element) for more details.

* **Toolbar**

  In this position you can place only the **Compare** Element which will allow you to choose Toolbar buttons such as Download CSV, Restore Chart and Restore Hidden. Those are rendered in the Bottom of the Chart when using the Default Layout.

  Checkout the [Element section](#compare-element) for more details.
  
## Module

The Module is used to display and manage the **Items Comparison** List.

It is only possible to compare Items from the same Type/App at a time and you would need to choose it in the Module params. It is possible however to display several Modules with different configurations in the same page.

**App**

| Field       | Description |
| :---------- | :---------- |
| **App** | Allows to choose the App Instance to be used within this module. |
| **Type** | Allows to choose the Type to be used within this module. |

**Layout**

| Field       | Description |
| :---------- | :---------- |
| **Main Layout** |  Allows to choose the module display Layout. |
| **Item row Layout** | Allows to choose the Layout to be used for the Item row rendering. |
| **Style** | Allows to choose the Layout style, Vertical or Horizontal. |

**General**
 
| Field       | Description |
| :---------- | :---------- |
| **Result Page ItemId** |  Allows to choose the Joomla Menu Item to be attached to the compare link. |
| **Module Class Suffix** | Allows to set a module class suffix for specific module styling. |