# F.A.Q.

## How To Share Current Page URL by Email?

Sharing the current site page by email is possible, but requires additional steps.

1. First of all we need to retreieve the current page URL. Do so using the global `Request` source part of Essentials Sources.
1. Then map it `Href` property to the MailTo body field. Using the `before` and `after` filters the body content can be further customized.

As this can be somewhat confusing to set up we have prepared a <a :href="$withBase('/ytp-layouts/share_site_to_email.json')" target="_blank">Section Layout</a> which you can import in your YOOtheme Pro builder library and try out directly.

## How To Control the Content Preview of a Shared Url?

When a URL is shared in a Social Media or App is totally up to the plaform if and how to extract the content preview from it, but luckily there are some standards. Most of platforms, including Facebok, relies on the Open Graph protocol, while Twitter has it own called Twitter Cards. Our recommendation is to support both.

- [Information and guide for Open Graph](https://developers.facebook.com/docs/sharing/webmasters)
- [Information and guide for Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
