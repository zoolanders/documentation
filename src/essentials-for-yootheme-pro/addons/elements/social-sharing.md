---
title: Social Sharing Element
description: A social network sharing element
icon: '
    <path fill="none" stroke-width="2" d="M27.371,23.013c0,1.897-1.588,3.486-3.646,3.486 c-1.906,0-3.648-1.589-3.648-3.486c0-1.904,1.588-3.648,3.648-3.648C25.627,19.364,27.371,20.947,27.371,23.013z"/>
    <path fill="none" stroke-width="2" d="M27.371,7.148c0,1.906-1.588,3.489-3.646,3.489 c-1.906,0-3.648-1.583-3.648-3.489c0-1.901,1.588-3.647,3.648-3.647C25.627,3.501,27.371,5.09,27.371,7.148z"/>
    <path fill="none" stroke-width="2" d="M9.924,15.08c0,1.901-1.589,3.491-3.648,3.491 c-2.059,0-3.647-1.59-3.647-3.491c0-1.905,1.589-3.647,3.647-3.647C8.335,11.433,9.924,13.017,9.924,15.08z"/>
    <line fill="none" stroke-width="2" x1="20.393" y1="21.742" x2="9.129" y2="16.507"/>
    <line fill="none" stroke-width="2" x1="20.553" y1="8.259" x2="9.446" y2="13.491"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

Enable your users to share your website's content on their preferred social media platform, whether it be Twitter, Facebook, WhatsApp, Viber, a custom network that you have established, or even Email.

![Social Sharing Element](/assets/ytp/elements/social-sharing-element.webp)

## Content Preview of a Shared Url

When a URL is shared in a Social Media or App is totally up to the plaform if and how to extract the content preview from it, but luckily there are some standards. Most of platforms, including Facebok, relies on the Open Graph protocol, while Twitter has it own called Twitter Cards. Our recommendation is to support both.

- [Information and guide for Open Graph](https://developers.facebook.com/docs/sharing/webmasters)
- [Information and guide for Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

## Share Current Page URL by Email

Sharing the current site page by email is possible, but requires additional steps.

1. First of all we need to retreieve the current page URL. Do so using the global `Request` source part of Essentials Sources.
1. Then map it `Href` property to the MailTo body field.
1. Further customizer thee body content using the `before` and `after` filters.
