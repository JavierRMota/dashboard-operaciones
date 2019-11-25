const mng = require("mongoose");
const Schema = mng.Schema;

var sucSchema = new Schema({
  Id_Sucursal: String,
  Sucursal: String,
  Direccion: String,
  empleados: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Empleados"
    }
  ]
});

module.exports = mng.model("Sucursales", sucSchema);
