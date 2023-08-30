---
name: User Level
title: User Level Access Rule
collection: Site
description: Validates against the current user's access or role level
icon: '
  <path fill="none" stroke-width="2" d="M4.596 26.891v-1.487C4.596 19.697 9.292 15 15 15c2.497 0 4.8.899 6.602 2.388M15 15c3.261 0 5.945-2.684 5.945-5.945 0-3.262-2.684-5.946-5.945-5.946S9.055 5.793 9.055 9.055C9.055 12.316 11.739 15 15 15z"/>
  <path stroke="none" d="M22.998 19.331c-1.163 0-2.12.979-2.12 2.168v.723c-.777 0-1.415.652-1.415 1.445v2.89c0 .794.638 1.446 1.414 1.446h4.243c.775 0 1.414-.652 1.414-1.445v-2.89c0-.794-.639-1.446-1.414-1.446v-.723c0-1.19-.958-2.168-2.122-2.168zm-.707 2.168c0-.396.32-.722.707-.722.388 0 .707.326.707.722v.723h-1.414v-.723zm2.829 5.059h-4.243v-2.89h4.243v2.89z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

The User Level Access Rule evaluates whether the current user's access or role level matches one of the selection.

---

## Settings

{% image %}
![User Level Access Rule](/assets/ytp/access/rule-user-level.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The Access or Role levels that the user must match, at least one, for the condition to be considered valid. | &#x2713; | &#x2713; |
| **Match All** | Whether all levels must be matched for the validation to pass. |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}