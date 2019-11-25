const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.get("/:compania/sucursales", adminController.consultarSucursales);
router.get("/:compania/objetivos", adminController.consultarObjetivos);
router.get("/:compania/vendedores", adminController.consultarVendedores);
router.get("/:compania/catalogo", adminController.consultarCatalogo);
router.get(
  "/:compania/gastosVariables",
  adminController.consultarGastosVariables
);
router.get("/:compania/gastosFijos", adminController.consultarGastosFijos);
router.get("/:compania/clientes", adminController.consultarClientes);
router.get("/:compania/detalles", adminController.consultarDetalles);
router.get("/:compania/insumos", adminController.consultarInsumos);
router.get("/:compania", adminController.consultarCompania);
router.get("/", adminController.companias);

module.exports = router;
