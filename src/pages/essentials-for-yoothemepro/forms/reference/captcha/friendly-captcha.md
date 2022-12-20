---
title: Friendly Captcha
icon: '
  <g transform="matrix(.052 0 0 .052 3.904 2.003)" stroke="none">
    <path d="M426.777 73.223A250 250 0 0 0 250 0C112.021 0 0 112.021 0 250c0 137.979 112.021 250 250 250a250 250 0 0 0 176.777-73.223l-53.033-53.033A175 175 0 0 1 250 425c-96.585 0-175-78.415-175-175S153.415 75 250 75a175 175 0 0 1 123.744 51.256l53.033-53.033Z"/>
    <path d="M73.223 426.777a250 250 0 0 0 353.554 0l-53.033-53.033a175 175 0 0 1-247.488 0l-53.033 53.033Z"/>
    <circle cx="175" cy="250" r="37.5"/>
    <circle cx="325" cy="250" r="37.5"/>
  </g>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

A friendly captcha solution. {% .lead %}

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
