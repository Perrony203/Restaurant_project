const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/waiterController");

router.get("/:id", authService, Controller.getWaiters);
router.post("/", authService, Controller.createWaiter);
router.delete("/", authService, Controller.deleteWaiter);

module.exports = router;