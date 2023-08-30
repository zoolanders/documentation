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
Notice that due to Twitter API policies updates is not longer possible to use the ZOOlanders oAuth, instead you must setup a custom Twitter Dev App and use your own credentials. We have tried to list all the steps required below. Beware that it's a pretty technical process that requires some development skill like interacting with REST APIs.

Once ready, copy the resulting informations (Client ID, Client Secret and Refresh Token) into the respective fields.
{% /callout %}

1. Create a new Developer Application Following following [this Twitter guide](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api). Select the plan that best suits your case
2. Once the app is created, you need to enable the OAuth2 support at the bottom of the App Page on the Twitter Developer Portal
3. You will need to generate a refresh token manually by calling a couple of endpoints via REST APIs. The full guide is available [here](https://developer.twitter.com/en/docs/authentication/oauth-2-0/user-access-token).
4. Following that guide, the first step is to generate a proper authorization url and visit it in your browser. The url will look something like this: `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=YOUR_APP_CLIENT_ID&redirect_uri=https://www.example.com&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain`. Be sure that the redirect url you set there is the same you specified at step 2 in your app settings. It doesn't need to be a particular url, it can be whatever you want, but it should be the same as the one specified in the redirect_uri parameter.
5. When visiting such url, you will be asked to authenticate with your desidered twitter account, and allow access.
6. The system will redirect you to the url specified in the redirect_url parameter. Ignore the page itself and look at the url. Copy the value of the `code` pararameter. You will need it in the next step.
7. Using your console or a tool like Postman, make a post request to create an access and refresh token: 
```
curl --location --request POST 'https://api.twitter.com/2/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=THE_CODE_YOU_COPIED_AT_STEP_6' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'client_id=YOUR_APP_CLIENT_ID' \
--data-urlencode 'redirect_uri=https://www.example.com' \
--data-urlencode 'code_verifier=challenge'
```
8. In the reply, copy the value of the refresh token.
9. Fill in Client id, client secret and refresh token in Essentials configuration.

{% callout title="OAuth Security" %}
Learn more about Essentials [OAuth security protocols](/essentials-for-yootheme-pro/oauth-keys-secrets#security).
{% /callout %}