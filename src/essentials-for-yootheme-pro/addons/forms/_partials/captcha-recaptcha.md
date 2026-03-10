### reCAPTCHA

<div class="tm-resource-icon">
    <!--@include: ../assets/element-recaptcha.svg-->
</div>

The reCAPTCHA element integrates [Google reCAPTCHA](https://developers.google.com/recaptcha) service that helps protect websites from spam and abuse, supporting both v2 and v3.

![reCAPTCHA Element](./assets/elements/recaptcha.webp)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Type* | The type of captcha to display, *v2 Checkbox*, *v2 Invisible* or *v3*. | |
| *Site/Secret Key* | The sit and secret keys obtained from [reCAPTCHA](https://developers.google.com/recaptcha) Dashboard. |
| *Error Message* | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |

::: tip
The [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin) allows you to manage your reCAPTCHA site and secret keys, and configure the [settings](https://developers.google.com/recaptcha/docs/settings) of those at any time. It also allows you to permanently delete your reCAPTCHA keys.
:::

### reCAPTCHA v2

reCAPTCHA v2 verifies if an interaction is legitimate with a captcha challenge presented in two variations.

::: tip
By default, only the most suspicious traffic will be prompted to solve a captcha. To alter this behavior edit the site security preference under the [reCAPTCHA Admin Console](#admin-console) advanced settings.
:::

#### "I'm not a robot" Checkbox

Requires the user to click a checkbox indicating is not a robot.

![reCAPTCHA v2 Checkbox](./assets/elements/recaptcha-checkbox.gif)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Label* | The title for the field that represent the field data. | &#x2713; |
| *Theme* | The field style output, *Light* or *Dark*. ||
| *Size* | The field size output, *Normal* or *Compact*. ||

#### Invisible reCAPTCHA badge

A captcha might be invoked when the form is submitted, but the badge is always visible.

![reCAPTCHA v2 Invisible](./assets/elements/recaptcha-invisible.png)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Position* | The badge position, *Bottom Left*, *Bottom Right*, or *Inline*. ||
| *Label* | The title for the field that should represent the field data, when the position is set as *Inline*. ||
| *Theme* | The badge style output, *Light* or *Dark*. ||

### reCAPTCHA v3

reCAPTCHA v3 verifies if an interaction is legitimate without any user interaction, instead of showing a CAPTCHA challenge it evaluates based on the returned score by the API.

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Score Threshold* | The value below which to consider the submitter a bot. The score runs from `0.0` (bot) to `1.0` (human). ||
| *Action* | The [action](https://developers.google.com/recaptcha/docs/v3#actions) name for the captcha request. Used for more advanced integrations, may only contain alphanumeric characters and slashes. ||
