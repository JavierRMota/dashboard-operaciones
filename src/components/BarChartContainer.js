import React, { Component } from 'react';
import 'hammerjs';

import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartLegend,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

class BarChartContainer extends Component {
  render() {
    return (
      <Chart style={{ height: 288 }}>
        <ChartLegend visible={true} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={this.props.categories} startAngle={45} />
        </ChartCategoryAxis>
        <ChartSeries>
          {
            this.props.data.map((item, idx) => (
              <ChartSeriesItem key={idx} type="column" data={item.data} name={item.name} gap={2}/>
            ))}
        </ChartSeries>
        <ChartValueAxis skip={4}>
          <ChartValueAxisItem color="#888" skip={2} />
        </ChartValueAxis>
      </Chart>
    );
  }
}
export default BarChartContainer;
