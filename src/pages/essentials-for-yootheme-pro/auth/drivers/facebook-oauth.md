---
title: Facebook OAuth Driver
description: A Driver for Facebook OAuth authorization
icon: '
  <path fill="none" stroke-width="1.7" stroke-linejoin="round" d="M27.999 15c0-7.179-5.82-12.999-13-12.999C7.82 2.001 2 7.821 2 15.001c0 6.488 4.754 11.866 10.968 12.841v-9.084h-3.3v-3.757h3.3v-2.864c0-3.258 1.941-5.058 4.91-5.058 1.423 0 2.91.254 2.91.254v3.199H19.15c-1.615 0-2.118 1.002-2.118 2.03v2.439h3.605l-.576 3.757h-3.03v9.084C23.246 26.867 28 21.489 28 15.001Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Facebook OAuth Driver manage Facebook OAuth protocol to authenticate and grant scope permissions.

{% image %}
![Facebook OAuth Driver](/assets/ytp/auths/driver-facebook-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [facebook.com/settings](https://www.facebook.com/settings?tab=business_tools&ref=business_login_reentry). |
| **Authentication** | Triggers the OAuth authentication and permission grant. |
| **Custom App** | Whether to use a custom OAuth App instead of ZOOlanders one. |

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yootheme-pro/oauth-keys-secrets#security).
{% /callout %}

---

## Custom Facebook Dev App

Create a custom Facebook Developer App to authenticate with it to Facebook and Instagram Business accounts.

### Step 1. Create New App

Go to [https://developers.facebook.com/apps/creation](https://developers.facebook.com/apps/creation) and choose "Other".

{% image %}
![Choose app purpose](/assets/ytp/auths/facebook/app-purpose.jpg)
{% /image %}

On Next Choose "Business".

{% image %}
![Choose app type](/assets/ytp/auths/facebook/app-type.jpg)
{% /image %}

On Next fill in the details and Create app.

{% image %}
![Fill in app details](/assets/ytp/auths/facebook/app-details.jpg)
{% /image %}

From the left column or from the dashboard, add both "Facebook Login for Business" and "Instagram Graph API" products leaving all settings as per their defaults.

{% image %}
![Add products to your app](/assets/ytp/auths/facebook/app-products.jpg)
{% /image %}

### Step 2. Generate Access Token

Go to [https://developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer). Select from the list of apps on the right the app you just created, and add the following permissions in the permissions list:

- instagram_basic
- pages_show_list
- pages_read_engagement
- pages_read_user_content
- business_management

Be sure that the list matches with the screenshot and "Generate Access Token".

{% image %}
![Generate access token](/assets/ytp/auths/facebook/token-generate.jpg)
{% /image %}

- When prompted login with the account that created the app itself.
- Select the business accounts (or all of them).
- Select the pages you want to give access to.
- Select the Instagram accounts you want to allow.
- Confirm.

{% callout title="Account Permissions" %}
The Access Token should be generated with the account that created the app or at least one of the accounts listed in the app as "Testers", "Developers" or "Administrators". If you don’t do this, you will need to publish the app and get through the facebook review process (not recommended).
{% /callout %}

You now have an access token. Click on the Info icon and then on the "Open in Access Token Tool".

{% image %}
![Get access token info](/assets/ytp/auths/facebook/token-info.jpg)
{% /image %}

Click on "Extend Access Token" and copy the new Access Token. Use that token when authenticating a source with your custom app.

### Step 3. Authenticate a Source

Now that you have an access token create a Facebook or Instagram Business source. When authenticating choose "Custom App", past the generated access token and complete the source setup.

{% image %}
![Set access token](/assets/ytp/auths/facebook/source-auth.jpg)
{% /image %}

{% callout title="Token Expiration" %}
Note that the token will be auto-renewed by the source when used, but it may expire if not used enough during the given time period. If it does, you will need to generate a new token.
{% /callout %}
