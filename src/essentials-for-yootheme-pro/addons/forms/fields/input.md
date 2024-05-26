---
title: Input
description: Text, Email, Date, and other one-line editing form controls
---

# {{ $frontmatter.title }} Field Element

{{ $frontmatter.description }}.

The **Input Element** displays a grid of [\<input\>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML elements with support for `text`, `date`, `email`, `number`, `password`, `tel`, `url`, `month`, `time`, and `week` types. Each type is wrapped into a child element with its specific features and validation covered in the next sections.

## Settings

Set multiple children of any type and control the display, grid, and settings of all of them within the parent with an option to override.

![Input Element](./assets/input.webp)

| Setting | Description |
| ------- | ----------- |
| **Show Label** | Should the label be displayed for all children. |
| **Show Icon** | Should the icon be displayed for all children. |

![Input Common Settings](./assets/input-commons.webp)

| Setting | Description |
| ------- | ----------- |
| **Size** | The field size defined by `uk-form-{size}` [modifier](https://getuikit.com/docs/form#size-modifiers). |
| **Width** | The field width defined by `uk-form-width-{width}` [modifier](https://getuikit.com/docs/form#width-modifiers). |
| **Full Width** | Should the field occupy the full width of its parent. |
| **Icon** | The name of the Icon that will be displayed inside the field. |
| **Icon Alignment** | The side of the field where the icon will be aligned, `Left` or `Right`. |

![Input Columns Settings](./assets/input-grid.webp)

| Setting | Description |
| ------- | ----------- |
| **Number of Columns** | The amount of grid columns. |
| **Column Gap** | The size of the gap between grid columns. |
| **Row Gap** | The size of the gap between grid rows. |

## Item Types

- <a title="Text" href="./input-text">Text</a>
- <a title="Number" href="./input-number">Number</a>
- <a title="Password" href="./input-password">Password</a>
- <a title="Email" href="./input-email">Email</a>
- <a title="Url" href="./input-url">Url</a>
- <a title="Tel" href="./input-tel">Tel</a>
- <a title="Date" href="./input-date">Date</a>
- <a title="Time" href="./input-time">Time</a>
- <a title="Month" href="./input-month">Month</a>
- <a title="Week" href="./input-week">Week</a>

## Integration

Refer to one of the child types for specific integration details.
