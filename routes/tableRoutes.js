const express = require("express");
const router = express.Router();
const Controller = require("../controllers/tableController");

router.get("/number/:number", Controller.getTableByNumber);
router.get("/available", Controller.getAvailableTables);
router.get("/ocuppied", Controller.getOccupiedTables);
router.post("/", Controller.createTable);
router.put("/:id", Controller.updateTableOccupation);

module.exports = router;