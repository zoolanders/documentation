# Integration

Start by displaying the filter form, assign the ZOOfilter Module to a frontend template position and set on it settings the App and Type that the filter should apply to. To form is ready to be displayed but it has no fields assigned. Let's fix that.

The form fields are assigned for each Item Type through the ZOOfilter Search layouts. Locate the Default one for the Type you have set on the ZOOfilter Module and assign the elements that should compose the form. The render options will be specific to the [element group](./elements.md#groups) and they reflect the form field rendering options.

At this point the form should display and allow filtering, but the filtering results will render no contents. The results view is similar to the Item Teaser view, and it content can be assigned through the ZOOfilter Search layouts.

The results order will be determined by the App default ordering, but is possible to render an **Order Form** for reordering. The order form fields can be set at the ZOOfilter Order layouts by assigning some orderable element.
