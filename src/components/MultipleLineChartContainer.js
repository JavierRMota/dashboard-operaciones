import React, { Component } from 'react';
import {
  Chart,
  ChartTitle,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

class MultipleLineChartContainer extends Component {

  render() {
    return(
      <Chart>
        <ChartTitle text={this.props.title} />
        <ChartCategoryAxis>
          <ChartCategoryAxisItem title={{text: "Meses"}} categories={this.props.categories}/>
        </ChartCategoryAxis>
        <ChartSeries>
          {this.props.data[0].data.map((item, idx) =>{
            console.log(item)
            return <ChartSeriesItem key={idx} type="line" data={ item.data }/>
          }

          )}
        </ChartSeries>
      </Chart>
    );
  }
}
export default MultipleLineChartContainer;
