## AcyMailing Action {#acymailing}

<div class="tm-resource-icon">
    <!--@include: ../assets/action-acymailing.svg-->
</div>

The **AcyMailing Action** subscribes or unsubscribes a member from an [AcyMailing](https://www.acymailing.com/) list.

### Subscribe {#acymailing-subscribe}

Create or update an AcyMailing list subscriber.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Email* | Subscriber's email address. | &#x2713; | &#x2713; |
| *Name* | Subscriber's name, it will be autocreated from the email if omited. | | &#x2713; |
| *Status* | Subscriber's confirmation status. | | &#x2713; |
| *Lists* | The lists to which to subscribe. | &#x2713; | &#x2713; |
| *Custom Fields* | Subscriber's additional data specified by AcyMailing custom fields. | &#x2713; | &#x2713; |
<!--@include: ./common-action-settings.md-->

### Unsubscribe {#acymailing-unsubscribe}

Unsubcribe an AcyMailing list subscriber.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Email* | Subscriber's email address. | &#x2713; | &#x2713; |
| *Lists* | The lists to which to subscribe. | &#x2713; | &#x2713; |
<!--@include: ./common-action-settings.md-->
