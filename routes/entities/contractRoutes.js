const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/contractController");

router.get("/", authService, Controller.getAllContracts);
router.get("/shift/:shiftId", authService, Controller.getContractByShift);
router.get("/employee/:employeeId", authService, Controller.getContractByEmployee);
router.post("/", authService, Controller.createContract);
router.delete("/", authService, Controller.deleteContract);
router.put("/", authService, Controller.updateContract);

module.exports = router;