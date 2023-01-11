---
title: Source Manager
---

The Source Manager is the first step for creating a Dynamic Content source instance. {% .lead %}

Introduced by Essentials, the Source Manager builds on top of the YOOtheme Pro [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) a workflow of multiple, configuration scoped, source instances. This is a useful, but also necessary, step for sources which structure changes depending on the configuration, like would be a Database Table, or external services requiring [authentication](#authentication).

---

## The Manager

The Source Manager can be accessed at `Customizer -> Essentials -> Sources` panel, in case the panel is not present make sure the Sources Addon is enabled in the [Essentials Settings](../settings).

{% image %}
![Source Instance Creation](/assets/ytp/sources/source-instance-creation.gif)
{% /image %}

---

## Multi-Instance

Multi-instance is a term used for more than one identical instance that run parallel to each other. In a multi-instance source setup, each instance has its own configuration and dynamic content queries that are created on demand.

{% image %}
![Multi-Instance Source](/assets/ytp/sources/multi-instance.png)
{% /image %}

---

## Authentication

This is the process where you grant *ZOOlanders OAuth App* permissions to act on your behalf in order to access private content or perform actions required by a source, e.g. accessing Media from an Instagram Account. Learn more about the authentication workflow in the [Essentials Auths](../../) section.

{% image %}
![Authentication](/assets/ytp/sources/ig-auth.gif)
{% /image %}
