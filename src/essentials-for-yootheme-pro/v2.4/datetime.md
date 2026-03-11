# Date and Time

Working with current date and time is essential for many workflows, but YOOtheme Pro doesn't provide built-in global access to this information. Essentials solves this by offering a [Global Request](./addons/dynamic/sources/request) source that provides access to the request timestamp and other useful data.

![Global Request Source](./addons/dynamic/sources/assets/request-source.webp)

## Working with Timestamps

By mapping the Request Timestamp to a layout element, you gain access to the current date and time, which can then be formatted as needed to achieve your desired output.

![Request Timestamp Format](./assets/datetime/request-timestamp-format.webp)

### Modifying Dates

You can modify the date to obtain timestamps for different time periods:
- **Yesterday**: Subtract one day using `-1 day`
- **Tomorrow**: Add one day using `+1 day`
- **Custom intervals**: Use any valid PHP date modification string

![Request Timestamp Alter](./assets/datetime/request-timestamp-alter.webp)

## Using Timestamps in Conditions

When mapping the current timestamp to access or filter [conditions](./conditions), you can control content display based on the current date and time. 

**Important**: When comparing dates, both values must be formatted as ISO-compliant dates:
- Use `c` format for complete timestamps
- Use `Y-m-d` format for date-only comparisons

![Request Timestamp Evaluation](./assets/datetime/request-timestamp-evaluation.webp)
