# Common Issues

## Icon Not Displayed

An icon is correctly selected but not displayed in the layout and there is no aparent rendering error.

It could be that UIkit has been loaded twice, once by YOOtheme Pro and once again by an extension as could be **Widgetkit**. In such scenario the icons would be registered in the wrong UIkit instance and not available during the rendering.

As a solution make sure only one UIkit instance is loaded, in Widgetkit that is possible in the Global Configuration.

## Icon In HTML Not Loaded

Manually inputted icons in HTML using `uk-icon="..."` will not work because Essentials does not load them by default. To work around this, you can force the loading of the icons you plan to use. Add the following code to your child theme's `config.php` file:

```php
<?php
use ZOOlanders\YOOessentials\Icon\IconLoader;

return [
    'extend' => [
        IconLoader::class => function (IconLoader $loader, $app) {
            foreach ([
                'myicons-foo-icon',
                'mycollection-bar-icon',
                ...
            ] as $icon) {
                $loader->loadIcon($icon);
            }
        },
    ],
];
```

## My Icons Displays Broken

You have custom icons for an Icon Collection or My Icons, but when being selected in the builder the icon is displayed broken.

Most likely the source code of your SVG icon is not as clean as UIkit expects it, a tool like [SVGO](https://jakearchibald.github.io/svgomg/) should help.

## Unable to Download Collection

The process of installing a new collection within the builder fails, giving you no option but to download the collection manually.

Sometimes the servers can block petitions from other servers as for their security rules, in such download the collection from the link provided in the manager and follow the [Add Custom Collection](./custom-collection) guide.
