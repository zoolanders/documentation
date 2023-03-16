---
title: Validation
---

Validate submission data on the front as server side. {% .lead %}

For a form data to be submitted it must must pass the [fields validation](#fields-validation) as well as the [CAPTCHA validation](#captcha-validation), if any. Fields are validated first by the browser's native HTML5 validation, and once again via server-side ajax request.

---

## Fields Validation

Validation rules are set independently on each Field Element under the Validation Tab. For integration and further details, please consult the [Fields Reference](fields) section. HTML5 validation can be disabled in the [Form Area Settings](form-area#settings).

{% callout type="warning" title="Custom Error Message" %}
Customizing the validation error messages is currently only possible for server-side validation.
{% /callout %}

---

## CAPTCHA Validation

![Captcha Elements](/assets/ytp/forms/captcha/elements.webp)

A [CAPTCHA](http://www.captcha.net) is a type of challenge–response test used to determine whether the user is human. There are several 3rd party captcha based service providers supported out of the box, these can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials group.

Use them to set a workflow that will protect the form from SPAM and abuse. For integration and further details, please consult the [Captcha Reference](captcha) section.
