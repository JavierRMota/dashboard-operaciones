const mng = require("mongoose");
const Schema = mng.Schema;

var compSchema = new Schema({
  nombre: { type: String, require: true, max: 100 },
  planMensual: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "planMensual"
    }
  ],
  sucursales: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Sucursales"
    }
  ],
  gastos: [
    {
      type: mng.Schema.Types.ObjectId,
      ref: "Gastos"
    }
  ]
});

module.exports = mng.model("Compania", compSchema);
