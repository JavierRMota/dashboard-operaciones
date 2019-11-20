import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { Dialog } from '@progress/kendo-react-dialogs';
import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap-4-grid/css/grid.min.css';
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@progress/kendo-react-buttons';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { companies } from '../data/appData';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

import { Ripple } from '@progress/kendo-react-ripple';



class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        nameConfirm: '',
      };
  }


  csv2JSON(csv){
    var lines=csv.split("\n");
    var result = [];
    var headers=lines[0].replace("\r","").split(",");
    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].replace("\r","").split(",");
      for(var j=0;j<headers.length;j++){
        if(currentline[j]){
          obj[headers[j]] = currentline[j];
        }
      }
      result.push(obj);
    }
    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUpload = () => {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  };

  onSubmit = (e) => {
    if (this.state.name === this.state.nameConfirm && this.state.name !== '') {
      companies.push({ name: this.state.name });
    }

    this.setState({
      name: '',
      nameConfirm: '',
    });
  };

  handleCatalogo = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' elementos del catálogo. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleClientes = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' clientes. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleGastosDetallados = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' gastos detallados. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleGastosFijos = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' gastos fijos. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleGastosVariables = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' gastos variables. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleInsumos = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' insumos. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleLiquidacion = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' liquidaciones. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleObjetivos = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' objetivos. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleProveedores = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' proveedores. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleRequisicion = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' requisiciones. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleSucursales = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' sucursales. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  handleVendedores = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      alert('Se han registrado ' + (result.length - 1) + ' vendedores. ');
      console.log(result);
    };
    reader.readAsText(files[0]);
  };

  render() {
    var company = companies.map((item, key) =>
      <div>
        <Divider />
        <Link to="/reporte"   className="link">
          <ListItem button className="k-button k-primary mt-3 mb-1">
            <ListItemText primary={item.name}/>
          </ListItem>
        </Link>

      </div>
    );
    return (
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>Bienvenido | Consultor</h1>
            </div>
          </div>
          <Grid container justify = "center">
          <Container align="center">

          <div className="row">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xl-8">
            <Card>
            <CardContent>
              <h2>Empresas</h2>
              <TextField
                id="standard-name"
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
                  id="standard-name"
                  label="Confirmar nombre"
                  margin="normal"
                  onChange={e => this.handleChange(e)}
                  value={this.state.nameConfirm}
                />
                <br />
                <Button primary={true} type="button" look="outline" onClick={this.handleUpload}>Subir CSV</Button>
                <Button primary={true} type="button"
                  onClick={(e) => this.onSubmit(e)}>Crear</Button>
              </form>
              {this.state.showDialog &&
                <Dialog title={'Compartir reporte'} onClose={this.handleUpload}>
                  <p>Documento a subir: </p>
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <td>
                          <ReactFileReader handleFiles={this.handleCatalogo} fileTypes={'.csv'}>
                            <Button primary={true}>Catálogo</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleClientes} fileTypes={'.csv'}>
                            <Button primary={true}>Clientes</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleGastosDetallados} fileTypes={'.csv'}>
                            <Button primary={true}>Gastos Detallados</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleGastosFijos} fileTypes={'.csv'}>
                            <Button primary={true}>Gastos Fijos</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleGastosVariables} fileTypes={'.csv'}>
                            <Button primary={true}>Gastos Variables</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleInsumos} fileTypes={'.csv'}>
                            <Button primary={true}>Insumos</Button>
                          </ReactFileReader>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <ReactFileReader handleFiles={this.handleLiquidacion} fileTypes={'.csv'}>
                            <Button primary={true}>Liquidación</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleObjetivos} fileTypes={'.csv'}>
                            <Button primary={true}>Objetivos</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleProveedores} fileTypes={'.csv'}>
                            <Button primary={true}>Proveedores</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleRequisicion} fileTypes={'.csv'}>
                            <Button primary={true}>Requisición</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleSucursales} fileTypes={'.csv'}>
                            <Button primary={true}>Sucursales</Button>
                          </ReactFileReader>
                        </td>
                        <td>
                          <ReactFileReader handleFiles={this.handleVendedores} fileTypes={'.csv'}>
                            <Button primary={true}>Vendedores</Button>
                          </ReactFileReader>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                    <br/>
                    <Button onClick={this.handleUpload}>Cancelar</Button>
                </Dialog>
              }
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
