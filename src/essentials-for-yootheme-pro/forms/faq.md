---
sidebarDepth: 1
---

# F.A.Q.

## Why the submission is failing?

If after configuring the form and setting some actions the submission fails to execute correctly, it could be related to PHP underlying errors or server configuration.

### With errors visually displayed

The form displays a `Submission Failed` error without any further details, it is most likely a suppressed PHP error. To get more insights about it you can:

- Check the server PHP recent error logs.
- Open the Customizer and submit the form again making sure _Error Reporting_ is enabled.

::: tip
Error reporting can be enabled in Joomla Global `configuration` or in WordPress `wp-config.php` file.
:::

### With no errors visually displayed

The form does not display any visual feedback regarding the error, it could be the `.htaccess` redirecting the `post` request.

The best way to debug this is to check if:

- In the browser console. check if a request redirect is happening when the form is submitted.
- In the `.htaccess` file, check if there is any rule that is affecting the `URL`, eg removing/adding a trailing slash.

If this is the case, you can either remove such rule, or make it more specific, for example by restricting the redirect to only affect GET requests, like so:

**before**
```
# Remove Trailing Slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [R=301,NC,L]
```

**after**
```
# Remove Trailing Slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_METHOD} GET
RewriteRule ^(.*)/$ /$1 [R=301,NC,L]
```

## Why emails are not being sent?

When dealing with email we must distinguish between **sending** and **delivery**. While we can assure the email has been sent we cannot warranty it has been delivered, as that is beyond our control. Most of the time emails are not delivered because of server misconfiguration, but also because there are simply discarded by the destination server, marked as SPAM, as those don't seem to come from a trusted source.

To rise the delivery rate it is strongly recommended to set up an SMTP server, while for testing purposes we recommend the free service from [Mailtrap](https://mailtrap.io).
