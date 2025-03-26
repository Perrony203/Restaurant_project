const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Definir rutas para el inventario
router.get('/', inventoryController.getAllIngredients);
router.get('/:id', inventoryController.getIngredientById);
router.post('/', inventoryController.createIngredient);
router.put('/:id', inventoryController.updateIngredient);
router.delete('/:id', inventoryController.deleteIngredient);

module.exports = router;
