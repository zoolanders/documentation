---
title: hCaptcha Element
description: An alternative captcha solution
icon: '
  <path fill="none" stroke-width="2" d="M21.502 5.247V1.996H8.498v3.251H5.247v3.251H1.996v13.004h3.251v3.251h3.251v3.251h13.004v-3.251h3.251v-3.251h3.251V8.498h-3.251V5.247h-3.251Z" transform="matrix(1.06989 0 0 1.06882 -1.048 -1.032)"/>
  <path fill="none" stroke-width=".96273" d="m10.713 14.123.873-1.951c.317-.501.275-1.114-.073-1.462a.86.86 0 0 0-.154-.122.963.963 0 0 0-.804-.094c-.302.094-.56.293-.726.562-.168.27-1.195 2.786-1.639 4.038-.445 1.252-.267 3.548 1.446 5.266 1.817 1.815 4.448 2.23 6.126.972.07-.036.135-.079.196-.129l5.17-4.317c.25-.208.624-.635.29-1.123-.325-.477-.942-.152-1.195.01l-2.975 2.162a.134.134 0 0 1-.192-.023c-.075-.092-.089-.338.029-.436l4.562-3.87c.394-.356.45-.872.13-1.225-.312-.347-.806-.336-1.203.022l-4.108 3.21a.186.186 0 0 1-.116.042.186.186 0 0 1-.147-.076c-.08-.09-.112-.246-.021-.337l4.652-4.514a.922.922 0 0 0 .045-1.284.87.87 0 0 0-.632-.27.92.92 0 0 0-.652.26l-4.753 4.464c-.114.113-.337 0-.363-.133a.143.143 0 0 1 .04-.133l3.638-4.143a.894.894 0 0 0 .285-.654.91.91 0 0 0-.897-.897.897.897 0 0 0-.653.283l-5.517 6.098c-.198.199-.49.208-.627.094a.21.21 0 0 1-.036-.289h.001Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The hCaptcha element integrates [hCaptcha](https://www.hcaptcha.com/) anti-bot solution that protects user privacy and rewards websites.

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
