---
title: F.A.Q.
taxonomy:
    category: docs
---

* **After installation of ZOOseo, metadata doesn't load. Why?** - Please make sure that ZOOseo plugin is enabled and setup, and "ZOOseo Metadata Item" layout is configured.

* **Is ZOOseo compatible with other Joomla! SEO extensions?** - Yes, ZOOseo extension works with any Joomla! SEO extensions. They are complementary and work together.

* **Is it possible to set Open Graph meta information for a ZOO Category page?** - Currently Open Graph meta tags can be applied only to ZOO Item pages.

* **Does ZOOseo solve the problem with duplicated content?** - No, ZOOseo is not responsible for any redirects from duplicating URLs. It just allows to order URL parts according to their ZOO hierarchy and get rid of some excess parts (like "item" and "category").
 there are still duplicate urls for the same content item but there is a canonical tag in the head the pints to the same url.
the canonical tag is the correct way to handle that
you don't have to worry about the duplicate content, ZOO already set the canoninal meta-tag for those. 

* ** - ZOOseo does not override the menu item. You can look through the method item() in administrator/components/com_zoo/helpers/route.php file to check how ZOO build item routes. There are comments to the code, they describe the priorities which are taken into consideration during url build.
