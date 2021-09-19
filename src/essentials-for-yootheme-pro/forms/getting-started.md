---
sidebarDepth: 1
---

# Getting Started

Setting up a form is as simple as setting any Layout in YOOtheme Pro, in this walkthrough will be guiding you with setting up your first form.

Start by choosing a `section` or `column` element that will hold our Form Area. In the Advanced settings tab of the chosen element, locate the `Enable as Form Area` checkbox and toggle it. The element has now become a Form Area and is ready to hold form fields, but before doing so let's set an After Submit Action that will show a `Thank You` message.

Access the Form Area configuration panel and add a `Message` action. The action panel will open showing the configuration, write in the message field `Thank You {user_name}!`. Notice the `{user_name}` part, it's a placeholder, a reference to the Submitted Data related to the Input Fields, which we are going to set in the next steps, but before that let's set few more actions.

  - **Action type**: `Email`
    - Recipient: `your@email.com`
    - Subject: `New Submission!`
    - Body: `From: {user_name} ({user_email})`
  - **Action type**: `Email`
    - Recipient: `{user_email}`
    - Subject: `Thank You!`
    - Body: `Thank You {user_name}!`
  - **Action type**: `Save to CSV`
    - Path: `~theme/my-form-submissions.csv`

Once the actions are set go back to the builder's Main layout configuration and add two Input Form elements in the Form Area. Access the newly created elements settings and set the `Control` field as `user_name` for the first and `user_email` for the second, set the Label fields accordingly, and leave the rest as default.

Go ahead and submit the form inputting a name and email. If the submission is successful a modal will be greeting you with a personalized message! Additionally, two emails have been sent and the submitted data saved to a CSV file. Good job!

::: tip
When an element is enabled as a Form Area, the form Configuration panel becomes available in the Advanced Tab settings, and a Form Area Icon will be displayed to mark the area as enabled. Notice that the Icon acts as a shortcut as well, if you click it, it will open the Form Area configuration panel directly.
:::
