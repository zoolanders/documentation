# Brevo Action

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/brevo.svg-->
</div>

The **Brevo Action** creates, updates or removes a contact from a [Brevo](https://www.brevo.com/) (formerly Sendinblue) list.

## Upsert Contact

Create or update a Brevo contact.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Brevo account specified with an API Key. | &#x2713; |
| *Email Address* | Contact's email address. | &#x2713; | &#x2713; |
| *Attributes* | Contact's additional data specified by Brevo custom attributes. | | &#x2713; |
| *List IDs* | The list IDs to which the contact will be added. Multiple IDs can be specified separated by comma. | | &#x2713; |
| *Unlink List IDs* | The list IDs from which the contact will be removed. Multiple IDs can be specified separated by comma. | | &#x2713; |
| *SMS* | Contact's SMS/mobile number with country code. | | &#x2713; |
| *Email Blacklisted* | Set whether the contact should not receive marketing emails. | | &#x2713; |
| *SMS Blacklisted* | Set whether the contact should not receive marketing SMS. | | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->

## Delete Contact

Delete a Brevo contact permanently.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Brevo account specified with an API Key. | &#x2713; |
| *Email Address* | Contact's email address. | &#x2713; | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->

## Double Opt-in Contact

Create a Brevo contact with Double Opt-In.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Brevo account specified with an API Key. | &#x2713; |
| *Email Address* | Contact's email address. | &#x2713; | &#x2713; |
| *Attributes* | Contact's additional data specified by Brevo custom attributes. | | &#x2713; |
| *List IDs* | The list IDs to which the contact will be added. Multiple IDs can be specified separated by comma. | &#x2713; | &#x2713; |
| *Template ID* | The ID of the double opt-in confirmation email template. | &#x2713; | &#x2713; |
| *Redirection URL* | The URL to redirect to after the contact confirms the subscription. | &#x2713; | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->
