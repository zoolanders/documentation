---
title: Customizations
taxonomy:
    category: docs
---

## Layout Overrides

Overrides are powerful for adjusting the look and feel of your store without altering the system source files. And it's straight forward by just placing the customized layout file in the appropriate Joomla! template override folder. Being the source layouts stored in **plugins/system/zoocart/zoocart/views** folder, those are the override paths for them.

| Layouts | Override path |
| :---------- | :---------- |
| **Admin** | administrator/templates/**{template}**/html/plg_system_zoocart/**{view}**/**{layout}**.php |
| **Site**  | templates/**{template}**/html/plg_system_zoocart/**{view}**/**{layout}**.php |
| **Admin partials** | administrator/templates/**{template}**/html/plg_system_zoocart/partials/**{layout}**.php |
| **Site partials** | templates/**{template}**/html/plg_system_zoocart/partials/**{layout}**.php |

Layout overrides are literally overriding another file and thats why is crucial, in order them to work, to respect the path and layout name. Let's take as example the backend Print Order view, in order to override it place the edited `print.php` layout under `templates/{template}/html/plg_system_zoocart/orders/print.php`.

>>> For elements layouts overriding consult the **Elements Documentation**.
