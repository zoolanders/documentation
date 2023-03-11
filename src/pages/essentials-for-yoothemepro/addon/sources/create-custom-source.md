---
title: Custom Multi-Instance Source
description: Learn now to create a custom Multi-Instance Source
---

Learn how to create a custom source based on the [Multi-Instance Source](./multi-instance-source) workflow. {% .lead %}

---

## Custom Content Source

Let's start by creating a `bootstrap.php` file.

```php
<?php

namespace MySourceModule;

return [
    'yooessentials-sources' => [
        'my-source' => MySource::class
    ]
];
```

and `config.json` files for our custom module.

```json
{
  "name": "my-source",
  "title": "My Source",
  "description": "My First Source.",
  "icon": "${url:icon.svg}",
  "fields": {
    "name": {
      "label": "Name",
      "description": "A name to identify this source."
    },
    ...
  }
}
```

The bootstrap registers the `MySource` class to the Sources Manager which is, among others, responsible to declare the
source types. It has to extend the `ZOOlanders\YOOessentials\Source\Type\AbstractSourceType` class and implement
the `ZOOlanders\YOOessentials\Source\Type\SourceInterface` interface.

```php
<?php

namespace MySourceModule;

use ZOOlanders\YOOessentials\Source\Type\AbstractSourceType;
use ZOOlanders\YOOessentials\Source\Type\SourceInterface;
use ZOOlanders\YOOessentials\Source\SourceService;

class MySource extends AbstractSourceType implements SourceInterface
{
    public function types(): array
    {
        return [
            new MySourceType($this),
            new MySourceQueryType($this)
        ];
    },

    public function resolve(array $args): array
    {
        $args = array_filter($args);

        // if something is wrong, emit an error event and return early
        if (!$args['required_field']) {
            Event::emit('yooessentials.error', [
                'addon' => 'source',
                'provider' => 'my-source',
                'error' => 'Something is not right'
            ]);

            return [];
        }

        $result = [];

        // resolve the query and return an array of results
        foreach ($values as $value) {
            $data = [];

            foreach ($row as $key => $value) {
                // we recommend to cleanup the fields names as
                // to ensure it follows GraphQL Schema standards
                $data[SourceService::encodeField($key)] = $value;
            }

            $result[] = $data;
        }

        return $result;
    }
}
```

The `Type` and `QueryType` are
extended [Source Type Objects](https://yootheme.com/support/yootheme-pro/joomla/developers-sources) that the Source
Manager will use to dynamically create the Types and Queries for each one of the configurations of the source set in the
Builder.

Create a `MySourceType` class which will represent the source single item type. We provide
an `ZOOlanders\YOOessentials\Source\GraphQL\AbstractObjectType` that will help you with the basics, like accessing your
source configuration.

```php
<?php

namespace MySourceModule;

use ZOOlanders\YOOessentials\Source\GraphQL\AbstractObjectType;
use ZOOlanders\YOOessentials\Source\GraphQL\HasSourceInterface;
use ZOOlanders\YOOessentials\Source\SourceService;

class MySourceType extends AbstractObjectType implements HasSourceInterface
{
    // a unique name is required for the type registration,
    // using the source config is in general a good way to do so
    public function name(): string
    {
        return 'mySource_' . sha1(json_encode($this->source->config())));
    }

    // return a standard config for the Type based
    // on the current source configuration
    public function config(): array
    {
        $fields = [];
        $config = $this->source->config();

        // apply your logic to form the Type fields
        foreach ($values as $value) {
            // we recommend to cleanup the fields names as
            // to ensure it follows Graph Schema standards
            $fields[SourceService::encodeField($value)] = [
                'type' => 'String',
                'metadata' => [
                    'label' => 'Field Label',
                    'fields' => []
                ]
            ];
        }

        return [
            'fields' => $fields,
            'metadata' => [
                'type' => true,
                'label' => $this->label(),
            ],
        ];
    }
}
```

The `MySourceQueryType` on the other hand will use the query arguments to resolve and retrieve the source data. We
provide a base `ZOOlanders\YOOessentials\Source\GraphQL\AbstractQueryType` class to help you in building a new Source
Query.

```php
<?php

namespace MySourceModule;

use ZOOlanders\YOOessentials\Source\GraphQL\AbstractQueryType;
use ZOOlanders\YOOessentials\Source\GraphQL\HasSourceInterface;
use ZOOlanders\YOOessentials\Source\SourceService;
use ZOOlanders\YOOessentials\Source\Type\Csv\CsvSource;
use ZOOlanders\YOOessentials\Source\Type\SourceInterface;

class MySourceQueryType extends AbstractQueryType implements HasSourceInterface
{
    private $mySourceType;

    public function __construct(SourceInterface $source, MySourceType $mySourceType)
    {
        parent::__construct($source);

        // declare the source type/s for use in the config
        $this->mySourceType = $mySourceType;
    }

    // a unique name for the query type,
    // we recommend using the source id
    public function name(): string
    {
        return "mySource_{$this->source()->id()}_query";
    }

    public function config(): array
    {
        return [

            'fields' => [

                $this->name() => [
                    'type' => ['listOf' => $this->mySourceType->name()],

                    'args' => [

                        'offset' => [
                            'type' => 'Int',
                        ],
                        'limit' => [
                            'type' => 'Int',
                        ]

                    ],

                    'metadata' => [
                        'group' => 'My Source',
                        'label' => $this->label(),
                        'fields' => [],
                    ],

                    'extensions' => [
                        'call' => [
                            'call' => __CLASS__ . '::resolve',
                            'args' => [
                                // is important to provide the source id
                                'source_id' => $this->source->id(),
                            ]
                        ]
                    ],

                ],

            ],

        ];
    }
}
```

That's all that is needed to create a simple Source Provider, but being it a standard YOOtheme Pro module there are no constraints on creating a more advanced and/or service-dependent one. Be creative and happy coding!
