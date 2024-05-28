---
description: Show the form in a modal using 3rd parties
links:
  - title: FS Teaser Card
    href: https://flart.studio/yootheme-pro/teaser-card
    author: Flart Studio
  - title: DJ-Popup
    href: https://dj-extensions.com/yootheme/dj-popup
    author: DJ Extensions
  - title: JP CE Modal Pro
    href: https://extensions.joomlapro.com/product/ce-modal-pro
    author: JoomlaPro
---

# Show in a Modal

Form Area doesn't include a core solution to be shown in a modal, but there are 3rd party solutions.

<ul>
    <li v-for="link in $frontmatter.links">
        <a :href="link.href" target="_blank">{{ link.title }}</a> by {{ link.author }}
    </li>
</ul>
