# Email

The Email Action sends preset emails with support for Data Placeholders and Attachments. Use it to send a _Thank You_ email to the submitter, a transactional email to the site owner, etc.

![Email Form Action](./assets/email.png)

## Data Placeholders

This action supports [Data Placeholders](./overview#data-placeholders) in most of its settings allowing the creation of advanced, and versatile workflows. But take into consideration that the uploaded files reference is just the name of the file, if you would like to send the file within the email set it as a Dynamic Attachment instead.

## Attachments

Attachments can be set statically, e.g. a file from the server local folder, or dynamically, eg a file submitted with the form. Both types are set in the action configuration Attachment fields and they will be all merged as email attachments.

## Sending Issues

When dealing with email we must distinguish between sending and delivery. While we can assure the email has been sent we cannot warranty it has been delivered, as that is beyond our control. Most of the time emails are not delivered because of server misconfiguration, but also because there are simply discarded by the destination server, marked as SPAM, as those don't seem to come from a trusted source.

To rise the delivery rate it is strongly recommended to set up an SMTP server, while for testing purposes we recommend the free service from Mailtrap (opens new window).
