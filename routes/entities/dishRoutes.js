const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/dishController");

router.get("/", Controller.getDishById);
router.put("/", authService, Controller.updateDish);
router.post("/", authService, Controller.createDish);
router.delete("/", authService, Controller.deleteDish);

module.exports = router;