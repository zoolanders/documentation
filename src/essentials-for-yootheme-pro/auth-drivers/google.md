---
title: Google
description: A Driver for Google services
---

<!--@include: ./_shared/driver-intro-->

## OAuth Driver

The Google OAuth Driver manage Google OAuth 2.0 protocol to authenticate and grant scope permissions.

![Google OAuth Driver](./assets/google-oauth.webp)
| Setting | Description |
| --- | --- |
| *Name* | The name that will identify this auth. |
| *Scopes* | The list of scopes this auth has access to, those can be revoked at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). |
| *Authentication* | Triggers the OAuth authentication and permission grant. |
| *Custom App* | Whether to use a custom OAuth App instead of ZOOlanders one. |

## API Key Driver

The Google API Key Driver manage Google API keys obtained through the [Google Cloud Platform](https://console.cloud.google.com/apis/credentials) dashboard.

![Google API Key Driver](./assets/google-api-key.webp)
