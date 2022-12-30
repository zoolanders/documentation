Before going through the integration is important that you are already familiar with the [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) workflow. The {% $source %} Source is based on it with the only difference that before becoming available as a source option, an instance must be created.

1. Open the [Customizer](https://yootheme.com/support/yootheme-pro/joomla/customizer) and navigate to `Essentials -> Sources`.
1. Add a new Source of type {% $source %}.
1. Follow through the [instance configuration](#instance), then press the Save button.

{% image %}
![Source Instance Creation](/assets/ytp/sources/source-instance-creation.gif)
{% /image %}

The {% $source %} Source is now available for mapping in any Builder Element.

1. Open the Builder and add a [Gallery Element](https://yootheme.com/support/yootheme-pro/joomla/multiple-items-elements#gallery-element), or any other Multiple Items Element, to a layout.
1. Access the Element Advanced Tab settings and choose as Dynamic Content one of the [queries](#queries) from the Group {% $source %}.
1. Go back to the Element Content Tab and [map](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content#field-mapping) the content to the fields as necessary.