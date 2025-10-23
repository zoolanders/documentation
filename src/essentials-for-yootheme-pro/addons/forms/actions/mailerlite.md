# MailerLite Action

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/mailerlite.svg-->
</div>

The **MailerLite Action** creates, updates, deletes or forgets a subscriber from [MailerLite](https://www.mailerlite.com/).

## Upsert Subscriber

Create or update a MailerLite subscriber.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The MailerLite account specified with an API Key. | &#x2713; |
| *Email Address* | Subscriber's email address. | &#x2713; | &#x2713; |
| *Name* | Subscriber's name. | | &#x2713; |
| *Fields* | Subscriber's additional data specified by MailerLite custom fields. | | &#x2713; |
| *Groups* | The group IDs to which the subscriber will be added. Multiple IDs can be specified separated by comma. | | &#x2713; |
| *Type* | Subscriber's type. Set to 'active' for immediate subscription, 'unconfirmed' for double opt-in, or 'unsubscribed' to unsubscribe. | | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->

## Delete Subscriber

Delete or forget a MailerLite subscriber.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The MailerLite account specified with an API Key. | &#x2713; |
| *Email Address* | Subscriber's email address. | &#x2713; | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->
