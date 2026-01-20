# Custom Icon Collection

Create and manage custom icon collections.

::: warning Extending YOOtheme Pro
This guide assumes you are already familiar with code, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
:::

## Add a Collection

Adding a custom collection is as simple as placing it in `media/yooessentials/icons/mycollection` for Joomla or `wp-content/yooessentials/icons/mycollection` for WordPress. The collection will be automatically detected and displayed alongside other collections in the icon picker modal.

Each collection requires a corresponding `mycollection.json` file inside the collection folder. This file defines the collection’s metadata and structure. The JSON file should include fields such as `name`, `title`, `description`, `groups`, `version`, and `release`.

```json
{
  "name": "mycollection",
  "title": "My Collection",
  "description": "My Custom Icon Collection",
  "groups": [
    "group-a",
    "group-b",
  ],
  "version": "1.0.0",
  "release": "July, 2025"
}
```

You can organize icons into subfolders for better structure or style separation, for example: `mycollection/group-a` or `mycollection/group-b`.

::: warning
Note that a collection name cannot contain hyphens (`-`), but group names have no such restriction.
:::

## Distribute Collections

To distribute your collections across other projects, package them in a YOOtheme Pro module and include it in a child theme or plugin.

Register the collections folder by extending the `ZOOlanders\YOOessentials\Icons` service in the `bootstrap.php` file:

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
