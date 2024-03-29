---
description: Learn now to create a Custom Access Condition Rule
---

# Create a Custom Condition Rule

Learn how to create a Custom Access Condition Rule.

Follow the bellow steps to create your custom rule, you can alternatively use this [rule example](https://github.com/zoolanders/ytp-condition-rules) in GitHub which includes more details and a working code. Also notice that core rules are a useful resource to get started and can be found in the `modules/condition/rules` directory relative to the [installation folder](/essentials-for-yootheme-pro/installation).

::: warning Extending YOOtheme Pro
The following guide assumes you are already familar with code, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
:::

## 1. Create the Rule Class

Start by creating a PHP Class that extends `ZOOlanders\YOOessentials\Access\AccessRule` and declares a `resolve` function. Store it into a YOOtheme Pro Child Theme or a Module.

```php
use ZOOlanders\YOOessentials\Access\AccessRule;

class MyCustomRule extends AccessRule
{
    /**
     * @param \stdClass $props The settings values from the rule fields
     * @param \stdClass $node The current element node being evaluated
     */
    public function resolve($props, $node) : bool
    {
      // return early if no configuration is set
      if (!isset($props->foo)) {
        return true;
      }

      // evaluate...
      $result = false;

      // return a boolean indicating the validation status
      return $result;
    }
```

## 2. Create the Rule Config

Create a config file in JSON format that will specify the rule configuration, store it beside the PHP class as `config.json`.

```json
{
    "name": "",
    "title": "",
    "icon": "",
    "description": "",
    "group": "",
    "collection": "",
    "fields": {}
}
```

| Prop | Description | Required |
| ------- | -------- | :------: |
| **Name** | The rule name prefixed by `yooessentials_access_`, e.g. `yooessentials_access_myrule`. | &#x2713; |
| **Title** | The rule title as should appear in the UI, e.g. `My Rule`. | &#x2713; |
| **Icon** | The absolute path to the rule icon. | &#x2713; |
| **Fields** | The rule fields configuration. Those will hold the values of the configuration and are based on the same workflow as the [Elements Fields](https://yootheme.com/support/yootheme-pro/joomla/developers-elements). | &#x2713; |
| **Description** | The rule description explaining what it validates. |
| **Group** | Rules with the same group will be displayed under the same section in the UI. |
| **Collection** | Rules of the same collection will be displayed joined in the UI, indicating a strong relation between them. |

## 3. Declare the Rule

Declare custom rules by adding a `yooessentials-condition-rules` key to the `config.php` or `bootstrap.php` file referencing the rule class and a path to it config.

```php
<?php

require_once __DIR__ . '/rules/MyCustomRule/MyCustomRule.php';
require_once __DIR__ . '/rules/MyOtherCustomRule/MyOtherCustomRule.php';

return [

    'yooessentials-condition-rules' => [
        MyCustomRule::class => __DIR__ . '/rules/MyCustomRule/config.json',
        MyOtherCustomRule::class => __DIR__ . '/rules/MyOtherCustomRule/config.json',
    ]

];
```
