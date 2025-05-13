const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/dishController");

router.get("/:id", authService, Controller.getDishById);
router.get("/", authService, Controller.getAllDishes);
router.put("/:id", authService, Controller.updateDish);
router.post("/", authService, Controller.createDish);
router.delete("/:id", authService, Controller.deleteDish);

module.exports = router;