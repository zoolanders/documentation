# SPAM - Unsolicited Submissions

SPAM is a problem that impacts all publicly accessible forms and fighting is complicated by the fact that spammers and bots are constantly evolving their methods. There are a number of solutions you can use to reduce the amount of spam, but note that there's not any single anti-spam method in the world able to catch 100% of it.

You can find hundreds of different anti-spam techniques and services, being the most popular ones captcha-based solutions and the honeypot technique, which we both support and recommend using together.

## Enabling Anti-Spam Protection

### Built-in Honeypot

Every Form Element includes built-in honeypot protection. To enable it:

1. Open your Form Element settings
2. Go to the _Settings_ tab
3. In the _Anti-Spam_ section, enable _Enable Honeypot Anti-Spam_
4. Optionally adjust the _Min Seconds_ to set the minimum time required for submission
5. Optionally customize the _Error Message_ shown when spam is detected

The honeypot technique creates an invisible field that should remain empty when submitted by legitimate users, while bots and automated scripts often fill out all available fields.

### CAPTCHA Elements

For additional protection, add CAPTCHA elements from the _Form Essentials_ group. For detailed information about all available CAPTCHA options and configuration, see the [Validation - CAPTCHA](./validation#captcha-validation) documentation.

Available CAPTCHA solutions:

- **reCAPTCHA** - Google's CAPTCHA service
- **hCaptcha** - Privacy-focused CAPTCHA alternative
- **Turnstile** - Cloudflare's CAPTCHA service
- **Friendly Captcha** - EU-hosted, GDPR-compliant CAPTCHA

Simply add one of these elements inside your Form Element and configure the required settings.

### Best Practices

Combining honeypot protection with a CAPTCHA element provides the best protection against spam. Enable honeypot in your Form Element settings and add a CAPTCHA element inside the form. This layered approach should considerably reduce the amount of spam, but remember that no solution is definitive.
