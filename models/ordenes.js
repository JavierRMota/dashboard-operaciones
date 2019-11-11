const mng = require("mongoose");
const Schema = mng.Schema;

var ordSchema = new Schema({
  fechaOrden: Date,
  fechaEntrega: Date,
  producto: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Productos"
    }
  ],
  cantidad: Number,
  total: Number
});

module.exports = mng.model("Ordenes", ordSchema);
