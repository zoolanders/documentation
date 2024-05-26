---
name: User
title: User Access Rule
collection: Site
description: Validates against the current user
icon: '
  <path fill="none" stroke-width="2" d="M4.596 26.891v-1.487C4.596 19.697 9.292 15 15 15s10.404 4.697 10.404 10.404v1.487M15 15c3.261 0 5.945-2.684 5.945-5.945 0-3.262-2.684-5.946-5.945-5.946S9.055 5.793 9.055 9.055C9.055 12.316 11.739 15 15 15z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The User Rule evaluates whether the current user's `id` or `username` matches one of the selection.

## Settings

![User Access Rule](/assets/ytp/access/rule-user.webp)

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The ids or usernames that the user must match, at least one, for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `346, johndoe`. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
