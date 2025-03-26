const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Definir rutas para el menú
router.get('/', menuController.getAllDishes);
router.get('/:id', menuController.getDishById);
router.post('/', menuController.createDish);
router.put('/:id', menuController.updateDish);
router.delete('/:id', menuController.deleteDish);

module.exports = router;
