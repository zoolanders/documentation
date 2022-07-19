# Chart

Based on [Chart.js](https://www.chartjs.org/) 2.9.3 this element will make your data fun to set and fun to watch.

![Chart Element](../assets/chart.png)

## Dynamic Data

Setting up a Dynamic Chart can be somewhat challenging as this is a three-level element, for an easier start you can download this combo of a Layout plus Data in CSV format and then do a simple setup:

1. Copy the CSV file to the website server.
2. Create a new CSV Source based on that file.
3. Import the Layout and access the Chart element configuration.
4. Access the first and only Dataset, then access its Data item.
5. In the Advanced Tab of the Data item choose the previously created CSV source as its Dynamic Content.

- <a :href="$withBase('/elements/chart-dynamic.json')" target="_blank">YOOtheme Pro Layout</a>
- <a :href="$withBase('/elements/chart-dynamic.csv')" target="_blank">CSV Data Sample</a>
