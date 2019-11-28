import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Dialog } from "@progress/kendo-react-dialogs";
import { Button } from "@progress/kendo-react-buttons";
import { Ripple } from "@progress/kendo-react-ripple";
import { savePDF } from "@progress/kendo-react-pdf";
import "@progress/kendo-theme-material/dist/all.css";
import "bootstrap-4-grid/css/grid.min.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import "../App.css";
import RadialGaugeContainer from "../components/RadialGaugeContainer";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
//Dummy data
import { obtenerVentasReales, obtenerEgresosReales, obtenerVentasPlanActual, obtenerEgresosPlanActual, obtenerPlanVentas, obtenerPlanEgresos, currency } from "../data/appData";

import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ReactFileReader from "react-file-reader";
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    const name = props.compania
    this.appContainer = React.createRef();
    this.state = {
      showDialog: false,
      selected: 0,
      process: true,
      name: name
    };
  }

  handleUpload = () => {
    this.setState({
      showDialog: !this.state.showDialog
    });
  };

  handleSelect = e => {
    this.setState({ selected: e.selected });
  };

  handlePDFExport = () => {
    savePDF(ReactDOM.findDOMNode(this.appContainer), {
      paperSize: "auto",
      fileName: "dashboard.pdf"
    });
  };

  csv2JSON = csv => {
    var lines = csv.split("\n");
    var empty = true;
    var result = [];
    var headers = lines[0].replace("\r", "").split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].replace("\r", "").split(",");
      for (var j = 0; j < headers.length; j++) {
        if (currentline[j]) {
          empty = false;
          obj[headers[j]] = currentline[j];
        }
      }
      if (!empty) {
        result.push(obj);
      }
      empty = true;
    }
    return result; //JavaScript object
    //return JSON.stringify(result); //JSON
  };

  handleCatalogo = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/catalogo`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " catalogo. ");
            } else alert("Hubo un error subiendo catalogo");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleClientes = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/clientes`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " clientes. ");
            } else alert("Hubo un error subiendo clientes");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleGastosDetallados = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/detalles`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert(
                "Se han registrado " + result.length + " gastos detallados. "
              );
            } else alert("Hubo un error subiendo gastos detallados");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleGastosFijos = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/gastosFijos`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " gastos fijos. ");
            } else alert("Hubo un error subiendo gastos fijos");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleGastosVariables = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/gastosVariables`,
          { result }
        )
        .then(
          response => {
            console.log(response.data);
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert(
                "Se han registrado " + result.length + " gastos variables. "
              );
            } else alert("Hubo un error subiendo gastos variables");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleInsumos = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(`http://localhost:8080/api/compania/${this.state.name}/insumos`, {
          result
        })
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " insumos. ");
            } else alert("Hubo un error subiendo insumos");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleLiquidacion = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/liquidaciones`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " liquidaciones. ");
            } else alert("Hubo un error subiendo liquidaciones");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleObjetivos = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/objetivos`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " objetivos. ");
            } else alert("Hubo un error subiendo objetivos");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleProveedores = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/proveedores`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " proveedores. ");
            } else alert("Hubo un error subiendo proveedores");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleRequisicion = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/requisiciones`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " requisiciones. ");
            } else alert("Hubo un error subiendo requisiciones");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleSucursales = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/sucursales`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " sucursales. ");
            } else alert("Hubo un error subiendo sucursales");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  handleVendedores = files => {
    this.setState({
      process: true
    });
    var reader = new FileReader();
    reader.onload = e => {
      // Use reader.result
      var result = this.csv2JSON(reader.result);
      axios
        .post(
          `http://localhost:8080/api/compania/${this.state.name}/vendedores`,
          { result }
        )
        .then(
          response => {
            if (response.status === 200) {
              e.preventDefault();
              fetch(`http://localhost:8080/api/compania/${this.state.name}`)
                .then(response => response.json())
                .then(data => {
                  this.setState({
                    report: data,
                    process: false
                  });
                });
              alert("Se han registrado " + result.length + " vendedores. ");
            } else alert("Hubo un error subiendo vendedores");
          },
          error => {
            console.log(error);
          }
        );
    };
    reader.readAsText(files[0]);
  };

  classes = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dense: {
      marginTop: theme.spacing(2)
    },
    menu: {
      width: 100
    }
  }));

  componentDidMount() {
    const path = this.state.name
    fetch(`http://localhost:8080/api/compania/${path}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          report: data,
          name: path,
          process: false
        });
      });
  }

  render() {
    var gaugeReport = []
    if (this.state.process === false){
      gaugeReport = [
             {
                 title: 'VENTAS', value: obtenerVentasReales(this.state.report.liquidaciones, this.state.report.requisiciones), subtitle1: 'Ventas actuales acumuladas',
                 plan: obtenerVentasPlanActual(this.state.report.planMensual), subtitle2: 'Plan de ventas',
                 objective: obtenerPlanVentas(this.state.report.planMensual), subtitle3: 'Diferencia de ventas',
                 subtitle4: 'Objetivo anual de ventas',
                 path: '/ventas',
             }, //5042000............... 9650
             {
                 title: 'GASTOS', value: obtenerEgresosReales(this.state.report.gastosVariables, this.state.report.gastosFijos), subtitle1: 'Gastos actuales acumulados',
                 plan: obtenerEgresosPlanActual(this.state.report.planMensual), subtitle2: 'Plan de gastos',
                 objective: obtenerPlanEgresos(this.state.report.planMensual), subtitle3: 'Diferencia de gastos',
                 subtitle4: 'Objetivo anual de gastos',
                 path: '/gastos',
             }, // 3950000
             {
                 title: 'MARGEN', value: obtenerVentasReales(this.state.report.liquidaciones, this.state.report.requisiciones) - obtenerEgresosReales(this.state.report.gastosVariables, this.state.report.gastosFijos), subtitle1: 'Margen actual acumulado',
                 plan: obtenerVentasPlanActual(this.state.report.planMensual) - obtenerEgresosPlanActual(this.state.report.planMensual), subtitle2: 'Plan de margen',
                 objective: obtenerPlanVentas(this.state.report.planMensual) - obtenerPlanEgresos(this.state.report.planMensual), subtitle3: 'Diferencia de margen',
                 subtitle4: 'Objetivo anual de margen',
                 path: '/margen',
             }, // 1092000
         ];
    }

        console.log(gaugeReport)

        console.log(this.state.report)
    var gauges = gaugeReport.map((item, key) => (
      <div class="col-md-12 col-lg-12">
        <Card>
          <CardContent>
            <div>
              <div align="center">
                <Link to={{ pathname: item.path +'/'+this.state.name, report: this.state.report }} className="link">
                  <Button primary={true} look="flat">
                    <u>
                      <b>{item.title}</b>
                    </u>
                  </Button>
                </Link>
              </div>
              <div class="row">
                <div class="col-md-3">
                  <RadialGaugeContainer
                    value={item.value}
                    plan={item.plan}
                    objective={item.objective}
                  />
                </div>
                <div class="col-md-4">
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          currency(item.value) + " / " + currency(item.plan)
                        }
                        secondary={item.subtitle1 + " / " + item.subtitle2}
                      />
                    </ListItem>
                  </List>
                </div>
                <div class="col-md-3">
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={
                          (item.value - item.plan ? "↑" : "↓") +
                          currency(Math.abs(item.value - item.plan)) +
                          " | " +
                          (
                            Math.abs(item.value - item.plan) / item.plan
                          ).toFixed(2) +
                          " %"
                        }
                        secondary={item.subtitle3}
                      />
                    </ListItem>
                  </List>
                </div>
                <div class="col-md-2">
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={currency(item.objective)}
                        secondary={item.subtitle4}
                      />
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ));

    return (
      <Ripple>
        <div className="bootstrap-wrapper">
          <div
            className="app-container container"
            ref={el => (this.appContainer = el)}
          >
          {this.state.process && (<CircularProgress />)}
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <h1>Empresa | Reporte de operaciones</h1>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 buttons-right">
                <Button primary={true} onClick={this.handleUpload}>
                  Subir CSV
                </Button>
                <Button onClick={this.handlePDFExport}>Exportar a PDF</Button>
              </div>
            </div>

            <div class="row">

              <div class="col-md-12 col-lg-12">{gauges}</div>
            </div>
            {this.state.showDialog && (
              <Dialog title={"Subir documentos"} onClose={this.handleUpload}>
              {this.state.process && (<CircularProgress />)}
                <TabStrip
                  selected={this.state.selected}
                  onSelect={this.handleSelect}
                >
                  <TabStripTab title="Ventas">
                    <div>
                      <ReactFileReader
                        handleFiles={this.handleLiquidacion}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Liquidación</Button>
                      </ReactFileReader>
                      <br />
                      <ReactFileReader
                        handleFiles={this.handleRequisicion}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Requisición</Button>
                      </ReactFileReader>
                    </div>
                  </TabStripTab>
                  <TabStripTab title="Gastos">
                    <div>
                      <ReactFileReader
                        handleFiles={this.handleGastosDetallados}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Gastos Detallados</Button>
                      </ReactFileReader>
                      <br />
                      <ReactFileReader
                        handleFiles={this.handleGastosFijos}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Gastos Fijos</Button>
                      </ReactFileReader>
                      <br />
                      <ReactFileReader
                        handleFiles={this.handleGastosVariables}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Gastos Variables</Button>
                      </ReactFileReader>
                    </div>
                  </TabStripTab>
                  <TabStripTab title="Información">
                    <div>
                      <ReactFileReader
                        handleFiles={this.handleObjetivos}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Objetivos</Button>
                      </ReactFileReader>
                      <br />
                      <ReactFileReader
                        handleFiles={this.handleInsumos}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Insumos</Button>
                      </ReactFileReader>
                      <br />
                      <ReactFileReader
                        handleFiles={this.handleCatalogo}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Catálogo</Button>
                      </ReactFileReader>
                      <br />
                      <ReactFileReader
                        handleFiles={this.handleSucursales}
                        fileTypes={".csv"}
                      >
                        <Button primary={true}>Sucursales</Button>
                      </ReactFileReader>
                    </div>
                  </TabStripTab>
                  <TabStripTab title="Gente">
                    <ReactFileReader
                      handleFiles={this.handleClientes}
                      fileTypes={".csv"}
                    >
                      <Button primary={true}>Clientes</Button>
                    </ReactFileReader>
                    <br />
                    <ReactFileReader
                      handleFiles={this.handleProveedores}
                      fileTypes={".csv"}
                    >
                      <Button primary={true}>Proveedores</Button>
                    </ReactFileReader>
                    <br />
                    <ReactFileReader
                      handleFiles={this.handleVendedores}
                      fileTypes={".csv"}
                    >
                      <Button primary={true}>Vendedores</Button>
                    </ReactFileReader>
                  </TabStripTab>
                </TabStrip>
                <br />
                <FormControlLabel
                  control={<Checkbox value="eraseAndAdd" color="primary" />}
                  label="Eliminar datos actuales y sobreescribir con los nuevos."
                />
                <br />
                <Button onClick={this.handleUpload}>Cancelar</Button>
              </Dialog>
            )}
          </div>
        </div>
      </Ripple>
    );
  }
}
export default Dashboard;
