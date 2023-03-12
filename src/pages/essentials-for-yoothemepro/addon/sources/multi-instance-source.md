---
title: Multi-Instance Source
---

A **Multi-Instance Source** is a standard source running in paralel multiple instances with different configurations. {% .lead %}

A **Multi-Instance Source** is based on the same core principles introduced by [Dynamic Content](https://yootheme.com/support/yootheme-pro/joomla/dynamic-content) sources, but running more than one identical instance parallel to each other while each instance has its own configuration and dynamic content queries created on demand.

This creation process is done once and the result stored in the builder **GraphQL Schema**, being the final result and performance identical as of a standard source.

{% image %}
![Multi-Instance Source](/assets/ytp/sources/manager-instance-multi.webp)
{% /image %}

---

## The Manager

The **Source Manager**, accessed at `Customizer -> Essentials -> Sources` panel, allows to create and manage multi-instance sources. When a new instance is created it will become a standard source available for mapping to any builder element.

{% image %}
![Sources Manager](/assets/ytp/sources-manager.gif)
{% /image %}

---

## Authentication

This is the process where you grant permission to access private content or perform actions on your behalf that is required by a source, e.g. accessing **Media** from an **Instagram Account**. Learn more about the [authentication workflow](../auth-manager).
