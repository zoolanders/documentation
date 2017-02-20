---
title: F.A.Q.
---

* [Common](#common)
* [DatePro](#datepro)
* [GoogleMapsPro](#googlemapspro)
* [ZOOcart](#zoocart)
* [ZOOcompare](#zoocompare)
* [ZOOfilter](#zoofilter)
* [ZOOlingual](#zoolingual)
* [Events](#events)
* [Widgetkit](#widgetkit)

## Common

* **What does the OpenSSL error mean on the Extensions Manager?** <br /> ZOOlanders Manager establishes a connection with zoolanders.com server using OpenSSL, but the version installed in your server is vulnerable and unsupported. It is highly recommended to update your server OpenSSL extension to the latest version in order to fix this and possible other issues you may come around. Contact your hosting support for further help about it.

* **Elements are not saved on the page, when their amount exceed a limit. It's not accepting many input variables (inputs, selects, radios, and other form fields).** <br /> You must increase the PHP max_input_vars limit in your server to a higher number. For example, max_input_vars = 5000.There is a PHP 5.3.9 patch (suhosin patch) that can make the same effect and has a similar solution. You could try it also, suhosin.post.max_vars = 5000, suhosin.request.max_vars = 5000. After applied check if Joomla is accepting the change in Joomla!->Site->System Information PHP Informaton tab. Search for the max_input_vars values, it should reflect the new one.

## DatePro

[plugin:insert-content](/elements/datepro/basics/faq)

## DownloadPro

[plugin:insert-content](/elements/downloadpro/basics/faq)

## GoogleMapsPro

[plugin:insert-content](/elements/googlemapspro/basics/faq)

## ZOOcart

[plugin:insert-content](/extensions/zoocart/basics/faq)

## ZOOcompare

[plugin:insert-content](/extensions/zoocompare/basics/faq)

## ZOOfilter

[plugin:insert-content](/extensions/zoofilter/basics/faq)

## ZOOlingual

[plugin:insert-content](/extensions/zoolingual/basics/faq)

## ZOOitem Pro

[plugin:insert-content](/extensions/zooitempro/basics/faq)

## Events

[plugin:insert-content](/apps/events/basics/faq)

## Widgetkit

[plugin:insert-content](/extensions/zoolanders/widgetkit/faq)
