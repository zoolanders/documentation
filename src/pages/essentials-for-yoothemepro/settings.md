---
title: Essentials Settings
pageTitle: Essentials for YOOtheme Pro Settings
---

**Essentials Settings** holds addons and global configuration. {% .lead %}

The settings are accessed at `Customizer -> Essentials` panel where, beside addons configuration, other global data and configuration is displayed. The data is stored independently from the theme in a Database table.

{% image %}
![Essentials Settings](/assets/ytp/essentials-settings.gif)
{% /image %}

---

## Storages Section

The `Customizer -> Essentials -> Storages` is the section where [Storage Instances](./storage-abstraction) are managed.

---

## Auths Section

The `Customizer -> Essentials -> Auths` is the section where the [OAuths, Keys & Secrets](./oauth-keys-secrets) are managed.

---

## Advanced Section

The `Customizer -> Essentials -> Advanced` section groups advanced options and settings that might affect the Essentials workflow.

### Addons Execution

As each addon is independent from each other, is possible disabling them individually. A disabled addon will be completely skipped from execution and is a good way to debug issues or to keep the global execution as smooth as possible.

### GeoIP Database Source

The IP Geolocation database is required to localize the device IP geographically, used for example by the **Access IP Geolocation Rule**. If required, follow the [Geolocation Database Installation](./geolocation).

### Import/Export

Being Essentials Settings independent from the Theme, the only way to backup and/or restore is using the dedicated methods within `Customizer -> Essentials -> Advanced` panel.

### Debug Data

If the support team requests it, here is where you can generate and download **Debug Data** information which includes a copy of the **Theme Settings**, **Essentials Settings**, **Sources Schema**, and the server configuration. As it might include sensitive data, be carefull who you share this with.

---

## Other Sections

### Sources Section

The `Customizer -> Essentials -> Sources` section is the [Sources Addon](./addon/sources) source instances manager.

### Global Queries Section

The `Customizer -> Essentials -> Global Queries` section is the [Sources Addon](./addon/sources) global queries manager.

### Layout Libraries Section

The `Customizer -> Essentials -> Layout Libraries` section is the [Layouts Addon](./addon/layouts) libraries manager.

### Icons Collections Section

The `Customizer -> Essentials -> Icon Collections` section is the [Icons Addon](./addon/icons) collections manager.
