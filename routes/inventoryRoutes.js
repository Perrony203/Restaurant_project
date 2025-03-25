const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Definir rutas para el inventario
router.get('/', inventoryController.getAllInventoryItems);
router.get('/:id', inventoryController.getInventoryItemById);
router.post('/', inventoryController.createInventoryItem);
router.put('/:id', inventoryController.updateInventoryItem);
router.delete('/:id', inventoryController.deleteInventoryItem);

module.exports = router;
