---
title: Validation
---

Submissions are validated first by the browser's native HTML5 validation, and once again via a server-side ajax request. Only if both evaluate as positive, the form will be submitted. If desired, HTML5 validation can be disabled in the [Form Area settings](form-area#form-area-settings).

Validation rules are set independently under the Validation Tab of each field element configuration. There is also possible to customize the error message if validation fails.

todo
image
[list of common settings]

{% callout type="warning" title="Custom Error Message" %}
Customizing the validation error messages is currently only possible for server-side validation.
{% /callout %}
