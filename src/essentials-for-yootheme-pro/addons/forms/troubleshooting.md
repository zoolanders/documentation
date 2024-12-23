# Forms Addon Related Issues

Learn how to handle common issues within essential forms addon.

## Submission Errors

### Submission Fails When Cache is Enabled

The form displays an _Internal Server Error_ when page caching is enabled. When the cache is cleared, it works, but soon after, it stops working.

This is expected. Due to the nature of how submissions are validated, pages containing a form cannot be cached. Find a way to make a caching exception for those pages.

### Submission Fails With Vague Error

The form displays a _Submission Failed_ error without any further details, it is most likely a suppressed PHP error. To get more insights about it you can:

- Check the server PHP's recent error logs.
- Open the Customizer and submit the form again making sure _Error Reporting_ is enabled.

::: tip Enable Error Reporting
Error reporting can be enabled in Joomla Global Configuration or in WordPress `wp-config.php` file.
:::

### Submission Fails With No Error

The form does not display any visual feedback regarding the error, it could be the `.htaccess` redirecting the _post_ request.

The best way to debug this is to check if:

- In the browser console. check if a request redirect is happening when the form is submitted.
- In the `.htaccess` file, check if there is any rule that is affecting the _URL_, eg removing/adding a trailing slash.

If this is the case, you can either remove such a rule or make it more specific, for example by restricting the redirect to only affect GET requests, like so:

Before

```sh
# Remove Trailing Slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,NC,L]
```

After

```sh
# Remove Trailing Slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_METHOD} GET
RewriteRule ^(.*)/$ /$1 [R=301,NC,L]
```

## Email Delivery Issues

### Email Is Sent But Not Delivered

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

## SPAM Issues

### Forms Get Unsolicited Submissions

SPAM is a problem that impacts all publicly accessible forms and fighting is complicated by the fact that spammers and bots are constantly evolving their methods. There are a number of solutions you can use to reduce the amount of spam, but note that there’s not any single anti-spam method in the world able to catch 100% of it.

You can find hundreds of different anti-spam techniques and services, being the most popular ones captcha-based solutions, and the honeypot technique, which we both support and recommend using together. Simply drop reCaptcha or hCatpcha element together with Honeypot element in any form and fulfill the settings. That should considerably reduce the amount, but remember that no solution is definitive.

## Other Issues

### Dates Are Shown With a Wrong Format

No matter the format used during the input of a date it value will be saved in a standard ISO format. A side effect is that when that date is referenced in an After Submit Action it format might not be the desired one.

There are two possible solutions:

1. Save the date as a new FormData value using the [Alter Action](./actions#alter) while applying the desired format during the mapping.
2. Set a [Composed Source](/essentials-for-yootheme-pro/addons/dynamic/composed-sources) instead of raw placeholders and map the date value from the Form Submission source. Set the desired format during the field mapping process.

### Google Recaptcha shows Session Expired

Sometimes, mostly when submitting form that contains a large file upload, Google Recaptcha can report an error saying that the "session is expired".

The solution unfortunately here is to change captcha system, since this is a know issue on google recaptcha's systems when dealing with large form file uploads and slow networks.
