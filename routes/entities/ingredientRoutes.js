const express = require("express");
const router = express.Router();
const authService = require("../../middleware/authMiddleware");
const Controller = require("../../controllers/entities/ingredientController");

router.get("/:id", Controller.getIngredientById);
router.get("/supplier/:supplierId", authService, Controller.getBySupplier);
router.put("/supplier", authService, Controller.updateSupplier);
router.put("/stock", authService, Controller.updateStock);
router.put("/supplier", authService, Controller.updatePrice);
router.post("/", authService, Controller.addIngredient);
router.delete("/", authService, Controller.deleteIngredient);

module.exports = router;