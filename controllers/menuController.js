const { Dish } = require('../models');

const menuController = {
    // Obtener todos los platos
    getAllDishes:async (req, res) => {
        try {
            const dishes = await Dish.findAll();
            return res.status(200).json(dishes);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener un plato por ID
    getDishById:async (req, res) => {
        try {
            const { id } = req.params;
            const dish = await Dish.findByPk(id);
            if (!dish) return res.status(404).json({ message: 'Plato no encontrado' });
            return res.status(200).json(dish);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Crear un nuevo plato
    createDish:async (req, res) => {
        try {
            const { name, description, price, preparationTime, categoryId } = req.body;
            const newDish = await Dish.create({ name, description, price, preparationTime, categoryId });
            return res.status(201).json(newDish);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar un plato
    updateDish:async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, price, preparationTime, categoryId } = req.body;
            const dish = await Dish.findByPk(id);
            if (!dish) return res.status(404).json({ message: 'Plato no encontrado' });
            await dish.update({ name, description, price, preparationTime, categoryId });
            return res.status(200).json(dish);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar un plato
    deleteDish:async (req, res) => {
        try {
            const { id } = req.params;
            const dish = await Dish.findByPk(id);
            if (!dish) return res.status(404).json({ message: 'Plato no encontrado' });
            await dish.destroy();
            return res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = menuController;
