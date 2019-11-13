import React, { Component } from 'react';
import Options from './Options';
import Menu from './Menu';

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
