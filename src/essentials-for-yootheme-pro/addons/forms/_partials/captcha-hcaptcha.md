### hCaptcha

<div class="tm-resource-icon">
    <!--@include: ../assets/element-hcaptcha.svg-->
</div>

The hCaptcha element integrates [hCaptcha](https://www.hcaptcha.com/) anti-bot solution that protects user privacy and rewards websites.

![hCaptcha Element](./assets/elements/hcaptcha.webp)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Type* | The type of captcha to display, *Checkbox* or *Invisible*. |
| *Site/Secret Key* | The Site and Secret keys obtained from [hCaptcha](https://www.hcaptcha.com/) Dashboard. |
| *Theme* | The theme style, *Light* or *Dark*. |
| *Score Threshold* | The threshold over which to consider the submitter a bot. From `0.0` (no risk) to `1.0` (confirmed threat), available only for hCaptcha Enterprise. | |
| *Error Message* | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |

### Checkbox

A variation that will render a "checkbox" style field by which the captcha challenge could be initiated by the user.

![hCaptcha Checkbox](./assets/elements/hcaptcha-checkbox.webp)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Label* | The title for the field that represent the field data. | &#x2713; |
| *Size* | The size of the checkbox, *Normal* or *Compact*. | |

### Invisible

A variation that will only render the Compliance text initing the challenge when the form is submitted.

| Setting | Description |
| --- | --- |
| *Compliance* | A legally required text to comply with online privacy laws. Make sure it links to hCaptcha [Privacy Policy](https://www.hcaptcha.com/privacy) and [Terms of Service](https://hcaptcha.com/terms). |
