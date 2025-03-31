const express = require("express");
const router = express.Router();
const Controller = require("../controllers/supplierController");

router.get("/:id", Controller.getSupplierById);
router.put("/:id", Controller.updateNumber);
router.post("/", Controller.createSupplier);
router.delete("/", Controller.deleteSupplier);

module.exports = router;