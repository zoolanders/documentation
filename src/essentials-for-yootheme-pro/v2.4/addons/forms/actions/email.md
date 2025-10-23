# Email Action

<div class="tm-resource-icon">
    <!--@include: ./assets/action-email.svg-->
</div>

The **Email Action** sends preset emails with support for attachments. Use it to send a confirmation email to the submitter, a transactional email to the site owner, etc.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Subject* | The subject of the email. | &#x2713; | &#x2713; |
| *Recipients* | The list of addresses to which the email will be sent, separated by a comma. | &#x2713; | &#x2713; |
| *Body* | The main content of the email. | &#x2713; | &#x2713; |
| *Send as HTML* | Should the email content be sent as HTML instead of plain text. |
| *Reply To* | The list of addresses to which the recipient will be replying, separated by a comma. | &#x2713; |
| *Static Attachments* | The list of server files that will be attached to the email. | &#x2713; |
| *Dynamic Attachments* | The list of Upload Fields which files will be attached to the email. | &#x2713; |
| *CCS* | The list of addresses to which the email will be sent as a [Carbon Copy](https://en.wikipedia.org/wiki/Carbon_copy), separated by a comma. | &#x2713; |
| *BCCS* | The list of addresses to which the email will be sent as a [Blind Carbon Copy](https://en.wikipedia.org/wiki/Blind_carbon_copy), separated by a comma. | &#x2713; |
| *From Name/Email* | The name and email address of the email sender, defaults to the site configuration one. | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->

::: tip Submitted Attachments
When a file is submitted by the user, the [Data Placeholder](../form-area#data-placeholders) of the uploaded file holds just the name of the file, if you want to send that file attached to the email set it as a dynamic attachment instead.
:::

::: warning Reply To
If you want to receive an email like if it was sent by the submitter, use _Reply To_ instead of _From Email_. Forcing the email sender to a different value is considered a bad practice and might affect the delivery rate.
:::
