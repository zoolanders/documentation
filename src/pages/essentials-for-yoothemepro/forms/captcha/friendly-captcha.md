---
title: Friendly Captcha
description: A friendly captcha solution
icon: '
  <path stroke="none" d="M27.803 4.393A15.005 15.005 0 0 0 17.197 0c-8.279 0-15 6.721-15 15s6.721 15 15 15c3.976 0 7.794-1.581 10.606-4.393l-3.182-3.182a10.504 10.504 0 0 1-7.424 3.075c-5.795 0-10.5-4.705-10.5-10.5s4.705-10.5 10.5-10.5c2.783 0 5.456 1.107 7.424 3.075l3.182-3.182Z"/>
  <circle cx="175" cy="250" r="37.5" transform="matrix(.06 0 0 .06 2.197 0)"/>
  <circle cx="325" cy="250" r="37.5" transform="matrix(.06 0 0 .06 2.197 0)"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Friendly Captcha element integrates [Friendly Captcha](https://friendlycaptcha.com/) anti-bot solution that is GDPR compliant and made in Europe.

---

## Settings

TODO

---

## Integration

### Obtain Keys

1. Access the [hCaptcha](https://www.hcaptcha.com/) Dashboard.

### Add to a Layout

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a hCaptcha Element from the Form Essentials group.
1. Access the element settings and input the obtained Site and Secret keys.
