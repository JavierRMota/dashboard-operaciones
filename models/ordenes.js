const mng = require("mongoose");
const Schema = mng.Schema;

var ordSchema = new Schema({
  fechaOrden: Date,
  fechaEntrega: Date,
  producto: prodSchema,
  cantidad: Number,
  total: Number
});

module.exports = mng.model("Ordenes", ordSchema);
