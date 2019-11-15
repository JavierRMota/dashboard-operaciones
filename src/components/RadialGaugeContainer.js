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

    function RGB2HTML(red, green, blue)
{
    var decColor =0x1000000+ Math.floor(blue) + 0x100 * Math.floor(green) + 0x10000 *Math.floor(red) ;
    return '#'+decColor.toString(16).substr(1);
}

    var colors = ["#6e6e6e","#FF0000", "#FF8000","#ffe100","#80FF00","#00FF00","#00FF80","#00FFFF"];

    var ratio = props.value/props.plan;
    //    planState = Math.abs((props.value/props.plan)*10)/2;

    //Generar un color hex que vaya desde rojo a amarillo a verde dependiendo de actual/plan

    if (props.plan >= props.value) {

      if (ratio <=0.5){
      this.state.ranges =  [
        { from: 0, to: props.value, color: RGB2HTML(255,ratio*2*255,15)},//colors[planState]},
        { from: props.value, to: props.plan, color: colors[0]}
      ];
      this.state.pointer = [
        {
          value: props.value,
          color:  RGB2HTML(255,ratio*2*255,15),
        },
      ];
    }else{
      this.state.ranges =  [
        { from: 0, to: props.value, color: RGB2HTML(255-((ratio-0.5)*2*255),255,15)},//colors[planState]},
        { from: props.value, to: props.plan, color: colors[0]}
      ];
      this.state.pointer = [
        {
          value: props.value,
          color:  RGB2HTML(255-((ratio-0.5)*2*255),255,15),
        },
      ];

    }

    } else {

      this.state.ranges =  [
        { from: 0, to: props.value, color: RGB2HTML(15,255,255) },
      ];
      this.state.pointer = [
        {value: props.value,color:  RGB2HTML(15,255,255),},
      ];
    }
  }

  render() {
    const radialOptions = {
        value: this.state.value,
        shape: 'arrow',
        scale: {
          majorUnit: this.state.objective / 5,
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
