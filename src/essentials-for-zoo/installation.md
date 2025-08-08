# Installation

Installing Essentials for ZOO is straightforward and follows standard Joomla extension installation procedures. This guide will walk you through the complete process.

## Before You Begin

Before installing Essentials for ZOO, ensure you have:

- ✅ YOOtheme ZOO 4.0+ already installed and configured
- ✅ A valid Essentials for ZOO license
- ✅ Administrative access to your Joomla site
- ✅ PHP 7.4+ with sufficient memory (minimum 128MB recommended)

::: warning Backup First
Always create a complete backup of your site before installing any new extensions.
:::

## Installation Process

### Step 1: Download the Package

1. Log into your [ZOOlanders account](https://www.zoolanders.com/account)
2. Navigate to the [Downloads section](https://www.zoolanders.com/downloads)
3. Download the latest Essentials for ZOO package

### Step 2: Install via Joomla

1. Access your Joomla administrator panel
2. Go to **Extensions → Manage → Install**
3. Upload the downloaded package using either:
   - **Upload Package File**: Select the downloaded .zip file
   - **Install from URL**: Use the direct download link

For detailed instructions, follow the official [Joomla extension installation guide](https://docs.joomla.org/Installing_an_extension).

### Step 3: Verify Installation

After successful installation, verify these plugins are **enabled**:

| Plugin | Purpose |
| --- | --- |
| `plugins/system/zlframework` | Core framework |
| `plugins/system/zoo_zlelements` | Enhanced elements |
| `plugins/system/zooseo` | SEO features |
| `plugins/system/zooport` | Import/export |
| `plugins/system/zooaccess` | Access control |
| `plugins/system/zoofilter` | Content filtering |
| `plugins/system/zoolingual` | Multilingual support |
| `plugins/system/zootrack` | Analytics tracking |
| `plugins/system/widgetkit_zl` | Widgetkit integration |
| `plugins/system/zooessentials_source` | Core functionality |

::: tip Plugin Check
Navigate to **Extensions → Plugins** and search for "zoo" to quickly locate and verify all plugins are enabled.
:::

## Post-Installation Setup

### Configure Download ID

To receive updates, you must configure your Download ID:

1. Obtain your unique Download ID from your [ZOOlanders account](https://zoolanders.com/account/download-ids)
2. Navigate to **Extensions → Plugins**
3. Search for and open **ZOOlanders Installer Plugin**
4. Enter your Download ID in the settings
5. Save the configuration

![Download ID Configuration](/assets/download-id-joomla.png)

### Set Update Stability

Choose your preferred update channel:

1. Go to **System → Global Configuration**
2. Click on the **Server** tab
3. Find **Minimum Stability** setting
4. Choose between:
   - **Stable**: Thoroughly tested releases (recommended for production)
   - **Beta**: Latest features for testing environments

![Minimum Stability Setting](/assets/minimum-stability.webp)

## Multilingual Installation

If your site supports multiple languages:

1. Download the required [translation packages](http://static.zoolanders.com/translations/)
2. Install them via **Extensions → Manage → Install**
3. Alternatively, upload translation files manually to:
   ```
   administrator/language/{LANGUAGE_CODE}/
   ```

::: tip Contribute Translations
Help improve translations at [Transifex](https://www.transifex.com/joolanders/zoolanders/).
:::

## Troubleshooting Installation

### Common Issues

**Memory Limit Errors**
- Increase PHP memory limit to at least 128MB
- Contact your hosting provider if needed

**Plugin Not Enabled**
- Manually enable plugins via **Extensions → Plugins**
- Search for "zoo" to find all related plugins

**Download ID Issues**
- Verify the Download ID is entered correctly
- Check that your license is active
- Ensure you're using the correct Download ID for your domain

**Update Notifications Not Appearing**
- Clear Joomla cache (**System → Clear Cache**)
- Check that the ZOOlanders Installer Plugin is enabled
- Verify your Download ID configuration

### Getting Help

If you encounter issues during installation:

1. Check the [troubleshooting sections](/essentials-for-zoo/troubleshooting/seo)
2. Review the [FAQ sections](/essentials-for-zoo/addons/filter/faq)
3. Contact support through your ZOOlanders account

## What's Next?

After successful installation:

1. **[Configure SEO settings](/essentials-for-zoo/seo)** for better search engine optimization
2. **[Explore Pro Elements](/essentials-for-zoo/addons/elements/)** to enhance your content
3. **[Set up Content Filtering](/essentials-for-zoo/addons/filter/)** for better user experience
4. **[Configure Metadata](/essentials-for-zoo/metadata)** for social media integration
