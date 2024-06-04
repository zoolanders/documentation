# Customizations

## Custom Module Layouts

Creating custom layouts for ZOOitemPro is strightforward, just duplicate the Default layout file and folder and start adapting those as you needed.

::: tip
You can place your custom layouts in the Joomla Theme overriding folders.
:::

## Custom ZOO Render Layouts

The default render layouts are sometimes not enough, luckily is possible creating custom ones following the [ZOO Custom Module Layouts Guide](https://yootheme.com/support/zoo/custom-module-layouts). Notice that the guide references the `mod_zooitem` module, but the same practice can be done with the pro version changing the paths to `mod_zooitempro`.

::: tip
Changes in the `renderer` folder will be respected during updates.
:::

## Custom Elements support

In order to filter by custom elements, those must have specified the ZL Filter group _Category_, _Date_, _Input_, _Option_ or _Rating_ in the manifest declaration:

1. Open the custom element _XML_ manifest file and localize the `<element>` tag.
1. Add the `zl_filter_group` attribute with the appropriate category value.

The resultant tag should look like `<element type="{type}" zl_filter_group="{group}">`.
