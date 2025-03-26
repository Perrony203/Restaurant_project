const express = require("express");
const router = express.Router();
const Controller = require("../controllers/statusController");

router.get("/", Controller.getStatuses);
router.post("/", Controller.createStatus);
router.delete("/", Controller.deleteStatus);

module.exports = router;