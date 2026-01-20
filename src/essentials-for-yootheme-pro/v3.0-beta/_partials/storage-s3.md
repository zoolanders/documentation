## S3 Storage Adapter

The **S3 Storage Adapter** sets an Amazon S3 Bucket as storage.

![S3 Storage Adapter](./assets/storage-s3.webp)

| Setting | Description | Required |
| --- | --- | :---: |
| *Name* | A name to identify this storage. |
| *Account* | The AWS credentials for establishing the connection. | &#x2713; |
| *Bucket* | The name of the Amazon S3 bucket. | &#x2713; |
| *Region* | The region where the bucket is hosted. | &#x2713; |
| *Root* | The path relative to the bucket that will be used as the storage root. |
| *Write Permission* | Wether the storage will have Write in addition to Read permission. |
