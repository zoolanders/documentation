---
title: Customizations
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

## Custom Layouts

In most scenarios a simple new layout will provide that extra feature your project requires. This is the recommended way of extending the elements as you would be adding new files without modifying or overriding any core ones.

All elements would automatically recognize the custom layouts and offers them as an option during the layouts configuration. Placing your custom layouts in the override folders, mentioned in the previous section, is the best practice keeping them that way separated from the core files.

For example if you were to create a **myCustom.php** layout the global override path would be `media/zoo/custom_elements/**{element}**/tmpl/render/myCustom.php`. Some elements even supports custom edit layouts, meaning you could set your own layout for the **Edit** or **Submissions** views!

>>>>> When creating or overriding sublayouts, if any, remember to respect the path. E.g: `.../**{element}**/tmpl/render/default/_sublayouts/myCustom.php`.

