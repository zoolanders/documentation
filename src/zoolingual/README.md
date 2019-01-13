# Getting Started

## Installation

1. Download the package from the [ZOOlanders Site](https://www.zoolanders.com).
2. Enter the _Joomla! Extension Manager_ and install it through the **Upload Package File** option.

> If you have issues with the installation try the alternative **Install from Directory** method. Upload the unzipped package content into the `/tmp` folder, input the folder path and click on the Install button.

::: tip
If your site is multilingual or the main language is not English, you may want to install the INI translation files for each language. Similarly as above, [download](http://static.zoolanders.com/translations/) and install the translation packages.
:::

## Integration

Now that ZOOlingual is installed a new section under the namespace *zoolingual* will be available in the configuration of every element.

For elements with language specific content, like text or textarea, create as many copies as languages are in your site and specify to each one a language. Make sure to assign all of them to the same positions and customize the rendering if required.

For elements which values are universal, like numbers or dates, keep only one element and no languages assigned. On the layouts positions, though, assign the same element multiple times, one for each language, set the language and customize the rendering.

Repeat the process for each App and Type where translations are required.

> If the language settings are missing, make sure the ZOOlingual Plugin is enabled.

::: tip
For further information on setting a multi-lingual site with Joomla! check the [official tutorial](http://help.joomla.org/files/EN-GB_multilang_tutorial.pdf).
:::
