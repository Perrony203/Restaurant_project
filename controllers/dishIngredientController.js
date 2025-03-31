const {DishIngredient} = require("../models");

    const dishIngredientController = {
    createDishIngredient :async (req, res) => {
        try {
            const { dishId, ingredientId, QuantityNeeded } = req.body;

            const dishIngredient = await DishIngredient.create({
                dishId,
                ingredientId,
                QuantityNeeded
            });

            res.status(201).json(dishIngredient);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    // cambiar eventualmente la creacion por id a por name
    
    updateQuantityNeeded :async (req, res) => {
        try {
            const { id } = req.params;
            const { quantityNeeded } = req.body;
            await DishIngredient.update({ quantityNeeded }, { where: { id } });
            res.status(200).json({ message: "Quantity needed updated" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    deleteDishIngredient :async (req, res) => {
        try {
            await DishIngredient.destroy({ where: { id: req.params.id } });
            res.status(200).json({ message: "Dish ingredient deleted" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    getAllDishIngredients: async (req, res) => {
        try {
            const dishIngredients = await DishIngredient.findAll();
            res.status(200).json(dishIngredients);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}


module.exports = dishIngredientController;