---
title: Local
description: Storage abstraction for a local server
---

<!--@include: ./_partials/intro-->

With the Local Storage Adapter, you have the ability to set up a specific folder as a storage location. This folder can either be relative to the site directory, such as `layouts`, or absolute from the server root, such as `/home/user/layouts`.

The designated folder must already exist and be accessible for reading and writing by the PHP user. Typically, this means that the folder should be located within the user's home directory.

![Local Storage Adapter](./assets/local.webp)

| Setting | Description |
| --- | --- |
| *Name* | A name to identify this storage. |
| *Root* | The path that will be used as the storage root, e.g. `layouts` as a site relative path or `/layouts` as a server absolute. |
| *Write Permission* | Wether the storage will have Write in addition to Read permission. |

::: warning Security Reminder
Folders within the site's root directory are publicly accessible and exposed to those who know the folder path and its contents naming, unless you [explicitly deny access to it](https://stackoverflow.com/questions/9507645/htaccess-deny-from-all).
:::
