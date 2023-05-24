# Element - DownloadPro

DownloadPro extends with new features the ZOO Download element. Once the element is set in the Type there are several configuration params that differ from the ZOO ones.

{% callout %}
In order to better understand the following read the [Integration Section](./integration.md).
{% /callout %}

## Config

- `Download Mode`
  - `Direct`: The download link will be pointing directly to the file.
  - `Attachment`: The download link will attach the file without revealing it ubication.
  - `Protected`: The download link will attach the file and prevent any unauthorized access.

## Layouts

### Default - default

Renders a current file download link.

 - `Download Name`: A custom text for the Download button or link. Supported `{filename}` and `{title}` variables.
 - `New window`: If enabled the download will be processed in a new window.

### Default - buttonlink

Renders a current file download button.

 - `Download Name`: A custom text for the Download button or link. Supported `{filename}` and `{title}` variables.
 - `New window`: If enabled the download will be processed in a new window.

### Default - imagelink

Renders an icon linking to the current file download. Each file has a different icon relative to it extension.

 - `Download Name`: A custom text for the Download button or link. Supported `{filename}` and `{title}` variables.
 - `New window`: If enabled the download will be processed in a new window.
 - `Set`: Select the style for the icons. The default set is stored in the element `tmpl/render/default/_sublayouts/_imagelink/sets/default` path.

### Default - download_limit

Renders the current file download limit value.

### Default - filehits

Renders the current file amount of downloads value.

### Default - filesize

Renders the current file size value.

### Default - raw_link

Renders the current file raw link value.

## Troubleshooting

### Geocode was not successful

If you see a message like `Geocode was not successful for the following reason: REQUEST_DENIED`, most likely you need to activate the Google Maps Static API and Google Maps Geocoding API in the Google developer console.
