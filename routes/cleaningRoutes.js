const express = require("express");
const router = express.Router();
const Controller = require("../controllers/cleaningController");

router.get("/", Controller.getCleanings);
router.post("/", Controller.createCleaning);
router.delete("/", Controller.deleteCleaning);

module.exports = router;