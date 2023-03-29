---
title: Geolocation Database
---

Geolocation rely on [MaxMind](https://www.maxmind.com/en/geoip2-services-and-databases)'s **GeoIP2** (commercial) or **GeoLite2** (free) Database. While the free version is enough for the majority of projects, the commercial one is claimed to be more accurate and frequently updated.

As per the license limitations, Essentials doesn't distribute either of them, if geolocation feature is required please proceed with the manual database installation.

---

## Database Installation

Download the chosen Database from MaxMind, previous free registration is required, and upload it to any chosen folder of your web project server. Copy the relative path to the Database file, prepend it with `~/`, and past it into the `GeoIP Database Source` field at the `Customizer -> Essentials -> Advanced` panel, e.g. `~/geoip/GeoLite2-Country.mmdb`.

{% callout title="3rd Party Plugins" %}
You can rely on 3rd party plugins for the installation and posterior updates of the Database. Once installed make sure the path to the Database is updated in Essentials settings.

- [Joomla Akeeba GeoIP Provider](https://www.akeeba.com/download/akgeoip.html)
- [WordPress Geolocation IP Detection](https://wordpress.org/plugins/geoip-detect/)
{% /callout %}

---

## Country or City Database

The **Country Database**  allows resolving IP geolocation on the continent and country level, while the **City Database** allows the same plus cities and postal code levels. The City one might seems the obvious choice, but taking into consideration that its size is considerably bigger, choose it only when necessary.
