import React, { Component } from 'react';
import LoginTab from './views/LoginTab';
import Home from './views/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
    this.handler = this.handler.bind(this);
  }

  handler(someValue) {
    this.setState({
      logged: someValue,
    });
  }

  render() {
    if (this.state.logged) {
      return (
        <Home handler= {this.handler} />
      );
    } else {
      return (
        <LoginTab handler= {this.handler} />
      );
    }
  }
}
export default App;
