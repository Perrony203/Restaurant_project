const express = require("express");
const router = express.Router();
const Controller = require("../controllers/deliveryServiceController");

router.get("/", Controller.getDeliveryServices);
router.post("/", Controller.createServiceDelivery);
router.put("/", Controller.updateDeliveryStatus)
router.delete("/", Controller.deleteDeliveryService);

module.exports = router;