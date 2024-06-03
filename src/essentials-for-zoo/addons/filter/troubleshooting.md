# Issues with Item Filtering

## ARTIO JoomSef

ZOOfilter is not compatible by default with [ARTIO JoomSEF](http://www.artio.net/joomla-extensions/joomsef) plugin as it removes the `search_id` parameter from the URL and in consequence the filter can't retrieve the search data from the database. As a workaround you can do the following:

1. Open _JoomSEF Extensions Manager_ and find the ZOO/Common tab.
2. Set the _Custom non-SEF Variables_ option to `search_id`.
3. Use the _JoomSEF URLs Manager_ to delete the already created SEF URLs for ZOOfilter.
4. Clear _JoomSEF_ cache.
