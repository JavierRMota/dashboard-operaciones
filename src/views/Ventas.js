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
import LineChartContainer from '../components/LineChartContainer';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MultipleLineChartContainer from '../components/MultipleLineChartContainer';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';

//Dummy data
import { donutChartProductsData } from '../data/appData';
import { barChartVentas, barCharVentasProductos } from '../data/appData';
import { generarNombresProducto, generarVentasProductos, totalGenerado, ingresoPorcentaje, construirDataSet, productoMasVendido, productoMenosVendido } from '../data/productoCantidad';
import { generarNombresEmpleado, generarEmpleadoVentas, totalVentasEmpleados, ventasEmpleadoPorcentaje, construirDataSetEmpleado, empleadoMasVentas, empleadoMenosVentas } from '../data/ventaEmpleado';
import { datosSucursalDineroGenerado, sucursalMasVentas, sucursalMenosVentas } from '../data/sucursalDineroGenerado';
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos } from '../data/appData';
import { mesesGraficaMultiple, datosGraficaMultiple } from '../data/datosGraficaMultiple';
import { clientesTipicos, clienteMasAsiste, clienteMenosAsiste } from '../data/datosTipoClientela';
import { Catalogo } from '../data/catalogo';
import { Requisicion } from '../data/requisicion';
import { Vendedor } from '../data/vendedor';
import { Liquidacion } from '../data/liquidacion';

import { currency, report } from '../data/appData';
import RadialGaugeContainer from '../components/RadialGaugeContainer';



class Ventas extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      year: 'Todos',
      month: 'Todos',
      ventas: report.gauges[0],
    };
  }

  nombresProducto = generarNombresProducto(Catalogo);
  totalVentas = generarVentasProductos(Requisicion, Catalogo.length);
  ventasTotalesProductos = totalGenerado(this.totalVentas);
  porcentajeIngreso = ingresoPorcentaje(this.totalVentas, this.ventasTotalesProductos);
  datosIngresosProductos = construirDataSet(this.nombresProducto, this.porcentajeIngreso);
  catalogoMasVendido = productoMasVendido(this.datosIngresosProductos);
  catalogoMenosVendido = productoMenosVendido(this.datosIngresosProductos);

  nombresEmpleados = generarNombresEmpleado(Vendedor);
  ventasEmpleados = generarEmpleadoVentas(Liquidacion, Vendedor.length);
  ventasTotalesEmpleados = totalVentasEmpleados(this.ventasEmpleados);
  porcentajeVentasEmpleado = ventasEmpleadoPorcentaje(this.ventasEmpleados, this.ventasTotalesEmpleados);
  datosEmpleadoVentas = construirDataSetEmpleado(this.nombresEmpleados, this.porcentajeVentasEmpleado);
  empleadoMas = empleadoMasVentas(this.datosEmpleadoVentas);
  empleadoMenos = empleadoMenosVentas(this.datosEmpleadoVentas);
  sucursalMas = sucursalMasVentas(datosSucursalDineroGenerado);
  sucursalMenos = sucursalMenosVentas(datosSucursalDineroGenerado);
  sucursalMasDato = 2385;
  sucursalMenosDato = 1100;
  clienteFrecuenciaMaxima = clienteMasAsiste(clientesTipicos);
  clienteFrecuenciaMinima = clienteMenosAsiste(clientesTipicos);

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
    this.setState({ [name]: event.target.value });
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

  createData = (nombreProducto, ventasEsperadas, ventasReales, porcentaje) => ({ nombreProducto, ventasEsperadas, ventasReales, porcentaje });
  rows = [
    this.createData('Coca-Cola', 100000, 75000, 75),
    this.createData('Nestea', 350000, 315000, 90),
    this.createData('Powerade', 150000, 180000, 120),
    this.createData('Sabritas', 23000, 10000, 43.48),
  ];

  render() {
    var ventas = this.state.ventas
    return (
      <Ripple>
        <div className="bootstrap-wrapper">
          <div className="app-container container" ref={(el) => this.appContainer = el}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                <h1>Empresa | Reporte específico de Ventas</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 buttons-right">
                <Button primary={true} onClick={this.handleShare}>Compartir</Button>
                <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
              </div>
            </div>
            <div className="row">
              <div class="col-md-6 col-lg-4 mt-2">
                <Card>
                  <CardContent>
                    <div>
                      <div align="center">
                        <h1>{ventas.title}</h1>
                      </div>
                      <RadialGaugeContainer
                        value={ventas.value}
                        plan={ventas.plan}
                        objective={ventas.objective} />
                      <List>
                        <ListItem>
                          <ListItemText
                            primary={currency(ventas.value) + " / " + currency(ventas.plan)}
                            secondary="Ventas actuales / plan de ventas"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary={
                              (ventas.value - ventas.plan ? '↑' : '↓') +
                              currency(Math.abs(ventas.value - ventas.plan)) + ' | ' +
                              (Math.abs(ventas.value - ventas.plan) / ventas.plan).toFixed(2)
                              + ' %'}
                            secondary="Diferencia de ventas"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemText
                            primary={currency(ventas.objective)}
                            secondary="Objetivo anual de ventas"
                          />
                        </ListItem>
                      </List>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <MultipleLineChartContainer title="Ingresos" categories={mesesGraficaMultiple} data={datosGraficaMultiple} />
              </div>
              <div className="col-sm-2 col-md-2" >
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
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h2>Ventas Totales Catálogo</h2>
                <DonutChartContainer data={this.datosIngresosProductos}
                  categoryField="tipo" field="cantidad" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Producto más vendido"
                      secondary={this.catalogoMasVendido}
                    />
                    <ListItemText
                      primary="Producto menos vendido"
                      secondary={this.catalogoMenosVendido}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h2>Desempeño Empleados</h2>
                <DonutChartContainer data={this.datosEmpleadoVentas} categoryField="nombre" field="ventas" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Empleado que más vende"
                      secondary={this.empleadoMas}
                    />
                    <ListItemText
                      primary="Empleado que menos vende"
                      secondary={this.empleadoMenos}
                    />
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h2>Ventas Sucursales</h2>
                <DonutChartContainer data={datosSucursalDineroGenerado} categoryField="sucursal" field="dineroGenerado" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Sucursal con más ingresos"
                      secondary={this.sucursalMas}
                    />
                    <ListItemText
                      primary="Sucursal con menos ingresos"
                      secondary={this.sucursalMenos}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary="Ingresos"
                      secondary={'$ ' + this.sucursalMasDato}
                    />
                    <ListItemText
                      primary="Ingresos"
                      secondary={'$ ' + this.sucursalMenosDato}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h2>Tipo de Clientela</h2>
                <DonutChartContainer data={clientesTipicos}
                  categoryField="tipoCliente" field="cantidad" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Más frecuente"
                      secondary={this.clienteFrecuenciaMaxima}
                    />
                    <ListItemText
                      primary="Menos frecuente"
                      secondary={this.clienteFrecuenciaMinima}
                    />
                  </ListItem>
                </List>
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
export default Ventas;
