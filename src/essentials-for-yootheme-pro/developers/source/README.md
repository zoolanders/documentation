---
sidebarDepth: 1
---

# Extending Sources

Essential Addons for YOOtheme Pro uses best practices when extending YOOtheme Pro, becoming in an essence a core feature. If you know how to extend YOOtheme Pro, you already know how to extend Essential Addons. However we invite you to visit the YOOtheme Pro [Developers Modules Guide](https://yootheme.com/support/yootheme-pro/joomla/developers-modules) for reference and up to date best practices.

The Sources addon is encapsulated as a YOOtheme Pro Module named `source` located at `plugins/system/yooessentials/modules` in Joomla and `wp-content/plugins/yooessentials/modules` in WordPress.

The main advantages of YOOessential sources is that they can offer different "instances" of the same source type. For example, our `CsvSource` allows the administrator to create different, individual Dynamic Content Sources, one for each CSV file he wants. All of these use the same `Source` class, that dinamically registers new Dynamic Contend Sources based on the admin configurations.
