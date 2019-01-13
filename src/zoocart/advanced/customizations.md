# Customizations

## Overrides

Overrides are powerful for adjusting the look and feel of your store without altering the system source files. And it's straight forward by just placing the customized layout file in the appropriate Joomla! template override folder. Being the source layouts stored in `plugins/system/zoocart/zoocart/views` folder, those are the override paths for them.

- Admin
  - administrator/templates/**{template}**/html/plg_system_zoocart/**{view}**/**{layout}**.php
  - administrator/templates/**{template}**/html/plg_system_zoocart/partials/**{layout}**.php
- Site
  - templates/**{template}**/html/plg_system_zoocart/**{view}**/**{layout}**.php
  - templates/**{template}**/html/plg_system_zoocart/partials/**{layout}**.php
- Elements
  - media/zoo/custom_elements/**{element}**/tmpl/render/**{layout}**.php
  - media/zoo/applications/**{application}**/elements/**{element}**/tmpl/render/**{layout}**.php

Layout overrides are literally overriding another file and thats why is crucial, in order them to work, to respect the path and layout name. Let's take as example the backend Print Order view, in order to override it assuming you are using the default **protostar** template, the edited `print.php` override path would be `templates/protostar/html/plg_system_zoocart/orders/print.php`.

## Elements Layouts
In most scenarios a simple new layout will provide that extra feature. This is the recommended way of extending the elements as you would be adding new functionalities without modifying any source code.

All elements will automatically recognize the custom layouts and offers them as an option during the layout configuration. Simply place them in the appropriate override path respecting their folder structure inside the element. For example if you were to create a `mylayout.php` layout for the PricePro element the global override path would be `media/zoo/custom_elements/pricepro/tmpl/render/mylayout.php`.

::: tip
You can always copy the elements core layouts and use them as a starting point. They are located in the `media/zoolanders/elements/{element}` folder.
:::

## Email templates

Generally it is possible to edit the email templates in the Email Templates Manager, but if you need to customize the text depending on the payment system, email type or even item type, you can add a custom plugin that will do it:

```
// register the new handler for event beforeEmailSend in the plugin:
$this->app->event->dispatcher->connect('beforeEmailSend', array($this, 'beforeEmailSendHandler'));

...

// The beforeEmailSendHandler function will change the email text
public function beforeEmailSendHandler($event) {
    $mailer = $event->getSubject();
    $order = $event['context']; // order object
    $items = $order->getItems(); // items in the order
    $type = $event['type']; // email type
    if ($type == 'order_new') { // example of the condition
        $mailer->setBody('My new email text');
    }
}
```

::: tip
If you are just looking how to customize the Order Summary you can do so by overriding its view.
:::
