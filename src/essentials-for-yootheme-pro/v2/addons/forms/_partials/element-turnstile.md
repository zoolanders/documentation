## Turnstile

<div class="tm-resource-icon">
    <!--@include: ../assets/element-turnstile.svg-->
</div>

The Turnstile element integrates [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile) captcha alternative.

![Turnstile Element](./assets/elements/turnstile.gif)

| Setting | Description | Dynamic |
| --- | --- | :---: |
| *Appears* | When should the widget appear, _Always_ or _When Interaction Required_. |
| *Site/Secret Key* | The Site and Secret keys obtained from [Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile) Dashboard. |
| *Label* | An optional label for the field. | &#x2713; |
| *Theme* | The widget theme style, _Light_ or _Dark_. |
| *Size* | The widget theme size, _Normal_ or _Compact_. |
| *Compliance* | Optional override of the legally required text to comply with online privacy laws. It should link to [Turnstile Privacy Policy](https://www.cloudflare.com/privacypolicy) and [Terms of Service](https://www.cloudflare.com/website-terms). |
| *Error Message* | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |
