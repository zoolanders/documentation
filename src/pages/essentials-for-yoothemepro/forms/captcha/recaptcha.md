---
title: reCAPTCHA Element
description: A captcha solution from Google
icon: '
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9841" d="M1.369 15.228c.002.198.006.396.016.593v11.212l3.098-3.1a13.818 13.818 0 0 0 10.72 5.09c4.499 0 8.495-2.149 11.022-5.474l-5.082-5.134a6.744 6.744 0 0 1-2.057 2.31c-.887.692-2.145 1.257-3.883 1.257-.21 0-.372-.024-.491-.07a6.705 6.705 0 0 1-5.12-3.085l3.596-3.596c-4.555.017-9.702.028-11.817-.002"/>
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9841" d="M28.631 14.055c-.001-.19-.005-.377-.013-.563V2.867L25.68 5.805C23.277 2.862 20.79.978 16.694.978v6.57c1.982.51 3.336 1.383 4.146 3.094l-3.407 3.41c4.315-.018 9.192-.028 11.198.001"/>
  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9841" d="M14.374.978c-.187 0-.374.005-.56.014H3.227l2.927 2.926c-2.93 2.396-4.788 7.871-4.785 9.133 0 0 6.71-.02 6.736-.01.159-2.035 1.24-3.264 2.87-4.3l3.397 3.394c-.018-4.3-.028-9.16.002-11.157"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The reCAPTCHA element integrates [Google reCAPTCHA](https://developers.google.com/recaptcha) service that helps protect websites from spam and abuse.

---

## reCAPTCHA v2

reCAPTCHA v2 verifies if an interaction is legitimate with a captcha challenge presented in two variations. By default only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit the site security preference under the [reCAPTCHA Admin Console](#admin-console) advanced settings.

### "I'm not a robot" Checkbox

Requires the user to click a checkbox indicating is not a robot.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Checkbox](/assets/ytp/forms/captcha/recaptcha-checkbox.gif)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Label** | The title for the field that should represent the field data. |
| **Theme** | The field style output, `Light` or `Dark`. |
| **Size** | The field size output, `Normal` or `Compact`. |

### Invisible reCAPTCHA badge

A captcha might be invoked when the form is submitted, but the badge is always visible.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Invisible](/assets/ytp/forms/captcha/recaptcha-invisible.png)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Position** | The badge position, `Bottom Left`, `Bottom Right`, or `Inline`. |
| **Label** | The title for the field that should represent the field data, when position as `Inline`.|
| **Theme** | The badge style output, `Light` or `Dark`. |

---

## reCAPTCHA v3

reCAPTCHA v3 verifies if an interaction is legitimate without any user interaction, instead of showing a CAPTCHA challenge it evaluates based on the returned score by the API.

| Setting | Description |
| ------- | ----------- |
| **Score Threshold** | The value below which to consider the submitter a bot. Score runs from `0.0` (bot) to `1.0` (human). |
| **Action** | The [action](https://developers.google.com/recaptcha/docs/v3#actions) name for the captcha request used for more advanced integrations. May only contain alphanumeric characters and slashes. |

---

## Admin Console

The [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) allows you to manage your reCAPTCHA site and secret keys, and configure the [settings](https://developers.google.com/recaptcha/docs/settings) of those at any time. It also allows you to permanently delete your reCAPTCHA keys.

---

## Integration

1. Access a Builder layout and [create](../../setup#creating-a-form) a Form Area.
1. Add a reCAPTCHA Element from the Form Essentials group.
1. Access the element settings and input the Site and Secret keys obtained from the [Admin Console](#admin-console).
