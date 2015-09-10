---
title: Fields
taxonomy:
    category: docs
---

## Configuration

All elements share these basic configuration fields:

| Field       | Description |
| :---------- | :---------- |
| **Name** | The element name that will be used across the system to reference the element. |
| **Description** | The element description. Used to show information about the element to the content Editors. |
| **Access Level** | The element access setting. Allows restricting the element to certain Access Levels. For advanced permissions you may use [ZOOaccess](/extensions/zooaccess). |
| **Repeatable** | If enabled the element will become repeatable storing array of values instead of one instance. |
| **Instance Limit** | Complements the Repeatable feature allowing to set a maximum amount of element instances. |

>>>>> **Repeatable** and **Instance Limit** fields are available only on elements supporting the repeatable feature.

### Files

File dealing elements share these file assignment fields:

| Field       | Description |
| :---------- | :---------- |
| **Mode** | Allows choosing the file selection mode by **Files**, each instance holds a file reference, **Folders**, each instance holds a folder reference taking in consideration all its files and **Both**, each instance being able to select one or the other (the system will merge the files from the folders and the files you selected in a single list). |
| **Default Source** | Allows setting a relative path to a File or Folder which will be used during rendering if no value is specified in the Item. Supports path variables. |
| **Legal Extensions** | Allows setting the allowed file extensions, separated by a <code>\|</code> without spaces. |
| **File Directory Path** | Relative path to a directory holding the available files to choose from. Defaults to `images` and supports path variables. |
| **Max Upload Size** | The maximum file size allowed uploading in KB. Defaults to 1024Kb (1Mb). |
| **Image Resize** | Allows resizing the image to the specified dimensions during upload. |
| **Width** | Complements the Image Resize field, it will resize the image if its wider than specified. |
| **Height** | Complements the Image Resize field, it will resize the image if its higher than specified. |
| **Crop** | If enabled it will crop the image to the exact dimensions rather than resizing it proportionally. |
| **Amazon S3 Integration** | Available in some elements enables the [Amazon S3](https://aws.amazon.com/s3/) integration layer. |
| **S3 Bucket** | The Amazon S3 Bucket name. |
| **AWS AccessKey** | The AWS access key necessary for authentication. |
| **AWS SecretKey** | The AWS secrete key necessary for authentication. |

When setting a path is possible to use path variables. For example a `images/[userid]/[year]` path would translate into `images/345/2015`. The supported variables are:

| Variable    | Description | Example     |
| :---------- | :---------- | :---------- |
| **[userid]** | The User ID | 123 |
| **[username]** | The User username | john |
| **[usergroup]** | The User group name | Author |
| **[usergroupid]** | The User group id | 3 |
| **[authorid]** | The current Item Author User ID | 123 |
| **[authorname]** | The current Item Author username | john |
| **[authorgroup]** | The current Item Author group name | Author |
| **[authorgroupid]** | The current Item Author group id | 3 |
| **[zooapp]** | The current Item App group | blog |
| **[zooprimarycat]** | The current Item Primary Category | tipography |
| **[zooprimarycatid]** | The current Item Primary Category ID | 4 |
| **[zooitemalias]** | The current Item alias | typography-showcase |
| **[zooitemid]** | The current Item ID | 4 |
| **[zooitemtype]** | The current Item Type | article |
| **[year]** | The current year | 2015 |
| **[month]** | The current month | 06 |
| **[day]** | The current day | 10 |

## Assignment

All elements share these basic assignment fields:

| Field       | Description |
| :---------- | :---------- |
| **Show Label** | If enabled the element label, the name set in the config, will be displayed if the current position supports it. |
| **Alternative Label** | Allows to override the label value. |

### Filter

Some repeatable elements share these filter assignment fields:

| Field       | Description |
| :---------- | :---------- |
| **Offset** | The instance rendering offset. E.g. 2, will render the element starting from the instance 3. |
| **Limit** | The instance rendering limit. E.g. 2, will render as maximum 2 instances. |

### Separator

Repeatable elements share these separator assignment fields:

| Field       | Description |
| :---------- | :---------- |
| **By** | Allows choosing the separation construction that will be used to separate the element instances when rendered. All possible separations are listed in the next table. |
| **Custom By** | Only shown if **By** is set as Custom, it allows to specify a custom separator. Check the inbuilt separators code from the table below as examples. |
| **Class** | Allows adding a custom class to the result if the separator wraps the content. |
| **Fix HTML** | If enabled, after the separator was applied this feature will search on the resulting content for HTML errors and fix them. Use carefully and disable if any issue shows up with the rendered result. |

The **By** field offers a considerable set of options described below:

| Option | Code | Description |
| :----------   | :---------- |
| **Space** | `separator=[ ]` | Inserts a space between instances. |
| **Span** | <code>tag=[&lt;span&gt;%s&lt;/span&gt;]</code> | Wraps each instance with a <code>&lt;span&gt;</code> tag. |
| **Paragraph** | <code>tag=[&lt;p&gt;%s&lt;/p&gt;]</code> | Wraps each instance with a <code>&lt;p&gt;</code> tag. |
| **Div** | <code>tag=[&lt;div&gt;%s&lt;/div&gt;]</code> | Wraps each instance with a <code>&lt;div&gt;</code> tag. |
| **Comma** | <code>separator=[, ]</code> | Inserts a <code>,</code> between instances. |
| **Hyphen** | <code>separator=[ - ]</code> | Inserts a <code>-</code> between instances. |
| **Pipe** | <code>separator=[ \| ]</code> | Inserts a <code>\|</code> between instances. |
| **Break** | <code>separator=[&lt;br /&gt;]</code> | Inserts a <code>&lt;br&gt;</code> tag between instances. |
| **List Item** | <code>tag=[&lt;li&gt;%s&lt;/li&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag applying no wrapper. |
| **Unordered List** | <code>tag=[&lt;li&gt;%s&lt;/li&gt;] enclosing_tag=[&lt;ul&gt;%s&lt;/ul&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ul&gt;</code> tag. |
| **Ordered List** | <code>tag=[&lt;li&gt;&lt;div&gt;%s&lt;/div&gt;&lt;/li&gt;] enclosing_tag=[&lt;ol&gt;%s&lt;/ol&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ol&gt;</code> tag. |
| **Warp Item** | <code>tag=[&lt;article class=&amp;quot;item&amp;quot;&gt;%s&lt;/article&gt;]</code> | Wraps each instance with an <code>&lt;article&gt;</code> tag. |
| **Blank** | <code>tag=[%s]</code> | Applies no wrapping. |
| **UIkit Block** | <code>[&lt;div class=&amp;quot;uk-margin&amp;quot;&gt;%s&lt;/div&gt;]</code> | Wraps each instance with a <code>&lt;div class=&quot;uk-margin&quot;&gt;</code> tag. |
| **UIkit Article** | <code>[&lt;article class=&amp;quot;uk-article&amp;quot;&gt;%s&lt;/article&gt;]</code> | Wraps each instance with an <code>&lt;article class=&quot;uk-article&quot;&gt;</code> tag. |
| **UIkit List** | <code>tag=[&lt;li&gt;%s&lt;/li&gt;] enclosing_tag=[&lt;ul class=&amp;quot;uk-list&amp;quot;&gt;%s&lt;/ul&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ul class=&quot;uk-list&quot;&gt;</code> tag. |
| **UIkit List Line** | <code>tag=[&lt;li&gt;%s&lt;/li&gt;] enclosing_tag=[&lt;ul class=&amp;quot;uk-list uk-list-line&amp;quot;&gt;%s&lt;/ul&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ul class=&quot;uk-list uk-list-line&quot;&gt;</code> tag. |

>>> Depending on the element type or the layout being rendered, this entire feature or some of the options would not make sense applying and would just be ignored.
