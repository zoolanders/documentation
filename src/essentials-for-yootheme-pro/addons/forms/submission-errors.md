# Submission Errors

## Submission Fails With Vague Error

The form displays a _Submission Failed_ error without any further details, it is most likely a suppressed PHP error. To get more insights about it you can:

- Check the server PHP's recent error logs.
- Or enable _Error Reporting_ in your system settings, then submit the form again within the Builder.

::: tip Enable Error Reporting
Error reporting can be enabled in Joomla Global Configuration or in WordPress `wp-config.php` file.
:::

## Submission Fails With No Error

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

## Could Not Instantiate Mail Function

Error message:

```text
Could not instantiate mail function.
Error location: Mail.php:xxx in PHPMailer\PHPMailer\PHPMailer->send()
```

### Cause

This error occurs when the server's default mail function cannot be properly instantiated by PHPMailer. This typically happens because:

- The server's PHP `mail()` function is disabled or not configured properly
- The mail system on the server is not functioning
- The hosting environment does not support the default PHP mail function

### Solution

The most reliable solution is to configure your mail addon to use **SMTP** instead of the default PHP mail function. SMTP (Simple Mail Transfer Protocol) provides:

- More reliable mail delivery
- Better error reporting
- Support across virtually all hosting environments
- No dependency on server-side mail configuration
