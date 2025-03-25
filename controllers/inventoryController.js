const { Ingredient } = require('../models');

const inventoryController = {
    // Obtener todos los ingredientes
    getAllIngredients:async (req, res) => {
        try {
            const ingredients = await Ingredient.findAll();
            return res.status(200).json(ingredients);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Obtener un ingrediente por ID
    getIngredientById:async (req, res) => {
        try {
            const { id } = req.params;
            const ingredient = await Ingredient.findByPk(id);
            if (!ingredient) return res.status(404).json({ message: 'Ingrediente no encontrado' });
            return res.status(200).json(ingredient);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Crear un nuevo ingrediente
    createIngredient:async (req, res) => {
        try {
            const { name, stock, stockUnits, supplierId } = req.body;
            const newIngredient = await Ingredient.create({ name, stock, stockUnits, supplierId });
            res.status(201).json(newIngredient);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Actualizar un ingrediente
    updateIngredient:async (req, res) => {
        try {
            const { id } = req.params;
            const { name, stock, stockUnits, supplierId } = req.body;
            const ingredient = await Ingredient.findByPk(id);
            if (!ingredient) return res.status(404).json({ message: 'Ingrediente no encontrado' });
            await ingredient.update({ name, stock, stockUnits, supplierId });
            res.status(200).json(ingredient);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Eliminar un ingrediente
    deleteIngredient:async (req, res) => {
        try {
            const { id } = req.params;
            const ingredient = await Ingredient.findByPk(id);
            if (!ingredient) return res.status(404).json({ message: 'Ingrediente no encontrado' });
            await ingredient.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
}

module.exports = inventoryController;

