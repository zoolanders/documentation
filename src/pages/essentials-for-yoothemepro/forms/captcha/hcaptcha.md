---
title: hCaptcha Element
description: An alternative captcha solution
icon: '
  <path fill="none" stroke-width="2" d="M21.502 5.247V1.996H8.498v3.251H5.247v3.251H1.996v13.004h3.251v3.251h3.251v3.251h13.004v-3.251h3.251v-3.251h3.251V8.498h-3.251V5.247h-3.25Z" transform="matrix(1.10908 0 0 1.10797 -1.636 -1.62)"/>
  <path fill="none" d="m10.556 14.09.905-2.022c.328-.52.285-1.155-.076-1.515a.941.941 0 0 0-.16-.127.999.999 0 0 0-.833-.097c-.313.097-.58.303-.753.582-.174.28-1.239 2.888-1.699 4.186-.461 1.298-.277 3.678 1.5 5.459 1.883 1.881 4.61 2.312 6.35 1.008.072-.038.14-.082.203-.134l5.36-4.475c.258-.216.646-.659.3-1.164-.337-.495-.977-.158-1.24.01l-3.083 2.241a.137.137 0 0 1-.088.031.137.137 0 0 1-.111-.055c-.078-.095-.092-.35.03-.452l4.73-4.011c.408-.37.466-.904.134-1.27-.324-.36-.836-.349-1.247.023l-4.259 3.327a.19.19 0 0 1-.12.044.192.192 0 0 1-.152-.08c-.083-.092-.116-.254-.022-.348l4.822-4.68a.96.96 0 0 0 .047-1.33.9.9 0 0 0-.655-.28.955.955 0 0 0-.676.269l-4.927 4.627c-.118.117-.35 0-.376-.138a.148.148 0 0 1 .041-.137l3.771-4.295a.925.925 0 0 0 .296-.678.948.948 0 0 0-.93-.93.93.93 0 0 0-.677.293l-5.72 6.322c-.204.206-.507.215-.65.097a.219.219 0 0 1-.036-.3Z"/>
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
