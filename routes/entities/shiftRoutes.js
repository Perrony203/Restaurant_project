const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/shiftController");

router.get("/", authService, Controller.getShifts);
router.get("/id", authService, Controller.getShiftById);
router.put("/", authService, Controller.updateShift);
router.post("/", authService, Controller.createShift);
router.delete("/", authService, Controller.deleteShift);

module.exports = router;