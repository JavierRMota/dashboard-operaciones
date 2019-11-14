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
    var headers=lines[0].split(",");
    for(var i=1;i<lines.length;i++){
      var obj = {};
      var currentline=lines[i].split(",");
      for(var j=0;j<headers.length;j++){
        obj[headers[j]] = currentline[j];
      }
      result.push(obj);
    }
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
  }

  handleCatalog = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
    // Use reader.result
    var result = this.csv2JSON(reader);
    alert('Se han registrado ' + (result.length - 1) + ' elementos del catalogo.');
    console.log(result);
    };
    reader.readAsText(files[0]);
    return result;
  };

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

  handleGoals = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = reader.result.split('\n');
      alert('Se han registrado ' + (result.length - 1) + ' metas ');
      console.log(result);
    };

    reader.readAsText(files[0]);
  };

  handleIncomes = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = reader.result.split('\n');
      alert('Se han registrado ' + (result.length - 1) + ' ingresos ');
      console.log(result);
    };

    reader.readAsText(files[0]);
  };

  handleCompanies = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = reader.result.split('\n');
      alert('Se han registrado ' + (result.length - 1) + ' empresas ');
      console.log(result);
    };

    reader.readAsText(files[0]);
  };

  handleExpenses = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
      // Use reader.result
      var result = reader.result.split('\n');
      alert('Se han registrado ' + (result.length - 1) + ' gastos ');
      console.log(result);
    };

    reader.readAsText(files[0]);
  };

  render() {
    var company = companies.map((item, key) =>
      <div>
        <Divider />
        <Link to="/reporte" className="link">
          <ListItem button>
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
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
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
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
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
                    <ReactFileReader handleFiles={this.handleExpenses} fileTypes={'.csv'}>
                        <Button primary={true}>Gastos</Button>
                    </ReactFileReader>
                    <br/>
                    <ReactFileReader handleFiles={this.handleIncomes} fileTypes={'.csv'}>
                        <Button primary={true}>Ingresos</Button>
                    </ReactFileReader>
                    <br/>
                    <ReactFileReader handleFiles={this.handleGoals} fileTypes={'.csv'}>
                        <Button primary={true}>Metas</Button>
                    </ReactFileReader>
                    <br/>
                    <ReactFileReader handleFiles={this.handleCompanies} fileTypes={'.csv'}>
                        <Button primary={true}>Empresas</Button>
                    </ReactFileReader>
                    <br/>
                    <Button onClick={this.handleUpload}>Cancelar</Button>
                </Dialog>
              }

            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Options;
