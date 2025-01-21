# Custom Icon Collection

Create and manage custom Icon Collections.

::: warning Extending YOOtheme Pro
The following guide assumes you are already familar with code, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
:::

## Add Collection

Adding a custom collection is simple as placing the collection in `media/yooessentials/icons/mycollection` for Joomla or `wp-content/yooessentials/icons/mycollection` for WordPress. The collection will be automatically picked up and displayed among other collections in the icons picker modal.

You can group the icons into subfolders for a better organization or style separation, eg `mycollection/group-a` or `mycollection/group-b`.

::: warning
Notice that a collection name cannot contain hyphens `-`, while a group name doesn't have such limitation.
:::

## Distribute Collections

If you would like to distribute your collections among other projects wrap those in a YOOtheme Pro module and plate it in a Child Theme or a plugin.

Register the collections folder by extending the `ZOOlanders\YOOessentials\Icons` service in the `bootstrap.php` file.

```php
// bootstrap.php

<?php

use ZOOlanders\YOOessentials\Icons;

return [

  'extend' => [

    Icons::class => function (Icons $icons, $app) {
      $icons->addCollectionsDir('/path/to/collections');
    }

  ]

];
```
