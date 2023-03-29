---
title: reCAPTCHA Element
description: A captcha solution from Google
icon: '
  <path fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1.806 16.304c0 .173.004.345.012.516v9.745l2.694-2.694a12.002 12.002 0 0 0 9.317 4.423c3.91 0 7.384-1.866 9.58-4.757l-4.416-4.462a5.858 5.858 0 0 1-1.789 2.007c-.771.602-1.864 1.093-3.375 1.093-.182 0-.323-.021-.427-.061a5.824 5.824 0 0 1-4.451-2.681l3.126-3.126c-3.959.016-8.432.025-10.271-.002"/>
  <path fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M28.194 13.7a12.648 12.648 0 0 0-.012-.516V3.439l-2.694 2.694c-2.205-2.699-4.485-4.427-8.243-4.427v6.025c1.818.469 3.06 1.27 3.804 2.84l-3.126 3.126c3.959-.015 8.432-.025 10.271.002"/>
  <path fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M13.795 1.706c-.173 0-.344.005-.515.012H3.534l2.694 2.694c-2.699 2.205-4.407 7.245-4.405 8.408 0 0 6.177-.019 6.2-.011.148-1.872 1.144-3.002 2.643-3.958l3.126 3.126c-.015-3.959-.024-8.432.002-10.271"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The reCAPTCHA element integrates [Google reCAPTCHA](https://developers.google.com/recaptcha) service that helps protect websites from spam and abuse.

{% image width="sm" %}
![reCAPTCHA Element](/next/assets/ytp/forms/captcha/recaptcha.webp)
{% /image %}

---

## Settings

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Type** | The type of captcha to display, `v2 Checkbox`, `v2 Invisible` or `v3`. |
| **Site/Secret Key** | The sit and secret keys obtained from [reCAPTCHA](https://developers.google.com/recaptcha) Dashboard. |
| **Error Message** | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |

---

### reCAPTCHA v2

reCAPTCHA v2 verifies if an interaction is legitimate with a captcha challenge presented in two variations. By default, only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit the site security preference under the [reCAPTCHA Admin Console](#admin-console) advanced settings.

#### "I'm not a robot" Checkbox

Requires the user to click a checkbox indicating is not a robot.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Checkbox](/next/assets/ytp/forms/captcha/recaptcha-checkbox.gif)
{% /image %}

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Label** | The title for the field that represent the field data. | &#x2713; |
| **Theme** | The field style output, `Light` or `Dark`. |
| **Size** | The field size output, `Normal` or `Compact`. |

#### Invisible reCAPTCHA badge

A captcha might be invoked when the form is submitted, but the badge is always visible.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Invisible](/next/assets/ytp/forms/captcha/recaptcha-invisible.png)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Position** | The badge position, `Bottom Left`, `Bottom Right`, or `Inline`. |
| **Label** | The title for the field that should represent the field data, when the position is set as `Inline`.|
| **Theme** | The badge style output, `Light` or `Dark`. |

---

### reCAPTCHA v3

reCAPTCHA v3 verifies if an interaction is legitimate without any user interaction, instead of showing a CAPTCHA challenge it evaluates based on the returned score by the API.

| Setting | Description |
| ------- | ----------- |
| **Score Threshold** | The value below which to consider the submitter a bot. The score runs from `0.0` (bot) to `1.0` (human). |
| **Action** | The [action](https://developers.google.com/recaptcha/docs/v3#actions) name for the captcha request. Used for more advanced integrations, may only contain alphanumeric characters and slashes. |

---

## Admin Console

The [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) allows you to manage your reCAPTCHA site and secret keys, and configure the [settings](https://developers.google.com/recaptcha/docs/settings) of those at any time. It also allows you to permanently delete your reCAPTCHA keys.

---

## Integration

1. Access the [reCAPTCHA](https://www.google.com/recaptcha/admin) Admin and obtain the Site & Secret Keys.
1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a reCAPTCHA Element from the Form Essentials group.
1. Access the element settings and input the obtained keys.
