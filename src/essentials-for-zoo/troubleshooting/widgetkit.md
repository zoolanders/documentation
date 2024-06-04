# Issues with Widgetkit

## Where are the Widgetkit 2 rendering layouts?

Widgetkit2 integration has no rendering layouts, only the content is passed to the Widget which will take care of the rendering using its core layouts.

## The elements assignment settings are not applied on Widgetkit Mapping

As a general rule the elements are not rendered but mapped to Widget fields. For example, when placing a GoogleMaps in the location position you would be mapping its location to Widget _location_ field leaving the rendering to Widget. There are some exceptions though, as the _content_ position, where the elements are rendered before passing the results to the Widget, there your assignment settings will have effect.
