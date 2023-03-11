---
title: OAuths, Keys & Secrets
---

**OAuths, Keys & Secrets** is sensitive authentication data that we simply call **auths**. {% .lead %}

**Essentials** builds on top of **YOOtheme Pro** a workflow to authenticate to 3rd party services with the [OAuth](#oauth) protocol as well as to store [Keys and Secrets](#keys-and-secrets). The auth workflow has been built with [security](#security) in mind, as well as convenience through a [manager](#auth-manager).

---

## Auth Manager

The **Auth Manager**, accessible at `Customizer -> Essentials -> Auths` panel, manages existing **OAuths, Keys & Secrets**. You can alter those and delete them withing the manager, but you cannot create new ones as an auth is tied to specific scopes and/or purpose only known while building the layouts.

{% image %}
![Auth Manager](/assets/ytp/auths-manager.gif)
{% /image %}

It is also possible, and somewhat more convenient, to manage the auths while creating the resources that require them.

{% image %}
![Auth Manager Field](/assets/ytp/auths-manager-field.webp)
{% /image %}

---

## Auth Driver

Every auth requires an **Auth Driver** that will manage the authentication workflow or specify the secrets to be stored. Common [Auth Drivers](./auth/drivers) are provided out of the box while is also possible to register custom ones.

---

## OAuth

This is the process where you authenticate to 3rd party services using the **OAuth** protocol and grant [ZOOlanders OAuth App](#zoolanders-oauth-app), or your [Custom OAuth App](#custom-oauth-app), permissions to access content or act on your behalf.

{% image %}
![OAuth](/assets/ytp/auths-oauth.webp)
{% /image %}

---

### ZOOlanders OAuth App

For each service using the **OAuth** protocol, there must be an **OAuth App** created within the service with an approval process. Creating those is security-wise recommended, but is time-consuming and can be somewhat challenging.

As a solution, we have created a **Web App** that acts as an intermediate step for all service-specific Apps we have already created and got approved for, which ultimately allows us to provide you with a simple and straightforward way to authenticate and grant permissions without having to go through the process your self.

{% image %}
![ZOOlanders OAuth App](/assets/ytp/zl-oauth-app.webp)
{% /image %}

{% callout type="warning" title="Quota Limitations" %}
When using our **OAuth App** the API quota is shared among other users, even though we didn't reach any limits so far it should be taken into consideration.
{% /callout %}

---

### Custom OAuth App

For high traffic sites, or for anyone that has the skills to do it, we strongly advise to create your own **OAuth App** and use it client **ID**/**Secret** when authenticating. That would avoid any possible quota limitations and enhance further security.

{% image %}
![Custom OAuth App](/assets/ytp/auths-custom-app.webp)
{% /image %}

---

## Keys and Secrets

Many features and services relies on **Keys & Secrets** for authentication or configuration, it's convenient to have a central and [secure](#security) place where to store and manage them.

{% image %}
![Keys & Secrets](/assets/ytp/auths-key.webp)
{% /image %}

---

## Security

The auth workflow has been built with security in mind but is important to understand the concepts behind it. {% .lead %}

### Encryption

All auth tokens, keys & secrets are strongly **encrypted** and stored in [Essentials Settings](./settings) which is ultimately a Database Table. This is important as you don't want to expose those, but even if that would happen the encryption would make them useless.

Furthermore, the decryption would only work in the same site it was encrypted by, because the site's secret key is used for the encryption. That means that porting the auths to a different site is not possible.

### OAuth Principles

The OAuth security principles are followed strictly and permissions are always required with the lowest possible scope. In practice, that means that for accessing a resource a Read Only scope is requested, if a resource is expected to be updated, only then a Read & Write scope is requested instead.

As per the protocol, any permission granted can be revoked at any time within the service provider which would immediately make all stored tokens stop working without the possibility to be reactivated.

### OAuth App

Using the [ZOOlanders OAuth App](#zoolanders-oauth-app) is convenient and save, we never store any login or token, we will just "pass those" on the fly to your site. Even so, for most services is recommended to create a custom **OAuth App** and use it instead, which would further enhance security and bypass possible quota limitations.
