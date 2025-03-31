const express = require("express");
const router = express.Router();
const Controller = require("../controllers/serviceController");

router.get("/", Controller.getServices);
router.put("/close/:id", Controller.updateServiceCloseDate);
router.put("/bill", Controller.updateServiceBill);
router.post("/", Controller.createService);
router.delete("/", Controller.deleteService);

module.exports = router;