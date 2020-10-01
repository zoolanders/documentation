# How-To

## Distribute Icons Collections

If you want to reuse your [icons collections](../in-depth/icons.html#custom-collections) across projects, place them into a plugin folder and specify the path to them by extending the `Icons` class.

```php
<?php

use ZOOlanders\YOOessentials\Icons;

return [

  'extend' => [

    Icons::class => function (Icons $icons, $app) {
        $icons->addCollectionsDir('/dir/to/myplugin/collections');
    },

  ]

];
```

## Create Custom Access Rules

Adding custom access rules it's a straightforward process consisting of creating a Custom Rule Provider class and declare it at the `Access` service. Like in the example create one Class for each rule and store them into individual files in the child theme or a custom plugin. The class has to implement the `ProvidesAccessRule` and declare the `resolve` and `fields` functions.

```php
use ZOOlanders\YOOessentials\Access\ProvidesAccessRule;

class MyCustomRuleProvider implements ProvidesAccessRule
{
  /**
   * Preflight actions, Dependency Injectable
   */
  public function __construct() {}

  /**
   * @param $node The element node currently being evaluated
   * @return Boolean
   *
   * Resolves to a truthy or falsy value to indicate if the current
   * element should be rendered.
   */
  public function resolve($node)
  {
    return true;
  }

  /**
   * @return array
   *
   * An array of fields configuration for the rule that will
   * be displayed in the Builder panel.
   */
  public function fields()
  {
    return [
      [
        'label' => 'My Custom Rule',
        'type' => 'group',
        'divider' => true,
        'description' => 'The rule will validate if...',
        'fields' => [
          'yooessentials_access_mycustomrule.state' => [
            'label' => 'State',
            'description' => 'The rule will only take effect if is enabled.',
            'text' => 'Enable',
            'type' => 'checkbox'
          ],
          'yooessentials_access_mycustomrule.condition' => [
            'label' => 'Condition'
          ]
        ]
      ]
    ];
  }
}
```

Then declare each rule by extending the `Access` service.

```php
use ZOOlanders\YOOessentials\Access;

require 'dir/to/MyCustomRuleProvider.php';
require 'dir/to/MyOtherCustomRuleProvider.php';

return [

  'extend' => [

    Access::class => function (Access $access) {
      $access->addProvider(MyCustomRuleProvider::class);
      $access->addProvider(MyOtherCustomRuleProvider::class);
    }

  ]

];
```
