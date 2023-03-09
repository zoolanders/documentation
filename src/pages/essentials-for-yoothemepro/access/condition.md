---
title: Access Condition
---

**Access Condition** evaluates if an element should be rendered. {% .lead %}

An **Access Condition** is a set of rules with a predefined or custom evaluation logic which final result will determine if the current element will be rendered or not, with support for Dynamic Content, custom evaluation logic and logs.

{% image %}
![Access Condition](/assets/ytp/access/access-condition.webp)
{% /image %}

---

## Rules

There are 16+ core rules organized in groups of [Site](./rules/site), [Device](./rules/device), and [DateTime](./rules/datetime). A condition can have multiple types of the same rule with diferent configurations.

{% image %}
![Access Condition Rules](/assets/ytp/access/access-condition-rules.webp)
{% /image %}

---

## Evaluation

A condition will evaluate the specified rules individually, then apply an `AND`, `OR`, or `Custom` evaluation mode logic to the final result.

{% image %}
![Access Condition Evaluation](/assets/ytp/access/access-condition-evaluation.webp)
{% /image %}

The `AND` mode requires for all rules to evaluate as `true` for the condition to be considered valid.

The `OR` mode requires at least one rule to evaluate as `true` for the condition to be considered valid.

The `Custom` mode requires the custom logic to evaluate as `true` for the condition to be considered valid. The logic is inputed with a query referencing each rule with brackets and it order number, e.g. `{1}`, with `AND|OR` operators to form the evalution logic, e.g. `{1} AND {2}`, and parenthesis `()` for altering the execution order, e.g. `({1} AND {2}) OR {3}`.

---

## Evaluation Logs

While in the customizer, the **Access Condition** will have access to evaluation logs for each rule individually as for the final result. Use those to understand what is going on during the evaluation process and solve possible logic issues.

{% image %}
![Access Condition Evaluation Logs](/assets/ytp/access/access-condition-logs.webp)
{% /image %}

{% image %}
![Access Condition Evaluation Log](/assets/ytp/access/access-condition-log.webp)
{% /image %}
