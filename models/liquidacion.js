const mng = require("mongoose");
const Schema = mng.Schema;

var liqSchema = new Schema({
  orden: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Ordenes"
    }
  ],
  cliente: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Cliente"
    }
  ],
  formaPago: String,
  total: Number
});

module.exports = mng.model("Liquidacion", liqSchema);
