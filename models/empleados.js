const mng = require("mongoose");
const Schema = mng.Schema;

var empSchema = new Schema({
  nombre: String,
  genero: { type: String, require: true, max: 1 },
  nacimiento: Date,
  inicio: Date,
  ordenesLiquidadas: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Liquidacion"
    }
  ]
});

module.exports = mng.model("Empleados", empSchema);
