const express = require("express");
const router = express.Router();
const Controller = require("../controllers/commandController");

router.get("/", Controller.getCommands);
router.put("/", Controller.updateCommand);
router.post("/", Controller.createCommand);
router.delete("/", Controller.deleteCommand);

module.exports = router;