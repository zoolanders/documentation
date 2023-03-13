---
title: Storage Abstraction
---

In Essentials, File Storage Abstraction is simply called storage. {% .lead %}

Some of Essential features require reading and/or writing data with abstraction, which means using the same interface to interact with many different types of filesystems without matter the content ubication. Essentials has opted to use [FlySystem](https://flysystem.thephpleague.com/docs/) as the abstraction library.

{% callout type="warning" title="Storage Usage" %}
Notice that at the moment storage abstraction is only used by Layouts Addon, although it it possible to use it in custom addons as necessary.
{% /callout %}

---

## Storage Adapter

A Storage Adapter is the abstraction level for a specific filesystem, currently supporting [Local](./storage/adapters/local), [FTP](./storage/adapters/ftp) and [Amazon S3](./storage/adapters/s3).
