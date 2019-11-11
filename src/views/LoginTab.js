import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap-4-grid/css/grid.min.css';
import '../App.css';


class LoginTab extends Component {
  handleLogin = () => {
    this.props.handler(true);
  };

  classes = makeStyles({
    card: {
      minWidth: 275,
      spacing: "200px"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(1)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  });

  render() {
    return (
      <Container maxWidth="md" align="center" justify="center">
        <Card className={this.classes.card}>
        <CardContent>
          <form className={this.classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Usuario"
              margin="normal"
            />
            <br />
            <TextField
              id="standard-name"
              label="Contraseña"
              margin="normal"
            />
            <br />
            <br />
            <Button primary={true} onClick={this.handleLogin}>Iniciar sesión</Button>
          </form>
        </CardContent>
      </Card>
    </Container>
    );
  }
}

export default LoginTab;
