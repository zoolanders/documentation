---
title: F.A.Q.
taxonomy:
    category: docs
---

* **Where are the rendering layouts?** <br /> Widgetkit2 integration has no rendering layouts being only the content passed to the Widget which will take care of the rendering using its core layouts. It is possible though to [customize](/extensions/zoolanders/widgetkit/customizations) the Widgets.
* **Why the elements rendering settings are not applied?** <br /> It depends on the position, but the general rule is that the elements are not rendered but mapped to Widget fields. For example when placing a GoogleMaps in the location position you would be mapping it location to Widget `location` field leaving the rendering to Widget. The same goes for other elements. There are some positions though, as content, where you do can render the element and the resulting text would be passed to the Widget.
