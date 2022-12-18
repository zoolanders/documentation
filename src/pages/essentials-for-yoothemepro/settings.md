---
title: Essentials Settings
pageTitle: Essentials for YOOtheme Pro Settings
---

Essentials Settings hold most of Essentials Addons configuration under the _Essentials_ namespace of the Customizer root menu.

---

## Geolocation Database

Essentials Geolocation features rely on [MaxMind](https://www.maxmind.com/en/geoip2-services-and-databases)'s GeoIP2 (commercial) or GeoLite2 (free) Database. As per the license limitations, Essentials doesn't distribute either of them, if this feature is required please proceed with the manual installation as follows.

### Free or Commercial

While the free version is enough for the majority of projects, the commercial one is more accurate and frequently updated.

### Country or City

The _Country_ Database allows resolving IP geolocation on the continent and country level, while _City_ allows the same plus cities and postal code levels. City might seems the obvious choice but taking into consideration that its size is considerably bigger, choose it only when necessary.

### Installation

Download the chosen Database from [MaxMind](https://www.maxmind.com/en/geoip2-services-and-database), previous free registration required, and upload it to any chosen folder of your web project server. Copy the relative path to the Database file, prepend it with `~/`, and past it into `GEOIP DATABASE SOURCE` field from the `Customizer -> Essentials -> Advanced` panel, e.g. `~/geoip/GeoLite2-Country.mmdb`.

{% callout title="3rd Party Plugins" %}
You can rely on 3rd party plugins for the installation and posterior updates of the Database. Once installed make sure the path to the Database is updated in Essentials settings.

- [Joomla Akeeba GeoIP Provider](https://www.akeeba.com/download/akgeoip.html)
- [WordPress Geolocation IP Detection](https://wordpress.org/plugins/geoip-detect/)
{% /callout %}

---

## Import/Export

Being Essentials Settings independent from the Theme, the only way to backup and/or restore them is using the dedicated methods within `Customizer -> Essentials -> Advanced` panel.
