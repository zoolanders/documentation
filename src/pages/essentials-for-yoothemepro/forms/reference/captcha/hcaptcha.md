---
title: hCaptcha Element
icon: '
  <path d="M21.502 5.247V1.996H8.498v3.251H5.247v3.251H1.996v13.004h3.251v3.251h3.251v3.251h13.004v-3.251h3.251v-3.251h3.251V8.498h-3.251V5.247h-3.251Zm-10.946 8.727.906-2.027c.33-.52.286-1.157-.075-1.518a.923.923 0 0 0-.159-.127 1.002 1.002 0 0 0-.837-.098 1.368 1.368 0 0 0-.754.584c-.174.279-1.241 2.894-1.702 4.194-.462 1.301-.277 3.686 1.502 5.469 1.887 1.887 4.62 2.318 6.363 1.01.073-.036.141-.081.204-.133l5.371-4.484c.26-.216.647-.66.3-1.167-.338-.495-.979-.158-1.24.009l-3.091 2.247a.14.14 0 0 1-.2-.023c-.078-.096-.092-.352.031-.453l4.738-4.021c.409-.369.467-.905.135-1.272-.324-.36-.837-.349-1.25.023l-4.266 3.335a.194.194 0 0 1-.12.043.191.191 0 0 1-.153-.079c-.084-.094-.116-.255-.022-.35l4.832-4.688a.95.95 0 0 0 .047-1.334.904.904 0 0 0-.656-.281.958.958 0 0 0-.678.27l-4.937 4.637c-.118.118-.349 0-.377-.138a.148.148 0 0 1 .042-.138l3.779-4.303a.933.933 0 0 0 .296-.681.937.937 0 0 0-.932-.931.931.931 0 0 0-.678.294l-5.731 6.335c-.205.206-.508.216-.651.097a.217.217 0 0 1-.037-.301Z" fill="none"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

An alternative captcha solution. {% .lead %}

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
