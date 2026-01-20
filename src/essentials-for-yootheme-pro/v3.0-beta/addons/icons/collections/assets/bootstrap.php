<?php

namespace ZOOlanders\YOOessentials\Icon;

return [
    'extend' => [
        IconLoader::class => function (IconLoader $loader, $app) {
            $loader->registerCollections('~yooessentials/modules/icon-collections/*/*.json');
        },
    ],
];
