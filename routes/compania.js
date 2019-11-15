const express = require("express");
const router = express.Router();

const compController = require("../controllers/compania");

router.post("/crear", compController.crearCompania);
router.get("/compania/:id", compController.consultarCompania);
router.post("/login", compController.loginCompania);

module.exports = router;
