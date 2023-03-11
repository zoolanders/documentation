---
title: Storage Abstraction
---

In Essentials, **File Storage Abstraction** is simply called storage. {% .lead %}

Some of Essential features require reading and/or writing data with abstraction, which means using the same interface to interact with many different types of filesystems without matter the content ubication. That has been achieved with the [FlySystem](https://flysystem.thephpleague.com/docs/) library, and even though is currently only used by [Layouts Addon](./addons/layouts), any core or 3rd party addon can use it.

## Storage Adapter

A **Storage Adapter** is the abstraction level for a specific filesystem, currently supporting [Local](./storage/adapters/local), [FTP](./storage/adapters/ftp) and [Amazon S3](./storage/adapters/s3).