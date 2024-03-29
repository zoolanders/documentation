---
title: YOOtheme Pro Module Loaders
---

One of the key features of the YOOtheme Pro framework is the configuration loading. Anything in YOOtheme pro is managed
through [Modules](https://yootheme.com/support/yootheme-pro/joomla/developers-modules), and each module provides a
configuration file.

---

## Loader Classes

This file can either be a `.json` or a `.php` file, and it get parsed when the module is loaded through
the `$app->load('{module}')` call. The configuration file returns an array (or json object) where each key is parsed by
a dedicated `Loader`.

Basically, the entire list of modules and their configuration (included the child theme configuration file). is loaded,
and then the joined list of configuration options is passed through a list of classes, called `Loaders`, that read this
configuration and do something with it.

The simplest loader is something like this:

```php
// your-path/Loaders/ExampleLoader.php

class ExampleLoader
{
    public function __invoke(array $configs)
    {
        foreach ($configs as $config) {
            foreach ($config as $key => $value)
                // Do something with $key and $value
            }
        }
    }
}
```

`$configs` is the list of config files where the declared config key for this loader where found. For example, if you
have 2 modules declaring in their config file an `example` config key like this:

```php
// /module-a/bootstrap.php
return [
    'example' => [
        'foo' => 'barA',
        'test' => 'value'
    ]
];
```

```php
// /module-b/bootstrap.php
return [
    'example' => [
        'foo' => 'barB',
        'test' => 'valueB'
    ]
];
```

`$configs` would contain:

```php
[
  [
    'foo' => 'barA',
    'test' => 'value',
  ],
  [
    'foo' => 'barB',
    'test' => 'valueB'
  ]
]
```

Loaders are usually created for registering new configurations or registering new ways of doing something with your app.

In Essentials plugin, for example, we use the loaders to make it easy to add new **Access Rules** to the `Access` addon.

```php
class RuleLoader
{
    public function __invoke(Container $container, array $configs)
    {
        $container->extend(Access::class, static function (Access $access, $app) use ($configs) {
            if (!Addon::enabled(Access::class)) {
                return;
            }

            foreach ($configs as $classes) {
                foreach ($classes as $class) {
                    $access->addRule($class);
                }
            }
        });
    }
}
```

As you can see, you can inject any dependency you need from the **Dependency Injection Container** into the `__invoke` method, and they will be provided to you.

In the example, we're telling the container that when the `Access` class is created, it should be extended just after it's creation by loading any extra rule we provide in the configuration rules.

---

## Loader Registration

How does YOOtheme PRO knows which `bootstrap.php` configuration key has to be passed to which loader?
That's done through a dedicated configuration key (like a "meta loader"), called `loaders`:

```php
// /module/bootstrap.php

return [
    'loaders' => [
        'your-config-key' => new YourLoader()
    ]
]
```

Just like that, any time a `your-config-key` is found in any config file will be parsed by `YourLoader` loader. Cool eh?

If we want to be super precise, the `loaders` key accepts any `Callable` as a loader. We just think that using a callable class as a `Loader` makes things cleaner.
