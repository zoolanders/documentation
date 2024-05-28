---
description: Create a custom After Submit Action
---

# Custom Form Action

Learn how to create an [After Submit Action](../after-submit-actions).

Follow the bellow steps to create your first action, you can alternatively use this [action example](https://github.com/zoolanders/ytp-form-actions) in GitHub which includes more details and a working code. Also notice that core actions are a very useful resource to get started and can be found in the `modules/forms/actions` directory relative to the [installation folder](/essentials-for-yootheme-pro/installation).

::: warning Extending YOOtheme Pro
The following guide assumes you are already familar with coding, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
:::

## 1. Create the Action Class

An Action is a `Class` extending a `StandardAction` and executed during the after-submission process, let's declare it in a YOOtheme Pro Module. If you are not familiar with those please review [YOOtheme Pro Documentation](https://yootheme.com/support/yootheme-pro/joomla/developers-modules) first.

```php
// myaction/MyAction.php
<?php

namespace MyActionNameSpace;

use ZOOlanders\YOOessentials\Form\Action\StandardAction;
use ZOOlanders\YOOessentials\Form\Action\ActionConfigurationException;
use ZOOlanders\YOOessentials\Form\Http\FormSubmissionResponse;

class MyAction extends StandardAction
{
    public function __invoke(FormSubmissionResponse $response, callable $next) : FormSubmissionResponse
    {
        // This is the `Form` class. It holds all the form configurations
        $form = $response->submission()->form();

        // This is the user-submitted data
        $data = $response->submission()->data();

        // This is the action configuration, any dynamic setting has already been resolved
        $config = (object) $this->getConfig();

        // validate configuration
        if (!$config) {
            throw ActionConfigurationException::create($this, 'Config Error Message', $e);
            // or throw new \Exception('Error Message...');
        }

        // by calling $next() the next action in queue will
        // be executed receiving the altered response
        return $next($response->withData([]));
    }
}
```

Both the action configuration (inputed by the Developer) as the action data (submitted by the User) can be validated during runtime by throwing a proper Exception.

Any `Exception` thrown during the action execution will stop the entire actions chain, with the difference that the `ActionConfigurationException` error will be visible only while in the Customizer giving a hint what action has triggered the error. Use it to warn the integrator that some configuration is wrong or missing.

## 2. Create the Action Config

Besides a `Class`, each Action requires a `config.json` or `config.php` file that will declare the name, icon, and fields of the action for its configuration. Here's an example that is very similar to that of an `element.json` as is based on the same config creation workflow.

```json
// myaction/config.json
{
    "name": "my-action",
    "title": "My Action",
    "icon": "${url:~root/path/to/icon.svg}",
    "fields": {
        "name": {
            "label": "Action Name",
            "description": "A name to identify this action."
        },
        "foo": {
            "label": "Foo",
            "description": "..."
        }
    }
}
```

## 3. Declare the Action

Finally, each action must be registered by adding a reference to the `Class` and `Config` to the `yooessentials-form-actions` key of the `config.php` or `bootstrap.php` file of a [child theme](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality) or [plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-modules).

```php
<?php

require_once __DIR__ . '/myaction/MyAction.php';

return [

    'yooessentials-form-actions' => [
        MyAction::class => __DIR__ . '/myaction/config.json'
    ]

];
```
