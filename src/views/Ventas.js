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
import { Link } from 'react-router-dom';


//Dummy data
import { donutChartProductsData } from '../data/appData';
import { barChartVentas, barCharVentasProductos } from '../data/appData';
import { productoCantidad } from '../data/productoCantidad';
import { productoMasVendido, productoMenosVendido } from '../data/productoCantidad';

class Ventas extends Component {
  constructor(props) {
    super(props);
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      year: 'Todos',
      month: 'Todos',
    };
  }

  catalogoMasVendido = productoMasVendido(productoCantidad);
  catalogoMenosVendido = productoMenosVendido(productoCantidad);

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
    this.setState({ year: event.target.value });
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
    return (
      <Ripple>
        <div className="bootstrap-wrapper">
          <div className="app-container container" ref={(el) => this.appContainer = el}>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <h1>Empresa | Reporte específico de Ventas</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-8 col-lg-8 col-xl-8 buttons-right">
                <Button primary={true} onClick={this.handleShare}>Compartir</Button>
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
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <h2>Ventas Totales de Marcas</h2>
                <DonutChartContainer data={donutChartProductsData}
                  categoryField="tipo" field="cantidad" />
                <List>
                  <ListItem>
                    <ListItemText
                      primary="Producto más vendido"
                      secondary="Powerade"
                    />
                    <ListItemText
                      primary="Producto menos vendido"
                      secondary="Sabritas"
                    />
                  </ListItem>
                </List>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <h2>Ventas Esperadas Vs. Ventas Reales</h2>
                <BarChartContainer categories={barChartVentas}
                  data={barCharVentasProductos} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Marcas</TableCell>
                      <TableCell align="center">Ventas Reales</TableCell>
                      <TableCell align="center">Ventas Esperadas</TableCell>
                      <TableCell align="right">% Ventas</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.rows.map(row => (
                      <TableRow key={row.nombreProducto}>
                        <TableCell component="th" scope="row">
                          {row.nombreProducto}
                        </TableCell>
                        <TableCell align="center">${row.ventasReales}</TableCell>
                        <TableCell align="center">${row.ventasEsperadas}</TableCell>
                        <TableCell align="right">{row.porcentaje}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableHead>
                    <TableRow>
                      <TableCell>Total</TableCell>
                      <TableCell align="center">$ 580,000.00</TableCell>
                      <TableCell align="center">$ 623,000.00</TableCell>
                      <TableCell align="right">93.10%</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </div>
            </div>

            //////////////////////////////////
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <h2>Ventas Totales de Productos Catálogo</h2>
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
              <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                <h2>Empleados que más venden</h2>
              </div>
            </div>


            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <LineChartContainer title="Ingresos" />
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
