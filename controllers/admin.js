const admin = require("../models/admin");
const compania = require("../models/compania");

exports.crearCompania = (req, res) => {
  console.log(req.body);
  if (req.body.compania.name === req.body.compania.nameConfirm) {
    var companiaNueva = new compania({
      nombre: req.body.compania.name
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

exports.guardarSucursales = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.sucursales": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("sucursales guardadas");
    }
  );
};

exports.guardarObjetivos = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.planMensual": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("objetivos actualizados");
    }
  );
};

exports.guardarGastosVariables = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.gastosVariables": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("gastos variables actualizados");
    }
  );
};

exports.guardarGastosFijos = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.gastosFijos": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("gastos fijos actualizados");
    }
  );
};

exports.guardarCatalogo = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.catalogo": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("catalogo actualizado");
    }
  );
};

exports.guardarVendedores = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.vendedores": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("vendedores actualizados");
    }
  );
};

exports.guardarClientes = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.clientes": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("clientes actualizados");
    }
  );
};

exports.guardarDetalles = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.detallesGasto": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("detalles actualizados");
    }
  );
};

exports.guardarInsumos = (req, res) => {
  admin.update(
    { "companias.nombre": req.params.compania },
    { $set: { "companias.$.insumos": req.body } },
    function(err, up) {
      if (err) res.send("error");
      else res.send("insumos actualizados");
    }
  );
};

exports.consultarSucursales = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.sucursales);
      }
    });
  });
};

exports.consultarObjetivos = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.planMensual);
      }
    });
  });
};

exports.consultarVendedores = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.vendedores);
      }
    });
  });
};

exports.consultarCatalogo = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.catalogo);
      }
    });
  });
};

exports.consultarGastosVariables = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.gastosVariables);
      }
    });
  });
};

exports.consultarGastosFijos = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.gastosFijos);
      }
    });
  });
};

exports.consultarClientes = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.clientes);
      }
    });
  });
};

exports.consultarDetalles = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.detallesGasto);
      }
    });
  });
};

exports.consultarInsumos = (req, res) => {
  admin.find({}).then(data => {
    data[0].companias.forEach(compania => {
      console.log(compania);
      if (compania.nombre === req.params.compania) {
        res.send(compania.insumos);
      }
    });
  });
};

exports.eliminarCompania = (req, res) => {
  admin.update(
    {},
    { $pull: { companias: { nombre: req.body.name } } },
    function(err) {
      if (err) res.send(err);
      res.send("exito");
    }
  );
};

exports.consultarCompanias = (req, res) => {
  var comp = [];
  admin.find().then(data => {
    data[0].companias.forEach(element => {
      comp.push({ name: element.nombre });
    });
    //console.log(comp);
    res.send(comp);
  });
};

exports.consultarCompania = (req, res) => {
  admin.find().then(data => {
    data[0].companias.forEach(element => {
      if (element.nombre === req.params.compania) {
        res.send(element);
      }
    });
  });
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
