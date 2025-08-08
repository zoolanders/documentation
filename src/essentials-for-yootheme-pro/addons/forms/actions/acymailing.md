# AcyMailing Action

<div class="tm-resource-icon">
    <!--@include: ./assets/action-acymailing.svg-->
</div>

The **AcyMailing Action** subscribes or unsubscribes a member from an [AcyMailing](https://www.acymailing.com/) list.

## Subscribe

Create or update an AcyMailing list subscriber.

| Setting         | Description                                                         | Required | Dynamic  |
| --------------- | ------------------------------------------------------------------- | :------: | :------: |
| _Email_         | Subscriber's email address.                                         | &#x2713; | &#x2713; |
| _Name_          | Subscriber's name, it will be autocreated from the email if omited. |          | &#x2713; |
| _Status_        | Subscriber's confirmation status.                                   |          | &#x2713; |
| _Lists_         | The lists to which to subscribe.                                    | &#x2713; | &#x2713; |
| _Custom Fields_ | Subscriber's additional data specified by AcyMailing custom fields. | &#x2713; | &#x2713; |

<!--@include: ./_partials/common-action-settings.md-->

## Unsubscribe

Unsubcribe an AcyMailing list subscriber.

| Setting | Description                      | Required | Dynamic  |
| ------- | -------------------------------- | :------: | :------: |
| _Email_ | Subscriber's email address.      | &#x2713; | &#x2713; |
| _Lists_ | The lists to which to subscribe. | &#x2713; | &#x2713; |

<!--@include: ./_partials/common-action-settings.md-->
