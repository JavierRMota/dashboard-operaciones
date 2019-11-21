const mng = require("mongoose");
const Schema = mng.Schema;
const bc = require("bcrypt");

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

adminSchema.methods.comparePassword = function(candidatePassword, cb) {
  bc.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mng.model("admin", adminSchema, "admins");
