# Storage Abstraction

File Storage Abstraction allows a seamles experience for working with files across different platforms and locations.

Essentials has several features that involve reading and/or writing data with abstraction, allowing for interaction with many different types of filesystems regardless of their location. To accomplish this, we have implemented [FlySystem](https://flysystem.thephpleague.com/docs) as the abstraction library of choice which provides a unified interface for working with various filesystems.

::: tip Storage Usage
Even storage abstraction is only used by Layouts Addon, at the moment, it is already possible to use in your custom addons.
:::

<!--@include: ./_partials/storage-local.md-->
<!--@include: ./_partials/storage-ftp.md-->
<!--@include: ./_partials/storage-s3.md-->
