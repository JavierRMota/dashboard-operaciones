import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialog } from '@progress/kendo-react-dialogs';
import { Button } from '@progress/kendo-react-buttons';
import { Ripple } from '@progress/kendo-react-ripple';
import { savePDF } from '@progress/kendo-react-pdf';
import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap-4-grid/css/grid.min.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import '../App.css';
import RadialGaugeContainer from '../components/RadialGaugeContainer';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
//Dummy data
import { report, currency } from '../data/appData';

import { TabStrip, TabStripTab } from '@progress/kendo-react-layout'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactFileReader from 'react-file-reader';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      year: 'Todos',
      month: 'Todos',
      selected: 0,
    };
  }

  handleUpload = () => {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  };

  handleSelect = (e) => {
    this.setState({selected: e.selected})
  }

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  };

  csv2JSON = (csv) => {
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

  years = [2016, 2017, 2018, 2019, 'Todos'];
  month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'Todos'];

  handleChange = name => event => {
    this.setState({[name]:  event.target.value});
  };

  classes = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 100,
    },
  }));

  render() {

    var gauges = report.gauges.map((item, key) =>
    <div class="col-md-12 col-lg-12">
    <Card>
    <CardContent>
    <div>
    <div align="center">
      <Link to={item.path} className="link">
        <Button primary = {true} look="flat"><u><b>{item.title}</b></u></Button>
      </Link>
    </div>
    <div class="row">
    <div class= "col-md-3">
      <RadialGaugeContainer
        value={item.value}
        plan={item.plan}
        objective={item.objective}/>
    </div>
    <div class= "col-md-4">
      <List>
        <ListItem>
          <ListItemText
            primary={currency(item.value)+" / "+currency(item.plan)}
            secondary={item.subtitle1 + " / " + item.subtitle2}
          />
        </ListItem>
      </List>
    </div>
    <div class= "col-md-3">
      <List>
        <ListItem>
          <ListItemText
            primary={
              (item.value - item.plan ? '↑' : '↓') +
              currency(Math.abs(item.value - item.plan)) + ' | ' +
              (Math.abs(item.value - item.plan) / item.plan).toFixed(2)
              + ' %'}
            secondary={item.subtitle3}
          />
        </ListItem>
      </List>
    </div>
    <div class= "col-md-2">
      <List>
        <ListItem>
          <ListItemText
            primary={currency(item.objective)}
            secondary={item.subtitle4}
          />
        </ListItem>
      </List>
    </div>
    </div>
    </div>
    </CardContent>
    </Card>
    </div>
    );

    return (
    <Ripple>
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>Empresa | Reporte de operaciones</h1>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
              <Button primary={true} onClick={this.handleUpload}>Subir CSV</Button>
              <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
            </div>
          </div>

          <div class="row">
          <div className="col-sm-1 col-md-1" >
            <div class="row">
            <TextField
                id="outlined-select-currency"
                select
                label="Año"
                className={this.classes.textField}
                SelectProps={{
                  MenuProps: {
                    className: this.classes.menu,
                  },
                }}
                onChange={this.handleChange('year')}
                value={this.state.year}
                margin="normal"
                variant="outlined"
            >
              {this.years.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            </div>
              <div class="row">
            <TextField
                id="outlined-select-currency"
                select
                label="Mes"
                className={this.classes.textField}
                SelectProps={{
                  MenuProps: {
                    className: this.classes.menu,
                  },
                }}
                onChange={this.handleChange('month')}
                value={this.state.month}
                margin="normal"
                variant="outlined"
            >
              {this.month.map(option => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            </div>

          </div>
          <div class="col-md-11 col-lg-11">
            {gauges}
          </div>
        </div>
        {this.state.showDialog &&
          <Dialog title={'Subir documentos'} onClose={this.handleUpload}>
            <TabStrip selected={this.state.selected} onSelect={this.handleSelect}>
              <TabStripTab title="Ventas">
                <div>
                <ReactFileReader handleFiles={this.handleLiquidacion} fileTypes={'.csv'}>
                  <Button primary={true}>Liquidación</Button>
                </ReactFileReader>
                <br/>
                <ReactFileReader handleFiles={this.handleRequisicion} fileTypes={'.csv'}>
                  <Button primary={true}>Requisición</Button>
                </ReactFileReader>
                </div>
              </TabStripTab>
              <TabStripTab title="Gastos">
                <div>
                <ReactFileReader handleFiles={this.handleGastosDetallados} fileTypes={'.csv'}>
                  <Button primary={true}>Gastos Detallados</Button>
                </ReactFileReader>
                <br/>
                <ReactFileReader handleFiles={this.handleGastosFijos} fileTypes={'.csv'}>
                  <Button primary={true}>Gastos Fijos</Button>
                </ReactFileReader>
                <br/>
                <ReactFileReader handleFiles={this.handleGastosVariables} fileTypes={'.csv'}>
                  <Button primary={true}>Gastos Variables</Button>
                </ReactFileReader>
                </div>
              </TabStripTab>
              <TabStripTab title="Información">
                <div>
                <ReactFileReader handleFiles={this.handleObjetivos} fileTypes={'.csv'}>
                  <Button primary={true}>Objetivos</Button>
                </ReactFileReader>
                <br/>
                <ReactFileReader handleFiles={this.handleInsumos} fileTypes={'.csv'}>
                  <Button primary={true}>Insumos</Button>
                </ReactFileReader>
                <br/>
                <ReactFileReader handleFiles={this.handleCatalogo} fileTypes={'.csv'}>
                  <Button primary={true}>Catálogo</Button>
                </ReactFileReader>
                <br/>
                <ReactFileReader handleFiles={this.handleSucursales} fileTypes={'.csv'}>
                  <Button primary={true}>Sucursales</Button>
                </ReactFileReader>
                </div>
              </TabStripTab>
              <TabStripTab title="Gente">
              <ReactFileReader handleFiles={this.handleClientes} fileTypes={'.csv'}>
                <Button primary={true}>Clientes</Button>
              </ReactFileReader>
              <br/>
              <ReactFileReader handleFiles={this.handleProveedores} fileTypes={'.csv'}>
                <Button primary={true}>Proveedores</Button>
              </ReactFileReader>
              <br/>
              <ReactFileReader handleFiles={this.handleVendedores} fileTypes={'.csv'}>
                <Button primary={true}>Vendedores</Button>
              </ReactFileReader>
              </TabStripTab>
            </TabStrip>
            <br/>
            <FormControlLabel
                    control={
                      <Checkbox
                        value="eraseAndAdd"
                        color="primary"
                      />
                    }
                    label="Eliminar datos actuales y sobreescribir con los nuevos."
                  />
            <br/>
            <Button onClick={this.handleUpload}>Cancelar</Button>
          </Dialog>
        }
        </div>
      </div>
    </Ripple>
    );
  }

}
export default Dashboard;
