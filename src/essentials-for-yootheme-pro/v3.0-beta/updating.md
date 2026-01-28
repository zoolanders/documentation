# Updating

Keep your Essentials installation up-to-date with the latest features and security improvements. You can update manually, use one-click updates, or set up automatic background updates through your platform.

::: tip
Before making any updates perform a **full backup** of your site and make sure the backup is recoverable.
:::

## Update Manually

Manual updates allow you to download and install Essentials updates directly from your site without relying on automatic update systems. This method gives you full control over when updates are applied and is useful for sites with restricted server permissions or custom hosting environments.

### Download

1. Log in to your [ZOOlanders account](https://zoolanders.com/account)
1. Go to **Downloads**
1. Find **Essentials YOOtheme Pro** targeted release
1. Click **Download** to save the release `.zip` file

### Install

::: details Joomla

1. Log in to your Joomla admin panel
1. Navigate to `System → Install → Extensions`
1. Under **Upload Package File**, click **Browse** and select the downloaded `.zip` file
1. Click **Upload & Install**
1. Once installation is complete make sure the plugin is enabled
:::

::: details WordPress

1. Log in to your WordPress admin dashboard
1. Go to `Plugins → Add New Plugin`
1. Click **Upload Plugin** at the top
1. Click **Choose File** and select the downloaded `.zip` file
1. Click **Install Now**, confirm when prompted about overriding current
1. Once installation is complete make sure the plugin is active
:::

### Verify

1. **Check version number** - Confirm Essentials shows the new version number in your admin panel
2. **Test functionality** - Verify your site works correctly (forms, dynamic content, etc.)
3. **Clear caches** - Clear all site and browser caches
4. **Monitor for errors** - Check error logs for any issues over the next few hours

::: tip
If you encounter issues after a manual update, restore your backup and contact support with error details from your site logs.
:::

## Update Automatically

One-click updates allow you to manually trigger updates with a single click from your site's admin panel. Both Joomla and WordPress can be configured to check for and install the latest Essentials updates with minimal effort.

Before using one-click updates, ensure to:

<!-- 1. **A valid Download ID** from your ZOOlanders account - required for authentication and update verification
2. **The correct minimum stability setting** - determines which release versions to receive (Stable for production sites) -->

### Set Your Download ID

![Download ID](./assets/download-id.png)

An Essentials Download ID is a unique alphanumeric code generated for each website. It authenticates update requests and is required for automatic updates to function.

1. Log in to your [ZOOlanders account](https://zoolanders.com/account)
1. Navigate to [Download IDs](https://zoolanders.com/account/download-ids)
1. Copy your Download ID from your website entry (or generate a new one as needed)
1. Configure it in your platform's settings.

::: details Joomla

1. Log in to your Joomla admin panel
2. Navigate to `System → Update → Update Sites`
3. Find `Essentials YOOtheme Pro` in the list
4. Click to edit it and paste your Download ID in the designated field
5. Save the changes

![Download ID Joomla](./assets/download-id-joomla.png)
:::

::: details WordPress

1. Log in to your WordPress admin dashboard
2. Go to `Settings → Global Settings` (or the top-level settings menu)
3. Locate the **ZOOlanders** panel/section
4. Paste your Download ID in the provided field
5. Click **Save Changes**

![Download ID WordPress](./assets/download-id-wordpress.png)
:::

### Set Minimum Stability Level

The minimum stability setting determines which types of releases your site receives.

| Release | When to Use | Testing |
| --- | --- | --- |
| **Stable** | Production sites in live environments | Thoroughly tested by both our team and the community |
| **Beta** | Development/testing sites or early adopters | Tested by our team; helps identify issues before stable release |

::: details Joomla

1. Log in to your Joomla admin panel
2. Go to `System → Global Configuration`
3. Open the **Installer** tab
4. Set **Minimum Stability** to your preferred level

![Minimum Stability Joomla](./assets/minimum-stability.webp)

**Important:** This setting applies to *all* extension and theme updates on your Joomla site, not just Essentials.
:::

::: details WordPress

1. Log in to your WordPress admin dashboard
2. Go to `Settings → Global Settings`
3. Find the **ZOOlanders** panel
4. Select your preferred **Minimum Stability** level
5. Click **Save Changes**

![Minimum Stability WordPress](./assets/download-id-wordpress.png)

This setting affects only Essentials updates on your WordPress site.
:::

### Trigger Update

Navigate to `System → Update Manager` in Joomla or `Plugins → Installed Plugins` in WordPress and look for Essentials. If a new version is available it should be listed and presented with an option to update. The system will make the download and update for you automatically.

::: tip
If Essentials update is not listed, but there is a new release, try refetching or clear system cache.
:::

## Update Major Release

When updating Essentials v1.x to v2.x, or v2.2 to v2.3, plan carefully as those version introduce major changes and have specific compatibility with YOOtheme Pro. In order to properly update, follow these steps in the given order.

1. Make a full, restorable backup of the site.
1. Head over to *System > Plugins* and disable the *Essentials* plugin.
1. Upgrade YOOtheme Pro to latest stable version.
1. Upgrade Essentials to latest stable version.
1. Head over to the plugins manager and enable back the *Essentials* plugin.

Thoroughly clear all caches, and test. If anything goes wrong, restore the backup and reach out support.

## Upgrade From Freemium

The upgrade from Essentials Freemium to Premium version is as simple as [installing](./#installation) the premium package without uninstalling the freemium one. The upgrade process must be done manually, automatic updates will be possible after.
