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
![oAuth](/assets/ytp/auth-oauth.webp)
{% /image %}

---

## Keys & Secrets

Some services do not yet support oAuth, or cannot as per the service nature, being an alternative a Key or a pair of a Key & a Secret.

{% image %}
![oAuth](/assets/ytp/auth-key.webp)
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

## Security

The auth workflow has been built with security in mind but is important to understand the concepts behind it. {% .lead %}

### Encryption

All auth tokens, keys & secrets are **encrypted** and stored in [Essentials Settings](./settings) which is ultimately a Database Table. This is important as you don't want to expose those, but even if that would happen the encryption would make them useless.

Furthermore, the decryption only works in the site it was encrypted, meaning that porting the auths to a different site is not possible, those must be created again.

### oAuth Principles

The oAuth security principles are followed strictly and permissions are always required with the lowest possible scope. In practice, that means that for accessing a resource a Read Only scope is requested, if a resource is expected to be updated, only then a Read & Write scope is requested instead.

As per the protocol, any permission granted can be revoked at any time within the service provider which would immediately make all stored tokens stop working without the possibility to be reactivated.

### oAuth App

Using the [ZOOlanders OAuth App](#zoolanders-oauth-app) is convenient, but for most services is recommended to create a custom oAuth App and use it instead, which would further enhance security and bypass possible quota limitations.
