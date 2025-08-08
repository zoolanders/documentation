## hCaptcha

<div class="tm-resource-icon">
    <!--@include: ../assets/element-hcaptcha.svg-->
</div>

The hCaptcha element integrates [hCaptcha](https://www.hcaptcha.com/) anti-bot solution that protects user privacy and rewards websites.

![hCaptcha Element](./assets/elements/hcaptcha.webp)

| Setting           | Description                                                                                                                                                 | Dynamic  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| _Type_            | The type of captcha to display, _Checkbox_ or _Invisible_.                                                                                                  |
| _Site/Secret Key_ | The Site and Secret keys obtained from [hCaptcha](https://www.hcaptcha.com/) Dashboard.                                                                     |
| _Theme_           | The theme style, _Light_ or _Dark_.                                                                                                                         |
| _Score Threshold_ | The threshold over which to consider the submitter a bot. From `0.0` (no risk) to `1.0` (confirmed threat), available only for hCaptcha Enterprise.         |          |
| _Error Message_   | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |

### Checkbox

A variation that will render a "checkbox" style field by which the captcha challenge could be initiated by the user.

![hCaptcha Checkbox](./assets/elements/hcaptcha-checkbox.webp)

| Setting | Description                                            | Dynamic  |
| ------- | ------------------------------------------------------ | :------: |
| _Label_ | The title for the field that represent the field data. | &#x2713; |
| _Size_  | The size of the checkbox, _Normal_ or _Compact_.       |          |

### Invisible

A variation that will only render the Compliance text initing the challenge when the form is submitted.

| Setting      | Description                                                                                                                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Compliance_ | A legally required text to comply with online privacy laws. Make sure it links to hCaptcha [Privacy Policy](https://www.hcaptcha.com/privacy) and [Terms of Service](https://hcaptcha.com/terms). |
