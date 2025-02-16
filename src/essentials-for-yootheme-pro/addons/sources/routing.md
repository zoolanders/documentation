# Source Routing

Routing is the process of mapping URLs to specific views within a framework. Since YOOtheme Pro Sources do not support routing natively, we must use some workarounds to "emulate" routing for these sources.

Let's take Google Photos as an example of a source we would like to route. Assume our Google Photos account has two albums, each containing a set of photos.

![Google Photos Albums](./assets/routing/google-photos-albums.png)

We can take a few approaches to route these albums, each with its pros and cons.

| Approach | Route | Description |
| --- | --- | --- |
| [Page as Route](#page-as-route) | `/trips/album?id={albumid}` | Simple setup, works with any new album, but not good for SEO. Choose this approach when convenience is more important than SEO. |
| [Articles as Route](#articles-as-route) | `/trips/{alias}` | Great for SEO, but requires manual intervention each time there is a new album. Choose this approach when SEO is important. |

## Page as Route

This approach leverages a single page for source routing by setting a layout that dynamically loads the source content based on the URL's query parameter. For example, we could set a page under the route `/trips/album` and pass the album reference as a parameter, typically `id`. The final route would look like `/trips/album?id=xxx`, and the album `id` would be dynamically read by the source query. Let's see how!

### 1. Add a New Page

Create a new custom page that will serve as the main layout for the album. You can place it under any route you prefer by following the Add a New Page guide for [Joomla](https://yootheme.com/support/yootheme-pro/joomla/pages#add-a-new-page) or [WordPress](https://yootheme.com/support/yootheme-pro/wordpress/pages#add-a-new-page).

![Add New Page](./assets/routing/add-new-page.png)

### 2. Layout the Page

Design the page layout to best suit your use case. This could be as simple as Headline and Image elements displaying the current album title and cover, or a more advanced composition where a Gallery element shows the media as well.

![Page Layout](./assets/routing/album-layout.png)

### 3. Map the URL Album ID

The key to this workflow is to ensure that the album ID stored in the URL is mapped to all Google Photos sources referencing an album. We can do this by choosing the Dynamic option for the Album in the source configuration and mapping the URL query parameter that holds the album ID. The parameter value can be retrieved with the global [Request Source](./global#request) and its URL Query Param field, with the final mapping as `Global -> Request -> URL -> Param (id)`.

![Page Route Mapping](./assets/routing/page-route-mapping.png)

When the Request Source query parameter is mapped, press the `pencil` icon to open the field configuration and set the name of the parameter, in this case `id`.

![Global Request ID Param](./assets/routing/global-request-id-param.png)

## Articles as Route

This alternative approach leverages the system's articles for source routing by creating one article for each album that will also hold the album ID. The advantage is an SEO-friendly URL, e.g., `/trips/thailand-2024`, with the disadvantage of manual intervention each time there is a new album.

### 1. Add Articles

Similarly to the previous approach, we need to add articles, but this time one article for each album. Additionally, we need to create an article custom field that will hold the album ID, or simply use one of the article's existing fields.

![Article Album](./assets/routing/articles-route-album.png)

::: tip
Group the articles under the same category for easier templating.
:::

### 2. Template the Articles

Instead of laying out the articles individually, create a Single Article [template](https://yootheme.com/support/yootheme-pro/joomla/templates) and limit it by category.

![Article Template](./assets/routing/album-template.png)

Design this template to best suit your use case. This could be as simple as Headline and Image elements displaying the current album title and cover, or a more advanced composition where a Gallery element shows the media as well.

![Article Template Layout](./assets/routing/album-layout.png)

### 3. Map the Article Album ID

The key to this workflow is to ensure that the album ID stored in the article is mapped to all Google Photos sources referencing an album. We can do this by choosing the Dynamic option for the Album in the source configuration and mapping the article field that holds the album ID. The article field value can be retrieved with the Page Article Source and its Custom Fields, with the final mapping as `Page -> Article -> Fields -> Album ID`.

![Articles Route Mapping](./assets/routing/articles-route-mapping.png)

## Pagination

If you have opted for the [Articles as Route](#articles-as-route) approach, pagination will be provided by the system. However, if you have chosen the [Page as Route](#page-as-route) approach, pagination is not provided natively but can be emulated. This can be particularly useful when dealing with large sets of data, such as a photo album with many images.

### 1. Add Pagination Controls

First, add pagination controls to your page layout. This can be done using buttons or links that will update the URL with the current page number. For example:

```html
<a href="/trips/album?id=xxx&start=1">Page 1</a>
<a href="/trips/album?id=xxx&start=10">Page 2</a>
```

:::warning Pagination Element
The Pagination element will not be usable in this case as the pagination data is provided by different means. Although, it might be in the future.
:::

### 2. Update the Source Query

Next, update the source query to include the page parameter. This can be done by mapping the URL query parameter to the source query configuration. For example, if you are using Google Photos Album Media, you can map the `Global -> Request -> URL -> Param (start)` parameter to the source query `Start` setting.

### 3. Conclusion

Although this approach has its limitations, it allows for the implementation of paginated results within a single page. This provides a better user experience when dealing with large sets of data.
