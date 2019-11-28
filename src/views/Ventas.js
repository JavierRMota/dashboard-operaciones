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
import { generarNombresProducto, generarVentasProductos, totalGenerado, ingresoPorcentaje, construirDataSetProducto, productoMasVendido, productoMenosVendido } from '../data/productoCantidad';
import { generarNombresEmpleado, generarEmpleadoVentas, totalVentasEmpleados, ventasEmpleadoPorcentaje, construirDataSetEmpleado, empleadoMasVentas, empleadoMenosVentas } from '../data/ventaEmpleado';
import { generarNombresSucursales, generarVentasSucursales, totalIngresosSucursales, ingresoSucursalPorcentaje, construirDataSetSucursal, sucursalMasVentas, sucursalMenosVentas } from '../data/sucursalDineroGenerado';
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos, obtenerPlanVentas } from '../data/appData';
import { mesesGraficaMultiple, datosGraficaMultiple, obtenerMetaMensualIngresos, obtenerMesVentaReal } from '../data/datosGraficaMultiple';
import { generarTipoCliente, generarFrecuenciaCliente, frecuenciaTotalClientes, frecuenciaClientePorcentaje, construirDataSetCliente, clienteMasAsiste, clienteMenosAsiste } from '../data/datosTipoClientela';
import { Catalogo } from '../data/catalogo';
import { Requisicion } from '../data/requisicion';
import { Vendedor } from '../data/vendedor';
import { Liquidacion } from '../data/liquidacion';
import { Sucursal } from '../data/sucursal';
import { Cliente } from '../data/cliente';

import { currency, report } from '../data/appData';
import RadialGaugeContainer from '../components/RadialGaugeContainer';



