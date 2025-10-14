# Getting Started Guide

::: tip For Beginners
This guide is designed specifically for newcomers to Essentials for YOOtheme Pro. If you're new to YOOtheme Pro or Joomla/WordPress development, start here!
:::

## What You'll Need Before Starting

Before diving into Essentials, make sure you have:

1. **YOOtheme Pro** installed and activated on your site
   - Not sure if you have it? Look for "YOOtheme" in your site's admin menu
   - Need YOOtheme Pro? Visit [yootheme.com](https://yootheme.com/page-builder)

2. **Basic familiarity** with YOOtheme Pro's Builder
   - Know how to add elements to a page
   - Understand what the Customizer is (the YOOtheme settings panel)
   - If not, review [YOOtheme Pro's official tutorials](https://yootheme.com/support/yootheme-pro) first

3. **A valid Essentials license** from Zoolanders
   - You'll need this to download the plugin

## Understanding the Basics

### What is Essentials for YOOtheme Pro?

Think of Essentials as a "power-up pack" for YOOtheme Pro. It adds new capabilities that aren't included in the standard YOOtheme Pro installation, such as:

- **Connecting to external data** (like Instagram feeds, Google Sheets, databases)
- **Building advanced forms** (contact forms, surveys, registration forms)
- **Controlling who sees what** (show/hide content based on user type, device, date, etc.)
- **Adding more design options** (new icons, reusable layouts, custom elements)

### Key Terms You'll Encounter

Before we go further, let's clarify some terminology you'll see throughout the documentation:

- **Customizer**: The YOOtheme Pro settings panel where you configure themes and sites
- **Builder**: The visual page editor where you drag and drop elements to create layouts
- **Element**: A building block in the Builder (like a text box, image, or button)
- **Source**: A place where dynamic content comes from (like an Instagram feed or database)
- **Dynamic Content**: Content that changes automatically based on data from a source
- **Addon**: A feature module within Essentials (Forms, Dynamic Content, Access Conditions, etc.)

## Your First 30 Minutes with Essentials

### Step 1: Installation (5 minutes)

1. Log into your [Zoolanders account](https://www.zoolanders.com/downloads)
2. Download the Essentials for YOOtheme Pro plugin
3. Install it on your site:
   - **Joomla users**: Go to Extensions → Manage → Install, upload the file
   - **WordPress users**: Go to Plugins → Add New → Upload Plugin, upload the file
4. **Enable the plugin** in your plugin manager
5. **Verify it's working**: Go to the Customizer (YOOtheme menu), you should see a new "Essentials" panel

::: warning Installation Directory
After installation, the plugin files will be located at:
- **Joomla**: `plugins/system/yooessentials`
- **WordPress**: `wp-content/plugins/yooessentials`

You don't need to access these files directly, but knowing where they are can help with troubleshooting.
:::

### Step 2: Initial Configuration (10 minutes)

1. **Open the Customizer** (YOOtheme menu in your admin panel)
2. **Click on "Essentials"** in the left sidebar
3. **Set your Download ID** (in Essentials → Advanced):
   - This enables automatic updates
   - Find your Download ID in your Zoolanders account dashboard
4. **Review the addons** (in Essentials → Advanced):
   - All addons are enabled by default
   - You can disable any you don't plan to use

::: tip First-Time Setup
After installation, clear your site's cache and refresh the Customizer if you don't see all Essentials features immediately.
:::

### Step 3: Create Your First Dynamic Content Source (15 minutes)

Let's create something practical: a simple RSS feed display.

**Why start with RSS?**
- It's simple and doesn't require authentication
- You'll see immediate results
- It introduces you to the dynamic content workflow

**Follow these steps:**

1. **Open the Sources Manager**:
   - Go to Customizer → Essentials → Sources
   - Click "+ Add Source"

2. **Choose RSS Source**:
   - Find "RSS" in the list
   - Click on it

3. **Configure the RSS Source**:
   - **Name**: Enter "Tech News Feed" (or any name you prefer)
   - **Feed URL**: Enter `https://www.theverge.com/rss/index.xml`
   - Leave other settings as default
   - Click "Save"

4. **Use Your RSS Feed on a Page**:
   - Open any page in the Builder
   - Add a new **Text Element** to your page
   - In the element's **Advanced** tab, find "Dynamic Content"
   - Select "RSS → Tech News Feed Entries"
   - In the **Content** tab, click the "Dynamic" button above the content field
   - Choose "Title" from the dropdown
   - Save your page

**What you should see:**
A list of article titles from The Verge website automatically appearing on your page!

::: tip Understanding What Just Happened
1. You created a **source instance** (your RSS feed connection)
2. You **mapped the source** to a page element (told the element where to get its content)
3. The element now displays **dynamic content** (it updates automatically when the RSS feed updates)
:::

## What to Explore Next

Now that you've successfully set up your first dynamic content source, here are logical next steps:

### For Content Creators
- [Create a contact form](/essentials-for-yootheme-pro/addons/forms/) to collect visitor information
- [Connect to social media](/essentials-for-yootheme-pro/addons/dynamic/sources/instagram) to display your Instagram feed
- [Control content visibility](/essentials-for-yootheme-pro/addons/access/) to show different content to different users

### For Developers
- [Create custom sources](/essentials-for-yootheme-pro/addons/dynamic/custom-provider) to connect to your own APIs
- [Build advanced forms](/essentials-for-yootheme-pro/glossary#form-builder) with custom actions
- [Work with databases](/essentials-for-yootheme-pro/addons/dynamic/sources/database) to display custom data

## Common Beginner Questions

### "I don't see Essentials in the Customizer"
- Make sure the plugin is enabled in your plugin manager
- Clear your site's cache
- Try refreshing the Customizer (close and reopen it)

### "The plugin won't install"
- Check that you meet the [system requirements](./#requirements)
- Verify you have YOOtheme Pro 5.0 or higher installed
- Make sure your PHP version is 8.1 or higher

### "My dynamic content isn't showing"
- Verify the source is configured correctly in the Sources manager
- Check that you've selected the source in the element's Advanced tab
- Make sure the source has data (e.g., the RSS feed is valid and accessible)
- Look for any error messages in the browser console

### "What's the difference between a Source and a Global Query?"
- A **Source** is a connection to data (like an RSS feed or database)
- A **Global Query** is a reusable query configuration that can be applied to multiple sources
- Start with Sources - you likely won't need Global Queries until you're doing more advanced work

## Getting Help

If you get stuck:

1. **Check the [Troubleshooting](/essentials-for-yootheme-pro/troubleshooting) page** - it covers common issues
2. **Review the [Glossary](/essentials-for-yootheme-pro/glossary)** - it explains all features in detail
3. **Contact Zoolanders support** - they're there to help!

## Quick Reference: Where to Find Things

| Task | Location |
|------|----------|
| Install plugin | Joomla: Extensions → Manage<br>WordPress: Plugins → Add New |
| Enable plugin | Plugin Manager |
| Configure Essentials | Customizer → Essentials |
| Create sources | Customizer → Essentials → Sources |
| Add forms | Builder → Form Area (Sublayout) |
| Set access conditions | Builder → Element → Advanced → Access Condition |
| Add icons | Customizer → Essentials → Icon Collections |

---

::: tip Ready to Learn More?
Return to the [main documentation](./) to explore all features in depth, or jump directly to a specific addon:
- [Dynamic Content](./addons/dynamic/)
- [Form Builder](./addons/forms/)
- [Access Conditions](./addons/access/)
:::
