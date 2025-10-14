---
addon: 'Access'
---

# Access Conditions

Compose rules that will determine the evaluation criteria for rendering an element. With support for static and dynamic values, establish custom evaluation logic, and view logs directly in the builder to gain a better understanding of the evaluation results.

<!--@include: ../_partials/enable-addon.md-->

## What are Access Conditions?

Access Conditions let you control **who sees what** on your website by setting rules that show or hide elements based on specific criteria.

### Common Use Cases

- **Show promotions only on weekends** using a Day rule
- **Display member-only content** using a User Group rule
- **Show mobile-specific content** using a Device rule
- **Hide seasonal content** using a Date rule
- **Display location-based offers** using an IP Geolocation rule

### How It Works

1. Select any element in the Builder
2. Open the Access Condition panel (in the element's Advanced settings)
3. Add one or more rules (like "Only on Monday" or "Only for logged-in users")
4. Set how rules are evaluated (all must match, any must match, or custom logic)
5. The element will only display when the conditions are met

::: tip Simple Example
Want to show a "Weekend Special" banner only on Saturday and Sunday?

1. Create your banner element in the Builder
2. Add a **Day** rule to the element
3. Select "Saturday" and "Sunday"
4. Save - the banner now only appears on weekends!
:::

## Open the Condition Panel

Navigate to the Builder and select the element you want to condition. From there, open the Access Condition Rules panel located under the [Advanced Settings](https://yootheme.com/support/yootheme-pro/joomla/elements).

![Open Access Condition Panel](./assets/open-condition-panel.gif)

## Compose the Condition

Check the Rules Section to gain insights and form the condition according to your needs. In this particular case, we will be using a Day rule.

![Compose Access Condition](./assets/compose-condition.gif)

## Set an Evaluation Mode

If a condition is composed of multiple rules, the default evaluation mode is `AND`, meaning the condition will only be validated if all rules evaluate as true. However, you can also set the mode to `OR` or even `Custom`. In this case we are going to keep the default mode.

![Set Access Condition Evaluation Mode](./assets/set-evaluation-mode.gif)

## Final Review

Review the logs to confirm that the evaluation is using the correct data and that the outcome match your expectation.

![Review Access Condition Evaluation Logs](./assets/review-evaluation-logs.gif)

## What You Learned

Great work! You've successfully set up your first access condition. You learned how to:

✓ Access the Access Condition panel in element settings
✓ Add rules to control element visibility
✓ Set evaluation modes (AND, OR, Custom)
✓ Review evaluation logs to verify conditions are working

## What to Learn Next

### Simple Rules to Try

- **[Device Rule](./rules/device)**: Show different content on mobile vs desktop
- **[Date Rule](./rules/date)**: Display time-sensitive content
- **[User Group Rule](./rules/user-group)**: Show member-only content

### Advanced Rules

- **[IP Geolocation Rule](./rules/ip-geolocation)**: Display location-based content (requires GeoIP setup)
- **[Dynamic Rule](./rules/dynamic)**: Create custom conditions with dynamic data
- **[Browser Rule](./rules/browser)**: Target specific browsers

### Combine with Other Features

- **[Dynamic Content](/essentials-for-yootheme-pro/addons/dynamic/)**: Show dynamic data conditionally
- **[Form Builder](/essentials-for-yootheme-pro/addons/forms/)**: Display forms based on conditions

### Get Help

- **[Browse All Rules](/essentials-for-yootheme-pro/glossary#access-conditions)**: Complete list in the glossary
- **[Troubleshooting](/essentials-for-yootheme-pro/troubleshooting)**: Solutions to common access condition issues
