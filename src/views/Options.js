import React, { Component } from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap-4-grid/css/grid.min.css';
import '../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@progress/kendo-react-buttons';
import TextField from '@material-ui/core/TextField';
import { companies } from '../data/appData';

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        nameConfirm: '',
      };
  }

  handleClick = () => {
    this.props.handleState(0);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    if (this.state.name == this.state.nameConfirm && this.state.name != '') {
      companies.push({ name: this.state.name });
    }

    this.setState({
      name: '',
      nameConfirm: '',
    });
  };

  render() {
    var company = companies.map((item, key) =>
      <div>
        <Divider />
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={item.name}/>
        </ListItem>
      </div>
    );
    return (
      <div className="bootstrap-wrapper">
        <div className="app-container container" ref={(el) => this.appContainer = el}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <h1>Bienvenido | Consultor</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-4">
              <h2>Empresas</h2>
              <TextField
                id="standard-name"
                label="Buscar empresa"
                margin="normal"
              />
              {}
              <List component="nav" aria-label="main mailbox folders">
                {company}
              </List>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
              <h2>Crear empresa</h2>
              <form noValidate autoComplete="off">
                <TextField
                  name="name"
                  id="standard-name"
                  label="Nombre empresa"
                  margin="normal"
                  onChange={e => this.handleChange(e)}
                  value={this.state.name}
                />
                <br />
                <TextField
                  name="nameConfirm"
                  id="standard-name"
                  label="Confirmar nombre"
                  margin="normal"
                  onChange={e => this.handleChange(e)}
                  value={this.state.nameConfirm}
                />
                <br />
                <Button primary={true} look="outline">Subir CSV</Button>
                <Button primary={true} type="button"
                  onClick={(e) => this.onSubmit(e)}>Crear</Button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }

}
export default Options;
