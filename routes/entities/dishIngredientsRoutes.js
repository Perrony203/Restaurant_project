const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/dishIngredientController");

//router.get("/", Controller.getAll);
router.put("/", authService, Controller.updateQuantityNeeded);
router.post("/", authService, Controller.createDishIngredient);
router.delete("/", authService, Controller.deleteDishIngredient);

module.exports = router;