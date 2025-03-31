const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/inPlaceServiceController");

router.get("/", authService, Controller.getInPlaceServices);
router.post("/", authService, Controller.createServiceInPlace);
router.delete("/", authService, Controller.deleteInPlaceService);

module.exports = router;