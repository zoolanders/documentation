---
title: Social Sharing
description: A social network sharing element
---

<!--@include: ./_partials/intro-element-->

Enable your users to share your website's content on their preferred social media platform, whether it be Twitter, Facebook, WhatsApp, Viber, a custom network that you have established, or even Email.

![Social Sharing Element](./assets/social-sharing-element.webp)

## Content Preview of a Shared Url

When a URL is shared in a Social Media or App is totally up to the plaform if and how to extract the content preview from it, but luckily there are some standards. Most of platforms, including Facebok, relies on the Open Graph protocol, while Twitter has it own called Twitter Cards. Our recommendation is to support both.

- [Information and guide for Open Graph](https://developers.facebook.com/docs/sharing/webmasters)
- [Information and guide for Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Share Current Page URL by Email

Sharing the current site page by email is possible, but requires additional steps.

1. First of all we need to retreieve the current page URL. Do so using the global _Request_ source part of Essentials Sources.
1. Then map it _Href_ property to the MailTo body field.
1. Further customizer thee body content using the _before_ and _after_ filters.
