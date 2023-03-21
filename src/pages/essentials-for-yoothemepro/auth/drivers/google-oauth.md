---
title: Google OAuth Driver
description: A Driver for Google OAuth authorization
icon: '
  <path stroke="none" d="M27.51 13.28c.956 4.823-1.146 11.078-6.446 13.482-6.94 3.136-15.408.191-18.05-7.465-2.85-8.261 2.785-16.634 11.19-17.255 3.294-.238 6.24.541 8.834 2.579.27.207.51.446.891.78-1.13 1.066-2.197 2.085-3.358 3.183-1.958-1.687-4.235-2.26-6.718-1.846-1.846.302-3.374 1.241-4.632 2.626-2.371 2.61-2.785 6.733-.97 9.853 1.894 3.263 5.427 4.744 9.247 3.868 2.706-.605 5.078-3.056 5.285-5.571h-6.972V13.28h11.7z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The Google OAuth Driver manage Google OAuth 2.0 protocol to authenticate and grant scope permissions.

{% image %}
![Google OAuth Driver](/assets/ytp/auths/driver-google-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). |
| **Authentication** | Triggers the OAuth authentication and permission grant. |
| **Custom App** | Whether to use a custom OAuth App instead of ZOOlanders one. |
