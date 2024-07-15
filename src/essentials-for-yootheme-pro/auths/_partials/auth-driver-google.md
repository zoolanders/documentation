## Google Auth Driver

The **Google Auth Driver** manage Google OAuth 2.0 protocol to authenticate and grant scope permissions.

![Google Auth Driver](./assets/driver-google-oauth.webp)

| Setting | Description |
| --- | --- |
| *Name* | The name that will identify this auth. |
| *Scopes* | The list of scopes this auth has access to, those can be revoked at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). |
| *Authentication* | Triggers the OAuth authentication and permission grant. |
| *Custom App* | Whether to use a custom OAuth App instead of ZOOlanders one. |


### Custom OAuth App

If you need to a custom cache time, have a very heavy usage application, or simply do not want to pass through our oauth application to query google's data, you can integrate your own google oauth credentials.

This is done by following the [official google guide](https://developers.google.com/identity/protocols/oauth2/web-server?hl=en#prerequisites). We'll try to summarize it here as best we can.

1. Go to the [Google Cloud Console](https://console.cloud.google.com/apis/library)
2. Create or choose a project in which the credentials will be stored
3. Add any API you want to use. For example, if you need to add Google Sheet, add the Google Sheet api, if you need Youtube, add the Youtube API, etc. You can either create one application and credentials set for each usage, or a single oauth application for every api you intend to use. It's up to you and your security policies.
4. Go to the [Credentials Page](https://console.developers.google.com/apis/credentials)
5. Click "Create OAuth Client ID" and select Web Application
6. Fill in the data in the form. For the url, you can input your site's root url or any url you want.
7. Copy the `REDIRECT_URI`, `CLIENT_ID` and `CLIENT_SECRET` parameters.
8. Go to the [Google Documentation](https://developers.google.com/identity/protocols/oauth2/scopes) To select your required scopes. These usually match the apis you enabled previously. For example, for the google sheet source the scopes required are `https://www.googleapis.com/auth/drive.readonly` and `https://www.googleapis.com/auth/spreadsheets.readonly`. You can find our complete list of scopes [here](#api-scopes)
9. Through your browser, visit the following url, filling in the request parameters using the details from the previous steps: `https://accounts.google.com/o/oauth2/v2/auth?client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&response_type=code&access_type=offline&state=state&scope={LIST_OF_SCOPES}`
10. You will get redirected back to the `REDIRECT_URI` with a `code` parameter in the url, for example `https://example.com/?code=4/P7q7W91a-oMsCeLvIaQm6bTrgtp7`. Copy that `code` value.
11. Through an HTTP client like POSTman, or your terminal using curl, make a post request like the following one:
```
POST /token HTTP/1.1
Host: oauth2.googleapis.com
Content-Type: application/x-www-form-urlencoded

code={CODE}
client_id={CLIENT_ID}&
client_secret={CLIENT_SECRET}&
redirect_uri={REDIRECT_URI}&
grant_type=authorization_code 
```
12. You should get back a json response that contains the `refresh_token` you need, for example:
```json
{
  "access_token": "1/fFAGRNJru1FTz70BzhT3Zg",
  "expires_in": 3920,
  "token_type": "Bearer",
  "scope": "https://www.googleapis.com/auth/drive.metadata.readonly",
  "refresh_token": "1//xEoDL4iW3cxlI7yDbSRFYNG01kVKM2C-259HOF2aQbI"
}
```
13. Fill in the Essentials details using `CLIENT_ID`, `CLIENT_SECRET` and `REFRESH_TOKEN`
![ZOOlanders Google Custom OAuth](./assets/google-custom-oauth.webp)


### List of Google OAuth Scopes {#api-scopes}

#### Youtube
| Scope  | Addon                                              |
|--------|----------------------------------------------------|
| https://www.googleapis.com/auth/youtube.readonly     | Youtube Source.                                    |
| https://www.googleapis.com/auth/business.manage     | Google My Business Source.                         |
| https://www.googleapis.com/auth/drive.readonly | Google Sheets Source and Google Sheets Form Action |
| https://www.googleapis.com/auth/spreadsheets | Google Sheets Source and Google Sheets Form Action |
| https://www.googleapis.com/auth/calendar.readonly | Google Calendar Source                             |
| https://www.googleapis.com/auth/calendar.events.readonly | Google Calendar Source                             |
| https://www.googleapis.com/auth/photoslibrary.readonly | Google Photos Source                               |




## Google API Key Driver

The **Google API Key Driver** manage Google API keys obtained through the [Google Cloud Platform](https://console.cloud.google.com/apis/credentials) dashboard.

![Google API Key Auth Driver](./assets/driver-google-api-key.webp)
