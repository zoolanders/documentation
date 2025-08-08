# Installation

Download the [Essentials for ZOO](https://www.zoolanders.com/downloads) package and install it by following the official [Joomla extension installation](https://docs.joomla.org/Installing_an_extension) instructions. After a successful installation the following plugins should be listed and enabled.

- `plugins/system/zlframework`
- `plugins/system/zoo_zlelements`
- `plugins/system/zooseo`
- `plugins/system/zooport`
- `plugins/system/zooaccess`
- `plugins/system/zoofilter`
- `plugins/system/zoolingual`
- `plugins/system/zootrack`
- `plugins/system/widgetkit_zl`
- `plugins/system/zooessentials_source`

## Translation

If your site is multilignual, you may want to install the INI translation files for the needed languages. Similarly [download the required translation packages](http://static.zoolanders.com/translations/) and install them using the _Joomla! Extension Manager_ or upload the files manually into the `administrator/language/{LANGUAGE}` folder.

::: tip
If a language is missing or incomplete, you can contribute to the translation at [Transifex](https://www.transifex.com/joolanders/zoolanders/).
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

| Release  | Description                                                                                                                              |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| _Stable_ | This release is a version which has been thoroughly tested by both our team and the community. Use it for production sites.              |
| _Beta_   | This release is a version which has been thoroughly tested by our team. Use it to help us test and prevent issues in the Stable release. |

Go to the Installer Options in the **Global Configuration**.

![Minimum Stability Joomla](/assets/minimum-stability.webp)

**Notice** that this option applies to all theme and extension updates.
