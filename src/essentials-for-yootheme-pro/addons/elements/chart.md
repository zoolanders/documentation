---
title: Chart Element
description: A chart element based on Chart.js
icon: '
    <path opacity=".6" stroke="none" d="M26.789 14.863c-1.404-1.802-2.356-3.874-4.405-3.874-3.626 0-2.672 5.915-6.679 5.915s-4.429-6.362-8.968-.382c-1.447 1.906-2.611 4.031-3.526 6.041l11.349 6.552 12.229-7.06v-7.192Z"/>
    <path opacity=".6" stroke="none" d="M24.975 15.039c-4.124.081-3.265 2.692-6.172 3.352-2.952.67-3.418-7.211-6.37-7.211S8.827 18.836 5.13 24.092l-.105.149 7.925 4.575 12.025-6.942v-6.835Z"/>
    <path stroke="none" d="M2.771 17.313c1.376-3.811 1.969-6.896 4.596-6.896 4.007 0 4.961 11.257 8.396 10.112 3.435-1.145 3.053-7.251 8.396-7.251 1.017 0 2.056.623 3.07 1.631v7.146L15 29.115l-12.229-7.06v-4.742Z"/>
    <path stroke="none" d="M15 30 2.008 22.5v-15L15 0l12.992 7.5v15L15 30ZM3.534 21.619 15 28.238l11.466-6.619V8.381L15 1.762 3.534 8.381v13.238Z"/>
'
---

{% elementIcon draw=$markdoc.frontmatter.icon /%}

{% $markdoc.frontmatter.description %}.

The Chart Element allows you to display static and dynamic data using visually appealing charts and graphs based on the popular JavaScript library [Chart.js v2.9.4](https://www.chartjs.org/docs/2.9.4/).

Variety of chart types are supported, including Line, Vertical Bar, Horizontal Bar, Radar, Pie, Doughnut, Polar Area, Bubble, and Scatter. You can also customize the appearance of your charts using a range of options and settings.

{% image %}
![Chart Element](/assets/ytp/elements/chartjs-element.webp)
{% /image %}

## Quick Start

Setting up a Dynamic Chart can be somewhat overwhelming, for an easier start you can download this combo of a `Section` plus `CSV Data` and then do this simple setup:

1. Download both files bellow.
1. Copy the CSV file to a folder of the site.
1. Create a new CSV Source based on that file.
1. Import the Section in the builder and open the Chart element configuration.
1. Open the `Dataset`, then again open its `Data Item`.
1. In the `Advanced Tab` of the item choose the previously created CSV source as its Dynamic Content.

{% quick-links %}
    {% quick-link title="Builder Section" href="/assets/ytp/elements/chartjs-preset.json" description="Download the Builder Section." download="true" /%}
    {% quick-link title="CSV Data" href="/assets/ytp/elements/chartjs-preset.csv" description="Download the CSV Data." download="true" /%}
{% /quick-links %}

{% callout type="warning" title="Sources Addon Required" %}
Notice that this preset is dependent on the premium [Sources Addon](/essentials-for-yootheme-pro/addons/sources) for the CSV data source creation.
{% /callout %}
