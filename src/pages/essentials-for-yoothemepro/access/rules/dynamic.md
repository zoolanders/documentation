---
name: Dynamic
title: Dynamic Access Rule
collection: Misc
description: Validates against dynamic content
icon: '
  <path stroke-width=".5" d="M15 2C9 2 4.475 4.044 4.475 6.755V23.24c0 2.71 4.525 4.758 10.525 4.758s10.525-2.042 10.525-4.758V6.754C25.525 4.043 21 2 15 2zm9.225 15.745c0 1.634-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459V14.61c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zm0-5.496c0 1.634-3.788 3.46-9.225 3.46-5.437 0-9.225-1.82-9.225-3.46V9.114c1.761 1.454 5.15 2.398 9.225 2.398 4.074 0 7.47-.944 9.225-2.398v3.135zM15 3.3c5.437 0 9.225 1.82 9.225 3.459 0 1.64-3.788 3.459-9.225 3.459-5.437 0-9.225-1.82-9.225-3.459C5.775 5.119 9.563 3.3 15 3.3zm0 23.394c-5.437 0-9.225-1.82-9.225-3.458V20.1c1.761 1.453 5.15 2.397 9.225 2.397 4.074 0 7.47-.944 9.225-2.397v3.135c0 1.639-3.788 3.458-9.225 3.458z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A condition based on the **Dynamic Access Rule** will validate if the specified value validates against the custom evaluation logic.

---

## Settings

{% image %}
![Dynamic Access Rule](/assets/ytp/access/rule-dynamic.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Value** | The value that must validate for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Evaluation** | The logic that will be applied to the specified value, `Is empty`, `Includes`, `Equals to`, `Greater than`, `Starts with` or `Ends with`. | &#x2713; |
| **Evaluation Value** | The value that the main value will be evaluated with, if required by the evaluation logic. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