class Ventas extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      report: props.report,
      ventas: props.gauge,
    };
    this.report = props.report
    this.nombresProducto = generarNombresProducto(this.report.catalogo);
    this.totalVentas = generarVentasProductos(this.report.requisiciones, this.report.catalogo.length);
    this.ventasTotalesProductos = totalGenerado(this.totalVentas);
    this.porcentajeIngreso = ingresoPorcentaje(this.totalVentas, this.ventasTotalesProductos);
    this.datosIngresosProductos = construirDataSetProducto(this.nombresProducto, this.porcentajeIngreso);
    this.catalogoMasVendido = productoMasVendido(this.datosIngresosProductos);
    this.catalogoMenosVendido = productoMenosVendido(this.datosIngresosProductos);

    this.nombresEmpleados = generarNombresEmpleado(this.report.vendedores);
    this.ventasEmpleados = generarEmpleadoVentas(this.report.liquidaciones, this.report.vendedores.length);
    this.ventasTotalesEmpleados = totalVentasEmpleados(this.ventasEmpleados);
    this.porcentajeVentasEmpleado = ventasEmpleadoPorcentaje(this.ventasEmpleados, this.ventasTotalesEmpleados);
    this.datosEmpleadoVentas = construirDataSetEmpleado(this.nombresEmpleados, this.porcentajeVentasEmpleado);
    this.empleadoMas = empleadoMasVentas(this.datosEmpleadoVentas);
    this.empleadoMenos = empleadoMenosVentas(this.datosEmpleadoVentas);

    this.nombresSucursal = generarNombresSucursales(this.report.sucursales);
    this.ventasSucursal = generarVentasSucursales(this.report.liquidaciones, this.report.sucursales.length);
    this.ventasTotalesSucursal = totalIngresosSucursales(this.ventasSucursal);
    this.porcentajeVentasSucursal = ingresoSucursalPorcentaje(this.ventasSucursal, this.ventasTotalesSucursal);
    this.datosSucursalVentas = construirDataSetSucursal(this.nombresSucursal, this.porcentajeVentasSucursal);
    this.sucursalMas = sucursalMasVentas(this.datosSucursalVentas);
    this.sucursalMenos = sucursalMenosVentas(this.datosSucursalVentas);

    this.nombresClientes = generarTipoCliente(this.report.clientes);
    this.frecuenciaCliente = generarFrecuenciaCliente(this.report.liquidaciones, this.report.clientes.length);
    this.sumaFrecuenciasCliente = frecuenciaTotalClientes(this.frecuenciaCliente);
    this.porcentajeFrecuencia = frecuenciaClientePorcentaje(this.frecuenciaCliente, this.sumaFrecuenciasCliente);
    this.datosFrecuenciaCliente = construirDataSetCliente(this.nombresClientes, this.porcentajeFrecuencia);
    this.clienteFrecuenciaMaxima = clienteMasAsiste(this.datosFrecuenciaCliente);
    this.clienteFrecuenciaMinima = clienteMenosAsiste(this.datosFrecuenciaCliente);

    this.planVentas = obtenerPlanVentas(this.report.planMensual);
    this.ventasMensuales = obtenerMetaMensualIngresos(this.report.planMensual);
    this.ventasReales = obtenerMesVentaReal(this.report.requisiciones);

    this.multipleGraph = [
      {
        data: [{ name: "Meta Final", data: [this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas, this.planVentas] },
        { name: "Real", data: /*[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]*/[this.ventasReales[0], this.ventasReales[1], this.ventasReales[2], this.ventasReales[3], this.ventasReales[4], this.ventasReales[5], this.ventasReales[6], this.ventasReales[7], this.ventasReales[8], this.ventasReales[9], this.ventasReales[10], this.ventasReales[11]] },
        { name: "Meta Mensual Acumulada", data: [this.ventasMensuales[0], this.ventasMensuales[1], this.ventasMensuales[2], this.ventasMensuales[3], this.ventasMensuales[4], this.ventasMensuales[5], this.ventasMensuales[6], this.ventasMensuales[7], this.ventasMensuales[8], this.ventasMensuales[9], this.ventasMensuales[10], this.ventasMensuales[11]] }]
      }
    ]

  }

  report;
  nombresProducto;
  totalVentas;
  ventasTotalesProductos;
  porcentajeIngreso;
  datosIngresosProductos;
  catalogoMasVendido;
  catalogoMenosVendido;

  nombresEmpleados;
  ventasEmpleados;
  ventasTotalesEmpleados;
  porcentajeVentasEmpleado;
  datosEmpleadoVentas;
  empleadoMas;
  empleadoMenos;

  nombresSucursal;
  ventasSucursal;
  ventasTotalesSucursal;
  porcentajeVentasSucursal;
  datosSucursalVentas;
  sucursalMas;
  sucursalMenos;

  nombresClientes;
  frecuenciaCliente;
  sumaFrecuenciasCliente;
  porcentajeFrecuencia;
  datosFrecuenciaCliente;
  clienteFrecuenciaMaxima;
  clienteFrecuenciaMinima;

  planVentas;
  planMensual;
  ventasReales;

  multipleGraph;

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto', fileName: 'ventas.pdf' });
  };

  handleShare = () => {
    this.setState({
      showDialog: !this.state.showDialog,
    });
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

  render() {
    var ventas = this.state.ventas
    console.log(this.state.report)
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
                              (100 * Math.abs(ventas.value - ventas.plan) / ventas.plan).toFixed(2)
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
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                <MultipleLineChartContainer title="Ingresos" categories={mesesGraficaMultiple} data={this.multipleGraph} />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h2>Ventas Totales Catalogo</h2>
                <DonutChartContainer data={this.datosIngresosProductos}
                  categoryField="tipo" field="cantidad" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Producto mas vendido"
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
                <h2>Rendimiento Empleados</h2>
                <DonutChartContainer data={this.datosEmpleadoVentas} categoryField="nombre" field="ventas" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Empleado que mas vende"
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
                <DonutChartContainer data={this.datosSucursalVentas} categoryField="sucursal" field="dineroGenerado" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Sucursal con mas ingresos"
                      secondary={this.sucursalMas}
                    />
                    <ListItemText
                      primary="Sucursal con menos ingresos"
                      secondary={this.sucursalMenos}
                    />
                  </ListItem>
                </List>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h2>Tipo de Clientela</h2>
                <DonutChartContainer data={this.datosFrecuenciaCliente}
                  categoryField="tipoCliente" field="cantidad" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Mas frecuente"
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
