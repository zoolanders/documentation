## FTP Storage Adapter

The **S/FTP Storage Adapter** sets a remote server folder as storage through a S/FTP protocol.

![S/FTP Storage Adapter](./assets/storage-ftp.webp)

| Setting                  | Description                                                                        | Required |
| ------------------------ | ---------------------------------------------------------------------------------- | :------: |
| _Name_                   | A name to identify this storage.                                                   |          |
| _Host_                   | The URL to the server hosting the folder.                                          | &#x2713; |
| _Port_                   | The port to use for establishing the connection with the server, defualts to `21`. |          |
| _Username/Password_      | The credentials for establishing the connection with the server.                   | &#x2713; |
| _Root_                   | The remote path that will be used as the storage root.                             |          |
| _Write Permission_       | Wether the storage will have Write in addition to Read permission.                 |          |
| _Passive Mode_           | Wether to use Passive Mode for the connection.                                     |          |
| _SSL_                    | Wether to use SSL for the connection.                                              |          |
| _UTF8_                   | Wether to use UTF8 as the files content encoding format.                           |          |
| _Ignore Passive Address_ | Wether to ignore Passive Address for the connection.                               |          |
