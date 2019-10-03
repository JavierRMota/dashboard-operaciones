import React, { Component } from 'react';
import 'hammerjs';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

class DonutChartContainer extends Component {
  render() {
    const labelTemplate = (e) => (e.category + '\n'  + (e.percentage * 100) + '%');
    return (
      <Chart style={{ height: 300 }}>
        <ChartSeries>
          <ChartSeriesItem type="donut" startAngle={0} data={this.props.data}
            categoryField={this.props.categoryField} field={this.props.field} padding={0} >
            <ChartSeriesLabels color="#fff" background="none" content={labelTemplate} />
          </ChartSeriesItem>
        </ChartSeries>
        <ChartLegend visible={false} />
      </Chart>
    );
  }
}
export default DonutChartContainer;
