---
sidebarDepth: 1
---

# Getting Started

Setting up a form is as simple as setting any Layout in YOOtheme Pro, in this walktrough will be guiding you on setting your first from.

Let's start by choosing a `section` or `column` element that will hold our Form Area. In the Advanced settings tab of the chosen element, locate the `Enable as Form Area` checkbox and toggle it. The element has now become a Form Area and is ready to hold form fields, but before doing so let's set an After Submit Action that will show a `Thank You` message.

Access the Form Area configuration panel and add a `Message` action. The action panel will open showing the configuration, write in the message field `Thank You {name}!`. Notice the `{name}` part, it's a placeholder, a reference to the Submitted Data related to the Input Fields, which we are going to set next.

Get back to the Builder Main layout configuration and add an Input Form Element in the Form Area. Access the newly created element settings and set the `Control` field as `name`, you can leave the rest as default.

Go ahead and try to submit the form inputting your name. You should see a modal greeting you with a personalized message!

::: tip
When an element is enabled as a Form Area, the form Configuration panel becomes available in the Advanced Tab settings, and a Form Icon will be displayed to mark the area as enabled. Notice that the Icon acts as a shortcut as well, if you click it, it will open the Form Area configuration panel directly.
:::
