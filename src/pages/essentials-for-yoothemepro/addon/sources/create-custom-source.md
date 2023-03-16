---
title: Create a Custom Source
description: Learn how to create a custom multi-instance source
---

Learn how to create a Custom Multi-Instance Source. {% .lead %}

{% callout type="warning" title="Extending YOOtheme Pro" %}
The following guide assumes you are already familar with code, PHP, and [extending YOOtheme Pro](https://yootheme.com/support/yootheme-pro/joomla/developers-child-themes#extend-functionality).
{% /callout %}

---

## 1. Create the Source Main Class

Start by creating a PHP Class that extends `ZOOlanders\YOOessentials\Source\Type\AbstractSourceType` and implements
the `ZOOlanders\YOOessentials\Source\Type\SourceInterface` interface. Store it into a YOOtheme Pro Child Theme or Module.

```php
<?php

use ZOOlanders\YOOessentials\Source\Type\AbstractSourceType;
use ZOOlanders\YOOessentials\Source\Type\SourceInterface;
use ZOOlanders\YOOessentials\Source\SourceService;

class MySource extends AbstractSourceType implements SourceInterface
{
    // declare here the source types and queries
    public function types(): array;
}
```

---

## 2. Create the Source Config

Create a config file in JSON format that will specify the source configuration, store it beside the PHP class as `config.json`.

```json
{
    "name": "",
    "title": "",
    "icon": "",
    "description": "",
    "fields": {}
}
```

| Prop | Description | Required |
| ------- | -------- | :------: |
| **Name** | The source name prefixed, e.g. `mysource`. | &#x2713; |
| **Title** | The source title as should appear in the UI, e.g. `My Source`. | &#x2713; |
| **Icon** | The absolute path to the source icon. | &#x2713; |
| **Fields** | The source fields configuration. Those will hold the values of the configuration and are based on the same workflow as the [Elements Fields](https://yootheme.com/support/yootheme-pro/joomla/developers-elements). | &#x2713; |
| **Description** | The source description explaining what the source is for. |
| **Group** | Sources with the same group will be displayed under the same section in the UI. |
| **Collection** | Sources of the same collection will be displayed joined in the UI, indicating a strong relation between them. |

---

## 3. Create a Source Type Class

Create a PHP Class that specifies the source content mapping configuration, it must extend `ZOOlanders\YOOessentials\Source\GraphQL\AbstractObjectType` and implement
the `ZOOlanders\YOOessentials\Source\GraphQL\HasSourceInterface` interface. Store it beside the main class.

```php
<?php

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

## 4. Create a Source Query Class

Create a PHP Class that specifies the source content query arguments and resolving, it must extend `ZOOlanders\YOOessentials\Source\GraphQL\AbstractQueryType` and implement
the `ZOOlanders\YOOessentials\Source\GraphQL\HasSourceInterface` interface. Store it beside the main class.

```php
<?php

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

## 5. Declare the Source

Now that the classes are ready we can update the Main Class and declare it as a source.

```php
<?php

class MySource extends AbstractSourceType implements SourceInterface
{
    // update this function
    public function types(): array
    {
        return [
            new MySourceType($this),
            new MySourceQueryType($this)
        ];
    }

    ...
}
```

Declare the custom source by adding a `yooessentials-sources` key to the `config.php` or `bootstrap.php` file referencing the class.

```php
<?php

require_once __DIR__ . '/sources/MySource/MySource.php';

return [
    'yooessentials-sources' => [
        'my-source' => MySource::class
    ]
];
```
