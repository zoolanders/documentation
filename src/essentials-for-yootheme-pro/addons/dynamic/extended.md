# Extended Dynamic Workflow

In YOOtheme Pro a dynamic content source is set on a node level, e.g. a Text element, in which case the elements fields will be enhanced with an option to map a dynamic content from the node source. Essentials expands on that notion adding the option to choose a source on an element field level regardless of the element source configuration.

With that in mind is expected that a Dynamic option will always be present above the element fields allowing to map to those any source directly.

![Field Dynamic Options](./assets/field-dynamic-options.webp)

If the mapped source content results in multiple values, those will be joined with a custom separator, or optionally left as is for the underlying element to deal with the content instead.

![Field Implode Filter](./assets/field-filter-implode.webp)

## Inherit Node

What if a source has already been set in the element! In such case, an _Inherit Node_ option will appear and you can opt to inherit the souce from the node for that field specifically.

![Field Inherit Node](./assets/field-inherit-node.webp)

## Inherit Parent

Similarly, if an upper level parent with a source is found, an _Inherit Parent_ will appear as a dynamic option.

![Field Inherit Parent](./assets/field-inherit-parent.webp)

## Page Sources

If there are source queries related to the current view, e.g. _Article_ or _Post_, those will be available as dynamic options under the _Page_ group.

![Field Page Query](./assets/field-page-query.webp)

## Global Sources

Global sources will always be available under the group _Global_, such is the _Site Source_, as well as the custom set [global queries](#global-queries).

![Field Global Query](./assets/field-global-query.webp)

## Custom Queries

If none of the dynamic options fit the use case, there is a _Custom Query_ option that allows fetching a source with a custom query.

![Field Custom Query](./assets/field-custom-query.webp)

![Field Custom Query Config](./assets/field-custom-query-config.webp)

::: warning
Custom queries might affect page loading performance as the query would be executed for each field instead of each node. When possible, set those on a node level instead.
:::

## Composed Sources

Finally, the _Composed Source_ option allows composing any dynamic options in a free-form text where sources are simple to set placeholders. As this is rather a feature reach option there is a [dedicated documentation](composed-sources) about it.

![Field Composed Source](./assets/field-composed-source.webp)
