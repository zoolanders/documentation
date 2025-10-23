# After Submit Actions

After Submit Actions, or simply actions, are multi-instance functions that will run sequentially after a form has been successfully submitted, as long as the chain is not disrupted by an error. These are crucial for the form workflow, as submission data is not processed or logged unless there is an action set for the task.

Actions are set in the [Form Element Configuration](./form-element.md) and typically involve sending an email or saving the submission data to the database.

![After Submit Actions](./assets/actions.webp)

## Execution Control

Actions will by default be always executed unless their status has been manually set to `disabled`, or their execution condition has been dynamically resolved to false. The execution condition supports Dynamic Content, including the form submitted data.

![Actions Dynamic Execution](./assets/actions-exec-dynamic.webp)

::: tip Advanced Workflows
Use execution conditions for advanced workflows, e.g. subscribing to a newsletter only if a specific checkbox has been checked, or sending different emails based on the selected option.
:::

## Action Ordering

Actions execute sequentially in the order they appear in the configuration. This is important when:

- Using **[Alter](./actions/alter)** to modify data before other actions process it
- Validating data with **[Validate](./actions/validate)** before storing or emailing
- Ensuring database operations complete before sending confirmation emails

::: warning Action Chain
If an action encounters an error, the remaining actions in the chain will not execute. Place critical actions (like email notifications) before optional ones.
:::

## Available Actions

Essential Forms provides a comprehensive set of actions to handle form submissions:

### Basic Actions

- **[Alter](./actions/alter)** - Modify submitted data before it's processed by other actions
- **[Email](./actions/email)** - Send emails with form data, attachments, and custom formatting
- **[Message](./actions/message)** - Display success messages to users after submission
- **[Validate](./actions/validate)** - Apply custom validation rules to submitted data

### Data Storage Actions

- **[Airtable](./actions/airtable)** - Save submissions to Airtable databases
- **[CSV](./actions/csv)** - Export submission data to CSV files
- **[Database](./actions/database)** - Store data in custom database tables
- **[Google Sheets](./actions/google-sheets)** - Append submissions to Google Sheets

### Marketing Actions

- **[AcyMailing](./actions/acymailing)** - Subscribe users to AcyMailing lists (Joomla)
- **[Brevo](./actions/brevo)** - Add contacts to Brevo (formerly Sendinblue)
- **[Mailchimp](./actions/mailchimp)** - Subscribe users to Mailchimp lists
- **[MailerLite](./actions/mailerlite)** - Add subscribers to MailerLite groups

### Other Actions

- **[Download](./actions/download)** - Trigger file downloads after submission
- **[Redirect](./actions/redirect)** - Redirect users to another page
- **[Webhook](./actions/webhook)** - Send data to third-party services via HTTP requests
