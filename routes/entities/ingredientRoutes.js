const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/ingredientController");

router.get("/:id", authService, Controller.getIngredientById);
router.get("/", authService, Controller.getAllIngredients);
router.put("/:id", authService, Controller.updateIngredient);
router.post("/", authService, Controller.addIngredient);
router.post("/:id",Controller.deleteIngredient);


module.exports = router;