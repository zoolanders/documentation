# Create an Access Condition Rule

Learn how to create a **Custom Rule** with a PHP Class, a config file, and an icon. {% .lead %}

Once the class is declared it will become available as part of [Access Condition](./condition) rules.

{% callout type="warning" title="Extending YOOtheme Pro" %}
The following guide assumes you are already familar with code, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
{% /callout %}

---

## 1. Create a Rule Class

Start by creating a PHP Class that extends `ZOOlanders\YOOessentials\Access\AccessRule` and declares a `resolve` function. Store it into a Child Theme or a Custom Plugin.

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

---

## 2. Create a Rule Config

Create a config file in JSON format that will specify the rules configuration, store it beside the PHP class.

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

---

## 3. Declare the Rule

Declare custom rules by adding a `yooessentials-access-rules` key to the `config.php` or `bootstrap.php` file referencing the rule class and a path to it config.

```php
<?php

require_once __DIR__ . '/rules/MyCustomRule/MyCustomRule.php';
require_once __DIR__ . '/rules/MyOtherCustomRule/MyOtherCustomRule.php';

return [

    'yooessentials-access-rules' => [
        MyCustomRule::class => __DIR__ . '/rules/MyCustomRule/config.json',
        MyOtherCustomRule::class => __DIR__ . '/rules/MyOtherCustomRule/config.json',
    ]

];
```
