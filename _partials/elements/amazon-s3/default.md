By setting the S3 configuration in the element config view you can start selecting and displaying files from Amazon S3 into your site. If your project requires as well uploading files from the site there is one more step to complete, adding a policy to your bucket.

>>>>> When setting up the S3 credentials make sure to empty or update the **File Directory Path** as probably the default `images` folder does not exist in your bucket.

## Adding a Bucket Policy

In order to be able updating files directly from the Element Files Manager to the S3 bucket, a bucket policy must be set.

1. Login into your [AWS Management Console](https://aws.amazon.com)
1. Access the S3 configuration and locate the target Bucket
1. In the Bucket **Property/Permissions** tab click on **Add bucket policy**
1. Paste in the following text replacing `YOURDOMAIN.COM` with your project site domain

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>http://YOURDOMAIN.COM</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>POST</AllowedMethod>
    <AllowedMethod>DELETE</AllowedMethod>
    <AllowedHeader></AllowedHeader>
  </CORSRule>
  <CORSRule>
    <AllowedOrigin></AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
  </CORSRule>
</CORSConfiguration>
```

>>>>> You can generate your own customized policy [here](http://awspolicygen.s3.amazonaws.com/policygen.html).

>>> If the bucket has been recently created wait for **24h** because of Amazon redirections.

>>> Make sure the bucket name doesn't contain any points.
