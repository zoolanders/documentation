---
title: Captcha Elements
---

Protect your forms from SPAM with CAPTCHA. {% .lead %}

A [CAPTCHA](http://www.captcha.net) is a type of challenge–response test used in computing to determine whether the user is human. Captcha elements can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials.

[image]

There are several 3rd party CAPTCHA service providers supported out of the box, they all work similarly, although some might have a stricter [GDPR](https://gdpr.eu/what-is-gdpr) approach, or enterprise-focused features. Evaluate which one fits best your project, but don't combine them, choose only one per project page.

---

## reCAPTCHA Element

The reCAPTCHA element integrates [Google reCAPTCHA](https://developers.google.com/recaptcha) service that helps protect websites from spam and abuse. The integration only requires you to drop the element in any Form Area, choose the reCAPTCHA version, and set the site keys obtained in the [reCAPTCHA Admin Console](#recaptcha-admin-console).

[image]

### reCAPTCHA v2

reCAPTCHA v2 verifies if an interaction is legitimate with a captcha challenge presented in two variations. By default only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit the site security preference under the [reCAPTCHA Admin Console](#recaptcha-admin-console) advanced settings.

#### "I'm not a robot" Checkbox

Requires the user to click a checkbox indicating is not a robot.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Checkbox](/assets/ytp/forms/recaptcha-checkbox.gif)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Label** | Defines a title for the field that should represent the field data. |
| **Theme** | Defines the field style output, `Light` or `Dark`. |
| **Size** | Defines the field size output, `Normal` or `Compact`. |

#### Invisible reCAPTCHA badge

A captcha might be invoked when the form is submitted, but the badge is always visible.

{% image className="max-w-xs" %}
![reCAPTCHA v2 Invisible](/assets/ytp/forms/recaptcha-invisible.png)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Position** | Defines the badge position, `Bottom Left`, `Bottom Right`, or `Inline`. |
| **Label** | Defines a title for the field that should represent the field data, when position as `Inline`.|
| **Theme** | Defines the badge style output, `Light` or `Dark`. |

### reCAPTCHA v3

reCAPTCHA v3 verifies if an interaction is legitimate without any user interaction, instead of showing a CAPTCHA challenge it evaluates based on the returned score by the API.

| Setting | Description |
| ------- | ----------- |
| **Score Threshold** | Defines the value below which to consider the submitter a bot. Score runs from `0.0` (bot) to `1.0` (human). |
| **Action** | Defines an [action](https://developers.google.com/recaptcha/docs/v3#actions) name for the captcha request used for more advanced integrations. May only contain alphanumeric characters and slashes. |

### reCAPTCHA Admin Console

The [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) allows you to manage your reCAPTCHA site and secret keys, and configure the [settings](https://developers.google.com/recaptcha/docs/settings) of those at any time. It also allows you to permanently delete your reCAPTCHA keys.

---

## hCaptcha Element

The hCaptcha element integrates [hCaptcha](https://www.hcaptcha.com/) anti-bot solution that protects user privacy and rewards websites. The integration only requires you to drop the element in any Form Area, and set the keys obtained in the hCaptcha Dashboard.

[image]

---

## Friendly Captcha Element

The Friendly Captcha element integrates [Friendly Captcha](https://friendlycaptcha.com/) anti-bot solution that is GDPR compliant and made in Europe. The integration requires you to drop the element in any Form Area, and set the keys obtained in the Friendly Captcha Dashboard.

[image]
