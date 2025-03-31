const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/commandController");

router.get("/", authService, Controller.getCommands);
router.put("/", authService, Controller.updateCommand);
router.post("/", authService, Controller.createCommand);
router.delete("/", authService, Controller.deleteCommand);

module.exports = router;