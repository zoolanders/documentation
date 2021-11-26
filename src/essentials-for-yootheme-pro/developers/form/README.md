---
sidebarDepth: 1
---

# Extending Form

Essential Addons for YOOtheme Pro uses best practices when extending YOOtheme Pro, becoming in an essence a core feature. If you know how to extend YOOtheme Pro, you already know how to extend Essential Addons. However we invite you to visit the YOOtheme Pro [Developers Modules Guide](https://yootheme.com/support/yootheme-pro/joomla/developers-modules) for reference and up to date best practices.

The Forms addon is encapsulated as a YOOtheme Pro Module named `form` located at `plugins/system/yooessentials/modules` in Joomla and `wp-content/plugins/yooessentials/modules` in WordPress.

## JavaScript Events

Each form triggers JavaScript events for which is possible to add listeners and perform custom actions.

### On Submit

Triggers before submission allowing to prevent the action.

```js
// local
UIkit.util.on('#form-id', 'form:submit', function (e) {
  // e.preventDefault();
});

// global
UIkit.util.on(document, 'yooessentials-form:submit', function (e, ctx) {
  // ctx = {form}
  // e.preventDefault();
});
```

### On Submitted

Triggers after submission, preventing the action is no longer possible.

```js
// local
UIkit.util.on('#form-id', 'form:submitted', function (e, ctx) {
  // ctx = {response}
});

// global
UIkit.util.on(document, 'yooessentials-form:submitted', function (e, ctx) {
  // ctx = {form, response}
});
```

### On Submission Error

Trigger on submission error and validation error.

```js
// local
UIkit.util.on('#form-id', 'form:submission-error', function (e, ctx) {
  // ctx = {error}
});

// global
UIkit.util.on('#form-id', 'yooessentials-form:submission-error', function (e, ctx) {
  // ctx = {form, error}
});
```
