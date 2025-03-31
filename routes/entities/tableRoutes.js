const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/tableController");

router.get("/number/:number", Controller.getTableByNumber);
router.get("/available", Controller.getAvailableTables);
router.get("/ocuppied", Controller.getOccupiedTables);
router.post("/", authService, Controller.createTable);
router.put("/:id", authService, Controller.updateTableOccupation);

module.exports = router;