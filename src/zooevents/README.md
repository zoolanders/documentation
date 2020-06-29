# Getting Started

## Installation

1. Download the package from the [ZOOlanders Site](https://www.zoolanders.com).
2. In your site go to _Joomla! Extension Manager_ and use the **Upload Package File** option to upload and install the downloaded package.

> If you have issues with the installation try the alternative **Install from Directory** method. Upload the unzipped package content into the `/tmp` folder, input the folder path and click on the Install button.

::: tip
If your site is multilingual or the main language is not English, you may want to install the INI translation files for each language. Similarly as above, [download](http://static.zoolanders.com/translations/) and install the translation packages.
:::

## Translation

You may want to install as well the INI translation files for all the languages your site should support. Similarly as in the previous section, [download the required translation packages](http://static.zoolanders.com/translations/) and install them using the _Joomla! Extension Manager_.

> Alternatively you can upload the files manually into the `administrator/language/{LANGUAGE}` folder.
## Integration

1. Create a new Events App instance and review it default settings.
2. Create a Menu Item for the ZOO app Frontpage or Category view.
3. Assign a new ZOOevents Module instance choosing the app previously created.
4. Start creating Events and/or Venues and their relations.