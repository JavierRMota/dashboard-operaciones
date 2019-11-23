import React, { Component } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import "bootstrap-4-grid/css/grid.min.css";
import "../App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

import { withRouter } from "react-router-dom";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import axios from "axios";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameConfirm: "",
      companies: []
    };
  }
  redirectToHome = () => {
    const { history } = this.props;
    if (history) history.push("/home");
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/compania/consultarCompanias")
      .then(response => response.json())
      .then(data => this.setState({ companies: data }));
  }

  onSubmit = e => {
    const compania = {
      name: document.getElementById("standard-name").value,
      nameConfirm: document.getElementById("standard-name-confirm").value
    };
    if (this.state.name === this.state.nameConfirm && this.state.name !== "") {
      //companies.push({ name: this.state.name });
      axios.post(`http://localhost:8080/api/compania/crear`, { compania }).then(
        response => {
          if (response.data === "compania creada") {
            e.preventDefault();
            this.redirectToHome();
            window.location.reload();
          } else alert("Hubo un error creando la compania");
        },
        error => {
          console.log(error);
        }
      );
    }

    this.setState({
      name: "",
      nameConfirm: "",
      companies: []
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    var company = this.state.companies.map((item, key) => (
      <div>
        <Divider />
        <Link to="/reporte" className="link">
          <ListItem button className="k-button k-primary mt-3 mb-1">
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      </div>
    ));
    return (
      <div className="bootstrap-wrapper">
        <div
          className="app-container container"
          ref={el => (this.appContainer = el)}
        >
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>Bienvenido | Consultor</h1>
            </div>
          </div>
          <Grid container justify="center">
            <Container align="center">
              <div className="row">
                <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
                  <Card>
                    <CardContent>
                      <h2>Empresas</h2>
                      <p>Consulte las empresas dadas de alta en el sistema.</p>
                      <TextField
                        id="standard-company"
                        label="Buscar empresa"
                        margin="normal"
                      />
                      {}
                      <List component="nav" aria-label="main mailbox folders">
                        {company}
                      </List>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-xs-8 col-sm-8 col-md-4 col-lg-4 col-xl-4">
                  <Card>
                    <CardContent>
                      <h2>Crear empresa</h2>
                      <p>De de alta una nueva empresa en el sistema.</p>
                      <form noValidate autoComplete="off">
                        <TextField
                          name="name"
                          id="standard-name"
                          label="Nombre empresa"
                          margin="normal"
                          onChange={e => this.handleChange(e)}
                          value={this.state.name}
                        />
                        <br />
                        <TextField
                          name="nameConfirm"
                          id="standard-name-confirm"
                          label="Confirmar nombre"
                          margin="normal"
                          onChange={e => this.handleChange(e)}
                          value={this.state.nameConfirm}
                        />
                        <br />
                        <br />
                        <Button
                          primary={true}
                          type="button"
                          onClick={e => this.onSubmit(e)}
                        >
                          Crear Empresa
                        </Button>
                      </form>
                      <br />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Container>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Options;
