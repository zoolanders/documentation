---
title: Friendly Captcha
description: A friendly captcha solution
icon: '
  <path fill="none" stroke-width="2" stroke-linejoin="round" d="M7.128 24.941c5.446 5.446 14.41 5.446 19.856 0l-2.978-2.977c-3.813 3.811-10.086 3.811-13.899 0L7.128 24.94Z"/>
  <path fill="none" stroke-width="2" stroke-linejoin="round" d="M7.228 15.014c0 3.608 2.878 6.949 2.879 6.949L7.13 24.94a14.003 14.003 0 0 1-4.114-9.926c0-7.75 6.29-14.04 14.04-14.04a14.04 14.04 0 0 1 9.928 4.112l-2.978 2.978a9.832 9.832 0 0 0-6.951-2.88c-5.391 0-9.828 4.436-9.828 9.828v.002Z"/>
  <circle stroke="none" cx="175" cy="250" r="37.5" transform="matrix(.0586 0 0 .0586 2.497 .352)"/>
  <circle stroke="none" cx="325" cy="250" r="37.5" transform="matrix(.0586 0 0 .0586 2.497 .352)"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Friendly Captcha element integrates [Friendly Captcha](https://friendlycaptcha.com/) anti-bot solution that is GDPR compliant and made in Europe.

{% image width="sm" %}
![Friendly Captcha Element](/assets/ytp/forms/captcha/fcaptcha.webp)
{% /image %}

---

## Settings

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Site/API Key** | The Site and API keys obtained from [Friendly Captcha](https://friendlycaptcha.com/) Dashboard. |
| **Label** | The title for the field that represent the field data. | &#x2713; |
| **Endpoint** | The primary endpoint for the puzzles and verification requests. Note that this feature requires a FriendlyCaptcha premium plan and be specifically enabled in it App configuration. | &#x2713; |
| **Language** | The language for the captcha, defaults to the site language. | &#x2713; |
| **Error Message** | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as placeholder, it will be replaced with the field label. | &#x2713; |

---

## Integration

1. Access the [Friendly Captcha](https://friendlycaptcha.com/) Dashboard and obtain the Site & API Keys.
1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a hCaptcha Element from the Form Essentials group.
1. Access the element settings and input the obtained keys.
