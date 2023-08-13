---
title: Custom Collections
description: Create and manage custom Icon Collections
---

Create and manage custom Icon Collections. {% .lead %}

{% callout type="warning" title="Extending YOOtheme Pro" %}
The following guide assumes you are already familar with code, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
{% /callout %}

---

## Add Collection

Adding a custom collection is simple as placing the collection in `media/yooessentials/icons/my-collection` for Joomla or `wp-content/yooessentials/icons/my-collection` for WordPress. The collection will be automatically picked up and displayed among other collections in the icons picker modal.

{% callout %}
You can group the icons into subfolders for a better organization or style separation, eg `my-collection/group-a` or `my-collection/group-b`.
{% /callout %}

---

## Distribute Collections

If you have many projects relying on the same collections or you would like to distribute your collections among other projects, it is advisable to wrap those collections in a YOOtheme Pro module which you can place in a Child Theme or a plugin.

Place all collections inside the module and register it folder by extending the `Icons` service in the `bootstrap.php` file.

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
