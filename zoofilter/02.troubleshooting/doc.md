## ZOOfilter and ARTIO JoomSEF plugin

ZOOfilter is not compatible with System - ARTIO JoomSEF plugin. This plugin removes the important parameter "search_id" from the search URL, so the filter can't read the search data from the database (it is made so to have the unique link for search).

To fix it you can do the following:

Open `JoomSEF / Manage Extensions / ZOO / Common tab` and set the "Custom non-SEF variables" option to "search_id" (without the quotes). Then use the JoomSEF's URLs Manager to delete the already created SEF URLs for ZOOfilter and clear JoomSEF's cache.

