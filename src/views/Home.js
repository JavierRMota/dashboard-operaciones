import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Options from './Options';
import Menu from './Menu';
import Ventas from './Ventas';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: -1,
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState = (someValue) => {
    this.setState({
      window: someValue,
    });
  };

  render() {
    switch (this.state.window) {
      case 0:
        return (
          <div>
            <Menu handler = {this.props.handler} />
            <Dashboard handleState={this.handleState}/>
          </div>
        );
      // Caso en el que el usuario de click en ver más de la opción de ventas.
      case 1:
        return (
          <div>
            <Menu handler = {this.props.handler} />
            <Ventas handleState = {this.handleState} />
          </div>
        );
      // Caso en el que el usuario de click en ver más de la opción de gastos.
      case 2:
        return (
          <div>
            <Menu handler = {this.props.handler} />
          </div>
        );
      // Cao en el que el usuario de click en ver más de la opción de pendiente de cobro.
      case 3:
        return (
          <div>
            <Menu handler = {this.props.handler} />
          </div>
        );
      case 4:
        return (
          <div>
            <Menu handler = {this.props.handler} />
          </div>
        );
      default:
        return (
          <div>
            <Menu handler = {this.props.handler} />
            <Options handleState={this.handleState}/>
          </div>
        );

    }

  }

}
export default Home;
