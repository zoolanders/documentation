# Email Action

<div class="tm-resource-icon">
    <!--@include: ./assets/action-email.svg-->
</div>

The **Email Action** sends preset emails with support for attachments. Use it to send a confirmation email to the submitter, a transactional email to the site owner, etc.

| Setting               | Description                                                                                                                                            | Required | Dynamic  |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | :------: | :------: |
| _Subject_             | The subject of the email.                                                                                                                              | &#x2713; | &#x2713; |
| _Recipients_          | The list of addresses to which the email will be sent, separated by a comma.                                                                           | &#x2713; | &#x2713; |
| _Body_                | The main content of the email.                                                                                                                         | &#x2713; | &#x2713; |
| _Send as HTML_        | Should the email content be sent as HTML instead of plain text.                                                                                        |
| _Reply To_            | The list of addresses to which the recipient will be replying, separated by a comma.                                                                   | &#x2713; |
| _Static Attachments_  | The list of server files that will be attached to the email.                                                                                           | &#x2713; |
| _Dynamic Attachments_ | The list of Upload Fields which files will be attached to the email.                                                                                   | &#x2713; |
| _CCS_                 | The list of addresses to which the email will be sent as a [Carbon Copy](https://en.wikipedia.org/wiki/Carbon_copy), separated by a comma.             | &#x2713; |
| _BCCS_                | The list of addresses to which the email will be sent as a [Blind Carbon Copy](https://en.wikipedia.org/wiki/Blind_carbon_copy), separated by a comma. | &#x2713; |
| _From Name/Email_     | The name and email address of the email sender, defaults to the site configuration one.                                                                | &#x2713; |

<!--@include: ./_partials/common-action-settings.md-->

::: tip Submitted Attachments
When a file is submitted by the user, the [Data Placeholder](../form-area#data-placeholders) of the uploaded file holds just the name of the file, if you want to send that file attached to the email set it as a dynamic attachment instead.
:::

::: warning Reply To
If you want to receive an email like if it was sent by the submitter, use _Reply To_ instead of _From Email_. Forcing the email sender to a different value is considered a bad practice and might affect the delivery rate.
:::
