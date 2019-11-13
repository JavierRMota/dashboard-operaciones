import React, { Component } from 'react';
import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartLegend,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartSeries,
  ChartSeriesItem
} from '@progress/kendo-react-charts';

class LineChartContainer extends Component {
  render() {
    const baseYear = 2000;
    const generateData = () => {
        const data = {
          categories: [],
          series: {
            name: 'Datos en el tiempo',
            data: [],
          },
        };

        for (let i = 0; i < 20; i++) {
          data.categories.push(baseYear + i);
          data.series.data.push(Math.floor(Math.random() * 7000));
        }

        return data;
      };

    const data = generateData();

    return (
      <Chart pannable={{ lock: 'y' }} zoomable={{ mousewheel: { lock: 'y' } }}>
        <ChartTitle text={this.props.title} />
        <ChartTooltip format="{0}" />
        <ChartLegend position="bottom" orientation="horizontal" />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={data.categories} max={20}
            labels={{ rotation: 'auto' }} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem data={data.series.data} type="line"
            style={{smooth: true}} name={data.series.name} />
        </ChartSeries>
    </Chart>
    );
  }
}

export default LineChartContainer;
