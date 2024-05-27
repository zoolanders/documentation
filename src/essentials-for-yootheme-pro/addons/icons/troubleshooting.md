# Troubleshooting

## Icons Are Not Being Displayed

An icon is correctly selected but not displayed in the layout and there is no aparent rendering issues.

It could be that UIkit has been loaded twice, once by YOOtheme Pro and once again by an extension as could be **Widgetkit**. In such scenario the icons would be registered in the wrong UIkit instance and not available during the rendering.

As a solution make sure only one UIkit instance is loaded, in Widgetkit that is possible in the Global Configuration.

## My Custom Icons Are Displayed Broken

You have custom icons for an Icon Collection or My Icons, but when being selected in the builder the icon is displayed broken.

Most likely the source code of your SVG icon is not as clean as UIkit expects it, a tool like [SVGO](https://jakearchibald.github.io/svgomg/) should help.

## Unable to Download a Collection

The process of installing a new collection withing the Customizer fails, giving you no option but to download the collection manually.

Sometimes the servers can block petitions from other servers as for their security rules, in such download the collection from the link provided in the manager and follow the [Add Custom Collection](../custom-collections/#add-collection) guide.
