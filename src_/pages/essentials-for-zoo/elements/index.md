# Integration

ZOOlanders Elements are standard ZOO elements, you can follow the [Extending ZOO Types Guide](https://yootheme.com/support/zoo/item-types#extend-pre-built-item-type) to integrate them into your Apps. Or even upgrade to them without loosing any previous data:

1. Locate the `media/zoo/applications/{application}/types/{type}.config` file and open it for editing with any plain text editor.
1. Search for the property that relates to the specific element we are upgrading.
1. In that entry find the `"type":"{element}"` property and change it to `"type":"{newelement}"`.
1. Save the changes and access the Type edit view in the ZOO admin area.
1. The element should now reflect the changes, adjust the settings as required and Save the Type.
1. Review the element positions assignments in case there are new display features you want to set.

---

## Config

All elements share one or more of the the following Configuration fields:

- **Name**: The element name that will be used across the system to reference the element.
- **Description**: The element description. Used to show information about the element to the content Editors.
- **Access Level**: The element core access setting. Allows restricting the element to certain Access Levels. For advanced permissions you may use the Access Addon.
- **Repeatable**: If enabled the element will become repeatable storing array of values instead of one instance.
- **Instance Limit**: Complements the Repeatable feature allowing to set a maximum amount of element instances.

{% callout type="warning" %}
**Repeatable** and **Instance Limit** fields are available only on elements supporting the repeatable feature.
{% /callout %}

---

### Files

Imagepro, Downloadpro and Mediapro elements share these file assignment fields:

- **Mode**: Allows choosing the file selection mode by **Files**, each instance holds a file reference, **Folders**, each instance holds a folder reference taking in consideration all its files and **Both**, each instance being able to select one or the other (the system will merge the files from the folders and the files you selected in a single list).
- **Default Source**: Allows setting a relative path to a File or Folder which will be used during rendering if no value is specified in the Item. Supports path variables.
- **Legal Extensions**: Allows setting the allowed file extensions, separated by a pipe (`|`) without spaces.
- **File Directory Path**: Relative path to a directory holding the available files to choose from. Defaults to `images` and supports path variables.
- **Max Upload Size**: The maximum file size allowed uploading in KB. Defaults to 1024Kb (1Mb).
- **Image Resize**: Allows resizing the image to the specified dimensions during upload.
  - **Width**: It will resize the image if its wider than specified.
  - **Height**: It will resize the image if its higher than specified.
  - **Crop**: If enabled it will crop the image to the exact dimensions rather than resizing it proportionally.
- **Amazon S3 Integration**: Enables the [Amazon S3 integration](#amazon-s3).

{% callout %}
When enabling Amazon S3 integration empty or update the File Directory Path as probably the default `images` folder does not exist in your bucket.
{% /callout %}

{% callout type="warning" %}
A bucket name with dots may produce issues, make sure to name your buckets without any.
{% /callout %}

---

## Assignment

All elements share one or more of the the following Assignment fields:

- **Show Label**: If enabled the element label, the name set in the config, will be displayed if the current position supports it.
- **Alternative Label**: Allows to override the label value.

### Filter

Some repeatable elements share these filter assignment fields:

- **Offset**: The instance rendering offset. E.g. 2, will render the element starting from the instance 3.
- **Limit**: The instance rendering limit. E.g. 2, will render as maximum 2 instances.

### Separator

Repeatable elements share these separator assignment fields:

- **By**: Allows choosing the separation construction that will be used to separate the element instances when rendered. All possible separations are listed in the next table.
  - **Custom By**: Only shown if **By** is set as Custom, it allows to specify a custom separator. Check the inbuilt separators code from the table below as examples.
- **Class**: Allows adding a custom class to the result if the separator wraps the content.
- **Fix HTML**: If enabled, after the separator was applied this feature will search on the resulting content for HTML errors and fix them. Use carefully and disable if any issue shows up with the rendered result.

In addition the **By** field offers a considerable set of options:

| Option | Code | Description |
| ------ | ---- | ----------- |
| **Space** | `separator=[ ]` | Inserts a space between instances. |
| **Span** | `tag=[<span>%s</span>]` | Wraps each instance with a `<span>` tag. |
| **Paragraph** | `tag=[<p>%s</p>]` | Wraps each instance with a `<p>` tag. |
| **Div** | `tag=[<div>%s</div>]` | Wraps each instance with a `<div>` tag. |
| **Comma** | `separator=[, ]` | Inserts a comma (,) between instances. |
| **Hyphen** | `separator=[ - ]` | Inserts a hyphen (-) between instances. |
| **Pipe** | `separator=[ \| ]` | Inserts a pipe (\|) between instances. |
| **Break** | `separator=[<br />]` | Inserts a `<br>` tag between instances. |
| **List Item** | `tag=[<li>%s</li>]` | Wraps each instance with a `<li>` tag applying no wrapper. |
| **Unordered List** | `tag=[<li>%s</li>] enclosing_tag=[<ul>%s</ul>]` | Wraps each instance with a `<li>` tag and wraps the result with `<ul` tag. |
| **Ordered List** | `tag=[<li><div>%s</div></li>] enclosing_tag=[<ol>%s</ol>]` | Wraps each instance with a `<li>` tag and wraps the result with `<ol>` tag. |
| **Warp Item** | `tag=[<article class="item">%s</article>]` | Wraps each instance with an `<article>` tag. |
| **Blank** | `tag=[%s]` | Applies no wrapping. |
| **UIkit Block** | `[<div class="uk-margin">%s</div>]` | Wraps each instance with a `<div class="uk-margin">` tag. |
| **UIkit Article** | `[<article class="uk-article">%s</article>]` | Wraps each instance with an `<article class="uk-article">;` tag. |
| **UIkit List** | `tag=[<li>%s</li>] enclosing_tag=[<ul class="uk-list">%s</ul>]` | Wraps each instance with a `<li>` tag and wraps the result with `<ul class="uk-list">` tag. |
| **UIkit List Line** | `tag=[<li>%s</li>] enclosing_tag=[<ul class="uk-list uk-list-line">%s</ul>]` | Wraps each instance with a `<li>` tag and wraps the result with `<ul class="uk-list uk-list-line">` tag. |

{% callout %}
Depending on the element type or the layout being rendered, this entire feature or some of the options would not make sense applying and would just be ignored.
{% /callout %}

---

## Amazon S3

By enabling the S3 integration in the element configuration Files fields, Amazon S3 files will be used as file sources. If you require uploading files to S3 as well, a bucket policy must be set.

1. Login into your [AWS Management Console](https://aws.amazon.com).
1. Access the S3 configuration and locate the target Bucket.
1. In the Bucket **Property/Permissions** tab click on **Add bucket policy**.
1. Paste in the following text replacing `YOURDOMAIN.COM` with your project site domain.

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

{% callout type="warning" %}
The API for Amazon S3 only works on regions where Signature Version 2 is supported.
{% /callout %}

---

## Path variables

Most path settings accept variables that you can use to create advanced workflows. For example a `images/[userid]/[year]` path could translate into `images/345/2015`. The supported variables are:

| Variable | Description | Example |
| :--------| :---------- | :-------|
| `[userid]` | The User ID | 123 |
| `[username]` | The User username | john |
| `[usergroup]` | The User group name | Author |
| `[usergroupid]` | The User group id | 3 |
| `[authorid]` | The current Item Author User ID | 123 |
| `[authorname]` | The current Item Author username | john |
| `[authorgroup]` | The current Item Author group name | Author |
| `[authorgroupid]` | The current Item Author group id | 3 |
| `[zooapp]` | The current Item App group | blog |
| `[zooprimarycat]` | The current Item Primary Category | tipography |
| `[zooprimarycatid]` | The current Item Primary Category ID | 4 |
| `[zooitemalias]` | The current Item alias | typography-showcase |
| `[zooitemid]` | The current Item ID | 4 |
| `[zooitemtype]` | The current Item Type | article |
| `[year]` | The current year | 2015 |
| `[month]` | The current month | 06 |
| `[day]` | The current day | 10 |
