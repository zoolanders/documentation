---
title: Form Area
---

A Form Area is a builder Section or Column enabled as an area that defines where the form will be structured. {% .lead %}

The area is wrapped with a standard [\<form\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) HTML Element without loosing builder capabilities, which implies that any valid form field markup inside it, e.g. a raw HTML `<input>`, it will be picked up during submission.

Each area is scoped with it unique fields, settings and workflow, making it possible to have multiple forms on the same page.

---

## Settings

Manage the Form Area settings and workflow. {% .lead %}

Once a Form Area has been [created](integration#create-a-form-area), it settings will become available in the chosen Section or Column Advanced Panel.

{% image %}
![Form Area Settings Shortcut](/assets/ytp/forms/formarea-settings-shortcut.webp)
{% /image %}

As a shortcut, a `paper-plane` icon will appear in the builder main panel to both state that the specific Section or Column is a Form Area as well as to directly open it settings panel.

{% image %}
![Form Area Settings](/assets/ytp/forms/formarea-settings.webp)
{% /image %}

The main settings allow defining if the if browser-side HTML5 validation should be executed during submission as well as to manage the [After Submit Actions](after-submit-actions).

{% image %}
![Form Node Attributes](/assets/ytp/forms/formarea-settings-attrs.webp)
{% /image %}

Optional `id`, `name` and `class` attributes for the form node allow further customizations.

{% image %}
![Form Action Override](/assets/ytp/forms/formarea-settings-sub-override.webp)
{% /image %}

Override the form **action** and **method** in order to submit the form to a 3rd party service or a custom URL. When enabled, the server side validation will be omited.

---

## Fields

Structure forms with native field elements. {% .lead %}

![Field Elements](/assets/ytp/forms/fields/elements.webp)

Basic form field elements are provided out of the box, these represent standard HTML form elements supported natively by [UIkit](https://getuikit.com/) and can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials group.

Use them to set the form structure as well to establish individual validation and specfics. For integration and further details, please consult the [Fields Reference](reference/fields) section.

---

## CAPTCHA

Protect forms from SPAM with CAPTCHA. {% .lead %}

![Captcha Elements](/assets/ytp/forms/captcha/elements.webp)

A [CAPTCHA](http://www.captcha.net) is a type of challenge–response test used to determine whether the user is human. There are several 3rd party captcha based service providers supported out of the box, these can be found in the [element library](https://yootheme.com/support/yootheme-pro/joomla/element-library) under Form Essentials group.

Use them to set a workflow that will protect the form from SPAM and abuse. For integration and further details, please consult the [Captcha Reference](reference/captcha) section.

---

## Validation

Validate the data before it reachs the server. {% .lead %}

Submissions are validated first by the browser's native HTML5 validation, and once again via server-side ajax request. Only if both evaluate as positive, the form will be submitted. If desired, HTML5 validation can be disabled in the [Form Area settings](#settings).

Individual form field validation rules are set independently on each Field Element under the Validation Tab. For integration and further details, please consult the [Fields Reference](reference/fields) section.
