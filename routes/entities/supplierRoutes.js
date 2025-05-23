const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/Entities/supplierController");

router.get("/", authService, Controller.getAllSuppliers);
router.get("/name/:name", authService, Controller.getSupplierByName);
router.get("/:id", authService, Controller.getSupplierById);
router.put("/:id", authService, Controller.updateNumber);
router.post("/", authService, Controller.createSupplier);
router.delete("/", authService, Controller.deleteSupplier);

module.exports = router;