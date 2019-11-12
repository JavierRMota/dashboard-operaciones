import React, { Component } from 'react';
import LoginTab from './views/LoginTab';
import Home from './views/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './views/Menu';
import Dashboard from './views/Dashboard';
import Options from './views/Options';
import Ventas from './views/Ventas';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Redirect
            from="/"
            to="/login" />
          <Switch>
            <Route
              path="/home"
              component={Home} />
            <Route
              exact
              path="/login"
              component={LoginTab} />
            <Route
              exact
              path="/ventas"
              render={() => <div>
                <Menu />
                <Ventas />
              </div>} />
            <Route
                exact
                path="/reporte"
                render={() => <div>
                  <Menu />
                  <Dashboard />
                </div>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
