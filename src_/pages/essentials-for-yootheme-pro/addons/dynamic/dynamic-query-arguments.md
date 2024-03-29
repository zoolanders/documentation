---
title: Dynamic Query Arguments
---

Empower core and custom sources by turning their queries arguments dynamic. {% .lead %}

YOOtheme Pro Dynamic capabilities are restricted to the elements fields and when a dynamic source is selected, its arguments are limited to static configuration. Dynamic Query Arguments breakes through that limitation and allow you to set a dynamic value to any core or custom source query argument.

{% image %}
![Dynamic Query Arguments](/assets/ytp/dynamic/dynamic-query-arguments.webp)
{% /image %}

The dynamic values are limited to Page, Global and Custom Queries with support for composing any combination of those with a Composable Source. That's intentional as it would not be possible to choose a Node Source content while that content hasn't been set yet!

---

## Custom Sources

Core sources are automatically expanded to support Dynamic Query Arguments. For custom sources, you can mark arguments individually to support dynamic values by adding a `'source' => 'true'` property to it configuration, same as how a custom element field is marked to support dynamic content.

```php
// query fields configuration
'fields' => [
    'events' => [
        'type' => [
            'listOf' => 'Events',
        ],
        'args' => [
            'timeMin' => [
                'type' => 'String',
            ],
            'timeMax' => [
                'type' => 'String',
            ]
        ],
        'metadata' => [
            'fields' => [
                'timeMin' => [
                    'label' => 'Time Min',
                    'source' => 'true',
                ],
                'timeMax' => [
                    'label' => 'Time Max',
                    'source' => 'true',
                ],
            ],
        ],
    ],
]
```
