import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, DialogActionsBar } from '@progress/kendo-react-dialogs';
import { Input } from '@progress/kendo-react-inputs';
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

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
//Dummy data
import { report, currency } from '../data/appData';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      year: 'Todos',
      month: 'Todos',
    };
  }

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto' });
  };

  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog,
    });
  };

  years = [2016, 2017, 2018, 2019, 'Todos'];
  month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'Todos'];

  handleChange = name => event => {
    this.setState({year:  event.target.value});
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
      width: 200,
    },
  }));

  createData = (nombre, gastos, ventas, porcentaje) => ({ nombre, gastos, ventas, porcentaje });
  rows = [
    this.createData('América', 14000, 250000, 30),
    this.createData('Asia', 20000, 100000, 15),
    this.createData('Europa', 30000, 100000, 15),
    this.createData('África', 10000, 50000, 12),
  ];

  render() {
    var gauges = report.gauges.map((item, key) =>
    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">

    <div align="center">
    <Link to="/ventas" className="link">
      <Button primary = {true} look="flat"><u><b>{item.title}</b></u></Button></Link>
      </div>

      <RadialGaugeContainer
        value={item.value}
        plan={item.plan}
        objective={item.objective}/>

      <List>
            <ListItem>
              <ListItemText
                primary={currency(item.value)+" / "+currency(item.plan)}
                secondary="Ventas actuales / plan de ventas"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  (item.value - item.plan ? '↑' : '↓') +
                  currency(Math.abs(item.value - item.plan)) + ' | ' +
                  (Math.abs(item.value - item.plan) / item.plan).toFixed(2)
                  + ' %'}
                secondary="Diferencia de ventas"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={currency(item.objective)}
                secondary="Objetivo anual de ventas"
              />
            </ListItem>
        </List>
    </div>
    );

    return (
    <Ripple>
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <h1>Empresa | Reporte de operaciones</h1>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8 buttons-right">
              <Button primary={true} onClick={this.handleShare}>Compartir</Button>
              <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
            </div>
          </div>
          <div class="row"></div>
          <div className="col-sm-2 col-md-4" >
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

          <div className="row">
            {gauges}
          </div>
          {this.state.showDialog &&
            <Dialog title={'Compartir reporte'} onClose={this.handleShare}>
              <p>Correo a compartir.</p>
              <Input placeholder="ejemplo@ejemplo.com" />
              <DialogActionsBar>
                <Button primary={true} onClick={this.handleShare}>Compartir</Button>
                <Button onClick={this.handleShare}>Cancelar</Button>
              </DialogActionsBar>
            </Dialog>
          }
        </div>
      </div>
    </Ripple>
    );
  }

}
export default Dashboard;
