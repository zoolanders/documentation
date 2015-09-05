---
title: Overrides
taxonomy:
    category: docs
---

Overrides are powerful for adjusting the look and feel of your store without altering the system source files. And it's straight forward by just placing the customized layout file in the appropriate Joomla! template override folder. Being the source layouts stored in `plugins/system/zoocart/zoocart/views` folder, those are the override paths for them.

| Layouts | Override paths |
| :---------- | :---------- |
| **Admin** | administrator/templates/**{template}**/html/plg_system_zoocart/**{view}**/**{layout}**.php <br /> administrator/templates/**{template}**/html/plg_system_zoocart/partials/**{layout}**.php|
| **Site**  | templates/**{template}**/html/plg_system_zoocart/**{view}**/**{layout}**.php <br /> templates/**{template}**/html/plg_system_zoocart/partials/**{layout}**.php |
| **Elements**  | media/zoo/custom_elements/**{element}**/tmpl/render/**{layout}**.php <br /> media/zoo/applications/**{application}**/elements/**{element}**/tmpl/render/**{layout}**.php |

Layout overrides are literally overriding another file and thats why is crucial, in order them to work, to respect the path and layout name. Let's take as example the backend Print Order view, in order to override it assuming you are using the default **protostar** template, the edited `print.php` override path would be `templates/protostar/html/plg_system_zoocart/orders/print.php`.

>>> For more information about elements overriding consult the [Elements Documentation](/zoolanders/advanced/elements).
