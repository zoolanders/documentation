# Mailchimp Action

<div class="tm-resource-icon">
    <!--@include: @essentials-for-yootheme-pro/assets/brands/mailchimp.svg-->
</div>

The **Mailchimp Action** creates, updates or removes a member from a [Mailchimp](https://mailchimp.com/) audience.

## Add Member

Create or update a Mailchimp audience member.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Mailchimp account specified with oAuth or an API Key. | &#x2713; |
| *Audience* | The audience to which to add a new member or alter an existing. | &#x2713; |
| *Update if exists* | Specifies if the member data should be updated if it already exists. |
| *Skip Merge Fields validation* | Specifies if Merge Fields validation should be skipped. |
| *Email Address* | Member's email address. | &#x2713; | &#x2713; |
| *Email Type* | The email type the member has requested to get (html or text). | | &#x2713; |
| *Status* | Member's subscription status, for double opt-in set as pending. | |  &#x2713; |
| *Language* | Member's language, used for segmentation purpose. If omitted Mailchimp will attempt to detect it with member's further interaction. | |  &#x2713; |
| *VIP* | Mark the member as [VIP](https://mailchimp.com/help/designate-and-send-to-vip-contacts) for targeted campaigns. | | &#x2713; |
| *Location* | Member's location latitute and longitude separated by a comma. Used for segmentation purpose. | | &#x2713; |
| *Tags* | A list of tags, separated by a comma or newline, associated with the member. Used for segmentation purpose. | | &#x2713; |
| *Merge Fields* | Specific to the selected audience, [Merge Fields](https://mailchimp.com/developer/marketing/docs/merge-fields) determines additional information about members. | | &#x2713; |
| *Interests* | Specific to the selected audience, determines the member interests used in targeted campaigns. | | &#x2713; |
| *Marketing Permissions* | Specific to the selected audience, determines the memebers marketing consents. | | &#x2713; |
<!--@include: ./_partials/common-action-settings.md-->

## Remove Member

Archive or delete a Mailchimp audience member.

| Setting | Description | Required | Dynamic |
| --- | --- | :---: | :---: |
| *Account* | The Mailchimp account specified with oAuth or an API Key. | &#x2713; |
| *Audience* | The audience from which to remove a member. | &#x2713; |
| *Email Address* | Member's email address. | &#x2713; | &#x2713; |
| *Delete Instead* | Delete instead of archive. The member will be removed from the list and all it personally identifiable information will be deleted. This will make it impossible to re-import the list member. |
<!--@include: ./_partials/common-action-settings.md-->
