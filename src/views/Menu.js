import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Menu extends Component {
  classes = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  loggout = () => this.props.handler(false);
  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" onClick={this.loggout} >Salir</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Menu;
