const express = require("express");
const router = express.Router();
const Controller = require("../controllers/dishIngredientController");

//router.get("/", Controller.getAll);
router.put("/", Controller.updateQuantityNeeded);
router.post("/", Controller.createDishIngredient);
router.delete("/", Controller.deleteDishIngredient);

module.exports = router;