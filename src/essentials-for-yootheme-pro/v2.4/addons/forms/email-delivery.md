# Email Delivery Issues

## Email Is Sent But Not Delivered

When dealing with email we must distinguish between sending and delivery. While we can assure the email has been sent we cannot warranty it has been delivered, as that is beyond our control. Most of the time emails are not delivered because of server misconfiguration, but also because are discarded for the following reasons:

| Reason | Description |
| --- | --- |
| _SPF Records_ | SPF (Sender Policy Framework) records are used to prevent spammers from sending emails on behalf of your domain. If you change the "From" address to a domain that you do not have permission to send from, the recipient's email server may reject the email based on the SPF record. |
| _DMARC Policy_ | DMARC (Domain-based Message Authentication, Reporting & Conformance) uses SPF and DKIM (DomainKeys Identified Mail) to determine the authenticity of an email message. If you're sending an email with a "From" address that's not aligned with the domain's DMARC policy, it could be rejected or sent to the spam folder. |
| _Reputation_ | Email servers often consider the reputation of the sender's domain and IP address when deciding whether to accept or reject an email. If you change the "From" address to a domain or IP with a poor reputation, your email may not be delivered. |
| _Recipient Trust_ | If the recipient doesn't recognize the "From" address, they might mark the email as spam, which can affect future email deliverability. |
| _Email Client Rules_ | Some email clients allow users to set rules to automatically move emails from certain senders to specific folders. If you change the "From" address, these rules may not apply, and the email might not end up where the recipient expects it to be. |

Therefore, to ensure your emails are delivered successfully use a consistent, recognizable "From" address that you have permission to send from and do so from a trusted SMTP server or 3rd party service.

::: tip Email Delivery Test
We recommend the free service from [Mailtrap](https://mailtrap.io/) which allows you to test if an email has been sent and give it delivery punctuation. If you don't want to open an account feel free to reach out to our support and we will assist you using ours.
:::
