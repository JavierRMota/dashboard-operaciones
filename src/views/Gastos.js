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

//Dummy data
import { donutChartProductsData } from '../data/appData';
import { barChartVentas, barCharVentasProductos } from '../data/appData';
import { productoCantidad, productoMasVendido, productoMenosVendido } from '../data/productoCantidad';
import { empleadoTotalVentas, empleadoMasVentas, empleadoMenosVentas } from '../data/ventaEmpleado';
import { datosSucursalDineroGenerado, sucursalMasVentas, sucursalMenosVentas } from '../data/sucursalDineroGenerado';
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos } from '../data/appData';
import { mesesGraficaMultiple, datosEgresosGraficaMultiple } from '../data/datosGraficaMultiple';
import { generarNombresInsumo, generarTotalInsumos, totalGastado, insumoPorcentaje, construirDataSetInsumo, insumoMasComprado, insumoMenosComprado } from '../data/datosEgresosInsumo';
import { generarNombresProveedor, generarTotalProveedor, totalGastadoProveedor, proveedorPorcentaje, construirDataSetProveedor, proveedorMasComprado, proveedorMenosComprado } from '../data/gastosProveedores';
import { currency, report } from '../data/appData';
import RadialGaugeContainer from '../components/RadialGaugeContainer';
import { Insumo } from '../data/insumo';
import { DetalleGasto } from '../data/detalleGasto';
import { Proveedor } from '../data/proveedor';



class Gastos extends Component {
    constructor(props) {
        super(props);
        this.appContainer = React.createRef();
        this.state = {
            showDialog: false,
            report: props.report,
            gastos: props.gauge,
        };
    }

    empleadoMas = empleadoMasVentas(empleadoTotalVentas);
    empleadoMenos = empleadoMenosVentas(empleadoTotalVentas);
    sucursalMas = sucursalMasVentas(datosSucursalDineroGenerado);
    sucursalMenos = sucursalMenosVentas(datosSucursalDineroGenerado);
    sucursalMasDato = 2385;
    sucursalMenosDato = 1100;


    nombresInsumo = generarNombresInsumo(Insumo);
    totalInsumos = generarTotalInsumos(DetalleGasto, Insumo.length);
    gastoTotal = totalGastado(this.totalInsumos);
    porcentajeInsumos = insumoPorcentaje(this.totalInsumos, this.gastoTotal);
    datosEgresosInsumos = construirDataSetInsumo(this.nombresInsumo, this.porcentajeInsumos);
    insumoCompradoMas = insumoMasComprado(this.datosEgresosInsumos);
    insumoCompradoMenos = insumoMenosComprado(this.datosEgresosInsumos);

    nombresProveedor = generarNombresProveedor(Proveedor);
    totalProveedor = generarTotalProveedor(DetalleGasto, Proveedor.length);
    proveedorGastoTotal = totalGastadoProveedor(this.totalProveedor);
    porcentajeProveedor = proveedorPorcentaje(this.totalProveedor, this.proveedorGastoTotal);
    datosEgresoProveedor = construirDataSetProveedor(this.nombresProveedor, this.porcentajeProveedor);
    proveedorCompradoMas = proveedorMasComprado(this.datosEgresoProveedor);
    proveedorCompradoMenos = proveedorMenosComprado(this.datosEgresoProveedor);

    handlePDFExport = () => {
        savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto', fileName: 'gastos.pdf' });
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
        var gastos = this.state.gastos
        return (
            <Ripple>
                <div className="bootstrap-wrapper">
                    <div className="app-container container" ref={(el) => this.appContainer = el}>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                                <h1>Empresa | Reporte específico de Gastos</h1>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 buttons-right">
                                <Button primary={true} onClick={this.handleShare}>Compartir</Button>
                                <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                <div align="center">
                                    <h1>{gastos.title}</h1>
                                </div>
                                <RadialGaugeContainer
                                    value={gastos.value}
                                    plan={gastos.plan}
                                    objective={gastos.objective} />
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary={currency(gastos.value) + " / " + currency(gastos.plan)}
                                            secondary="Gastos actuales / plan de Gastos"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={
                                                (gastos.value - gastos.plan ? '↑' : '↓') +
                                                currency(Math.abs(gastos.value - gastos.plan)) + ' | ' +
                                                (Math.abs(gastos.value - gastos.plan) / gastos.plan).toFixed(2)
                                                + ' %'}
                                            secondary="Diferencia de gastos"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={currency(gastos.objective)}
                                            secondary="Objetivo anual de gastos"
                                        />
                                    </ListItem>
                                </List>
                            </div>
                            <div className="col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                <MultipleLineChartContainer title="Egresos" categories={mesesGraficaMultiple} data={datosEgresosGraficaMultiple} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <h2>Gastos Totales Insumos</h2>
                                <DonutChartContainer data={this.datosEgresosInsumos}
                                    categoryField="insumo" field="totalGastado" />
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Insumo con más gastos"
                                            secondary={this.insumoCompradoMas}
                                        />
                                        <ListItemText
                                            primary="Insumo con menos gastos"
                                            secondary={this.insumoCompradoMenos}
                                        />
                                    </ListItem>
                                </List>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <h2>Egresos Proveedores</h2>
                                <DonutChartContainer data={this.datosEgresoProveedor} categoryField="proveedor" field="totalGastado" />
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Proveedor con mayores gastos"
                                            secondary={this.proveedorCompradoMas}
                                        />
                                        <ListItemText
                                            primary="Proveedor con menores gastos"
                                            secondary={this.proveedorCompradoMenos}
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
export default Gastos;
