import React, { Component } from 'react';
import LoginTab from './views/LoginTab';
import Home from './views/Home';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './views/Menu';
import Dashboard from './views/Dashboard';
import Ventas from './views/Ventas';
import Gastos from './views/Gastos';
import Margen from './views/Margen';
import { Button } from '@progress/kendo-react-buttons';
import { Link } from 'react-router-dom';

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
                <Menu left={
                  <Link to="/reporte" className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Ventas />
              </div>} />
            <Route
              exact
              path="/gastos"
              render={() => <div>
                <Menu left={
                  <Link to="/reporte" className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Gastos />
              </div>} />
            <Route
              exact
              path="/margen"
              render={() => <div>
                <Menu left={
                  <Link to="/reporte" className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Margen />
              </div>} />
            <Route
              exact
              path="/reporte"
              render={() => <div>
                <Menu left={
                  <Link to="/home" className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Dashboard />
              </div>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
