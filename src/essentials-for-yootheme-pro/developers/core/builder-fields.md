# Fields

YOOtheme Pro allows adding new fields to the builder. These fields can be used to add new input methods for the
administrator in the backend of the Customizer.

For example, you can add a new field to avoid having to use a `select` field or a `text` field.

### Creating a new Field

A field is a new VueJs component that deals with the input. Here's a simple example from our codebase that adds a new `number` field, for example in `module/assets/number.vue`

```vue

<template>
  <input v-model="val" v-bind="attributes" class="uk-input" type="number">
</template>

<script>

let {FieldText} = window.$fields || {}
let {isNumeric, toFloat} = window.UIkit;

export default {

  // We're extending the default text field from YOOtheme Pro
  extends: FieldText,

  computed: {

    mod() {
      return toFloat(this.field.modifier || 0);
    },

    val: {

      get() {
        return isNumeric(this.value) ? toFloat(this.value) + this.mod : this.value;
      },

      set(value) {
        this.value = isNumeric(value) ? toFloat(value) - this.mod : undefined;
      }

    }

  }
};

</script>
```

You will need to then register this field so that it can be used as any other field.
The naming of the field is quite strict: `FieldYooessentials[YourName]` to use is as a `your-name` field

```js
// modules/assets/customizer.js

import Number from './number.vue';

// the name of the field
window.$fields.FieldYooessentialsNumber = Number;
```

Of course, being a VueJs field, this needs to be compiled using a preprocessor tool like [Rollup](https://rollupjs.org/guide/en/)

Once this javascript code has been compiled, for example into a `module/assets/customizer.min.js` file, you can load that javascript using the standard [YOOtheme Pro Asset Loading](https://yootheme.com/support/yootheme-pro/joomla/developers-modules#add-asset-files) using the `customizer.init` event

```php
// config.php

include_once __DIR__ . '/src/AssetsListener.php';

return [

    'events' => [

        'customizer.init' => [
            AssetsListener::class => ['initCustomizer', -10]
        ]

    ]

];
```

```php
// src/AssetListener.php

use YOOtheme\Metadata;

class AssetsListener
{
    public static function initCustomizer(Metadata $metadata)
    {
        // Script file
        $metadata->set('script:your-module-fields', ['src' => 'assets/customizer.min.js', 'defer' => true]);
    }
}
```


And now, this new field can be used in any YOOtheme configuration!

```json
{
  ...,
  "fields": {
    "counter": {
        "label": "Example",
        "description": "A description text.",
        "type": "number"
    },
    ...
}
```
