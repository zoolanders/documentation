---
title: Access
description: Compose rules that will determine the evaluation criteria for rendering an element
---

# Access Addon

Compose rules that will determine the evaluation criteria for rendering an element. You can use static or dynamic values, establish custom evaluation logic, and view logs directly in the builder to gain a better understanding of the evaluation results.

## Integration

<!--@include: ../_partials/enable-addon.md-->

### 1. Open the Condition Panel

Navigate to the Builder and select the element you want to condition. From there, open the Access Condition Rules panel located under the [Advanced Settings](https://yootheme.com/support/yootheme-pro/joomla/elements).

![Open Access Condition Panel](./assets/open-condition-panel.gif)

### 2. Compose the Condition

Check the [rules reference](./rules) to gain insights and form the condition according to your needs. In this particular case, we will be using a Day rule.

![Compose Access Condition](./assets/compose-condition.gif)

### 3. Set an Evaluation Mode

If a condition is composed of multiple rules, the default evaluation mode is `AND`, meaning the condition will only be validated if all rules evaluate as true. However, you can also set the mode to `OR` or even `Custom`. In this case we are going to keep the default mode.

![Set Access Condition Evaluation Mode](./assets/set-evaluation-mode.gif)

### 4. Final Review

Review the logs to confirm that the evaluation is using the correct data and that the outcome match your expectation.

![Review Access Condition Evaluation Logs](./assets/review-evaluation-logs.gif)
