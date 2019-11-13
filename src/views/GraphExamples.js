import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import LineChartContainer from '../components/LineChartContainer';
import MultipleLineChartContainer from '../components/MultipleLineChartContainer';
import { pruebaMultiplesDatos, pruebaDatosMultiplesDatos} from '../data/appData';
<div className="row">
  <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
        <h2>VENTAS</h2>
        <DonutChartContainer data={donutChartData}
          categoryField="tipo" field="cantidad" />
      </div>
      <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2 col-xl-2">
        <div className="percentage-container">
          <span className="percentage-number">94</span>
          <span className="percentage-sign">%</span>
          <p>CUSTOMER SATISFACTION</p>
        </div>
        <div className="percentage-container">
          <span className="percentage-number">89</span>
          <span className="percentage-sign">%</span>
          <p>TARGET SALES</p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <BarChartContainer categories={barChartQ4Months}
          data={barChartMonthlyPercentages} />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <ArcGaugeContainer />
      </div>
    </div>
  </div>
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
  <div className="row">
  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
    <LineChartContainer title="Ingresos"/>
    <MultipleLineChartContainer title="Ingresos" categories={pruebaMultiplesDatos} data={pruebaDatosMultiplesDatos}/>
  </div>
  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
    <LineChartContainer title="Gastos"/>
  </div>
</div>
</div>
