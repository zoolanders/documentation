---
title: Access Condition
---

Compose rules that will determine the evaluation criteria for rendering an element. {% .lead %}

An Access Condition is a set of rules with a predefined or custom evaluation logic that will decide whether or not the current element should be displayed. It also supports Dynamic Content and logs.

{% image %}
![Access Condition](/assets/ytp/access/access-condition.webp)
{% /image %}

---

## Composable Rules

The Access Condition includes a variety of core rules, totaling over 16, which are organized into groups as [Site](./rules/site), [Device](./rules/device), [DateTime](./rules/datetime), and a versatile rule called [Dynamic](./rules/dynamic). It is possible to include multiple types of the same rule within a single condition, with different configurations.

{% image %}
![Access Condition Rules](/assets/ytp/access/access-condition-rules.webp)
{% /image %}

---

## Evaluation Mode

When an Access Condition is applied to an element, it will first evaluate each of the specified rules individually, then will apply an evaluation mode, `AND|OR|Custom`, to determine the final result. The `AND` mode requires all rules to pass, `OR` mode requires at least one, while `Custom` mode would apply a custom logic.

A custom logic is inputed with a query that references each rule using their order number within brackets, such as `{1}`, and use `AND|OR` operators, such as `{1} AND {2}`, or `{1} OR {2}`. Parentheses can also be used to alter the execution order, such as `({1} AND {2}) OR {3}`.

{% image %}
![Access Condition Evaluation](/assets/ytp/access/access-condition-evaluation.webp)
{% /image %}

---

## Evaluation Logs

While in the customizer, the Access Condition will display evaluation logs for each rule as well the final result. These logs can be used to gain insights into the evaluation process and troubleshoot any issues with the logic.

{% image %}
![Access Condition Evaluation Logs](/assets/ytp/access/access-condition-logs.webp)
{% /image %}

{% image %}
![Access Condition Evaluation Log](/assets/ytp/access/access-condition-log.webp)
{% /image %}
