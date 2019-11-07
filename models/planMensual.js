const mng = require("mongoose");
const Schema = mng.Schema;

var planMensualSchema = new Schema({
  mes: Date,
  ingreso: Number,
  egreso: Number,
  margen: Number
});

module.exports = mng.model("planMensual", planMensualSchema);
