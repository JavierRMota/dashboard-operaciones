const compania = require("../models/compania");

exports.crearCompania = (req, res) => {
  var comp = new compania({
    nombre: req.body.nombre
  });
  comp.save(err => {
    if (err) throw err;
    res.send("Producto creado exitosamente");
  });
};

exports.consultarCompania = (req, res) => {
  compania.findById(req.params.id, (err, comp) => {
    if (err) throw err;
    res.send(comp);
  });
};

exports.loginCompania = (req, res) => {
  compania.findOne({ mail: req.body.mail }, "password", function(err, pass) {
    pass.comparePassword(req.body.password, function(err, isMatch) {
      if (err) throw err;
      if (isMatch) {
        res.send("welcome");
      } else res.send("error"); // -&gt; Password123: true
    });
  });
};
