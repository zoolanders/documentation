# Common Issues

## Wrong Date Format

Date values submitted through form fields are always stored in **ISO 8601 format** (e.g., `2025-10-17T14:30:00Z`), regardless of how they appear in the input field. When referencing these dates in After Submit Actions, the ISO format may not be suitable for user-facing content like emails or notifications.

### Solution: Use Data Source with Date Filter

Instead of using simple data placeholders, use the **Data Source** with the `date` filter to format dates:

**❌ Incorrect (placeholder only):**

```text
Your appointment is scheduled for {appointment_date}
Result: Your appointment is scheduled for 2025-10-17T14:30:00Z
```

**✅ Correct (Data Source with filter):**

1. In your Email Action or other actions, use the **Dynamic Content** button
2. Select the date field from **Form Element → Submission** source
3. Apply the **date** filter
4. Specify your desired format (e.g., `F j, Y` for "October 17, 2025")

## reCAPTCHA Session Expired

Sometimes, mostly when submitting form that contains a large file upload, Google reCAPTCHA can report an error saying that the "session is expired".

The solution unfortunately here is to change captcha system, since this is a know issue on google recaptcha's systems when dealing with large form file uploads and slow networks.

## Missing Page Sources

In certain form workflows, you may need to access dynamic content from the current page (page sources) within your form actions. This content is available during form rendering but becomes unavailable during form submission, which is why it's not listed as a mapping option in After Submit Actions.
