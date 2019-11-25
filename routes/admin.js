const express = require("express");
const router = express.Router();

const adminController = require("../controllers/admin");

router.post("/login", adminController.loginAdmin);
router.post("/crear", adminController.crearCompania);
router.post("/eliminar", adminController.eliminarCompania);
router.post("/:compania/sucursales", adminController.guardarSucursales);
router.post("/:compania/objetivos", adminController.guardarObjetivos);
router.post("/:compania/vendedores", adminController.guardarVendedores);
router.post("/:compania/catalogo", adminController.guardarCatalogo);
router.post(
  "/:compania/gastosVariables",
  adminController.guardarGastosVariables
);
router.post("/:compania/gastosFijos", adminController.guardarGastosFijos);
router.post("/:compania/clientes", adminController.guardarClientes);
router.post("/:compania/detalles", adminController.guardarDetalles);
router.post("/:compania/insumos", adminController.guardarInsumos);
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
router.get("/consultarCompanias", adminController.consultarCompanias);
module.exports = router;
