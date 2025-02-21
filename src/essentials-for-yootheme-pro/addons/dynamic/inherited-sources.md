# Inherit Source

When a source is set at the element level, the options _Inherit Current Node_ and/or _Inherit Parent Node_ will appear based on the source relationship.

## Inherit Current Node

This option is available when the source is set in the same node where the field is being mapped. If the source is multi-item the node will be multiplied and the fields will inherit the data from the current iteration.

![Field Inherit Node](./assets/field-inherit-node.webp)

## Inherit Parent Node

This option is available when there is a source set in a higher-level node from where the field is being mapped. It is possible to inherit from a parent node while there is a source set in the current node, and even mix both using [composed sources](composed-sources).

![Field Inherit Parent](./assets/field-inherit-parent.webp)
