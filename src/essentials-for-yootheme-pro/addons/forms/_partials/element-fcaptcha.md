## Friendly Captcha

<div class="tm-resource-icon">
    <!--@include: ../assets/element-fcaptcha.svg-->
</div>

The Friendly Captcha element integrates [Friendly Captcha](https://friendlycaptcha.com/) anti-bot solution that is GDPR compliant and made in Europe.

![Friendly Captcha Element](./assets/elements/fcaptcha.webp)

| Setting         | Description                                                                                                                                                    | Dynamic  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| _Site/API Key_  | The Site and API keys obtained from [Friendly Captcha](https://friendlycaptcha.com/) Dashboard.                                                                |
| _Label_         | The title for the field that represent the field data.                                                                                                         | &#x2713; |
| _Endpoint_      | The primary endpoint for the puzzles and verification requests. Note that this feature requires a FriendlyCaptcha premium plan and to be specifically enabled. | &#x2713; |
| _Language_      | The language for the captcha, defaults to the site language.                                                                                                   | &#x2713; |
| _Error Message_ | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label.    | &#x2713; |
