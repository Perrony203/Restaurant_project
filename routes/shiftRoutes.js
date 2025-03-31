const express = require("express");
const router = express.Router();
const Controller = require("../controllers/shiftController");

router.get("/", Controller.getShifts);
router.get("/id", Controller.getShiftById);
router.put("/", Controller.updateShift);
router.post("/", Controller.createShift);
router.delete("/", Controller.deleteShift);

module.exports = router;