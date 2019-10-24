const mng = require("mongoose");
const Schema = mng.Schema;
const trans = require("./transaccion");

var compSchema = new Schema({
  nombre: { type: String, require: true, max: 100 },
  owner: { type: String, require: false, max: 50 },
  metasMensual: [Number]
});

module.exports = mng.model("Compania", compSchema);
