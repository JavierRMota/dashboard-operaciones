const mng = require("mongoose");
const Schema = mng.Schema;

var gastoSchema = new Schema({
  fecha: Date,
  fijo: Boolean,
  cantidad: Number,
  concepto: String
});

module.exports = mng.model("Gastos", gastoSchema);
