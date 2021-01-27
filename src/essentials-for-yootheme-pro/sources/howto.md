# How To

## Create a Source Provider

Start by creating a custom Class and store it into a child theme or a custom plugin. The class has to implement the `ZOOlanders\YOOessentials\Source\SourceProviderInterface` and declare the `key`, `name`, `panel`, and `initSource` functions.

```php
<?php

use YOOtheme\Str;
use YOOtheme\Path;
use YOOtheme\Builder\Source;
use ZOOlanders\YOOessentials\Source\SourceProviderInterface;

class MyCustomSourceProvider implements SourceProviderInterface
{
    public function key(): string
    {
        return 'mycustomsource';
    }

    public function name(): string
    {
        return 'MyCustomSourceProvider';
    }

    public function panel(): array
    {
        // The panel configuration. Can be loaded from a file or just returned
        return [
            'width' => 450,
            'fields' => [
                'name' => [
                    'label' => 'Name'
                ],
                'some_other_param' => [
                    'label' => 'Some Other Param for your Source'
                ]
            ]
        ];
    }

    public function initSource(Source $source, array $config = []): void
    {
        // Iterate through each configuration that the user has stored in the sources for this provider,
        // and add any configuration needed to the source object
        foreach ($config as $row) {
            $source->objectType('MyCustomSourceProviderType', $myTypeConfig);
            $source->queryType($myQueryTypeConfig);
        }
    }
}
```

::: tip
The `initSource` methods works the same as [adding a dynamic content source in yootheme pro core](https://yootheme.com/support/yootheme-pro/joomla/developers-sources#add-custom-sources).
:::

Then declare each provider by adding it into a `yooessentials-sources` key of your `config.php` or `bootstrap.php` file of your [child theme](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes) or [custom plugin](https://yootheme.com/support/yootheme-pro/joomla/developers-modules).

```php
return [

    'yooessentials-sources' => [
        MyCustomSourceProvider::class
    ]

];
```
