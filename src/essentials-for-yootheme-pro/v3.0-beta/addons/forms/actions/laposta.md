# Laposta Action

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/v3.0-beta/assets/brands/laposta.svg-->
</div>

The **Laposta Action** subscribes, updates or removes a member from a [Laposta](https://www.laposta.nl/) list.

## Subscribe Member

Create or update a Laposta list member.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Laposta account specified with an API Key. | &#x2713; |
| *List* | The list to which to subscribe the member. | &#x2713; |
| *Update if exists* | Specifies if the member data should be updated if it already exists. |
| *Email Address* | Member's email address. | &#x2713; | &#x2713; |
| *Custom Fields* | Member's additional data specified by Laposta list custom fields. | | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->

## Delete Member

Delete a Laposta list member permanently.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Laposta account specified with an API Key. | &#x2713; |
| *List* | The list from which to delete the member. | &#x2713; |
| *Email Address* | Member's email address. | &#x2713; | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->
