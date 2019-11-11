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
import DonutChartContainer from '../components/DonutChartContainer';
import BarChartContainer from '../components/BarChartContainer';
import ArcGaugeContainer from '../components/ArcGaugeContainer';
import RadialGaugeContainer from '../components/RadialGaugeContainer';
import LineChartContainer from '../components/LineChartContainer';
import MultipleLineChartContainer from '../components/MultipleLineChartContainer';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//Dummy data
import { donutChartData } from '../data/appData';
import { report, currency } from '../data/appData';
import { barChartQ4Months, barChartMonthlyPercentages } from '../data/appData';
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos} from '../data/appData';

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

  handleReturn = () => {
    this.props.handleState(-1);
  };

  handleShowMoreVentas = () => {
    this.props.handleState(1);
  };

  handleShowMoreGastos = () => {
    this.props.handleState(2);
  };

  handleShowMorePendienteCobro = () => {
    this.props.handleState(3);
  };

  handleShowMoreInventario = () => {
    this.props.handleState(4);
  };

  years = [2016, 2017, 2018, 2019, 'Todos'];
  month = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'Todos'];

  handleChange = name => event => {
    this.state.year =  event.target.value;
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
      <h2>{item.title}</h2>

      <RadialGaugeContainer
        value={item.value}
        plan={item.plan}
        objective={item.objective}/>

      <List>
            <ListItem>
              <ListItemText
                primary={currency(item.value)}
                secondary="Ventas actuales acumuladas"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={currency(item.plan)}
                secondary="Plan de ventas"
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
            <ListItem>
              <Button primary={true} onClick={this.handleShowMoreVentas}>Ver más</Button>
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
              <Button onClick={this.handleReturn} look="outline">Regresar</Button>
              <Button primary={true} onClick={this.handleShare}>Compartir</Button>
              <Button primary={true} look="outline"> Agregar CSV</Button>
              <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
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
          //Limite de velocidad -> plan de ventas al día
          // Relleno ventas actuales
          //Fin objetivo anual
          <div className="row">
            {gauges}

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Región</TableCell>
                    <TableCell align="right">Gastos</TableCell>
                    <TableCell align="right">Ventas</TableCell>
                    <TableCell align="right">% Ventas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.rows.map(row => (
                    <TableRow key={row.nombre}>
                      <TableCell component="th" scope="row">
                        {row.nombre}
                      </TableCell>
                      <TableCell align="right">{row.gastos}</TableCell>
                      <TableCell align="right">{row.ventas}</TableCell>
                      <TableCell align="right">{row.porcentaje}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableHead>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell align="right">$ 200,000.00</TableCell>
                    <TableCell align="right">$ 500,000.00</TableCell>
                    <TableCell align="right"> 72%</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              //<LineChartContainer title="Ingresos"/>
              <MultipleLineChartContainer title="Ingresos" categories={pruebaMultiplesDatos} data={pruebaDatosMultiplesDatos}/>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <LineChartContainer title="Gastos"/>
            </div>
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
