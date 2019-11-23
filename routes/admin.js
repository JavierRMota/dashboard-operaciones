const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.post("/login", adminController.loginAdmin);
router.post("/crear", adminController.crearCompania);
router.post("/eliminar", adminController.eliminarCompania);
router.get("/consultarCompanias", adminController.consultarCompanias);
module.exports = router;
