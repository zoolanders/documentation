---
title: FTP
description: Storage abstraction for S/FTP protocol
---

<!--@include: ./_partials/intro-->

The S/FTP Storage Adapter stores files in a remote server using the S/FTP protocol.

![S/FTP Storage Adapter](./assets/ftp.webp)

| Setting | Description | Required |
| ------- | ----------- | :------: |
| **Name** | A name to identify this storage. |
| **Host** | The URL to the server hosting the folder. | &#x2713; |
| **Port** | The port to use for establishing the connection with the server, defualts to `21`. |
| **Username/Password** | The credentials for establishing the connection with the server. | &#x2713; |
| **Root** | The remote path that will be used as the storage root. |
| **Write Permission** | Wether the storage will have Write in addition to Read permission. |
| **Passive Mode** | Wether to use Passive Mode for the connection. |
| **SSL** | Wether to use SSL for the connection. |
| **UTF8** | Wether to use UTF8 as the files content encoding format. |
| **Ignore Passive Address** | Wether to ignore Passive Address for the connection. |
