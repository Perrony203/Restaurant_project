const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/deliveryServiceController");

router.get("/", authService, Controller.getDeliveryServices);
router.post("/", authService, Controller.createServiceDelivery);
router.put("/", authService, Controller.updateDeliveryStatus)
router.delete("/", authService, Controller.deleteDeliveryService);

module.exports = router;