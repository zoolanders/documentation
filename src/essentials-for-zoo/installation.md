# Installation

Download the [Essentials for ZOO](https://www.zoolanders.com/downloads) plugin and install it by following the official [Joomla extension installation](https://docs.joomla.org/Installing_an_extension) instructions. After a successful installation, a plugin named **Essentials ZOO** (a.k.a. `zooessentials`) should be listed and enabled.

::: tip Installation Folder
The plugin will be installed under the `plugins/system/zooessentials` directory.
:::

## Updating

Essentials can be updated using the platform update system. Whenever a new version of is available, you will receive a notification in the platform dashboard. Before you can update, you have to first add your Essentials Download ID.

### Download ID

An Essentials Download ID is an alphanumeric code and is created individually for each website. Without it, you won't be able to update Essentials. You can find and manage your IDs in the [Download IDs](https://zoolanders.com/account/download-ids) section of your account.

![Download ID](/assets/download-id.png)

Once obtained, set it in your site locate the **ZOOlanders Installer Plugin** and input the Download ID into it settings.

![Download ID Joomla](/assets/download-id-joomla.png)

### Minimum Stability

Choose the minimum stability for Essential updates on your site, either Stable or Beta.

| Release | Description |
| --- | --- |
| *Stable* | This release is a version which has been thoroughly tested by both our team and the community. Use it for production sites. |
| *Beta* | This release is a version which has been thoroughly tested by our team. Use it to help us test and prevent issues in the Stable release. |

Go to the Installer Options in the **Global Configuration**.

![Minimum Stability Joomla](/assets/minimum-stability.webp)

**Notice** that this option applies to all theme and extension updates.

## Upgrading to ZOO 4

Upgrading to ZOO 4 requires some considerations as well as specific steps in order to ensure a smooth transition. First of all be aware of the following deprecations:

- ZOOcart
- ZOOstats
- ZOOorder
- ZOOevents
- ZOOmailing
- ZOOcompare
- ZOOlanders Component

If the site relies on any of these extensions and there is no a suitable replacement, you should stay on ZOO 3. On the contrary make sure do uninstall them before proceeding with the upgrade.

Once those plugins are uninstalled proceed to install ZOO 4 as usual and then install Essentials for ZOO 2.

::: tip
If the upgrade has already been done without removing the deprecated plugins and that caused an unaccessible backend, proceed to manually remove the folder of the extensions by ftp. Once the access has been recovered try to uninstall the remaining within the backend.
:::

::: warning
If there is any customisations done to any of ZOOlanders Plugins make sure to update it accordingly or remove it before proceeding.
:::
