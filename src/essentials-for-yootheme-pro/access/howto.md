# How To

## Create a Custom Rule

Start by creating a custom Class and store it into a [child theme or a custom plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).

The class has to implement the `ZOOlanders\YOOessentials\Access\AccessRule` and declare the `group`, `name`, `namespace`, `description`, `resolve` and `fields` functions.

```php
use ZOOlanders\YOOessentials\Access\AccessRule;

class MyCustomRule implements AccessRule
{
    public function group() : string
    {
        return 'custom'; // existent groups: user, datetime, site, device
    }

    public function name() : string
    {
        return 'My Custom Rule';
    }

    public function namespace() : string
    {
        return 'yooessentials_access_mycustomrule';
    }

    public function description() : string
    {
        return 'Validates if...';
    }

    /**
     * @param \stdClass $props The settings values from the rule fields
     * @param \stdClass $node The current element node being evaluated
     */
    public function resolve($props, $node) : bool
    {
      // if (!isset($props->options) || empty($props->options)) {
      //   return true;
      // }

      // return in_array('value', $props->option);
    }

    public function fields() : array
    {
      return [
        "{$this->namespace()}.checkbox" => [
          'type' => 'checkbox',
          'description' => ''
        ],
        "{$this->namespace()}.options" => [
          'type' => 'select',
          'description' => '',
          'options' => [
            'Option 1' => '1'
          ]
        ]
      ];
    }
```

Then declare each rule by adding a `yooessentials-access-rules` key to you `config.php` if you are in a [child theme](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality) or `bootstrap.php` if you are in a [custom plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-modules) with a list of rule classes you want to add

```php
<?php

require_once __DIR__ . '/MyCustomRule.php';

return [

    'yooessentials-access-rules' => [
        MyCustomRule::class
    ]

];
```
