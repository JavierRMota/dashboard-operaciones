import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


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
  render() {
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar>
          {this.props.left}
          <span style={{marginLeft: "auto", marginRight: -12}} >
          <Link to="/login" className="link">
            <Button color="inherit" style={{color: 'white'}} >Salir</Button>
          </Link>
          </span>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default Menu;
