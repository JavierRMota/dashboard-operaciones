const mng = require("mongoose");
const Schema = mng.Schema;

var clientSchema = new Schema({
  categoriaCliente: String,
  genero: { type: String, require: true, max: 1 },
  edad: Number,
  cantidadClientes: Number,
  ubicacion: Number
});

module.exports = mng.model("Cliente", clientSchema);
