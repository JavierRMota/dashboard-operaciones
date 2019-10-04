import React, { Component } from 'react';

import {
    ArcGauge
} from '@progress/kendo-react-gauges';

class ArcGaugeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 50,
    };
  }

  render() {
    const colors = [
      { from: 0, to: 25, color: 'red' },
      { from: 25, to: 100, color: 'lime' },
    ];

    const arcOptions = {
        value: this.state.value,
        colors,
      };

    const arcCenterRenderer = (value, color) => (<h3 style={{ color: color }}>{value}%</h3>);

    return (
      <ArcGauge {...arcOptions} arcCenterRender={arcCenterRenderer} />
      );
  }
}
export default ArcGaugeContainer;
