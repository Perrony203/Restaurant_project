const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/ingredientController");

router.get("/:id", Controller.getIngredientById);
router.get("/", Controller.getAllIngredients);
router.get("/supplier/:supplierId", authService, Controller.getBySupplier);
router.post("/", authService, Controller.addIngredient);
router.delete("/", authService, Controller.deleteIngredient);

module.exports = router;