# Custom Twitter Dev App

Learn how to create a custom Twitter Dev App and get your own credentials. Once ready, you can use the resulting _Client ID_, _Client Secret_ and _Refresh Token_ into the respective [Twitter Auth](/essentials-for-yootheme-pro/auth-drivers#twitter) to authenticate.

::: warning ZOOlanders OAuth
Beware that it's a technical process that requires some development skills like interacting with REST APIs.
:::

## 1. Create a new Dev App

Following the [Twitter guide](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api) select the plan that best suits your case. Once the app is created, you need to enable the OAuth2 support at the bottom of the App Page on the Twitter Developer Portal.

## 2. Generate a Refresh Token

Generate a refresh token via REST APIs calls following [this guide](https://developer.twitter.com/en/docs/authentication/oauth-2-0/user-access-token) where the first step is to generate a proper authorization url and visit it in your browser. The url will look something like this:

```html
https://twitter.com/i/oauth2/authorize?response_type=code&client_id=YOUR_APP_CLIENT_ID&redirect_uri=https://www.example.com&scope=tweet.read%20users.read%20offline.access&state=state&code_challenge=challenge&code_challenge_method=plain
```

Be sure that the redirect url you set there is the same you specified at Step 1 in your app settings. It doesn't need to be a particular url, it can be whatever you want, but it should be the same as the one specified in the `redirect_uri` parameter.

## 3. Authenticate With Twitter

When visiting such url, you will be asked to authenticate with your desidered twitter account, and allow access. The system will redirect you to the url specified in the _redirect_url_ parameter. Ignore the page itself and look at the url. Copy the value of the _code_ pararameter, you will need it in the next step.

## 4. Get a Refresh Token

Using a console or a tool like Postman, make a post request to create an access and refresh token:

```bash
curl --location --request POST 'https://api.twitter.com/2/oauth2/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'code=THE_CODE_YOU_COPIED_AT_STEP_6' \
--data-urlencode 'grant_type=authorization_code' \
--data-urlencode 'client_id=YOUR_APP_CLIENT_ID' \
--data-urlencode 'redirect_uri=https://www.example.com' \
--data-urlencode 'code_verifier=challenge'
```

In the reply, copy the value of the refresh token. Then fill in Client id, Client Secret and Refresh Token in Essentials configuration.
