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
import { generarNombres, generarTotalInsumos, totalGastado, insumoPorcentaje, construirDataSet, insumoMasComprado, insumoMenosComprado } from '../data/datosEgresosInsumo';
import { currency, report } from '../data/appData';
import RadialGaugeContainer from '../components/RadialGaugeContainer';
import { Insumo } from '../data/insumo';
import { DetalleGasto } from '../data/detalleGasto';



class Gastos extends Component {
    constructor(props) {
        super(props);
        this.appContainer = React.createRef();
        this.state = {
            showDialog: false,
            year: 'Todos',
            month: 'Todos',
            gastos: report.gauges[1],
        };
    }

    empleadoMas = empleadoMasVentas(empleadoTotalVentas);
    empleadoMenos = empleadoMenosVentas(empleadoTotalVentas);
    sucursalMas = sucursalMasVentas(datosSucursalDineroGenerado);
    sucursalMenos = sucursalMenosVentas(datosSucursalDineroGenerado);
    sucursalMasDato = 2385;
    sucursalMenosDato = 1100;

    arrNombres = []
    nombresInsumo = generarNombres(Insumo, this.arrNombres);
    totalInsumos = generarTotalInsumos(DetalleGasto);
    gastoTotal = totalGastado(this.totalInsumos);
    porcentajeInsumos = insumoPorcentaje(this.totalInsumos, this.gastoTotal);
    datosEgresosInsumos = construirDataSet(this.nombresInsumo, this.porcentajeInsumos);
    insumoCompradoMas = insumoMasComprado(this.datosEgresosInsumos);
    insumoCompradoMenos = insumoMenosComprado(this.datosEgresosInsumos);

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
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <MultipleLineChartContainer title="Egresos" categories={mesesGraficaMultiple} data={datosEgresosGraficaMultiple} />
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
export default Gastos;
