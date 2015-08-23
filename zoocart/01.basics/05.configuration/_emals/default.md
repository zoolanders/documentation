## Email Templates Manager

![Emais Template Manager](emails-template.png?resize=600)

In the Settings Emails tab upper right corner is the **Email Templates Manager** button, leading to the view where you can manage you can create new email notification templates or manage existing ones with the following options:

![Email page](emails.png?resize=600)

| Field       | Description |
| :---------- | :---------- |
| **Type** | The template email type. |
| **Language** | The language for which the template will be applied to. |
| **User Groups** | The User Groups to which the email will be send to. |
| **Subject** | The email subject. |
| **CC** | Carbon Copy, send a copy of each email to another address. Separate multiple addresses with commas. |
| **BCC** | Blind Carbon Copy, same as Carbon Copy but with recipient email hidden. Use this option if you don't want other recipients to know an email copy is being sent somewhere else. |
| **Template** | The email body content. |
| **Status** | publication status. |

>>> Please take into account that CC and BCC work only with SMTP(Win32) mailing mode.

You can use the following placeholders in Subject and Body content:

| Placeholder | Replaced with |
| :---------- | :---------- |
| **{sitename}** | Your site name. |
| **{siteurl}** | Your site URL. |
| **{user}** | The User full name. |
| **{username}** | The User username . |
| **{order_number}** | The Order number. |
| **{order_link}** | The Order link. |
| **{order_state}** | The Order state. |
| **{order_summary}** | The Order items list and summary. |
| **{billing_address}** | The User Billing Address provided for that Order. |
| **{shipping_address}** | The User Shipping Address provided for that Order. |
| **{admin_notes}** | The admin notes field content. |

>>> **Notification emails** are only sent to Super Users if their **Receive System Emails** option is enabled.
