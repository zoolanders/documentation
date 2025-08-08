## S3 Storage Adapter

The **S3 Storage Adapter** sets an Amazon S3 Bucket as storage.

![S3 Storage Adapter](./assets/storage-s3.webp)

| Setting            | Description                                                            | Required |
| ------------------ | ---------------------------------------------------------------------- | :------: |
| _Name_             | A name to identify this storage.                                       |
| _Account_          | The AWS credentials for establishing the connection.                   | &#x2713; |
| _Bucket_           | The name of the Amazon S3 bucket.                                      | &#x2713; |
| _Region_           | The region where the bucket is hosted.                                 | &#x2713; |
| _Root_             | The path relative to the bucket that will be used as the storage root. |
| _Write Permission_ | Wether the storage will have Write in addition to Read permission.     |
