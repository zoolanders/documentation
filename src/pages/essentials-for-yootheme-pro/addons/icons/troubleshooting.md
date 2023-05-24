---
title: Troubleshooting
toclevel: 1
---

## Icons Are Not Being Displayed

An icon is correctly selected but not displayed in the layout and there is no aparent rendering issues. {% .lead %}

It could be that UIkit has been loaded twice, once by YOOtheme Pro and once again by an extension as could be **Widgetkit**. In such scenario the icons would be registered in the wrong UIkit instance and not available during the rendering.

As a solution make sure only one UIkit instance is loaded, in Widgetkit that is possible in the Global Configuration.

---

## My Custom Icons Are Displayed Broken

You have custom icons for an Icon Collection or My Icons, but when being selected in the builder the icon is displayed broken. {% .lead %}

Most likely the source code of your SVG icon is not as clean as UIkit expects it, a tool like [SVGO](https://jakearchibald.github.io/svgomg/) should help.
