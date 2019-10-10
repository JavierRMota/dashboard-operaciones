import React, { Component } from 'react';
import LoginTab from './views/LoginTab';
import Dashboard from './views/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      window: 0,
    };
    this.handler = this.handler.bind(this);
  }

  handler(someValue) {
    this.setState({
      window: someValue,
    });
  }

  render() {
    switch (this.state.window) {
      case 1:
        return (
          <Dashboard handler= {this.handler} />
        );
      default:
        return (
          <LoginTab handler= {this.handler} />
        );
    }
  }
}
export default App;
