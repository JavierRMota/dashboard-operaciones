import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Options from './Options';
import Menu from './Menu';
import Ventas from './Ventas';

class Home extends Component {

  render() {
    return (
      <div>
        <Menu />
        <Options />
      </div>
    );
  }

}
export default Home;
