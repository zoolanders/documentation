---
sidebarDepth: 1
---

# F.A.Q.

## Why the Form doesn't submit properly?

If you see that even after configuring your form correctly and setting some actions, the form doesn't submit correctly and you don't have any visual feedback on the form itself regarding the error, it could be because of some issues in your .htaccess rules.

The best way to debug this is to check if 
- In your browser console, you see a redirect happening on the Submit request of the form
- If you have a rule in your .htaccess that deals with removing / adding the trailing slash from the url.

If this is the case, you can either remove said .htaccess rule, or make it more specific, for example by restricting the redirect to only happen in GET requests, like so:

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

When dealing with email we must distinguish between **sending** and **delivery**. While we can assure the email has been sent we cannot warranty it has been delivered, as that is beyond our control. Most of the times emails are not delivered because of server miss configuration, but also because there are simply discarded by the destination server, marked as SPAM, as those doesn't seem coming from a trusted source.

In order to rise the delivery rate it is strongly recommended to set a SMTP server, while for testing purposes we recommend the free service from [Mailtrap](https://mailtrap.io).
