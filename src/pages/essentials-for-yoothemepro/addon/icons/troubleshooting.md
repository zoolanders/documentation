---
title: Troubleshooting
toclevel: 1
---

## Icons Are Not Being Displayed

### Context

An icon from My Icons or an Icon Collection is not displayed in the layout without aparent rendering issues. A reason is most likely because UIkit has been loaded twice, e.g once by YOOtheme Pro and again by a 3rd party extension.

### Solution

Check if there is an option to disable loading UIkit by a 3rd party extension, for example in Widgetkit that is possible in the Global Configuration.