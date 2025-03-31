const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/serviceController");

router.get("/", authService, Controller.getServices);
router.put("/close/:id", authService, Controller.updateServiceCloseDate);
router.put("/bill", authService, Controller.updateServiceBill);
router.post("/", authService, Controller.createService);
router.delete("/", authService, Controller.deleteService);

module.exports = router;