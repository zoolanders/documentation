## Twitter Auth Driver

The **Twitter Auth Driver** manage Twitter OAuth protocol to authenticate and grant scope permissions.

::: warning Custom Dev App
Due to Twitter API policies it is not possible to use a ZOOlanders oAuth App, instead you must [create a custom Twitter Dev App](./custom-twitter-dev-app) and use your own credentials.
:::

![Twitter Auth Driver](./assets/driver-twitter-oauth.webp)

| Setting | Description |
| --- | --- |
| *Name* | The name that will identify this auth. |
| *Scopes* | The list of scopes this auth has access to, those can be revoked at [twitter.com/settings](https://twitter.com/settings/apps_and_sessions). |
| *Client ID* | The public identifier of your Twitter Dev App. |
| *Client Secret* | The secret key of your Twitter Dev App. |
| *Refresh Token* | The token that will allow us to obtain and refresh an Access Token. |
