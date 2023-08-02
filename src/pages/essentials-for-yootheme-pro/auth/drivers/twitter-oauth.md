---
title: Twitter OAuth Driver
description: A Driver for Twitter OAuth authorization
icon: '
  <path fill="none" stroke-width="1.5" stroke-linejoin="round" d="M25.338 9.696c.016.23.016.459.016.69 0 7.048-5.366 15.177-15.177 15.177v-.004A15.1 15.1 0 0 1 2 23.168a10.711 10.711 0 0 0 7.894-2.21 5.34 5.34 0 0 1-4.983-3.705c.8.154 1.624.122 2.408-.092a5.335 5.335 0 0 1-4.278-5.229v-.067a5.3 5.3 0 0 0 2.42.667 5.34 5.34 0 0 1-1.65-7.122 15.14 15.14 0 0 0 10.993 5.573 5.34 5.34 0 0 1 9.09-4.865 10.704 10.704 0 0 0 3.388-1.295 5.354 5.354 0 0 1-2.345 2.95A10.609 10.609 0 0 0 28 6.933a10.837 10.837 0 0 1-2.662 2.763Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Twitter OAuth Driver manage Twitter OAuth protocol to authenticate and grant scope permissions.

{% image %}
![Twitter OAuth Driver](/assets/ytp/auths/driver-twitter-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [twitter.com/settings](https://twitter.com/settings/apps_and_sessions). |
| **Client ID** | The public identifier of your Twitter Dev App. |
| **Client Secret** | The secret key of your Twitter Dev App. |
| **Refresh Token** | The token that will allow us to obtain and refresh an Access Token. |

{% callout type="warning" title="ZOOlanders OAuth" %}
Notice that due to Twitter API policies updates is not longer possible to use the ZOOlanders oAuth, instead you must setup a custom Twitter Dev App following [their guide](https://developer.twitter.com/en/docs/twitter-api).

Once ready, copy the resulting informations (Client ID, Client Secret and Refresh Token) into the respective fields.
{% /callout %}

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yootheme-pro/oauth-keys-secrets#security).
{% /callout %}
