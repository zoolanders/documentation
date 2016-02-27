---
title: Customizations
taxonomy:
    category: docs
---

[plugin:insert-content](/_partials/elements/customizations?mediapro)

>>>>> Because of the players independent folders the MediaPro global override paths for player layouts is `media/zoo/custom_elements/mediapro/tmpl/render/{player}` where the elements will be overridden always, the `media/zoo/applications/{application}/elements/mediapro/tmpl/render/{player}` where the override will apply only when the element is used by that specific App, and the `media/zoo/applications/{application}/templates/{template}/elements/mediapro/tmpl/render/{player}` one which will apply only for the specified App Template.
The path for creating custom layouts for players is `/plugins/system/zoo_zlelements/zoo_zlelements/elements/mediapro/tmpl/render/{player}`.
For example if you were to create a **myCustom.php** layout the global override path would be `media/zoo/custom_elements/mediapro/tmpl/render/{player}/myCustom.php`.