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
import Typography from "@material-ui/core/Typography";

//Dummy data
import { donutChartProductsData, obtenerPlanEgresos, obtenerEgresosReales } from '../data/appData';
import { barChartVentas, barCharVentasProductos } from '../data/appData';
import { productoCantidad, productoMasVendido, productoMenosVendido } from '../data/productoCantidad';
import { empleadoTotalVentas, empleadoMasVentas, empleadoMenosVentas } from '../data/ventaEmpleado';
import { datosSucursalDineroGenerado, sucursalMasVentas, sucursalMenosVentas } from '../data/sucursalDineroGenerado';
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos } from '../data/appData';
import { mesesGraficaMultiple, datosEgresosGraficaMultiple, obtenerMetaMensualEgresos, obtenerMesEgresoReal } from '../data/datosGraficaMultiple';
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
        this.report = props.report;
        this.nombresInsumo = generarNombresInsumo(this.report.insumos);
        this.totalInsumos = generarTotalInsumos(this.report.detallesGasto, this.report.insumos.length);
        this.gastoTotal = totalGastado(this.totalInsumos);
        this.porcentajeInsumos = insumoPorcentaje(this.totalInsumos, this.gastoTotal);
        this.datosEgresosInsumos = construirDataSetInsumo(this.nombresInsumo, this.porcentajeInsumos);
        this.insumoCompradoMas = insumoMasComprado(this.datosEgresosInsumos);
        this.insumoCompradoMenos = insumoMenosComprado(this.datosEgresosInsumos);

        this.nombresProveedor = generarNombresProveedor(this.report.provedores);
        this.totalProveedor = generarTotalProveedor(this.report.detallesGasto, this.report.provedores.length);
        this.proveedorGastoTotal = totalGastadoProveedor(this.totalProveedor);
        this.porcentajeProveedor = proveedorPorcentaje(this.totalProveedor, this.proveedorGastoTotal);
        this.datosEgresoProveedor = construirDataSetProveedor(this.nombresProveedor, this.porcentajeProveedor);
        this.proveedorCompradoMas = proveedorMasComprado(this.datosEgresoProveedor);
        this.proveedorCompradoMenos = proveedorMenosComprado(this.datosEgresoProveedor);

        this.planEgresos = obtenerPlanEgresos(this.report.planMensual);
        this.egresosMensuales = obtenerMetaMensualEgresos(this.report.planMensual);
        this.egresosReales = obtenerMesEgresoReal(this.report.gastosVariables, this.report.gastosFijos);

        this.multipleGraph = [
            {
                data: [{ name: "Meta Final", data: [this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos, this.planEgresos] },
                { name: "Real", data: [this.egresosReales[0], this.egresosReales[1], this.egresosReales[2], this.egresosReales[3], this.egresosReales[4], this.egresosReales[5], this.egresosReales[6], this.egresosReales[7], this.egresosReales[8], this.egresosReales[9], this.egresosReales[10], this.egresosReales[11]] },
                { name: "Meta Mensual Acumulada", data: [this.egresosMensuales[0], this.egresosMensuales[1], this.egresosMensuales[2], this.egresosMensuales[3], this.egresosMensuales[4], this.egresosMensuales[5], this.egresosMensuales[6], this.egresosMensuales[7], this.egresosMensuales[8], this.egresosMensuales[9], this.egresosMensuales[10], this.egresosMensuales[11]] }]
            }
        ]
    }

    report;
    nombresInsumo;
    totalInsumos;
    gastoTotal;
    porcentajeInsumos;
    datosEgresosInsumos;
    insumoCompradoMas;
    insumoCompradoMenos;

    nombresProveedor;
    totalProveedor;
    proveedorGastoTotal;
    porcentajeProveedor;
    datosEgresoProveedor;
    proveedorCompradoMas;
    proveedorCompradoMenos;

    planEgresos;
    egresosMensuales;
    egresosReales;

    multipleGraph;

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
                                        primary={<Typography variant="h9" style={{ color: (gastos.value - gastos.plan < 0 ? '#3cb44b' : '#e6194b' )  }}>{(gastos.value - gastos.plan > 0 ? "↑" : "↓") +
                                        currency(Math.abs(gastos.value - gastos.plan)) +
                                        " | " +
                                        (
                                          Math.abs(gastos.value - gastos.plan) * 100 / gastos.plan
                                        ).toFixed(2) +
                                        " %"}</Typography>}
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
                                <MultipleLineChartContainer title="Egresos" categories={mesesGraficaMultiple} data={this.multipleGraph} />
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
