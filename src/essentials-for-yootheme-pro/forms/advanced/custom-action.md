# Custom After Submit Action

Let's create a custom [After Submit Action](../../forms/actions.html) by declaring a custom Class and store it into a child theme or a custom plugin.

The class has to implement the `ZOOlanders\YOOessentials\Form\Actions\Action` interface. To make things easier, we also provide the `ZOOlanders\YOOessentials\Form\Actions\StandardAction` base class that provides some basics to start with name, configurations, etc.

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

        return $next($response->withData([]));
    }
}
```

Register each action by adding it to a `yooessentials-form-actions` key of your `config.php` or `bootstrap.php` file of your [child theme](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality) / [custom plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-modules).


```php
<?php

require_once __DIR__ . '/MyCustomAction/MyCustomAction.php';

return [

    'yooessentials-form-actions' => [
        MyCustomAction::class => __DIR__ . '/MyCustomAction/config.json'
    ]

];
```

And we're done!

Here's an example `config.json` file, but this can be any yootheme-based config file, even a `config.php` one!

```json
{
    "name": "my-custom-action",
    "title": "My Custom Action",
    "icon": "${url:~root/path/to/icon.svg}",
    "fields": {
        "fieldname_js": "${yooessentials.form.fields.fieldname_js}",
        "conditions": "${yooessentials.form.fields.action_conditions}",
        "fieldname_tags": {
            "type": "yooessentials-info",
            "content": "${yooessentials.form.fields.fieldname_tags}"
        },
        "name": {
            "label": "Action Name",
            "description": "Define a name to easily identify this action."
        },
        "foo": {
            "label": "Foo",
            "description": "An example field for you",
            "type": "text"
        }
    },
    "fieldset": {
        "default": {
            "type": "tabs",
            "fields": [
                {
                    "title": "Settings",
                    "fields": [
                        "fieldname_tags",
                        "foo",
                        "fieldname_js"
                    ]
                },
                {
                    "title": "Advanced",
                    "fields": [
                        "name",
                        "conditions"
                    ]
                }
            ]
        }
    }
}
```
