---
title: Sources Manager
---

The Sources Manager is the first step for creating a Dynamic Content source instance. {% .lead %}

Introduced by Essentials, the **Sources Manager** builds on top of YOOtheme Pro [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) a workflow of multiple, configuration scoped, source instances. This is a useful, but also necessary, step for sources which structure changes depending on the configuration, like would be a Database Table, or external services requiring [authentication](#authentication).

---

## The Manager

The **Sources Manager** can be accessed at `Customizer -> Essentials -> Sources` panel, in case the panel is not present make sure the Sources Addon is enabled in the [Essentials Settings](../settings).

{% image %}
![Sources Manager](/assets/ytp/sources/sources-manager.gif)
{% /image %}

---

## Multi-Instance

Multi-instance is a term used for more than one identical instance that run parallel to each other. In a multi-instance source setup, each instance has its own configuration and dynamic content queries that are created on demand.

{% image %}
![Multi-Instance Source](/assets/ytp/sources/multi-instance.png)
{% /image %}

---

## Authentication

This is the process where you grant permission to access private content or perform actions on your behalf that is required by a source, e.g. accessing Media from an Instagram Account. Learn more about the authentication workflow in the [Auths Manager](../auths-manager) section.
