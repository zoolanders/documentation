# Updating

Essentials can be updated manually in a similar way it was installed, or programmatically by the platform. When the latest, make sure to set the Download ID and choose the right minimum stability, either Stable or Beta.

## Download ID

An Essentials Download ID is a unique alphanumeric code generated for each website. It is required to update Essentials. You can find and manage your Download IDs in the [Download IDs](https://zoolanders.com/account/download-ids) section of your account.

![Download ID](/assets/download-id.png)

Once obtained, set it in your site, an action that slightly differs for each platform.

::: details Joomla
Locate the **ZOOlanders Installer Plugin** and input the Download ID into it settings.

![Download ID Joomla](/assets/download-id-joomla.png)
:::

::: details WordPress
Locate the **ZOOlanders Settings Panel** in Global Settings, then input the Download ID into it settings.

![Download ID WordPress](./assets/essential-settings-wordpress.png)
:::

## Minimum Statbility

| Release | Description |
| --- | --- |
| *Stable* | This release is a version which has been thoroughly tested by both our team and the community. Use it for production sites. |
| *Beta* | This release is a version which has been thoroughly tested by our team. Use it to help us test and prevent issues in the Stable release. |

::: details Joomla
In Joomla go to the Installer Options in the **Global Configuration**.

![Minimum Stability Joomla](/assets/minimum-stability.webp)

**Notice** that this option applies to all theme and extension updates.
:::

::: details WordPress
In WordPress go to the **ZOOlanders Settings Panel** in Global Settings.

![Minimum Stability WordPress](./assets/essential-settings-wordpress.png)
:::

## Updating Major Release

When updating Essentials v1.x to v2.x, or v2.2 to v2.3, plan carefully as those version introduce major changes and have specific compatibility with YOOtheme Pro. In order to properly update, follow these steps in the given order.

1. Make a full, restorable backup of the site.
1. Head over to _System > Plugins_ and disable the _Essentials_ plugin.
1. Upgrade YOOtheme Pro to latest stable version.
1. Upgrade Essentials to latest stable version.
1. Head over to the plugins manager and enable back the _Essentials_ plugin.

Thoroughly clear all caches, and test. If anything goes wrong, restore the backup and reach out support.

## Upgrading Essentials

The upgrade from Essentials Freemium to Premium version is as simple as [installing](./installation) the premium package without uninstalling the freemium one. The upgrade process must be done manually, after that automatic updates will take over.
