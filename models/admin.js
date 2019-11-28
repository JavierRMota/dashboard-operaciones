const mng = require("mongoose");
const Schema = mng.Schema;
const bc = require("bcrypt");

var provSchema = new Schema({
  ID_Proveedor: Number,
  Nombre: String
});

var liqSchema = new Schema({
  Id_Liquidacion: Number,
  Id_Requisicion: Number,
  Id_Sucursal: Number,
  Id_Vendedor: Number,
  Id_Cliente: Number,
  Cliente_Genero: String,
  Cliente_Edad: Number,
  Cliente_Cantidad: Number,
  Cliente_Ubicacion: Number,
  Forma_de_Pago: String,
  Total_Liquidacion: Number
});

var reqSchema = new Schema({
  Id_Requisicion: Number,
  Id_Sucursal: Number,
  Id_Vendedor: Number,
  Id_Catalogo: Number,
  Cantidad: Number,
  Fecha_Requisicion: String,
  Fecha_Entrega: String,
  Total: Number
});

var inSchema = new Schema({
  Id_Insumo: Number,
  Descripcion: String,
  Insumo_Categoria: String
});

var detSchema = new Schema({
  Fecha: String,
  Id_Insumo: Number,
  Insumo_Categoria: String,
  Id_Proveedor: Number,
  Gasto: Number
});

var clientSchema = new Schema({
  Id_Cliente: Number,
  Descripcion: String
});

var empSchema = new Schema({
  Id_Vendedor: String,
  Nombre: String,
  Genero: String,
  FechaDeNacimiento: String,
  FechaDeIngreso: String
});

var catSchema = new Schema({
  Id_Catalogo: Number,
  Nombre: String,
  Precio: Number
});

var sucSchema = new Schema({
  Id_Sucursal: String,
  Sucursal: String,
  Direccion: String
});

var planMensualSchema = new Schema({
  Fecha: String,
  Ingreso_Plan: Number,
  Egreso_Plan: Number,
  Margen: Number
});

var gastoVariableSchema = new Schema({
  Fecha: String,
  Tortillas: Number,
  Vegetales: Number,
  Carne: Number,
  Queso: Number,
  Bebidas: Number
});

var gastoFijoSchema = new Schema({
  Fecha: String,
  Renta: Number,
  Agua: Number,
  Luz: Number,
  Salarios: Number,
  Administracion: Number
});

var compSchema = new Schema({
  nombre: { type: String, require: true, max: 100 },
  planMensual: [planMensualSchema],
  sucursales: [sucSchema],
  gastosFijos: [gastoFijoSchema],
  gastosVariables: [gastoVariableSchema],
  vendedores: [empSchema],
  catalogo: [catSchema],
  clientes: [clientSchema],
  detallesGasto: [detSchema],
  insumos: [inSchema],
  requisiciones: [reqSchema],
  provedores: [provSchema],
  liquidaciones: [liqSchema]
});

var adminSchema = new Schema({
  mail: { type: String, require: true, max: 120 },
  password: { type: String, require: true, max: 120 },
  companias: [compSchema]
});
adminSchema.pre("save", function(next) {
  var comp = this;

  // only hash the password if it has been modified (or is new)
  if (!comp.isModified("password")) return next();

  // generate a salt
  bc.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bc.hash(comp.password, salt, function(err, hash) {
      if (err) return next(err);

      // override the cleartext password with the hashed one
      comp.password = hash;
      next();
    });
  });
});

adminSchema.methods.comparePassword = function(candiStringPassword, cb) {
  bc.compare(candiStringPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mng.model("admin", adminSchema, "admins");
