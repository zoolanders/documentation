# Forms Events

JavaScript events triggered by each form for which is possible to add listeners and perform custom actions. Set those in a custom script as illustrated bellow or as a [form area setting](./form-area#settings).

## On Submit

Triggers before submission allowing to prevent the action.

```js
UIkit.util.ready(function () {
  // local
  UIkit.util.on('#form-id', 'form:submit', function (e) {
    // e.preventDefault();
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:submit', function (e, ctx) {
    // ctx = {form}
    // e.preventDefault();
  });
});
```

## On Submitted

Triggers after submission, preventing the action is no longer possible.

```js
UIkit.util.ready(function () {
  // local
  UIkit.util.on('#form-id', 'form:submitted', function (e, ctx) {
    // ctx = {response}
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:submitted', function (e, ctx) {
    // ctx = {form, response}
  });
});
```

## On Submission Error

Triggers on submission error or server side validation error.

```js
UIkit.util.ready(function () {
  // local
  UIkit.util.on('#form-id', 'form:submission-error', function (e, ctx) {
    // ctx = {error, errors, validation}
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:submission-error', function (e, ctx) {
    // ctx = {form, error, errors, validation}
  });
});
```

## On Validation Error

Triggers on HTML5 validation error.

```js
UIkit.util.ready(function () {
  // local
  UIkit.util.on('#form-id', 'form:validation-error', function (e, ctx) {
    // ctx = {data}
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:validation-error', function (e, ctx) {
    // ctx = {form, data}
  });
});
```

## On Field Change

Triggers when any field value has changed.

```js
UIkit.util.ready(function () {
  // local
  UIkit.util.on('#form-id', 'form:field-change', function (e, ctx) {
    // ctx = {field, data}
  });

  // global
  UIkit.util.on(document, 'yooessentials-form:field-change', function (e, ctx) {
    // ctx = {form, field, data}
  });
});
```
