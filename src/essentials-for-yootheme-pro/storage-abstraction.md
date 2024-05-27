---
title: Storage Abstraction
---

File Storage Abstraction allows a seamles experience for working with files across different platforms and locations.

Essentials has several features that involve reading and/or writing data with abstraction, allowing for interaction with many different types of filesystems regardless of their location. To accomplish this, we have implemented [FlySystem](https://flysystem.thephpleague.com/docs) as the abstraction library of choice which provides a unified interface for working with various filesystems.

You can find a full list and details of supported filesystems in the [storages reference](../storage/adapters) section.

::: warning Storage Usage
Notice that at the moment storage abstraction is only used by Layouts Addon, although it it possible to use it in custom addons as required.
:::
