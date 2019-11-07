const mng = require("mongoose");
const Schema = mng.Schema;

var prodSchema = new Schema({
  producto: String,
  precio: Number
});

module.exports = mng.model("Productos", prodSchema);
