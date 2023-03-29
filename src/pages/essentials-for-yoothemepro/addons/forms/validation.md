---
title: Validation
---

Submission data is validated both on the client and server-side. {% .lead %}

For a form data to be submitted it must pass the [fields validation](#fields-validation) as well as the [CAPTCHA validation](#captcha-validation), if any present. The validation is first run in the browser, and once again via server-side ajax request.

---

## Fields Validation

Each Field Element has its own validation rules which can be set independently under the element settings Validation Tab. For more information and integration details, please refer to the [fields reference](fields) section.

{% callout type="warning" title="Custom Error Message" %}
At the moment, it is only possible to customize the validation error messages for server-side validation, not for HTML5 validation. A posible solution is to disable HTML5 validation in the Form Area configuration.
{% /callout %}

---

## CAPTCHA Validation

![Captcha Elements](/next/assets/ytp/forms/captcha/elements.webp)

A CAPTCHA is a type of test that is used to determine whether the user is human by presenting a challenge-response test. It is often used in online forms to prevent spam and abuse. There are various third-party CAPTCHA service providers that are supported out of the box, use them to set a workflow that will protect the form from such abuses.

For a list of supported providers and integration details, please refer to the [captcha reference](captcha) section.
