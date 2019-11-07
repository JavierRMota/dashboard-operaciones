const mng = require("mongoose");
const Schema = mng.Schema;

var sucSchema = new Schema({
  sucursal: String,
  direccion: String,
  geolocalizacion: String,
  empleados: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Empleados"
    }
  ]
});

module.exports = mng.model("Sucursales", sucSchema);
