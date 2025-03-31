const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ingredientController");

router.get("/:id", Controller.getIngredientById);
router.get("/supplier/:supplierId", Controller.getBySupplier);
router.put("/supplier", Controller.updateSupplier);
router.put("/stock", Controller.updateStock);
router.put("/supplier", Controller.updatePrice);
router.post("/", Controller.addIngredient);
router.delete("/", Controller.deleteIngredient);

module.exports = router;