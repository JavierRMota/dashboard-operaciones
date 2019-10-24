const mng = require("mongoose");
const Schema = mng.Schema;

var transSchema = new Schema({
  concepto: { type: String, require: true, max: 100 },
  monto: { type: Number, require: true },
  fecha: { type: Date, default: Date.now }
});

module.exports = mng.model("Transaccion", transSchema);
