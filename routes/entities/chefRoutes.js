const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/chefController");

router.get("/", authService, Controller.getChefs);
router.post("/", authService, Controller.createChef);
router.delete("/", authService, Controller.deleteChef);

module.exports = router;