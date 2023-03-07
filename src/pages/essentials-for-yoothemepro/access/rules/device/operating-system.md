---
name: Operating System
title: Operating System Access Rule
collection: Device
description: Validates against the operating system
icon: '
  <path stroke="none" d="M8.402 12.745c0-1.053.297-1.872.882-2.457.585-.585 1.404-.882 2.448-.882 1.07 0 1.899.288 2.475.864.585.576.873 1.377.873 2.421 0 .747-.126 1.368-.378 1.854a2.753 2.753 0 01-1.098 1.125c-.477.261-1.08.396-1.791.396-.73 0-1.332-.117-1.81-.342-.476-.234-.854-.603-1.151-1.098-.297-.504-.45-1.134-.45-1.88zm1.998.01c0 .647.117 1.115.36 1.394.243.288.567.432.99.432.423 0 .756-.144.99-.423.234-.279.35-.774.35-1.494 0-.612-.125-1.053-.368-1.332-.243-.279-.576-.423-.99-.423-.405 0-.73.144-.972.432-.243.28-.36.756-.36 1.413zM15.809 13.825l1.89-.117c.045.306.126.54.252.702.207.261.495.396.882.396.279 0 .504-.072.657-.207a.583.583 0 00.225-.459c0-.17-.072-.315-.216-.45-.144-.135-.486-.252-1.017-.369-.873-.198-1.503-.459-1.872-.783a1.585 1.585 0 01-.558-1.25c0-.325.09-.64.288-.937.189-.297.477-.522.864-.693.387-.17.909-.252 1.584-.252.819 0 1.449.153 1.881.46.432.305.693.791.774 1.457l-1.881.117c-.045-.297-.153-.504-.315-.639-.162-.126-.378-.198-.657-.198-.234 0-.405.054-.522.153a.452.452 0 00-.18.351c0 .108.045.198.144.28.099.09.315.161.666.242.873.18 1.494.37 1.872.567.378.19.648.432.828.711.171.288.252.603.252.954 0 .414-.117.792-.342 1.143a2.124 2.124 0 01-.954.792c-.414.18-.927.27-1.557.27-1.098 0-1.854-.207-2.277-.63-.423-.423-.657-.963-.711-1.61z"/>
  <path fill="none" stroke-width="2" d="M2.246 7.348c0-1.4 1.152-2.551 2.55-2.551h20.407c1.4 0 2.55 1.151 2.55 2.55v11.48c0 1.398-1.15 2.55-2.55 2.55H4.797c-1.4 0-2.55-1.152-2.55-2.55V7.346zM9.9 25.203H20.1"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}. {% .lead %}

A condition based on the **Operating System Access Rule** will validate if the browser agent matches one of the specified Operating Systems.

Supported OS: `Mac OS X`, `Mac OS Classic`, `Linux`, `Open BSD`, `Sun OS`, `QNX`, `BeOS`, `OS/2`, `Windows`, `Windows Vista`, `Windows Server 2003`, `Windows XP`, `Windows 2000 sp1`, `Windows 2000`, `Windows NT`, `Windows Me`, `Windows 98`, `Windows 95`, `Windows CE`.

{% callout type="warning" title="Limited Detection" %}
Notice that browser detection is not always accurate, users can setup their browser to mimic other agents.
{% /callout %}

---

## Settings

{% image %}
![Operating System Access Rule](/assets/ytp/access/rule-os.webp)
{% /image %}

| Setting | Description | Required | Dynamic |
| ------- | ----------- | :------: | :-----: |
| **Selection** | The Operating System list with optional version range that the browser agent must match for the condition to be considered valid. Separate the entries with a comma and/or new line, e.g `Windows, Mac OS X 10.2-10`. | &#x2713; | &#x2713; |
| **Reversed** | Whether the evaluation result should be returned reversed. Use it to set a condition as `IS NOT`. | | &#x2713; |

{% details title="Advanced Settings" %}
  {% partial file="ytp-access-rule-advanced-settings.md" /%}
{% /details %}

---

## Integration

{% partial file="ytp-access-rule-integration.md" variables={rule: $markdoc.frontmatter.name, collection: $markdoc.frontmatter.collection} /%}
