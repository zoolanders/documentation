---
title: ARTIO JoomSef
taxonomy:
    category: docs
---

ZOOfilter is not compatible by default with [ARTIO JoomSEF](http://www.artio.net/joomla-extensions/joomsef) plugin as it removes the `search_id` parameter from the URL and in consequence the filter can't retrieve the search data from the database. As a workaround you can do the following:

1. Open **JoomSEF Extensions Manager** and find the ZOO/Common tab.
2. Set the **Custom non-SEF Variables** option to `search_id`.
3. Use the **JoomSEF URLs Manager** to delete the already created SEF URLs for ZOOfilter.
4. Clear **JoomSEF** cache.
