const compania = require("../models/compania");

exports.consultarCompania = (req, res) => {
  compania.findById(req.params.id, (err, comp) => {
    if (err) throw err;
    res.send(comp);
  });
};

exports.loginCompania = (req, res) => {
  console.log(req.body);
  if (req.body.usuario.password != "") {
    compania.findOne({ mail: req.body.usuario.mail }, "password", function(
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
