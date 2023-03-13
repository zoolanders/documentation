---
name: Language
title: Language Access Rule
collection: Site
description: Validates against the site language
icon: '
  <path stroke="none" d="M18.525 2H1.78v16.746h9.695V28H28.22V11.254h-9.695V2zM9.068 5.966L6.302 13.86h1.867l.45-1.284h2.856v4.407H3.542V3.763h13.22v7.491H13.09l-1.852-5.288h-2.17zm2 4.848H9.237l.916-2.613.915 2.613zm15.39 2.203v13.22h-13.22v-13.22h13.22z"/>
  <path stroke="none" d="M18.384 20.976c.169.27.354.53.556.777-.64.345-1.365.517-2.177.518v1.763c1.33 0 2.518-.353 3.525-1.037 1.008.684 2.196 1.037 3.526 1.037V22.27c-.811 0-1.537-.173-2.177-.518.201-.247.387-.507.555-.777a9.16 9.16 0 001.107-2.67h.955v-1.764H21.17V15.22h-1.762v1.322h-3.085v1.763h.955a9.16 9.16 0 001.107 2.67zm3.09-2.67a7.33 7.33 0 01-.777 1.735c-.124.2-.26.393-.409.576a5.703 5.703 0 01-.382-.532 7.31 7.31 0 01-.804-1.78h2.372z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A condition based on the **Language Access Rule** will validate if the Site Language matches one of the selected languages. For more complex logic validation combine multiple rules instead.

---

## Settings

{% image %}
![Language Access Rule](/assets/ytp/access/rule-language.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The languages that the site must match, at least one, for the condition to be considered valid. Only the installed languages will be listed. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
    {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}