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
    }

    catalogoMasVendido = productoMasVendido(productoCantidad);
    catalogoMenosVendido = productoMenosVendido(productoCantidad);
    empleadoMas = empleadoMasVentas(empleadoTotalVentas);
    empleadoMenos = empleadoMenosVentas(empleadoTotalVentas);
    sucursalMas = sucursalMasVentas(datosSucursalDineroGenerado);
    sucursalMenos = sucursalMenosVentas(datosSucursalDineroGenerado);
    sucursalMasDato = 2385;
    sucursalMenosDato = 1100;

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
                                <MultipleLineChartContainer title="Margen" categories={mesesGraficaMultiple} data={datosEgresosGraficaMultiple} />
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
