const express = require("express");
const router = express.Router();
const Controller = require("../controllers/contractController");

router.get("/", Controller.getAllContracts);
router.get("/shift/:shiftId", Controller.getContractByShift);
router.get("/employee/:employeeId", Controller.getContractByEmployee);
router.post("/", Controller.createContract);
router.delete("/", Controller.deleteContract);
router.put("/", Controller.updateContract);

module.exports = router;