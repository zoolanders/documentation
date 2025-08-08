## Turnstile

<div class="tm-resource-icon">
    <!--@include: ../assets/element-turnstile.svg-->
</div>

The Turnstile element integrates [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile) captcha alternative.

![Turnstile Element](./assets/elements/turnstile.gif)

| Setting           | Description                                                                                                                                                                                                                                 | Dynamic  |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------: |
| _Appears_         | When should the widget appear, _Always_ or _When Interaction Required_.                                                                                                                                                                     |
| _Site/Secret Key_ | The Site and Secret keys obtained from [Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) Dashboard.                                                                                                                          |
| _Label_           | An optional label for the field.                                                                                                                                                                                                            | &#x2713; |
| _Theme_           | The widget theme style, _Light_ or _Dark_.                                                                                                                                                                                                  |
| _Size_            | The widget theme size, _Normal_ or _Compact_.                                                                                                                                                                                               |
| _Compliance_      | Optional override of the legally required text to comply with online privacy laws. It should link to [Turnstile Privacy Policy](https://www.cloudflare.com/privacypolicy) and [Terms of Service](https://www.cloudflare.com/website-terms). |
| _Error Message_   | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label.                                                                                 | &#x2713; |
