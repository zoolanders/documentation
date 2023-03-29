---
name: User Group
title: User Group Access Rule
collection: Site
description: Validates against the current user's group
icon: '
  <path fill="none" stroke-width="1.5" d="M28.265 22.659v-1c0-3.84-3.16-7-7-7m0-8c2.194 0 4 1.805 4 4 0 2.194-1.806 4-4 4M1.713 22.659v-1c0-3.84 3.16-7 7-7m0-8c-2.195 0-4 1.805-4 4 0 2.194 1.805 4 4 4"/>
  <path fill="none" stroke-width="2" d="M4.596 26.891v-1.487C4.596 19.697 9.292 15 15 15s10.404 4.697 10.404 10.404v1.487M15 15c3.261 0 5.945-2.684 5.945-5.945 0-3.262-2.684-5.946-5.945-5.946S9.055 5.793 9.055 9.055C9.055 12.316 11.739 15 15 15z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The User Group Access Rule evaluates whether the current user is part of the selected user groups.

{% callout type="warning" title="Limited Detection" %}
Notice that this rule is specific to Joomla.
{% /callout %}

---

## Settings

{% image %}
![User Group Access Rule](/next/assets/ytp/access/rule-user-group.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The groups that the user must match, at least one, for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Match All** | Whether all groups must be matched for the validation to pass. |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
