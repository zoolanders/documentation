## How To Integrate %1$s Pro with Amazon S3

In order to allow upload files to Amazon Simple Storage Service you need to add a policy to your bucket on S3. To do that please follow the next instruction:

1. Go into the AWS Console
2. Go into S3
3. Click on the magnifier icon next to your s3 bucket
4. Click on Permissions
5. Click on "add bucket policy"
6. Paste this into the text area and save:

```
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
  <CORSRule>
    <AllowedOrigin>http://yourdomain.com</AllowedOrigin>
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

replacing `yourdomain.com` with the site domain

You can also add more `<Corsrule>` input for more domains if you have more than 1 domain linked to the site.

You can generate the policy as required here - http://awspolicygen.s3.amazonaws.com/policygen.html.

If the bucket is recently created **24h must pass** because of Amazon redirections. Make sure the bucket name doesn't contain points.

On frontend, if using Amazon, you need to choose **Advanced Layout** for the element on item Submission form.