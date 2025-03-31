const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/statusController");

router.get("/", authService, Controller.getStatuses);
router.post("/", authService, Controller.createStatus);
router.delete("/", authService, Controller.deleteStatus);

module.exports = router;