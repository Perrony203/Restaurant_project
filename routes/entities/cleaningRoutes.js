const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/cleaningController");

router.get("/", authService, Controller.getCleanings);
router.post("/", authService, Controller.createCleaning);
router.delete("/", authService, Controller.deleteCleaning);

module.exports = router;