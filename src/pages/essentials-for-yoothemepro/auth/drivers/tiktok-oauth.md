---
title: TikTok OAuth Driver
description: A Driver for TikTok OAuth authorization
icon: '
  <path stroke="none" d="M11.804 28a8.386 8.386 0 0 1-5.955-2.44 8.2 8.2 0 0 1-2.454-6.42 8.28 8.28 0 0 1 2.083-4.983 8.377 8.377 0 0 1 6.326-2.83c.421 0 .846.032 1.265.094l.65.096v5.768l-1.001-.33a2.863 2.863 0 0 0-.902-.146c-.775 0-1.5.304-2.043.855a2.83 2.83 0 0 0-.82 2.043 2.84 2.84 0 0 0 1.397 2.405 2.863 2.863 0 0 0 2.367.26 2.85 2.85 0 0 0 1.962-2.708l.005-5.982V2h5.513l.006.754a5.412 5.412 0 0 0 2.16 4.281 5.384 5.384 0 0 0 3.268 1.092c.028 0 .028 0 .282.018l.709.05v5.433h-1.02c-1.468 0-2.844-.28-4.207-.856a10.957 10.957 0 0 1-1.184-.586l.017 7.505a8.243 8.243 0 0 1-2.47 5.868 8.377 8.377 0 0 1-4.69 2.346c-.416.062-.841.093-1.264.093Zm0-15.15c-2.01 0-3.854.825-5.19 2.321a6.752 6.752 0 0 0-1.7 4.062 6.697 6.697 0 0 0 2.006 5.244 6.876 6.876 0 0 0 4.884 2c.348-.001.698-.027 1.04-.078a6.862 6.862 0 0 0 3.844-1.922 6.727 6.727 0 0 0 2.017-4.786l-.023-10.48 1.23.95c.635.49 1.334.897 2.076 1.21a9.117 9.117 0 0 0 3.11.722v-2.46a6.885 6.885 0 0 1-3.652-1.38 6.933 6.933 0 0 1-2.719-4.728h-2.52v10.157l-.005 5.982a4.37 4.37 0 0 1-3.008 4.154 4.389 4.389 0 0 1-3.627-.4A4.353 4.353 0 0 1 7.43 19.73a4.344 4.344 0 0 1 1.258-3.135 4.358 4.358 0 0 1 3.507-1.292v-2.44c-.13-.008-.26-.011-.39-.011Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The **TikTok OAuth Driver** manage TikTok OAuth protocol to authenticate and grant scope permissions.

{% image %}
![TikTok OAuth Driver](/assets/ytp/auths/driver-tiktok-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, learn more about it and how to revoke permissions at [support.tiktok.com](https://support.tiktok.com/en/safety-hc/account-and-user-safety/connect-to-third-party-apps). |
| **Authentication** | Triggers the OAuth authentication and permission grant. |
| **Custom App** | Whether to use a custom OAuth App instead of ZOOlanders one. |