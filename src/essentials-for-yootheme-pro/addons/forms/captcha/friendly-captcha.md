---
title: Friendly Captcha
description: A friendly captcha solution
---

<!--@include: ./_partials/intro.md-->

The Friendly Captcha element integrates [Friendly Captcha](https://friendlycaptcha.com/) anti-bot solution that is GDPR compliant and made in Europe.

![Friendly Captcha Element](./assets/fcaptcha.webp)

## Settings

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Site/API Key** | The Site and API keys obtained from [Friendly Captcha](https://friendlycaptcha.com/) Dashboard. |
| **Label** | The title for the field that represent the field data. | &#x2713; |
| **Endpoint** | The primary endpoint for the puzzles and verification requests. Note that this feature requires a FriendlyCaptcha premium plan and to be specifically enabled. | &#x2713; |
| **Language** | The language for the captcha, defaults to the site language. | &#x2713; |
| **Error Message** | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |

## Integration

1. Access the [Friendly Captcha](https://friendlycaptcha.com/) Dashboard and obtain the Site & API Keys.
1. Access a Builder layout and create a Form Area.
1. Add a hCaptcha Element from the Form Essentials group.
1. Access the element settings and input the obtained keys.
