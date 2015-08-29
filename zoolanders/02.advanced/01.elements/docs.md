---
title: Elements
taxonomy:
    category: docs
---

ZOOlanders component doesn't distribute any element, instead provides the basic elements class which extending the ZOO main elements provides a layer for advanced features.

>>>>> The main class elements are stored in `plugins/system/zlframework/zlframework/elements` while the end product elements are in `plugins/system/zoo_zlelements/zoo_zlelements/elements` folder.

## Overrides

Technically is possible to override any element file, but overriding the core files is not recommended as future updates could change the behavior and the override files became deprecated. However, sometimes is the only way to accomplish specific project requirements and if kept to minimal is a perfectly valid solution. Besides, by overriding and not directly editing the core files we assure our changes would remain after future extension updates.

There are two paths for elements overriding, the global `media/zoo/custom_elements/{element}` where the elements will be override always. And the `media/zoo/applications/{application}/elements/{element}` where the override will apply only when the element is used by that specific App.

>>>>> If the `custom_elements` folder does not exist, create it manually.

## Custom Layouts

In most scenarios a simple new layout will provide that extra feature your project requires. This is the recommended way of extending the elements as you would be adding new files without modifying or overriding any core ones.

All our elements would automatically recognize the custom layouts and offers them as an option during the layouts configuration. Placing your custom layouts in the override folders, mentioned in the previous section, is the best practice keeping them that way separated from the core files.

For example if you were to create a custom layout for **ImagePro** element, the global override path would be `media/zoo/custom_elements/imagepro/tmpl/render/myCustomLayout.php`. Some elements even supports custom edit layouts, meaning you could set your own layout for the **Edit** or **Submissions** views!

>>>>> When creating or overriding sublayouts, remember to respect the path. E.g: `.../imagepro/tmpl/render/default/_sublayouts/my-custom-sublayout.php`.

## Configuration Fields

All elements share these basic configuration fields:

| Field       | Description |
| :---------- | :---------- |
| Name | The element name that will be used across the system to reference the element. |
| Description | The element description. Used to show information about the element to the content Editors. |
| Access Level | The element access setting. Allows restricting the element to certain Access Levels. For advanced permissions you may use [ZOOaccess](/zooaccess). |
| Repeatable | If enabled the element will become repeatable storing array of values instead of one instance. |
| Instance Limit | Complements the Repeatable feature allowing to set a maximum amount of element instances. |

>>>>> **Repeatable** and **Instance Limit** fields are available only on elements supporting the repeatable feature.

## Assignment Fields

All elements share these basic assignment fields:

| Field       | Description |
| :---------- | :---------- |
| Show Label | If enabled the element label, the name set in the config, will be displayed if the current position supports it. |
| Alternative Label | Allows to override the label value. |

### Filter

Some repeatable elements share these filter assignment fields:

| Field       | Description |
| :---------- | :---------- |
| Offset | The instance rendering offset. E.g. 2, will render the element starting from the instance 3. |
| Limit | The instance rendering limit. E.g. 2, will render as maximum 2 instances. |

### Separator

Repeatable elements share these separator assignment fields:

| Field       | Description |
| :---------- | :---------- |
| By | Allows choosing the separation construction that will be used to separate the element instances when rendered. All possible separations are listed in the next table. |
| Custom By | Only shown if **By** is set as Custom, it allows to specify a custom separator. Check the inbuilt separators code from the table below as examples. |
| Class | Allows adding a custom class to the result if the separator wraps the content. |
| Fix HTML | If enabled, after the separator was applied this feature will search on the resulting content for HTML errors and fix them. Use carefully and disable if any issue shows up with the rendered result. |

The **By** field offers a considerable set of options described below:

| Option | Code | Description |
| :----------   | :---------- |
| Space | `separator=[ ]` | Inserts a space between instances. |
| Span | <code>tag=[&lt;span&gt;%s&lt;/span&gt;]</code> | Wraps each instance with a <code>&lt;span&gt;</code> tag. |
| Paragraph | <code>tag=[&lt;p&gt;%s&lt;/p&gt;]</code> | Wraps each instance with a <code>&lt;p&gt;</code> tag. |
| Div | <code>tag=[&lt;div&gt;%s&lt;/div&gt;]</code> | Wraps each instance with a <code>&lt;div&gt;</code> tag. |
| Comma | <code>separator=[, ]</code> | Inserts a <code>,</code> between instances. |
| Hyphen | <code>separator=[ - ]</code> | Inserts a <code>-</code> between instances. |
| Pipe | <code>separator=[ \| ]</code> | Inserts a <code>\|</code> between instances. |
| Break | <code>separator=[&lt;br /&gt;]</code> | Inserts a <code>&lt;br&gt;</code> tag between instances. |
| List Item | <code>tag=[&lt;li&gt;%s&lt;/li&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag applying no wrapper. |
| Unordered List | <code>tag=[&lt;li&gt;%s&lt;/li&gt;] enclosing_tag=[&lt;ul&gt;%s&lt;/ul&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ul&gt;</code> tag. |
| Ordered List | <code>tag=[&lt;li&gt;&lt;div&gt;%s&lt;/div&gt;&lt;/li&gt;] enclosing_tag=[&lt;ol&gt;%s&lt;/ol&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ol&gt;</code> tag. |
| Warp Item | <code>tag=[&lt;article class=&amp;quot;item&amp;quot;&gt;%s&lt;/article&gt;]</code> | Wraps each instance with an <code>&lt;article&gt;</code> tag. |
| Blank | <code>tag=[%s]</code> | Applies no wrapping. |
| UIkit Block | <code>[&lt;div class=&amp;quot;uk-margin&amp;quot;&gt;%s&lt;/div&gt;]</code> | Wraps each instance with a <code>&lt;div class=&quot;uk-margin&quot;&gt;</code> tag. |
| UIkit Article | <code>[&lt;article class=&amp;quot;uk-article&amp;quot;&gt;%s&lt;/article&gt;]</code> | Wraps each instance with an <code>&lt;article class=&quot;uk-article&quot;&gt;</code> tag. |
| UIkit List | <code>tag=[&lt;li&gt;%s&lt;/li&gt;] enclosing_tag=[&lt;ul class=&amp;quot;uk-list&amp;quot;&gt;%s&lt;/ul&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ul class=&quot;uk-list&quot;&gt;</code> tag. |
| UIkit List Line | <code>tag=[&lt;li&gt;%s&lt;/li&gt;] enclosing_tag=[&lt;ul class=&amp;quot;uk-list uk-list-line&amp;quot;&gt;%s&lt;/ul&gt;]</code> | Wraps each instance with a <code>&lt;li&gt;</code> tag and wraps the result with <code>&lt;ul class=&quot;uk-list uk-list-line&quot;&gt;</code> tag. |

>>> Depending on the element type or the layout being rendered, this entire feature or some of the options would not make sense applying and would just be ignored.
