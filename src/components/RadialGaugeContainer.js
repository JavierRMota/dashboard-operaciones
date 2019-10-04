import React, { Component } from 'react';

import {
    RadialGauge
} from '@progress/kendo-react-gauges';

class RadialGaugeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 10,
    };
  }

  render() {
    const radialOptions = {
        value: this.state.value,
        shape: 'arrow',
        scale: {
          minorUnit: 5,
          majorUnit: 20,
          max: 180,
          ranges: [
            { from: 80, to: 120, color: '#ffc700' },
            { from: 120, to: 150, color: '#ff7a00' },
            { from: 150, to: 180, color: '#c20000' },
          ],
        },
      };
    return (
        <RadialGauge {...radialOptions} />
      );
  }
}
export default RadialGaugeContainer;
