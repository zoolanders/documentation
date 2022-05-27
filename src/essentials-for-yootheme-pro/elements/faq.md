# F.A.Q.

## How To Share Current Page URL by Email?

Sharing the current site page by email is possible, but requires additional steps.

1. First of all we need to retreieve the current page URL. Do so using the global `Request` source part of Essentials Sources.
1. Then map it `Href` property to the MailTo body field. Using the `before` and `after` filters the body content can be further customized.

As this can be somewhat confusing to set up we have prepared a <a :href="$withBase('/ytp-layouts/share_site_to_email.json')" target="_blank">Section Layout</a> which you can import in your YOOtheme Pro builder library and try out directly.
