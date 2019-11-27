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
router.post("/:compania/requisiciones", adminController.guardarRequisiciones);
router.post("/:compania/liquidaciones", adminController.guardarLiquidaciones);
router.post("/:compania/proveedores", adminController.guardarProvedores);

module.exports = router;
