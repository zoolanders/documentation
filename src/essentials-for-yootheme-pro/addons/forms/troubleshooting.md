# Common Issues

## Missing Page Sources

In certain form workflows, there may be a need for dynamic content from the current page, also known as page sources. This content is available during the form rendering, but is not during the form submission, which is why it's not listed as a mapping option. To work around this limitation page content can be mapped to a [hidden form field](./elements#hidden) and referenced in the actions using [data placeholders](./form-area#data-placeholders) or a [form area source](./form-area#form-source).

::: warning Hidden, But Still Exposed
It's important to note that although hidden field content is not visible on the page, it is still exposed in the source code of the page. If the data is sensitive, it's crucial to enable the encryption setting in the hidden field to ensure that it remains secure and protected from unauthorized access or disclosure.
:::

## Contextual Data

Contextual data such as the current date and time, page URL, and user IP are not included in the submission by default. However, since this information is available within dynamic sources, it can be easily mapped to the actions when necessary.

As a quick reference use these sources:

| Data     | Source                 |
| -------- | ---------------------- |
| Datetime | _Request -> Timestamp_ |
| User IP  | _Request -> IP_        |
| Page URL | _Request -> Href_      |

## Wrong Date Format

No matter the format used during the input of a date it value will be saved in a standard ISO format. A side effect is that when that date is referenced in an After Submit Action it format might not be the desired one.

There are two possible solutions:

1. Save the date as a new FormData value using the [Alter Action](./actions/alter) while applying the desired format during the mapping.
2. Set a [Composed Source](/essentials-for-yootheme-pro/addons/dynamic/composed-sources) instead of raw placeholders and map the date value from the Form Submission source. Set the desired format during the field mapping process.

## reCAPTCHA Session Expired

Sometimes, mostly when submitting form that contains a large file upload, Google reCAPTCHA can report an error saying that the "session is expired".

The solution unfortunately here is to change captcha system, since this is a know issue on google recaptcha's systems when dealing with large form file uploads and slow networks.

## Display a Form in a Modal

Out of the box, a form cannot be displayed in a Modal, but there are 3rd party solutions.

- [FS Teaser Card](https://flart.studio/yootheme-pro/teaser-card) by Flart Studio
- [DJ-Popup](https://dj-extensions.com/yootheme/dj-popup) by DJ Extensions
- [JP CE Modal Pro](https://extensions.joomlapro.com/product/ce-modal-pro) by JoomlaPro
