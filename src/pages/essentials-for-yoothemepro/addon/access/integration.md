---
title: Access Addon Integration
---

Follow through to learn how to set an Access Condition, even if you are already familiar with the concept you might learn something new. {% .lead %}

Before starting, make sure Essentials has been properly [installed](../../integration), then access the `Customizer -> Essentials -> Advanced` section and enable the **Access Addon**. Save the changes and refresh the page.

{% image caption="If the addon is not listed double check Essentials Premium has been installed."%}
![Enable Access Addon](/assets/ytp/access/integration/enable-addon.gif)
{% /image %}

---

## 1. Open the Condition Panel

In a YOOtheme Pro Customizer view which layout elements rendering should be conditioned, enter the Builder, choose the element to condition, and open the Access Condition Rules panel under it [Advanced Settings](https://yootheme.com/support/yootheme-pro/joomla/elements).

{% image %}
![Open Access Condition Panel](/assets/ytp/access/integration/open-condition-panel.gif)
{% /image %}

---

## 2. Compose the Condition

Consult the [rules reference](./rules) for insights and compose the condition as required. For this use case we are going to add a Day rule.

{% image %}
![Compose Access Condition](/assets/ytp/access/integration/compose-condition.gif)
{% /image %}

---

## 3. Set an Evaluation Mode

When a condition is composed by more than one rule, the default evaluation `AND` will validate the condition if all rules evaluate as true. The mode, hovewer, can be set as `OR` or even as `Custom`.

Consult the [Access Condition](./condition) for more information about the evaluation mode, for this use case we are going to keep the default mode.

{% image %}
![Set Access Condition Evaluation Mode](/assets/ytp/access/integration/set-evaluation-mode.gif)
{% /image %}

---

## 4. Final Review

Review the logs to ensure the evaluation is using the right data and the results are as expected.

{% image %}
![Review Access Condition Evaluation Logs](/assets/ytp/access/integration/review-evaluation-logs.gif)
{% /image %}
