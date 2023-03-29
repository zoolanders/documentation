---
title: Access Addon Integration
---

Follow through to learn how to set an Access Condition. Even if you are already familiar with the concept you might learn something new. {% .lead %}

Ensure Essentials has been installed correctly by following the [installation guide](/next/essentials-for-yoothemepro/integration#installation). From there, open the `Customizer -> Essentials -> Advanced` section and enable the **Access Addon**, then save the changes and refresh the page.

{% image caption="If the addon is not listed double check Essentials Premium has been installed."%}
![Enable Access Addon](/next/assets/ytp/access/integration/enable-addon.gif)
{% /image %}

---

## 1. Open the Condition Panel

Navigate to the Builder and select the element you want to condition. From there, open the Access Condition Rules panel located under the [Advanced Settings](https://yootheme.com/support/yootheme-pro/joomla/elements).

{% image %}
![Open Access Condition Panel](/next/assets/ytp/access/integration/open-condition-panel.gif)
{% /image %}

---

## 2. Compose the Condition

Check the [rules reference](./rules) to gain insights and form the condition according to your needs. In this particular case, we will be using a Day rule.

{% image %}
![Compose Access Condition](/next/assets/ytp/access/integration/compose-condition.gif)
{% /image %}

---

## 3. Set an Evaluation Mode

If a condition is composed of multiple rules, the default evaluation mode is `AND`, meaning the condition will only be validated if all rules evaluate as true. However, you can also set the mode to `OR` or even `Custom`. In this case we are going to keep the default mode.

{% image %}
![Set Access Condition Evaluation Mode](/next/assets/ytp/access/integration/set-evaluation-mode.gif)
{% /image %}

---

## 4. Final Review

Review the logs to confirm that the evaluation is using the correct data and that the outcome match your expectation.

{% image %}
![Review Access Condition Evaluation Logs](/next/assets/ytp/access/integration/review-evaluation-logs.gif)
{% /image %}