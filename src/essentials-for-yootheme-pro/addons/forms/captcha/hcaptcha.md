---
description: An alternative captcha solution
icon: '
  <path fill="none" stroke-width="2" d="M22.03 4.48V.99H8.06v3.49H4.57v3.49H1.08v13.95h3.49v3.49h3.49v3.49h13.97v-3.49h3.49v-3.49h3.49V7.97h-3.49V4.48h-3.49z"/>
  <path fill="none" d="m10.75 14.07.87-1.96c.32-.5.28-1.12-.08-1.47a.91.91 0 0 0-.16-.12.97.97 0 0 0-.8-.1c-.3.1-.56.29-.73.56-.17.27-1.2 2.8-1.65 4.06-.45 1.25-.27 3.56 1.45 5.29 1.82 1.82 4.47 2.24 6.15.97a.64.64 0 0 0 .19-.13l5.19-4.34c.25-.2.63-.63.29-1.12-.32-.47-.94-.16-1.2.01l-2.98 2.17a.14.14 0 0 1-.09.03.14.14 0 0 1-.11-.05c-.08-.1-.09-.34.03-.44l4.58-3.89c.4-.36.46-.87.13-1.23-.31-.35-.8-.33-1.2.03l-4.13 3.22a.18.18 0 0 1-.12.05.18.18 0 0 1-.15-.08c-.09-.09-.12-.25-.03-.34l4.68-4.53a.93.93 0 0 0 .04-1.29.87.87 0 0 0-.63-.27.93.93 0 0 0-.66.26l-4.77 4.49c-.12.11-.34 0-.37-.14a.15.15 0 0 1 .04-.14l3.65-4.16a.9.9 0 0 0 .29-.66.92.92 0 0 0-.9-.9.9.9 0 0 0-.66.28l-5.54 6.12c-.19.2-.49.21-.63.1a.21.21 0 0 1-.04-.29h.01z"/>
'
---

# hCaptcha Element

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The hCaptcha element integrates [hCaptcha](https://www.hcaptcha.com/) anti-bot solution that protects user privacy and rewards websites.

{% image width="sm
![hCaptcha Element](./assets/captcha/hcaptcha.webp)

## Settings

| Setting | Description |
| ------- | ----------- |
| **Type** | The type of captcha to display, `Checkbox` or `Invisible`. |
| **Site/Secret Key** | The Site and Secret keys obtained from [hCaptcha](https://www.hcaptcha.com/) Dashboard. |
| **Theme** | The theme style, `Light` or `Dark`. |
| **Score Threshold** | The threshold over which to consider the submitter a bot. From `0.0` (no risk) to `1.0` (confirmed threat), available only for hCaptcha Enterprise. |
| **Error Message** | A message that will be displayed if the element validation fails. Optionally use `{fieldlabel}` as a placeholder, it will be replaced with the field label. | &#x2713; |  | &#x2713; |

### Checkbox

A variation that will render a "checkbox" style field by which the captcha challenge could be initiated by the user.

![hCaptcha Checkbox](./assets/captcha/hcaptcha-checkbox.webp)

| Setting | Description | Dynamic |
| ------- | ----------- | :-----: |
| **Label** | The title for the field that represent the field data. | &#x2713; |
| **Size** | The size of the checkbox, `Normal` or `Compact`. |

### Invisible

A variation that will only render the Compliance text initing the challenge when the form is submitted.

| Setting | Description |
| ------- | ----------- |
| **Compliance** | A legally required text to comply with online privacy laws. Make sure it links to hCaptcha [Privacy Policy](https://www.hcaptcha.com/privacy) and [Terms of Service](https://hcaptcha.com/terms). |

## Integration

1. Access the [hCaptcha](https://www.hcaptcha.com/) Dashboard and obtain the Site & Secret Keys.
1. Access a Builder layout and create a Form Area.
1. Add a hCaptcha Element from the Form Essentials group.
1. Access the element settings and input the obtained keys.
