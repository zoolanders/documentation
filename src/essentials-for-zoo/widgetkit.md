# Widgetkit

Widgetkit integration relies on the ZOOlanders Widgetkit Plugin which must be enabled after installing the Widgetkit 2 component. Once enabled two integration options will become available: the [ZOO Pro Content Provider](#zoo-pro-content-provider) as part of the Widgetkit Widget creation and the [Widgetkit 2 Layouts](#widgetkit-2-layouts).

## ZOO Pro Content Provider

Widgetkit content provider allows setting the content in Widgetkit and use the module to output the content rendered with the selected Widget. Extending the Widgetkit2 ZOO integration, our pro version offers some extra flexibility and a more advanced field mapping.

![ZOO Pro Content Provider](./assets/widgetkit/zoopro-content-provider.png)

Depending on the Widget the available fields could not be enough. In such occasion you can add more using the Add Field input. For example, if your Widget has an additional _Date_ field, input _date_ and press the _Add_ button.

![Add custom field](./assets/widgetkit/add-custom-field.png)

Once the Fields have been defined they must be mapped to a position. This is a different concept that the one from the ZOO content provider where the mapping is done with the elements while here are the positions that are mapped. Each position has a specific role and elements can be assigned to it using the [Widgetkit Mapping Layouts](#widgetkit-mapping-layouts).

![Mapping Layouts](./assets/widgetkit/mapping-layouts.png)

## Widgetkit Mapping Layouts

The Widgetkit Mapping layouts are used to map ZOO elements to the Widget fields, in other words, letting know the Widget what ZOO elements should be used for each of its fields. There are three inbuilt layouts which can be chosen for each integration, however it's possible creating new ones.

![Select Mapping Layout](./assets/widgetkit/select-mapping-layout.png)

> The Mapping specifies the **what** but not the **how** when setting the elements, leaving the rendering up to the Widget.

As any other ZOO layout this mapping layout has several positions where the elements will be assigned. The difference relies on the rendering engine. Each position represents a Widget field to which the assigned element will be mapped. When the Widget is rendered the mapped elements will be evaluated and their content will be retrieved directly without actually rendering them. There are some exceptions, like the *content* and _custom_ positions, where the elements are first rendered and the resulting content used as the field data. Those are not compatible with any field and should be used carefully.

> The Mapping layouts can be found on the ZOO App views configuration area, under the ZOO Plugins layouts.

![Mapping Layouts](./assets/widgetkit/mapping-layouts.png)

## Widgetkit 2 Layouts

ImagePro, RelatedItemsPro, ZOOitemPro and other products have a layout called _widgetkit2_ which will render the selected Widgetkit2 Widget using the element or module content. The layout params will allow opening a Modal where the Widget and its rendering options could be set.

In case of the elements the data mapping is done programmatically on the layout it self. As for the ZOOitemPro module and the RelatedItemsPro element the mapping is done through the [Widgetkit Mapping Layouts](#widgetkit-mapping-layouts).

## Custom Mapping Layout

It's usually not necessary but in case you want to customize the Mapping layouts positions those are placed in `plugins/system/widgetkit_zl/plugin/renderer/item` folder. You should add the custom layouts there, that folder will not be overwritten by updates.

## Troubleshooting

### Where are the Widgetkit 2 rendering layouts?

Widgetkit2 integration has no rendering layouts, only the content is passed to the Widget which will take care of the rendering using its core layouts.

### The elements assignment settings are not applied on Widgetkit Mapping

As a general rule the elements are not rendered but mapped to Widget fields. For example, when placing a GoogleMaps in the location position you would be mapping its location to Widget _location_ field leaving the rendering to Widget. There are some exceptions though, as the _content_ position, where the elements are rendered before passing the results to the Widget, there your assignment settings will have effect.
