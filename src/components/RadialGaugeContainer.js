import React, { Component } from 'react';

import {
    RadialGauge
} from '@progress/kendo-react-gauges';

class RadialGaugeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      plan: props.plan,
      objective: props.objective,
      major: props.objective / 100,
      minor: props.objective / 200,
    };
    if (props.plan > props.value) {
      this.state.ranges =  [
        { from: 0, to: props.value, color: 'red' },
        { from: props.value, to: props.plan, color: '#ffd246' },
      ];
      this.state.pointer = [
        {
          value: props.value,
          color: 'red',
        },
        {
          value: props.plan,
          color: '#ffd246',
        },
      ];
    } else {
      this.state.ranges =  [
        { from: 0, to: props.value, color: '#78d237' },
      ];
      this.state.pointer = [
        {
          value: props.value,
          color: '#78d237',
        },
        {
          value: props.plan,
          color: '#ffd246',
        },
      ];
    }
  }

  render() {
    console.log(this.state);
    const radialOptions = {
        value: this.state.value,
        shape: 'arrow',
        scale: {
          majorUnit: this.state.objective / 10,
          minorUnit: 0,
          max: this.state.objective,
          ranges: this.state.ranges,
          majorTicks: { visible: false },
          minorTicks: { visible: false },
        },
        pointer: this.state.pointer,
      };
    return (
        <RadialGauge {...radialOptions} />
      );
  }
}
export default RadialGaugeContainer;
