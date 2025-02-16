# Query Arguments

YOOtheme Pro Dynamic source queries arguments are limited to static configuration. Essentials breakes through that limitation and allows setting dynamic arguments opening the door for even more advanced dynamic workflows.

![Dynamic Query Arguments](./assets/dynamic-query-arguments.webp)

::: warning Obvious Limitation
The arguments dynamic options are limited to _Page_, _Global_ and _Custom_ sources. That's expected as it would not be possible to inherit dynamic content from a node which source hasn't been set yet!
:::

If you want your custom sources to support this feature, add `'source' => 'true'` property to your source query aguments configuration.

```php
// query fields configuration
'fields' => [
    'events' => [
        'type' => [
            'listOf' => 'Event',
        ],
        'args' => [
            'timeMin' => [
                'type' => 'String',
            ]
        ],
        'metadata' => [
            'fields' => [
                'timeMin' => [
                    'label' => 'Time Min',
                    'source' => 'true',
                ],
            ],
        ],
    ],
]
```
