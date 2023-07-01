---
title: Essentials Integration
---

Essentials is in essence a plugin and has to be installed like any other Joomla or WordPress plugin. {% .lead %}

Follow through the [installation](#installation), then choose which [addons](../addons) to integrate for your current project. This will allow you to customize your experience and only use the addons that are relevant to your needs. Optionally, set up [automatic updates](#automatic-updates), to ensure that you have always the latest version.

---

## Installation

[Download](https://www.zoolanders.com/downloads) the required platform version, then follow the targeted platform installation guide, [Joomla](https://docs.joomla.org/Installing_an_extension) or [WordPress](https://wordpress.org/support/article/managing-plugins/#installing-plugins-1).

After a successful installation, a plugin named **Essentials YOOtheme Pro** (a.k.a. `yooessentials`) should be listed and enabled.

{% callout title="Installation Folder" %}
The plugin will be installed under the `plugins/system/yooessentials` for Joomla and `wp-contents/plugins/yooessentials` directory for WordPress.
{% /callout %}

---

## Updates

### Automatic Updates

New available versions will be notified in the **Joomla Extensions Update** or **WordPress Plugins** control panels. Within it, you can easily update with a one-click action considering that for the Premium version, you will have to set a [ZOOlanders Download ID](#download-id) first.

### Manual Updates

You can as well update manually by [downloading](https://www.zoolanders.com/downloads) the latest version and installing over. A previous installation will be detected and an update made instead.

---

## Upgrade to v2

Upgrading Essentials v1.x to v2.x should be planned carefully as it's a major version release only compatible with YOOtheme Pro 4.0, which is itself a new major release. Follow these steps in the given order.

1. Make a full, restorable backup of the site.

1. In the Joomla backend head over to `System > Extensions > Plugins` and **disable** the *Essentials* plugin. In WordPress head over to `Plugins` and **deactivate** *the Essentials* plugin.

1. Upgrade YOOtheme Pro to version 4.x.

1. Upgrade Essentials to version 2.x.

1. In the Joomla backend head over to `System > Extensions > Plugins` and **enable** the *Essentials* plugin. In WordPress head over to `Plugins` and **activate** *the Essentials* plugin.

Thoroughly clear all caches, and test. If anything goes wrong, restore the backup.

---

## Upgrade to Premium

The upgrade from Essentials Freemium to Premium version is as simple as [installing](#installation) the premium package without uninstalling the freemium one. The upgrade process must be done manually, after that [automatic-updates](#automatic-updates) can take over.

---

## Download ID

A ZOOlanders Download ID is an alphanumeric code created in the [ZOOlanders Download IDs section](https://zoolanders.com/account/download-ids) that is required to update the Premium version.

![Download ID](/download-id.png)

Once you have created a Download ID you must set it in your site, an action that slightly differs on each platform.

In the **Joomla Plugins** control panel locate the **ZOOlanders Installer Plugin**, then input the Download ID into the plugin settings.

In the **WordPress Global Settings** menu locate the **ZOOlanders Settings Panel**, then input the Download ID into the panel settings.
