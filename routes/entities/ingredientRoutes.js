const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/ingredientController");

router.get("/:id", authService, Controller.getIngredientById);
router.get("/", authService, Controller.getAllIngredients);
router.put("/:id", authService, Controller.updateIngredient);
router.post("/", authService, Controller.addIngredient);
router.delete("/:id", authService, Controller.deleteIngredient);


module.exports = router;