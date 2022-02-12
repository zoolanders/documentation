# Forms

The Forms addon is encapsulated as a YOOtheme Pro Module located at `plugins/system/yooessentials/modules/form` in Joomla and `wp-content/plugins/yooessentials/modules/form` in WordPress. It's possible to extend the Form in several ways, by creating a custom form element, a custom action or even hook into several Javascript events.

## JavaScript Events

Each form triggers JavaScript events for which is possible to add listeners and perform custom actions.

### On Submit

Triggers before submission allowing to prevent the action.

```js
UIkit.ready(function() {

  // local
  UIkit.util.on('#form-id', 'form:submit', function (e) {
    // e.preventDefault();
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:submit', function (e, ctx) {
    // ctx = {form}
    // e.preventDefault();
  });

})
```

### On Submitted

Triggers after submission, preventing the action is no longer possible.

```js
UIkit.ready(function() {

  // local
  UIkit.util.on('#form-id', 'form:submitted', function (e, ctx) {
    // ctx = {response}
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:submitted', function (e, ctx) {
    // ctx = {form, response}
  });

});
```

### On Submission Error

Trigger on submission error and validation error.

```js
UIkit.ready(function() {

  // local
  UIkit.util.on('#form-id', 'form:submission-error', function (e, ctx) {
    // ctx = {error, errors, validation}
  });

  // global
  UIkit.util.on('#form-id', 'yooessentials-form:submission-error', function (e, ctx) {
    // ctx = {form, error, errors, validation}
  });

});
```


## Custom Action

Let's create a custom [After Submit Action](..../forms/actions.html).
Start by creating a custom Class and store it into a child theme or a custom plugin. The class has to implement the `ZOOlanders\YOOessentials\Form\Actions\Action` interface. To make things easier, we also provide the `ZOOlanders\YOOessentials\Form\Actions\StandardAction` base class that provides some basics to start with name, configurations, etc.

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

You then need to register each action by adding it to a `yooessentials-form-actions` key of your `config.php` or `bootstrap.php` file of your [child theme](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality) / [custom plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-modules).


```php
<?php

require_once __DIR__ . '/MyCustomAction/MyCustomAction.php';

return [

    'yooessentials-form-actions' => [
        MyCustomAction::class => __DIR__ . '/MyCustomAction/config.json'
    ]

];
```

And you're done!

Here's an example `config.json` file for your, but this can be any yootheme-based config file, even a `config.php` one!

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
