---
title: Updating Essentials
---

Essentials can be updated using the Joomla or WordPress update system. {% .lead %}

Whenever a new version is available, you will receive a notification in the system dashboard. You can then download the latest version from the [downloads section](https://www.zoolanders.com/downloads) and install it over, or enable a 1-click update to semi or fully automate the process.

---

## Automatic Updates

Before you can update, you have to first [create](https://zoolanders.com/account/download-ids) and then set your Essentials Download ID in your site, an action that slightly differs on each platform.

![Download ID](/download-id.png)

In Joomla, locate the **ZOOlanders Installer Plugin**, then input the Download ID into it settings.

In WordPress, locate the **ZOOlanders Settings Panel** in Global Settings, then input the Download ID into it.

---

## Minimum Stability

Choose the minimum stability for Essentials updates on your site.

In Joomla go to the Installer Options in the **Global Configuration**, and set the minimum stability to either Stable or Beta.

In WordPress open the **ZOOlanders Settings Panel** in Global Settings and set the minimum stability to either Stable or Beta.

---

## Upgrade to Premium

The upgrade from Essentials Freemium to Premium version is as simple as [installing](#installation) the premium package without uninstalling the freemium one. The upgrade process must be done manually, after that [automatic-updates](#automatic-updates) can take over.

---

## Upgrade to v2

Upgrading Essentials v1.x to v2.x should be planned carefully as it's a major version release only compatible with YOOtheme Pro 4.0, which is itself a new major release. Follow these steps in the given order.

1. Make a full, restorable backup of the site.
1. In the Joomla backend head over to `System > Extensions > Plugins` and **disable** the *Essentials* plugin. In WordPress head over to `Plugins` and **deactivate** *the Essentials* plugin.
1. Upgrade YOOtheme Pro to version 4.x.
1. Upgrade Essentials to version 2.x.
1. In the Joomla backend head over to `System > Extensions > Plugins` and **enable** the *Essentials* plugin. In WordPress head over to `Plugins` and **activate** *the Essentials* plugin.

Thoroughly clear all caches, and test. If anything goes wrong, restore the backup.
