---
sidebarDepth: 1
---

# Getting Started

Setting up a form is as simple as setting any other Layout in YOOtheme Pro, let's start by choosing a Section or Column that will hold our form. In the Advanced settings tab of the chosen section or column element, locate the `Enable as Form Area` checkbox and toggle it. The element has become now a Form Area and is ready to hold form fields, but before doing so let's  set some After Submit Actions.

After Submit Actions are configurable actions that will run consequently only after a form has been successfully submitted. You can send emails, redirect the user to another page, trigger a file download, and much more. For now, let's  simply show a `Thank You` message.

Access the Form Area configuration panel and add a `Message` action. The action panel will open showing the configuration fields, write down `Thank You {name}!`. Notice the `{name}` placeholder, it's a reference to the Submitted Data, e.g. an Input Field, which we are going to set next.

While any element can be placed inside a Form Area only [Form Elements](./elements.md) will be processed during a submission. Get back to the Builder Main configuration and add an Input Form Element in the Form Area. Access the newly created element settings and set the `Control` field as `name`, you can leave the rest as default.

We have associated the input field with a control called `name` and we have used that reference in the Message action. Go ahead and try to submit the form inputting your name. You should see a modal greeting you with a personalized message!

::: tip
When an element is enabled as a Form Area, the form Configuration panel becomes available in the Advanced Tab settings, and a Form Icon will be displayed to mark the area as enabled. Notice that the Icon acts as a shortcut as well, if you click it, it will open the Form Area configuration panel directly.
:::

<video width="800" controls>
  <source src="./assets/configuration.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
