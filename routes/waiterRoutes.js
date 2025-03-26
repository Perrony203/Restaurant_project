const express = require("express");
const router = express.Router();
const Controller = require("../controllers/waiterController");

router.get("/:id", Controller.getWaiters);
router.post("/", Controller.createWaiter);
router.delete("/", Controller.deleteWaiter);

module.exports = router;