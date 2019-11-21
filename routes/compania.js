const express = require("express");
const router = express.Router();

const compController = require("../controllers/compania");

router.get("/compania/:id", compController.consultarCompania);

module.exports = router;
