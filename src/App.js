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
              path="/ventas/:compania"
              render={(props) => {
                const {compania} = props.match.params
                return <div>
                <Menu left={
                  <Link to={`/reporte/${compania}`} className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Ventas report={props.location.report}/>
              </div>}} />
            <Route
              exact
              path="/gastos/:compania"
              render={(props) => {
                const {compania} = props.match.params
                return <div>
                <Menu left={
                  <Link to={`/reporte/${compania}`}className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Gastos report={props.location.report}/>
              </div>}} />
            <Route
              exact
              path="/margen/:compania"
              render={(props) => {
                const {compania} = props.match.params
                return <div>
                <Menu left={
                  <Link to={`/reporte/${compania}`} className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Margen report={props.location.report}/>
              </div>}} />
            <Route
              path="/reporte/:compania"
              render={(props) => {
                const {compania} = props.match.params
                return <div>
                <Menu left={
                  <Link to="/home" className="link">
                    <Button color="inherit" >Regresar</Button>
                  </Link>
                } />
                <Dashboard compania={compania} />
              </div>}} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
