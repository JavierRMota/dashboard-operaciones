import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import axios from "axios";

import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@progress/kendo-react-buttons";
//import { Link } from "react-router-dom";

import "@progress/kendo-theme-material/dist/all.css";
import "bootstrap-4-grid/css/grid.min.css";
import "../App.css";

class LoginTab extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const usuario = {
      mail: document.getElementById("standard-name").value,
      password: document.getElementById("standard-pass").value
    };
    axios.post(`http://localhost:8080/api/compania/login`, { usuario }).then(
      response => {
        if (response.data === "welcome") {
          this.props.history.push("/home");
        } else alert("bad login");
      },
      error => {
        console.log(error);
      }
    );
  };

  handleLogin = () => {
    this.props.handler(true);
  };

  classes = makeStyles({
    card: {
      minWidth: 275,
      spacing: 200
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(1)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    }
  });

  render() {
    return (
      <Grid maxWidth="md" align="center" justify="center">
        <Box boxShadow={0}>
          <br />
          <br />
          <br />
          <br />
        </Box>

        <Container maxWidth="md" align="center" justify="center">
          <Card className={this.classes.card}>
            <CardContent>
              <h1>¡Bienvenido!</h1>
              <form
                className={this.classes.container}
                noValidate
                autoComplete="off"
                onSubmit={this.handleSubmit}
              >
                <TextField id="standard-name" label="Usuario" margin="normal" />
                <br />
                <TextField
                  id="standard-pass"
                  label="Contraseña"
                  margin="normal"
                  type="password"
                />
                <br />
                <br />
                <Button type="submit" primary={true}>
                  Iniciar sesión
                </Button>

                <br />
                <br />
              </form>
            </CardContent>
          </Card>
          <Box boxShadow={0}>
            <br />
            <br />
          </Box>

          <Card className={this.classes.card}>
            <CardContent>
              <p>Desarollado por Equipo CatAd - MotaTech® 2019</p>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    );
  }
}

export default LoginTab;
