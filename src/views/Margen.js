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
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos, obtenerPlanVentas, obtenerPlanEgresos } from '../data/appData';
import { mesesGraficaMultiple, datosEgresosGraficaMultiple, obtenerMetaMensualIngresos, obtenerMesVentaReal, obtenerMetaMensualEgresos, obtenerMesEgresoReal } from '../data/datosGraficaMultiple';

import { currency, report } from '../data/appData';
import RadialGaugeContainer from '../components/RadialGaugeContainer';



class Margen extends Component {
    constructor(props) {
        super(props);
        this.appContainer = React.createRef();
        this.state = {
            showDialog: false,
            report: props.report,
            margen: props.gauge,
        };
        this.report = props.report;
        this.planVentas = obtenerPlanVentas(this.report.planMensual);
        this.ventasMensuales = obtenerMetaMensualIngresos(this.report.planMensual);
        this.ventasReales = obtenerMesVentaReal(this.report.requisiciones);

        this.planEgresos = obtenerPlanEgresos(this.report.planMensual);
        this.egresosMensuales = obtenerMetaMensualEgresos(this.report.planMensual);
        this.egresosReales = obtenerMesEgresoReal(this.report.gastosVariables, this.report.gastosFijos);

        this.planMargen = this.planVentas - this.planEgresos;
        this.margenMensuales = [this.ventasMensuales[0] - this.egresosMensuales[0], this.ventasMensuales[1] - this.egresosMensuales[1], this.ventasMensuales[2] - this.egresosMensuales[2], this.ventasMensuales[3] - this.egresosMensuales[3], this.ventasMensuales[4] - this.egresosMensuales[4], this.ventasMensuales[5] - this.egresosMensuales[5], this.ventasMensuales[6] - this.egresosMensuales[6], this.ventasMensuales[7] - this.egresosMensuales[7], this.ventasMensuales[8] - this.egresosMensuales[8], this.ventasMensuales[9] - this.egresosMensuales[9], this.ventasMensuales[10] - this.egresosMensuales[10], this.ventasMensuales[11] - this.egresosMensuales[11]];
        this.margenReales = [this.ventasReales[0] - this.egresosReales[0], this.ventasReales[1] - this.egresosReales[1], this.ventasReales[2] - this.egresosReales[2], this.ventasReales[3] - this.egresosReales[3], this.ventasReales[4] - this.egresosReales[4], this.ventasReales[5] - this.egresosReales[5], this.ventasReales[6] - this.egresosReales[6], this.ventasReales[7] - this.egresosReales[7], this.ventasReales[8] - this.egresosReales[8], this.ventasReales[9] - this.egresosReales[9], this.ventasReales[10] - this.egresosReales[10], this.ventasReales[11] - this.egresosReales[11]]

        this.multipleGraph = [
            {
                data: [{ name: "Meta Final", data: [this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen, this.planMargen] },
                { name: "Real", data: [this.margenReales[0], this.margenReales[1], this.margenReales[2], this.margenReales[3], this.margenReales[4], this.margenReales[5], this.margenReales[6], this.margenReales[7], this.margenReales[8], this.margenReales[9], this.margenReales[10], this.margenReales[11]] },
                { name: "Meta Mensual Acumulada", data: [this.margenMensuales[0], this.margenMensuales[1], this.margenMensuales[2], this.margenMensuales[3], this.margenMensuales[4], this.margenMensuales[5], this.margenMensuales[6], this.margenMensuales[7], this.margenMensuales[8], this.margenMensuales[9], this.margenMensuales[10], this.margenMensuales[11]] }]
            }
        ]
    }

    report;
    planVentas;
    ventasMensuales;
    ventasReales;

    planEgresos;
    egresosMensuales;
    egresosReales;

    planMargen;
    margenMensuales;
    margenReales;

    multipleGraph;

    handlePDFExport = () => {
        savePDF(ReactDOM.findDOMNode(this.appContainer), { paperSize: 'auto', fileName: 'margen.pdf' });
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
        var margen = this.state.margen
        return (
            <Ripple>
                <div className="bootstrap-wrapper">
                    <div className="app-container container" ref={(el) => this.appContainer = el}>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                                <h1>Empresa | Reporte específico de Margen</h1>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 buttons-right">
                                <Button primary={true} onClick={this.handleShare}>Compartir</Button>
                                <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 col-sm-4 col-md-3 col-lg-3 col-xl-3">
                                <div align="center">
                                    <h1>{margen.title}</h1>
                                </div>
                                <RadialGaugeContainer
                                    value={margen.value}
                                    plan={margen.plan}
                                    objective={margen.objective} />
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary={currency(margen.value) + " / " + currency(margen.plan)}
                                            secondary="Margen actual / plan de Margen"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={
                                                (margen.value - margen.plan ? '↑' : '↓') +
                                                currency(Math.abs(margen.value - margen.plan)) + ' | ' +
                                                (Math.abs(margen.value - margen.plan) / margen.plan).toFixed(2)
                                                + ' %'}
                                            secondary="Diferencia de margen"
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary={currency(margen.objective)}
                                            secondary="Objetivo anual de margen"
                                        />
                                    </ListItem>
                                </List>
                            </div>
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
                                <MultipleLineChartContainer title="Margen" categories={mesesGraficaMultiple} data={this.multipleGraph} />
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
export default Margen;
