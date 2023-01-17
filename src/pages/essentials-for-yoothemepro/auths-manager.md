---
title: Auths Manager
---

The Auths Manager is the place where to manage Access Tokens, Keys & Secrets. {% .lead %}

Introduced by Essentials, the **Auths Manager** builds on top of **YOOtheme Pro** a workflow to authenticate with oAuth to 3rd party services as well as to store API Keys and Secrets that will be used across addons.

---

## The Manager

The **Auths Manager** can be accessed at `Customizer -> Essentials -> Auths` panel where you can manage existing auths, but you cannot create new ones. That is because an auth is tied to specific scopes and/or purpose only known while building other resources.

{% image %}
![Auths Manager](/assets/ytp/auths-manager.gif)
{% /image %}

It is also possible, and somewhat more convenient, to manage the auths while creating the resources that require them.

{% image %}
![Auths Manager Field](/assets/ytp/auths-manager-field.webp)
{% /image %}

---

## OAuth

This is the process where you authenticate to 3rd party services using the oAuth protocol and grant [ZOOlanders OAuth App](#zoolanders-oauth-app), or your Auth App, permissions to access content or act on your behalf.

{% image %}
![oAuth](/assets/ytp/auths-oauth.webp)
{% /image %}

---

## Keys & Secrets

Some services do not yet support oAuth, or cannot as per the service nature, being an alternative a Key or a pair of a Key & a Secret.

{% image %}
![oAuth](/assets/ytp/auths-key.webp)
{% /image %}

---

## ZOOlanders oAuth App

For each service using the oAuth protocol, there must be an oAuth App created within the service with an approval process. Creating those is security-wise recommended, but is time-consuming and can be somewhat challenging.

As a solution, we have created a Web App that acts as an intermediate step for all service-specific Apps we have already created and got approved for, which ultimately allows us to provide you with a simple and straightforward way to authenticate and grant permissions without having to go through the process your self.

{% image %}
![ZOOlanders oAuth App](/assets/ytp/zl-oauth-app.webp)
{% /image %}

{% callout type="warning" title="Quota Limitations" %}
When using our oAuth App the API quota is shared among other users, even though we didn't reach any limits so far it should be taken into consideration.
{% /callout %}

---

## Custom oAuth App

For high traffic sites, or for anyone that has the skills to do it, we strongly advise to create your own oAuth App and use it client ID/Secret when authenticating. That would avoid any possible quota limitations and enhance further security.

{% image %}
![Custom oAuth App](/assets/ytp/auths-custom-app.webp)
{% /image %}

---

## Security

The auth workflow has been built with security in mind but is important to understand the concepts behind it. {% .lead %}

### Encryption

All auth tokens, keys & secrets are strongly **encrypted** and stored in [Essentials Settings](./settings) which is ultimately a Database Table. This is important as you don't want to expose those, but even if that would happen the encryption would make them useless.

Furthermore, the decryption would only work in the site it was encrypted because the site's secret key is used for the encryption. That means that porting the auths to a different site is not possible.

### oAuth Principles

The oAuth security principles are followed strictly and permissions are always required with the lowest possible scope. In practice, that means that for accessing a resource a Read Only scope is requested, if a resource is expected to be updated, only then a Read & Write scope is requested instead.

As per the protocol, any permission granted can be revoked at any time within the service provider which would immediately make all stored tokens stop working without the possibility to be reactivated.

### oAuth App

Using the [ZOOlanders OAuth App](#zoolanders-oauth-app) is convenient and save, we never store any login or token, we will just "pass those" on the fly to your site. Even so, for most services is recommended to create a custom oAuth App and use it instead, which would further enhance security and bypass possible quota limitations.

---

## Drivers

**Auth Drivers** manage the authentication process or secrets for specific services, listed bellow are the ones supported out of the box.

### Facebook oAuth Driver

The **Facebook oAuth Driver** manage Facebook oAuth protocol to authenticate and grant scope permissions.

{% image %}
![Facebook oAuth Driver](/assets/ytp/auths/driver-fb-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [facebook.com/settings](https://www.facebook.com/settings?tab=business_tools&ref=business_login_reentry). |
| **Authentication** | Triggers the oAuth authentication and permission grant. |
| **Custom App** | Wheter to use a [custom oAuth App](#custom-oauth-app) instead of [ZOOlanders'](#zoolanders-oauth-app). |

---

### Google oAuth Driver

The **Google oAuth Driver** manage Google oAuth 2.0 protocol to authenticate and grant scope permissions.

{% image %}
![Google oAuth Driver](/assets/ytp/auths/driver-google-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [myaccount.google.com/permissions](https://myaccount.google.com/permissions). |
| **Authentication** | Triggers the oAuth authentication and permission grant. |
| **Custom App** | Wheter to use a [custom oAuth App](#custom-oauth-app) instead of [ZOOlanders'](#zoolanders-oauth-app). |

---

### Google API Key Driver

The **Google API Key Driver** manage Google API keys obtained through the [Google Cloud Platform](https://console.cloud.google.com/apis/credentials) dashboard.

{% image %}
![Google API Key Auth Driver](/assets/ytp/auths/driver-google-apikey.webp)
{% /image %}

---

### Instagram oAuth Driver

The **Instagram oAuth Driver** manage Instagram oAuth protocol to authenticate and grant scope permissions.

{% image %}
![Instagram oAuth Driver](/assets/ytp/auths/driver-ig-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [instagram.com/accounts](https://www.instagram.com/accounts/manage_access). |
| **Authentication** | Triggers the oAuth authentication and permission grant. |
| **Custom App** | Wheter to use a [custom oAuth App](#custom-oauth-app) instead of [ZOOlanders'](#zoolanders-oauth-app). |

---

### TikTok oAuth Driver

The **TikTok oAuth Driver** manage TikTok oAuth protocol to authenticate and grant scope permissions.

{% image %}
![Instagram oAuth Driver](/assets/ytp/auths/driver-tiktok-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, learn more about it and how to revoke permissions at [support.tiktok.com/en/safety-hc/account-and-user-safety/connect-to-third-party-apps](https://support.tiktok.com/en/safety-hc/account-and-user-safety/connect-to-third-party-apps). |
| **Authentication** | Triggers the oAuth authentication and permission grant. |
| **Custom App** | Wheter to use a [custom oAuth App](#custom-oauth-app) instead of [ZOOlanders'](#zoolanders-oauth-app). |

---

### Twitter oAuth Driver

The **Twitter oAuth Driver** manage Twitter oAuth protocol to authenticate and grant scope permissions.

{% image %}
![Instagram oAuth Driver](/assets/ytp/auths/driver-twitter-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [twitter.com/settings](https://twitter.com/settings/apps_and_sessions). |
| **Authentication** | Triggers the oAuth authentication and permission grant. |
| **Custom App** | Wheter to use a [custom oAuth App](#custom-oauth-app) instead of [ZOOlanders'](#zoolanders-oauth-app). |

---

### Vimeo oAuth Driver

The **Vimeo oAuth Driver** manage Vimeo oAuth protocol to authenticate and grant scope permissions.

{% image %}
![Instagram oAuth Driver](/assets/ytp/auths/driver-vimeo-oauth.webp)
{% /image %}

| Setting | Description |
| ------- | ----------- |
| **Name** | The name that will identify this auth. |
| **Scopes** | The list of scopes this auth has access to, those can be revoked at [vimeo.com/settings](https://vimeo.com/settings/apps). |
| **Authentication** | Triggers the oAuth authentication and permission grant. |
| **Custom App** | Wheter to use a [custom oAuth App](#custom-oauth-app) instead of [ZOOlanders'](#zoolanders-oauth-app). |
