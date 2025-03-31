const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/cleanerServiceController");

router.get("/", authService, Controller.getAll);
router.get("/service/:serviceId", authService, Controller.getByService);
router.get("/cleaner/:cleanerId", authService, Controller.getByCleaner);
router.post("/", authService, Controller.create);
router.delete("/", authService, Controller.delete);

module.exports = router;