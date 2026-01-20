# Form Validation

Form validation ensures submitted data meets your requirements before processing. The validation is processed at three levels:

1. **Client-side validation** - Optional browser validation before submission
2. **Server-side validation** - Always runs to ensure data integrity
3. **CAPTCHA verification** - Optional human verification to prevent spam

::: tip Field Validation
Each field has its own validation rules that will be used for both client and server side validation. For complete validation options see the [form field elements](./elements) documentation.
:::

## Client-side Validation

HTML5 validation provides instant feedback in the browser using native validation UI. Is enabled by default, but you can disable when:

- Only server-side validation is needed
- Error message doesn't mach your site styling
- Design consistency across browsers is important

::: warning Custom Error Messages
HTML5 validation messages cannot be customized. To use custom messages, disable client side validation on the form settings and rely on server-side validation instead.
:::

## Server-side Validation

Always active and cannot be disabled. Validates all submissions regardless of browser settings, ensuring:

- Required fields are completed
- Field values match validation patterns
- Data types are correct
- CAPTCHA challenges pass (when present)

::: tip Custom Validation
Add custom validation logic using the [Validate Action](./actions/validate). This lets you validate data against custom condition rules. Failed validation stops all subsequent actions.
:::

## CAPTCHA Validation

CAPTCHAs verify users are human, protecting forms from spam and automated abuse. Add CAPTCHA when your form:

- Is publicly accessible
- Receives spam submissions
- Handles sensitive operations (registration, password reset)
- Must meet security compliance requirements

::: tip Best Practice
Combine CAPTCHA with [built-in honeypot protection](./form-element#anti-spam-settings) for optimal spam defense. Honeypots catch simple bots; CAPTCHAs stop sophisticated attacks.
:::

---
<!--@include: ./_partials/captcha-recaptcha.md-->
---
<!--@include: ./_partials/captcha-hcaptcha.md-->
---
<!--@include: ./_partials/captcha-turnstile.md-->
---
<!--@include: ./_partials/captcha-fcaptcha.md-->
