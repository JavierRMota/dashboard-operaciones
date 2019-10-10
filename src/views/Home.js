import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Options from './Options';
import Menu from './Menu';

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
