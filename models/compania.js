const mng = require("mongoose");
const Schema = mng.Schema;

var compSchema = {
  nombre: { type: String, require: true, max: 100 }
};
module.exports = mng.model("Compania", compSchema);
