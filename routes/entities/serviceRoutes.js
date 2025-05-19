const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/serviceController");

router.get("/", authService, Controller.getServices);
router.get("/:id", authService, Controller.getServiceById);
router.put("/:id", authService, Controller.updateService);
router.post("/", authService, Controller.createService);
router.delete("/:id", authService, Controller.deleteService);

module.exports = router;