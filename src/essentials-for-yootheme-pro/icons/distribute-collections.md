# Distribute Collections

If you want to reuse your custom icon collections across projects, place them into a plugin folder and specify the path by extending the `Icons` class.

```php
<?php

use ZOOlanders\YOOessentials\Icons;

return [

  'extend' => [

    Icons::class => function (Icons $icons, $app) {
      $icons->addCollectionsDir('/dir/to/myplugin/collections');
    }

  ]

];
```
