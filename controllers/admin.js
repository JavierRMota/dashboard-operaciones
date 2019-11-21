const admin = require("../models/admin");
const compania = require("../models/compania");

exports.crearCompania = (req, res) => {
  if (req.body.compania.name === req.body.compania.nameConfirm) {
    var companiaNueva = new compania({
      nombre: req.body.name
    });
    admin.find().then(data => {
      var compArr = data[0].companias;
      compArr.push(companiaNueva);
      admin.updateOne(
        {
          $set: { companias: compArr }
        },
        function(err, up) {
          if (err) res.send("error");
          else res.send("compania creada");
        }
      );
    });
  } else res.send("error");
};

exports.eliminarCompania = (req, res) => {
  admin.update(
    {},
    { $pull: { companias: { nombre: req.body.nombre } } },
    function(err) {
      if (err) res.send(err);
      res.send("exito");
    }
  );
};

exports.loginAdmin = (req, res) => {
  console.log(req.body);
  if (req.body.usuario.password != "") {
    admin.findOne({ mail: req.body.usuario.mail }, "password", function(
      err,
      pass
    ) {
      pass.comparePassword(req.body.usuario.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          res.send("welcome");
        } else res.send("error"); // -&gt; Password123: true
      });
    });
  } else res.send("error");
};
