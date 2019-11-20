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
            year: 'Todos',
            month: 'Todos',
            margen: report.gauges[2],
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
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <MultipleLineChartContainer title="Margen" categories={mesesGraficaMultiple} data={datosEgresosGraficaMultiple} />
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
                                <h2>Gastos Totales Catálogo</h2>
                                <DonutChartContainer data={productoCantidad}
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
                                <h2>Gastos Sucursales</h2>
                                <DonutChartContainer data={datosSucursalDineroGenerado} categoryField="sucursal" field="dineroGenerado" />
                                <List>
                                    <ListItem>
                                        <ListItemText
                                            primary="Sucursal con más gastos"
                                            secondary={this.sucursalMas}
                                        />
                                        <ListItemText
                                            primary="Sucursal con menos gastos"
                                            secondary={this.sucursalMenos}
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText
                                            primary="Egresos"
                                            secondary={'$ ' + this.sucursalMasDato}
                                        />
                                        <ListItemText
                                            primary="Egresos"
                                            secondary={'$ ' + this.sucursalMenosDato}
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
export default Margen;
