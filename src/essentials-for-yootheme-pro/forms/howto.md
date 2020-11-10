# How To

## Create a Custom Action

Start by creating a custom Class and store it into a child theme or a custom plugin. The class has to implement the `ZOOlanders\YOOessentials\Form\Action` and declare the `name`, `panel` and `handle` functions.

Adding custom access rules it's a straightforward process consisting of creating a class and declare it at the `Access` service. Start by in the example create one Class for each rule and store them into individual files in the child theme or a custom plugin. The class has to implement the `ProvidesAccessRule` and declare the `resolve` and `fields` functions.

```php
<?php

namespace ZOOlanders\YOOessentials\Form\Action;

use YOOtheme\Config;
use YOOtheme\Path;
use ZOOlanders\YOOessentials\Form\Http\FormSubmissionResponse;

class MyCustomAction implements Action
{
    public function __construct(Config $config)
    {
        $config->addFile("customizer.panels.{$this->panel()}", Path::get('../action-panel.json'));
    }

    public function name() : string
    {
      return 'My Custom Action';
    }

    public function panel() : string
    {
      return 'yooessentials-form-action-custom';
    }

    /**
     * @param FormSubmissionResponse $response
     * @param callable $next
     */
    public static function handle($response, callable $next) : FormSubmissionResponse
    {
      $form = $response->submission()->form();

      if (!$form->hasAction(self::class)) {
        return $next($response);
      }

      return $next(
        $response->withData([])
      );
    }
}
```

Then declare each action by extending the `FormService` in a [YOOtheme Pro module](https://yootheme.com/support/yootheme-pro/joomla/developers-modules).

```php
use ZOOlanders\YOOessentials\Form\FormService;

require 'dir/to/MyCustomAction.php';
require 'dir/to/AnotherCustomAction.php';

return [

  'extend' => [

    FormService::class => function (FormService $formService) {
      $formService->addAction(MyCustomAction::class);
      $formService->addAction(AnotherCustomAction::class);
    }

  ]

];
```
