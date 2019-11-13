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
