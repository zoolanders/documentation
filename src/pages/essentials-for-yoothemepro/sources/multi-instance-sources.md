---
title: Multi-Instance Sources
---

A **Multi-Instance Source** is a standard source that can have multiple instances with different configurations. {% .lead %}

Introduced by Essentials, **Multi-Instance Sources** builds on top of YOOtheme Pro [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) a workflow of multiple, configuration scoped, source instances. This is a useful, but also a necessary, step for sources which structure changes depending on the configuration, like would be a Database Table, or external services requiring [authentication](#authentication).

---

## The Manager

The source instances are managed in the **Sources Manager** that can be accessed at `Customizer -> Essentials -> Sources` panel. There is possible to create a new instance of a **Multi-Instance Source**, edit it in any moment, and ultimately delete it when not needed anymore. When a new instance is created it will become a standard source available for mapping to any builder element.

{% image %}
![Sources Manager](/assets/ytp/sources-manager.gif)
{% /image %}

In case the panel is not present make sure the **Sources Addon** is enabled in the [Essentials Settings](../settings).

---

## Multi-Instance

Multi-instance is a term used for more than one identical instance that run parallel to each other. In a multi-instance source setup, each instance has its own configuration and dynamic content queries that are created on demand.

{% image %}
![Multi-Instance Source](/assets/ytp/sources/manager-instance-multi.webp)
{% /image %}

---

## Authentication

This is the process where you grant permission to access private content or perform actions on your behalf that is required by a source, e.g. accessing Media from an Instagram Account. Learn more about the authentication workflow in the [Auths Manager](../auths-manager) section.
