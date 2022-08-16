# Custom Action

Actions are very handy to customize the workflow of a form, add extra validation, append or change data on the fly, or send it to a 3rd party service... is the heart of the submission workflow and you have the wheel. So let's take control and create a custom [After Submit Action](../../forms/actions.md).

An Action is a `Class` extending a `StandardAction` and executed during the after-submission process, let's declare it in a YOOtheme Pro Module, if you are not familiar with those please review [YOOtheme Pro Documentation](https://yootheme.com/support/yootheme-pro/joomla/developers-modules) first.

```php
<?php

namespace YourNameSpace;

use ZOOlanders\YOOessentials\Form\Actions\StandardAction;
use ZOOlanders\YOOessentials\Form\Http\FormSubmissionResponse;

class MyCustomAction extends StandardAction
{
    public function __invoke(FormSubmissionResponse $response, callable $next) : FormSubmissionResponse
    {
        // This is the `Form` class. It holds all the form configurations
        $form = $response->submission()->form();

        // This is the user submitted data
        $data = $response->submission()->data();

        // by calling $next() the next action in queue will
        // be exexuted recieving the altered response
        return $next($response->withData([]));
    }
}
```

Besides a `Class`, each Action requires a `config.json` or `config.php` file that will declare the name, icon, and fields of the action for its configuration. Here's an example that is very similar to that of an `element.json` as is based on the same config creation workflow.

```json
{
    "name": "my-custom-action",
    "title": "My Custom Action",
    "icon": "${url:~root/path/to/icon.svg}",
    "fields": {
        "name": {
            "label": "Action Name",
            "description": "A name to identify this action."
        },
        "foo": {
            "label": "Foo",
            "description": "An example field for you"
        }
    }
}
```

Finally, each action must be registered by adding a reference to the `Class` and `Config` to the `yooessentials-form-actions` key of the `config.php` or `bootstrap.php` file of a [child theme](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality) or [plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-modules).


```php
<?php

require_once __DIR__ . '/MyCustomAction/MyCustomAction.php';

return [

    'yooessentials-form-actions' => [
        MyCustomAction::class => __DIR__ . '/MyCustomAction/config.json'
    ]

];
```

## Example Actions

The example actions on [GitHub](https://github.com/joolanders/ytp-form-actions) demonstrates with more details this workflow, simply download the repository and follow the Getting Started guide.

## Included Actions

Essentials core actions are a useful resource to get started when creating a custom action. They can be found in the `modules/form-actions` directory of the Essentials Package.
